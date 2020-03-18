from rest_framework import serializers
from webapi.models import ProductsType, Products
from upload.models import Image


class ProductsSerializer(serializers.ModelSerializer):
    pro_image = serializers.StringRelatedField(many=True)

    class Meta:
        model = Products
        fields = '__all__'


class ProductTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductsType
        fields = '__all__'
