from django import template

register = template.Library()


#  模板图片地址标签
@register.simple_tag(name='image')
def image_path(url, path):
    return url + path