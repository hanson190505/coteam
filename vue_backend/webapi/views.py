from django.http import Http404
from django.shortcuts import render
from django.views.generic import ListView, DetailView
from rest_framework import viewsets, status
from rest_framework.response import Response

from middleware.pagenation import SubOrderPagination
from user.permissions import UserTokenPermission
from webapi.serializer import ProductsSerializer, ProductTypeSerializer, ProductTypeRetrieveSerializer
from webapi.models import Products, ProductsType
from user.authentications import GetTokenAuthentication


class ProductTypeViewSet(viewsets.ModelViewSet):
    queryset = ProductsType.objects.filter(is_delete=0)
    serializer_class = ProductTypeSerializer
    pagination_class = SubOrderPagination
    authentication_classes = GetTokenAuthentication,

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

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ProductTypeRetrieveSerializer(instance)
        return Response(serializer.data)


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.filter(is_delete=0).order_by()
    serializer_class = ProductsSerializer
    pagination_class = SubOrderPagination
    authentication_classes = GetTokenAuthentication,
    permission_classes = UserTokenPermission,
    filterset_fields = ['seo_title', 'sub_type', 'is_hot']

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


class ProductListView(ListView):
    model = Products
    context_object_name = 'products_list'
    # template_name = 'webapi/products_list.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        # Add in a QuerySet of all the books
        context['product_type_list'] = ProductsType.objects.all().filter(is_delete=0)
        return context

    def get(self, request, *args, **kwargs):
        # 根据url后缀查询数据,按产品种类
        suffix = request.get_full_path()
        if suffix.split('/')[-1]:
            self.object_list = self.get_queryset().filter(sub_type=suffix.split('/')[-1])
        else:
            self.object_list = self.get_queryset()
        allow_empty = self.get_allow_empty()
        if not allow_empty:
            # When pagination is enabled and object_list is a queryset,
            # it's better to do a cheap query than to load the unpaginated
            # queryset in memory.
            if self.get_paginate_by(self.object_list) is not None and hasattr(self.object_list, 'exists'):
                is_empty = not self.object_list.exists()
            else:
                is_empty = not self.object_list
            if is_empty:
                raise Http404(_('Empty list and “%(class_name)s.allow_empty” is False.') % {
                    'class_name': self.__class__.__name__,
                })
        context = self.get_context_data()
        return self.render_to_response(context)


class ProductDetailView(DetailView):
    model = Products
    context_object_name = 'product_detail'
    template_name = 'webapi/product_detail.html'


def home_index(request):

    return render(request, 'webapi/index.html')
