from rest_framework import serializers
from api.models import Customers, OrderCatalog, SubOrder, PurchaseOrder, PurchaseDetail, ShipOrder, ShipDetail, \
    CustomerAddr, OrderModel, OrderToModel
from webapi.models import HomeIndex


class CustomersSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()

    class Meta:
        model = Customers
        exclude = ['is_delete']


class CustomerAddrSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomerAddr
        fields = "__all__"


class OrdersSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()
    order_image = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='path'
    )
    sub_orders = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = OrderCatalog
        fields = "__all__"
        depth = 1


class OrderModelsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderModel
        fields = "__all__"


class OrderToModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderToModel
        fields = "__all__"
        depth = 1


class PostOrdersSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()

    class Meta:
        model = OrderCatalog
        fields = "__all__"


class PostSubOrderSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()

    class Meta:
        model = SubOrder
        # exclude = ['is_delete']
        fields = "__all__"


class PurchaseOrderSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()

    class Meta:
        model = PurchaseOrder
        # exclude = ['is_delete']
        fields = "__all__"
        depth = 1


# 添加depth之后,无法正常post数据,外键字段始终报null,再定义一个没有depth的序列化器解决
class PostPurchaseOrderSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()

    class Meta:
        model = PurchaseOrder
        # exclude = ['is_delete']
        fields = "__all__"


class PurchaseDetailSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()

    class Meta:
        model = PurchaseDetail
        # exclude = ['is_delete']
        fields = "__all__"
        depth = 2


class PostPurchaseDetailSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()

    class Meta:
        model = PurchaseDetail
        # exclude = ['is_delete']
        fields = "__all__"


class ShipOrderSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()

    class Meta:
        model = ShipOrder
        fields = "__all__"


class ShipDetailSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()

    class Meta:
        model = ShipDetail
        fields = "__all__"
        depth = 2


class PostShipDetailSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()

    class Meta:
        model = ShipDetail
        fields = "__all__"


class SubOrderSerializer(serializers.ModelSerializer):
    sales = serializers.StringRelatedField()
    purchases = PostPurchaseDetailSerializer(many=True, read_only=True)
    ships = PostShipDetailSerializer(many=True, read_only=True)

    class Meta:
        model = SubOrder
        # exclude = ['is_delete']
        fields = "__all__"
        depth = 1


class HomeIndexSerializer(serializers.ModelSerializer):

    class Meta:
        model = HomeIndex
        fields = "__all__"

