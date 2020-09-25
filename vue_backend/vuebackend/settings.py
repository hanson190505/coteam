"""
Django settings for vue_backend project.

Generated by 'django-admin startproject' using Django 3.0.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
import sys

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# sys.path.insert(0, BASE_DIR)
# sys.path.insert(0, os.path.join(BASE_DIR, 'user'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/
SECRET_KEY = os.environ.get("SECRET_KEY")


def get_debug():
    if os.environ.get('DEBUG') == 'True':
        return True
    else:
        return False


DEBUG = get_debug()
ALLOWED_HOSTS = os.environ.get("DJANGO_ALLOWED_HOSTS").split(" ")
# SECURITY WARNING: keep the secret key used in production secret!
# DEBUG = True
# ALLOWED_HOSTS = ['*']

BASE_LOG_DIR = os.path.join(BASE_DIR, "logs")
# LOGGING = {
#     'version': 1,  # 保留字
#     'disable_existing_loggers': False,  # 禁用已经存在的logger实例
#     # 日志文件的格式
#     'formatters': {
#         # 详细的日志格式
#         'standard': {
#             # 'format': '[%(asctime)s][%(threadName)s:%(thread)d][task_id:%(name)s][%(filename)s:%(lineno)d]'
#             #           '[%(levelname)s][%(message)s]'
#             'format': '%(asctime)s|%(threadName)s:%(thread)d|task_id:%(name)s|%(filename)s:%(lineno)d|'
#                       '%(message)s|%(levelname)s'
#         },
#         # 简单的日志格式
#         'simple': {
#             'format': '[%(levelname)s][%(asctime)s][%(filename)s:%(lineno)d]%(message)s'
#         },
#         # 定义一个特殊的日志格式
#         'collect': {
#             'format': '%(message)s'
#         }
#     },
#     # 过滤器
#     'filters': {
#         'require_debug_true': {
#             '()': 'django.utils.log.RequireDebugTrue',
#         },
#     },
#     # 处理器
#     'handlers': {
#         # 在终端打印
#         'console': {
#             'level': 'DEBUG',
#             'filters': ['require_debug_true'],  # 只有在Django debug为True时才在屏幕打印日志
#             'class': 'logging.StreamHandler',  #
#             'formatter': 'simple'
#         },
#         # 默认的
#         'default': {
#             'level': 'INFO',
#             # 'class': 'logging.handlers.RotatingFileHandler',  # 保存到文件，自动切
#             'class': 'logging.handlers.TimedRotatingFileHandler',  # 保存到文件，自动切
#             'filename': os.path.join(BASE_LOG_DIR, "chinagoodgifts_info.log"),  # 日志文件
#             # 'maxBytes': 1024 * 1024 * 50,  # 日志大小 50M
#             'when': 'midnight',
#             'backupCount': 15,  # 最多备份几个
#             'formatter': 'standard',
#             'encoding': 'utf-8',
#         },
#         # 专门用来记错误日志
#         'error': {
#             'level': 'ERROR',
#             'class': 'logging.handlers.TimedRotatingFileHandler',  # 保存到文件，自动切
#             'filename': os.path.join(BASE_LOG_DIR, "chinagoodgifts_err.log"),  # 日志文件
#             # 'maxBytes': 1024 * 1024 * 50,  # 日志大小 50M
#             'when': 'midnight',
#             'backupCount': 15,
#             'formatter': 'standard',
#             'encoding': 'utf-8',
#         },
#         # 专门定义一个收集特定信息的日志
#         'collect': {
#             'level': 'INFO',
#             'class': 'logging.handlers.TimedRotatingFileHandler',  # 保存到文件，自动切
#             'filename': os.path.join(BASE_LOG_DIR, "chinagoodgifts_collect.log"),
#             # 'maxBytes': 1024 * 1024 * 50,  # 日志大小 50M
#             'when': 'midnight',
#             'backupCount': 15,
#             'formatter': 'collect',
#             'encoding': "utf-8"
#         }
#     },
#     'loggers': {
#        # 默认的logger应用如下配置
#         '': {
#             'handlers': ['default', 'console', 'error'],  # 上线之后可以把'console'移除
#             'level': 'DEBUG',
#             'propagate': True,  # 向不向更高级别的logger传递
#         },
#         # 名为 'collect'的logger还单独处理
#         'collect': {
#             'handlers': ['console', 'collect'],
#             'level': 'INFO',
#         }
#     },
# }
LOGGING = {
    # 版本
    'version': 1,
    # 是否禁止默认配置的记录器
    'disable_existing_loggers': False,
    'formatters': {
        'standard': {
            'format': '{"time": "%(asctime)s", "level": "%(levelname)s", "method": "%(method)s", "username": "%(username)s", "sip": "%(sip)s", "dip": "%(dip)s", "path": "%(path)s", "status_code": "%(status_code)s", "reason_phrase": "%(reason_phrase)s", "func": "%(module)s.%(funcName)s:%(lineno)d",  "message": "%(message)s"}',
            'datefmt': '%Y-%m-%d %H:%M:%S'
        }
    },
    # 过滤器
    'filters': {
        'request_info': {'()': 'middleware.handlelogs.RequestLogFilter'},
    },
    'handlers': {
        # 标准输出
        'console': {
            'level': 'ERROR',
            'class': 'logging.StreamHandler',
            'formatter': 'standard'
        },
        # 自定义 handlers，输出到文件
        'restful_api': {
            'level': 'DEBUG',
            # 时间滚动切分
            'class': 'logging.handlers.TimedRotatingFileHandler',
            'filename': os.path.join(BASE_LOG_DIR, 'web-log.log'),
            'formatter': 'standard',
            # 调用过滤器
            'filters': ['request_info'],
            # 每天凌晨切分
            'when': 'MIDNIGHT',
            # 保存 30 天
            'backupCount': 30,
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'ERROR',
            'propagate': False
        },
        'web.log': {
            'handlers': ['restful_api'],
            'level': 'INFO',
            # 此记录器处理过的消息就不再让 django 记录器再次处理了
            'propagate': False
        },
    }
}
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api',
    'rest_framework',
    'user',
    'corsheaders',
    'django_filters',
    'upload.apps.UploadConfig',
    'webapi.apps.WebapiConfig',
    'ckeditor',
]

REST_FRAMEWORK = {
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    # 'PAGE_SIZE': 1000,
    # 设置全局身份验证策略
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'user.authentications.UserTokenAuthentication',
    ],
    # 设置全局限制登录
    'DEFAULT_PERMISSION_CLASSES': [
        'user.permissions.UserTokenPermission',
    ],
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',),
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100/min',
        'user': '100/min'
    }
}

# OAUTH2_PROVIDER = {
#     # this is the list of available scopes
#     'SCOPES': {'read': 'Read scope', 'write': 'Write scope', 'groups': 'Access to your groups'}
# }

MIDDLEWARE = [
    # 'middleware.usermiddleware.UserMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'middleware.handlelogs.RequestLogMiddleware'
]
# 跨域设置
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
    'content_type'
]

ROOT_URLCONF = 'vuebackend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'vuebackend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases
# 部署时还要配置__init__.py文件
DATABASES = {
    "default": {
        "ENGINE": os.environ.get("SQL_ENGINE", "django.db.backends.sqlite3"),
        "NAME": os.environ.get("SQL_DATABASE", os.path.join(BASE_DIR, "db.sqlite3")),
        "USER": os.environ.get("SQL_USER", "user"),
        "PASSWORD": os.environ.get("SQL_PASSWORD", "password"),
        "HOST": os.environ.get("SQL_HOST", "localhost"),
        "PORT": os.environ.get("SQL_PORT", "5432"),
    }
}
# 缓存配置
CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': os.environ.get("REDISHOST", 'redis://redis:6379/1'),
        'TIMEOUT': 60,
        "OPTIONS": {
                    "CLIENT_CLASS": "django_redis.client.DefaultClient",
                    "PASSWORD": os.environ.get("REDIS_PASSWORD"),
                }
    }
}

# 邮箱服务
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = "smtp.163.com"
EMAIL_PORT = 465
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')
EMAIL_USE_SSL = True

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'zh-hans'

TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = 'static/'

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/image/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'image/')

WEB_IMAGE_SERVER_PATH = os.environ.get('WEB_IMAGE_SERVER_PATH')