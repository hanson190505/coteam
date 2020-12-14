from rest_framework import serializers

from upload.serializer import ImageSerializer
from webapi.models import ProductsType, Products, HomeIndex, PackModels, ProductsToPacks, ProductText, ProductSubType


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
        depth = 1


class ProductSubTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductSubType
        fields = '__all__'
        depth = 1


class ProductTypeSerializer(serializers.ModelSerializer):

    subs = ProductSubTypeSerializer(many=True, read_only=True)

    class Meta:
        model = ProductsType
        fields = '__all__'
        depth = 1


class ProductTypeRetrieveSerializer(serializers.ModelSerializer):

    subs = ProductTypeSerializer(many=True, read_only=True)

    class Meta:
        model = ProductsType
        fields = '__all__'


class PackModelsSerializer(serializers.ModelSerializer):
    pack_image = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = PackModels
        fields = '__all__'


class ProductsToPacksSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductsToPacks
        fields = "__all__"
        depth = 1


class ProductTextSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductText
        fields = "__all__"



