from rest_framework import serializers
from webapi.models import ProductsType, Products, HomeIndex


class ProductsSerializer(serializers.ModelSerializer):
    # pro_image = serializers.StringRelatedField(many=True)
    pro_image = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='path'
    )

    class Meta:
        model = Products
        fields = '__all__'


class ProductTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductsType
        fields = '__all__'


class ProductTypeRetrieveSerializer(serializers.ModelSerializer):

    subs = ProductTypeSerializer(many=True, read_only=True)

    class Meta:
        model = ProductsType
        fields = '__all__'



