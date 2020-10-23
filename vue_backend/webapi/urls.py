from django.urls import path
from webapi.views import ProductListView, ProductDetailView, HomeIndexView, SearchView, SendMailView, AboutTemplateView

urlpatterns = [
    path('', HomeIndexView.as_view(), name='home_index'),
    path('products/', ProductListView.as_view(), name='products'),
    path('products/<pro_type>', ProductListView.as_view(), name='product_type'),
    path('product/<pk>', ProductDetailView.as_view(), name='product_detail'),
    path('search/', SearchView.as_view(), name='search'),
    path('send_mail/', SendMailView.as_view(), name='send_mail'),
    path('about/', AboutTemplateView.as_view(), name='about')
]