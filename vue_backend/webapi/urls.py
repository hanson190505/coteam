from django.urls import path
from webapi.views import ProductListView, home_index


urlpatterns = [
    path('', home_index, name='home_index'),
    path('products/', ProductListView.as_view(), name='products'),
]