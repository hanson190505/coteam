from django.urls import path
from webapi.views import ProductListView, home_index, ProductDetailView


urlpatterns = [
    path('', home_index, name='home_index'),
    path('products/', ProductListView.as_view(), name='products'),
    path('products/<pro_type>', ProductListView.as_view(), name='product_type'),
    path('product/<int:pk>', ProductDetailView.as_view(), name='product_detail'),
]