from rest_framework import viewsets, status
from rest_framework.response import Response

from middleware.pagenation import SubOrderPagination
from user.permissions import UserTokenPermission
from webapi.serializer import ProductsSerializer, ProductTypeSerializer
from webapi.models import Products, ProductsType
from user.authentications import GetTokenAuthentication


class ProductTypeViewSet(viewsets.ModelViewSet):
    queryset = ProductsType.objects.filter(is_delete=0)
    serializer_class = ProductTypeSerializer
    pagination_class = SubOrderPagination
    authentication_classes = GetTokenAuthentication,


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.filter(is_delete=0).order_by()
    serializer_class = ProductsSerializer
    pagination_class = SubOrderPagination
    authentication_classes = GetTokenAuthentication,
    permission_classes = UserTokenPermission,
    filterset_fields = ['pro_type']

    def get_authenticators(self):
        if self.request.method == 'GET':
            return []
        else:
            return [GetTokenAuthentication()]

    def get_permissions(self):
        if self.request.method == 'GET':
            return []
        else:
            return [UserTokenPermission()]

    def create(self, request, *args, **kwargs):
        serializer = ProductsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)