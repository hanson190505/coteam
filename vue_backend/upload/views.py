from datetime import datetime
import os

from django.db.models import Q
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from middleware.pagenation import SubOrderPagination
from upload.models import Image
from upload.serializer import ImageSerializer
from user.authentications import UploadTokenAuthentication, GetTokenAuthentication
from user.permissions import UserTokenPermission
from utils import juhe
from utils.image_upload import get_file_extension, is_allow_size, is_allowed_image_type, calculate_md5
from vuebackend.settings import MEDIA_ROOT


class ImageUploadVieSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    parser_class = (MultiPartParser, FormParser)
    serializer_class = ImageSerializer
    pagination_class = SubOrderPagination
    authentication_classes = GetTokenAuthentication,
    permission_classes = UserTokenPermission,

    def get_queryset(self):
        owner = self.request.query_params.get('owner', None)
        is_banner = self.request.query_params.get('banner_title', None)
        image_alt = self.request.query_params.get('image_alt', None)
        if owner is not None:
            self.queryset = self.queryset.filter(
                Q(owner__icontains=owner) | Q(is_banner=is_banner) | Q(image_alt__icontains=image_alt))
        return self.queryset

    # def get_authenticators(self):
    #     if self.request.method == 'GET':
    #         return []
    #     else:
    #         return [GetTokenAuthentication()]
    #
    # def get_permissions(self):
    #     if self.request.method == 'GET':
    #         return []
    #     else:
    #         return [UserTokenPermission()]

    def create(self, request, *args, **kwargs):
        print(request.data)
        file = request.data['file']
        owner = request.data['owner']
        file_name = request.data['number']
        # print(request.data)
        year = str(datetime.now().year)
        month = str(datetime.now().month)
        ext = get_file_extension(file)
        if file_name != 'default':
            file.name = file_name + '.{}'.format(ext)
        sub_path = owner + '/{}-{}/'.format(year, month)
        path = MEDIA_ROOT + sub_path
        md5 = calculate_md5(file)
        upload_img = Image.get_image_md5(md5)
        if not is_allow_size(file.size):
            return Response({'status': 1001})
        if not is_allowed_image_type(ext):
            return Response({'status': 1002})
        if upload_img:
            return Response({'file': upload_img.path, 'id': upload_img.id, 'status': 1003})
        else:
            # 保存图片
            if os.path.exists(path):
                with open(path + file.name, "wb+") as f:
                    for chunk in file.chunks():
                        f.write(chunk)
            else:
                os.makedirs(path)
                with open(path + file.name, "wb+") as f:
                    for chunk in file.chunks():
                        f.write(chunk)

            upload_img = Image()
            if owner == 'order':
                upload_img.order_number_id = file_name
            if 'pro_number' in request.data:
                upload_img.pro_number_id = request.data['pro_number']
            if 'pack_number' in request.data:
                upload_img.pack_number_id = request.data['pack_number']
            upload_img.md5 = md5
            upload_img.path = sub_path + file.name
            upload_img.owner = owner
            upload_img.is_home = request.data['is_home']
            upload_img.home_index = request.data['home_index']
            upload_img.is_banner = request.data['is_banner']
            upload_img.image_alt = request.data['image_alt']
            upload_img.save()
        return Response({'file': upload_img.path, 'id': upload_img.id, 'status': 1000}, status=status.HTTP_201_CREATED)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        path = 'image/' + instance.path
        os.remove(path)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


class getExrateApiview(APIView):
    authentication_classes = GetTokenAuthentication,

    def get(self, request, *args, **kwargs):
        data = juhe.get_Ex_Rate()
        return Response(data)
