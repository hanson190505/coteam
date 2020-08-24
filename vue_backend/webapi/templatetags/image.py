from urllib.parse import quote, urljoin
from django import template
from django.apps import apps
from django.utils.encoding import iri_to_uri
from django.utils.html import conditional_escape

register = template.Library()


#  模板图片地址标签
@register.simple_tag(name='image')
def image_path(url, path):
    return url + path