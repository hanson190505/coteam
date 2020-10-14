from django.http import Http404, HttpResponseRedirect, HttpResponse
from django.shortcuts import render, get_object_or_404, get_list_or_404, redirect
from django.views.generic import ListView, DetailView, TemplateView
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle
from rest_framework.views import APIView

from middleware.pagenation import SubOrderPagination
from upload.models import Image
from user.permissions import UserTokenPermission
from webapi.serializer import ProductsSerializer, ProductTypeSerializer, ProductTypeRetrieveSerializer
from webapi.models import Products, ProductsType, HomeIndex
from user.authentications import GetTokenAuthentication
from vuebackend import settings


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
        context['base_url'] = settings.WEB_IMAGE_SERVER_PATH
        return context

    def get(self, request, *args, **kwargs):
        # 根据url后缀查询数据,按产品种类
        suffix = request.get_full_path()
        if suffix.split('/')[-1]:
            self.object_list = self.get_queryset().filter(sub_type=suffix.split('/')[-1]).filter(is_delete=0)
        else:
            self.object_list = self.get_queryset().filter(is_delete=0)
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

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['base_url'] = settings.WEB_IMAGE_SERVER_PATH
        return context


class HomeIndexView(TemplateView):
    template_name = 'webapi/index.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        # TODO:首页产品图片，应该显示热销或者新款产品
        context = super().get_context_data(**kwargs)
        context['banners'] = Image.objects.filter(is_banner=1)
        context['is_home'] = Image.objects.filter(is_home=1)
        context['base_url'] = settings.WEB_IMAGE_SERVER_PATH
        context['home_text'] = HomeIndex.objects.filter(is_use=1).first()
        return context


class SearchView(TemplateView):
    template_name = 'webapi/search.html'

    def get(self, request, *args, **kwargs):
        keyword = request.GET.get('keywords')
        context = self.get_context_data(**kwargs)
        if keyword is None:
            pass
        else:
            print(keyword)
            context['products'] = get_list_or_404(Products,
                                                  seo_desc__icontains=keyword, seo_title__icontains=keyword,
                                                  pro_name__icontains=keyword, pro_number__icontains=keyword,
                                                  is_delete=0)
        return self.render_to_response(context)

    def post(self, request, *args, **kwargs):
        pass


class SendMailView(APIView):
    authentication_classes = []
    permission_classes = []
    throttle_scope = 'sendmail'

    def get(self, request, *args, **kwargs):
        from django.core.mail import BadHeaderError, send_mail
        title = request.GET.get('title')
        name = request.GET.get('name')
        email = request.GET.get('email')
        desc = request.GET.get('desc')
        subject = '{}'.format(title)
        message = 'Customer:{}\nEmail:{}\nDesc:{}'.format(name, email, desc)
        from_email = request.GET.get('from_email', 'hanjiwen30@163.com')
        if subject and message and from_email:
            try:
                # send_mail(subject, message, from_email, ['infochinagoodgifts@gmail.com'])
                send_mail(subject, message, from_email, ['hanjiwen31@163.com'])
            except BadHeaderError:
                return Response({'msg': 'Invalid header found.', 'type': 'warning'})
            # return HttpResponseRedirect('/contact/thanks/')
            return Response({'msg': 'thanks', 'type': 'success'})
        else:
            return Response({'msg': 'Make sure all fields are entered and valid.', 'type': 'warning'})
