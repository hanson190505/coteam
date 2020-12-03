from django.db import models
from api.models import OrderCatalog
from webapi.models import Products, PackModels


class Image(models.Model):
    order_number = models.ForeignKey(OrderCatalog, blank=True, null=True, on_delete=models.CASCADE, related_name='order_image')
    pro_number = models.ForeignKey(Products, blank=True, null=True, on_delete=models.CASCADE, related_name='pro_image')
    pack_number = models.ForeignKey(PackModels, blank=True, null=True, on_delete=models.CASCADE, related_name='pack_image')
    up_date = models.DateField(auto_now_add=True)
    md5 = models.CharField(max_length=128)
    owner = models.CharField(max_length=32)
    path = models.CharField(max_length=128)
    is_home = models.IntegerField(default=0)
    # 首页显示位置
    home_index = models.IntegerField(default=0)
    is_banner = models.IntegerField(default=0)
    is_edit = models.IntegerField(default=0)
    # banner_title = models.CharField(max_length=64, blank=True, null=True)
    # banner_desc = models.CharField(max_length=128, blank=True, null=True)
    # 是否被占用
    is_used = models.IntegerField(default=0)
    is_cover = models.IntegerField(default=0)
    image_alt = models.CharField(max_length=64, default='usb powerbank')

    # 我们还定义了通过文件md5值获取模型对象的类方法
    @classmethod
    def get_image_md5(cls, md5):
        try:
            return Image.objects.filter(md5=md5).first()
        except Exception as e:
            return None
    # 获取本图片的url，我们可以通过这个url在浏览器访问到这个图片
    # 其中settings.WEB_HOST_NAME 是常量配置，指你的服务器的域名
    # settings.WEB_IMAGE_SERVER_PATH 也是常量配置，指你的静态图片资源访问路径
    # 这些配置项我在Django项目的settings.py文件中进行配置

    def get_image_url(self):
        filename = self.file
        url = 'https://www.chinagoodgifts.com/' + filename
        return url

    # 获取本图片在本地的位置，即你的文件系统的路径，图片会保存在这个路径下

    def __str__(self):
        return '{}:{}'.format(self.id, self.path)