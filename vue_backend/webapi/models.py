from datetime import datetime
from django.db import models
from ckeditor.fields import RichTextField


class ProductsType(models.Model):
    category = models.CharField('产品总类', max_length=32, null=True, blank=True)
    # parent_category = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='subs')
    pub_date = models.DateField('添加日期', auto_now=datetime.now)
    is_delete = models.IntegerField(default=0)

    class Meta:
        verbose_name = '产品类别'
        verbose_name_plural = '产品类别'

    def __str__(self):
        return '{}'.format(self.category)


class Products(models.Model):
    sub_type = models.ForeignKey(
        ProductsType, null=True, blank=True, max_length=32, verbose_name='产品子类', on_delete=models.CASCADE)
    seo_title = models.CharField(max_length=128, default='china good gifts')
    seo_desc = models.CharField(max_length=1024, default='china good gifts')
    pub_date = models.DateField('添加日期', auto_now=datetime.now)
    pro_number = models.CharField('产品编号', unique=True, max_length=32)
    pro_name = models.CharField('产品名称', max_length=30, default='product')
    # TODO:产品价格需要根据产品容量、起订量等因素调整.
    pro_price = models.DecimalField('产品单价', max_digits=10, decimal_places=2, default=100)
    click_num = models.IntegerField("点击数", default=0)
    sold_num = models.IntegerField("商品销售量", default=0)
    fav_num = models.IntegerField("收藏数", default=0)
    goods_num = models.IntegerField("库存数", default=0)
    is_new = models.IntegerField('是否新品', default=0)
    is_hot = models.IntegerField('是否热销', default=0)
    capacities = models.CharField('容量', max_length=256, default='custom')
    moq = models.IntegerField('起订量', default=100)
    imprint_methods = models.CharField('logo工艺', max_length=128, default='custom')
    imprint_location = models.CharField('logo位置', max_length=128, default='custom')
    imprint_size = models.CharField('logo尺寸', max_length=128, default='custom')
    material = models.CharField('材质', max_length=128, default='custom')
    # 商品折扣设置
    is_discount = models.IntegerField(default=0)
    pro_discount = models.DecimalField(max_digits=10, decimal_places=2, default=1)
    pro_size = models.CharField('产品尺寸', max_length=128, default='custom made')
    pro_model = models.CharField('产品型号', max_length=64, default='custom made')
    pro_pack = models.CharField('产品包装', max_length=128, default='custom made')
    pro_color = models.CharField('产品颜色', max_length=1024, blank=True)
    pro_weight = models.DecimalField(verbose_name='单重(g)', max_digits=10, decimal_places=2, default=0)
    pro_desc = RichTextField()
    is_delete = models.IntegerField(default=0)
    is_edit = models.IntegerField(default=0)

    class Meta:
        verbose_name = '产品目录'
        verbose_name_plural = '产品目录'

    def __str__(self):
        return '{}-{}'.format(self.pro_number, self.pro_name)


class HomeIndex(models.Model):
    seo_title = models.CharField(max_length=256)
    seo_desc = models.CharField(max_length=1024)
    is_use = models.IntegerField(default=0)
    company_name = models.CharField(max_length=64, null=True, blank=True)
    company_addr = models.CharField(max_length=256, null=True, blank=True)
    logo_svg = models.TextField(null=True, blank=True)
    is_delete = models.IntegerField(default=0)

    def __str__(self):
        return '{}'.format(self.seo_title)