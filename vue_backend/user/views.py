import uuid
from django.contrib.auth.hashers import make_password
from django.core.cache import cache
from rest_framework import status, exceptions
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.views import APIView

from user.models import UserInfo, Customer
from user.serializer import UserInfoSerializer, PostUserInfoSerializer, UserLoginSerializer, CustomerSerializer
from user.authentications import GetTokenAuthentication, UserTokenAuthentication
from user.permissions import UserTokenPermission
from middleware.pagenation import SubOrderPagination
from django_filters.rest_framework import DjangoFilterBackend
from utils.rsa_crypt import creat_key, decrypt_data


class UserApiViewSet(viewsets.ModelViewSet):
    # queryset = UserInfo.objects.all().order_by('id')
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer
    authentication_classes = UserTokenAuthentication,
    pagination_class = SubOrderPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['u_name']
    allow_list = ['login', 'pub_key', 'register', 'logout']

    def get_permissions(self):
        # 判定是注册,登录,登出
        for l in self.allow_list:
            if self.request.GET.get(l):
                return []
        return [UserTokenPermission()]

    def get_authenticators(self):
        # if self.request.GET.get('login') or self.request.GET.get('pub_key') or self.request.GET.get('register'):
        for l in self.allow_list:
            if self.request.GET.get(l):
                return []
        if self.request.GET.get('getStore'):
            return [GetTokenAuthentication()]
        return [UserTokenAuthentication()]

    def perform_create(self, serializer):
        ip = self.request.META['REMOTE_ADDR']
        password = decrypt_data(self.request.data['u_password'], cache.get(ip)[0])
        serializer.save(u_password=make_password(password))

    def create(self, request, *args, **kwargs):
        serializer = PostUserInfoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        if self.request.query_params.get('register'):
            return Response({'msg': '注册成功'}, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self, request, *args, **kwargs):
        if self.request.query_params.get('pub_key'):
            # if self.request.META['HTTP_COOKIE']:
            #     print(type(self.request.META['HTTP_COOKIE']))
            ip = self.request.META['REMOTE_ADDR']
            pri_key, pub_key = creat_key()
            cache.set(ip, [pri_key, pub_key], 60)
            # print(cache.get(ip)[0])
            return Response({'pub_key': pub_key})
        elif self.request.query_params.get('login'):
            # pr1 = AesCrypt("ECB", "", "utf-8")
            # print('前端密码:{}'.format(self.request.query_params.get('password')))
            ip = self.request.META['REMOTE_ADDR']
            # print('视图解密结果:{}'.format(pr1.aesdecrypt(text=self.request.query_params.get('password'))))
            password = decrypt_data(self.request.query_params.get('u_password'), cache.get(ip)[0])
            username = self.request.query_params.get('u_name')
            users = self.queryset.filter(u_name=username)
            user = users.first()
            if not users.exists():
                data = {
                    'msg': '用户不存在',
                    'status': 410,
                }
                return Response(data)
            elif not user.verify_password(password):
                data = {
                    'msg': '密码错误',
                    'status': 411,
                }
                return Response(data)
            elif user.is_use == 0:
                data = {
                    'msg': '用户审核中',
                    'status': 412,
                }
                return Response(data)
            elif user.verify_password(password):
                token = uuid.uuid4().hex
                cache.set(token, user, 60 * 60 * 24 * 7)
                data = {
                    'msg': '登录成功',
                    'status': 2000,
                    'token': token,
                    'name': username,
                    'permissions': user.permissions,
                    'id': user.id
                }
                return Response(data)
        elif self.request.query_params.get('logout'):
            cache.delete(request.data.get('token'))
            data = {
                'msg': '退出成功',
                'status': 210,
            }
            return Response(data)
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        else:
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = UserLoginSerializer(instance)
        return Response(serializer.data)


class CustomersAPIViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all().filter(is_delete=0)
    serializer_class = CustomerSerializer

    def get_authenticators(self):
        st = self.request.query_params.get('st')
        if st == 'login' or st == 'register':
            return []
        else:
            return [GetTokenAuthentication()]

    def get_permissions(self):
        st = self.request.query_params.get('st')
        if st == 'login' or st == 'register':
            return []
        else:
            return [UserTokenPermission()]

    def create(self, request, *args, **kwargs):
        if self.request.query_params.get('st') == 'login':
            pass
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


# 控制邮件发送频率
class SendEmail(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request, format=None):
        from django.core.mail import BadHeaderError, send_mail
        print(self.request.data)
        subject = self.request.data['subject']
        message = self.request.data['message']
        from_email = request.POST.get('from_email', 'hanjiwen30@163.com')
        if subject and message and from_email:
            try:
                send_mail(subject, message, from_email, ['infochinagoodgifts@gmail.com'])
            except BadHeaderError:
                return Response({'msg': 'Invalid header found.', 'type': 'warning'})
            # return HttpResponseRedirect('/contact/thanks/')
            return Response({'msg': 'thanks', 'type': 'success'})
        else:
            # In reality we'd use a form class
            # to get proper validation errors.
            return Response({'msg': 'Make sure all fields are entered and valid.', 'type': 'warning'})