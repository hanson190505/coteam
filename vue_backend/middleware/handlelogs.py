import json
import logging
import os
import socket
import threading

from django.utils.deprecation import MiddlewareMixin

from vuebackend.settings import BASE_LOG_DIR


class CommonLog(object):
    """
    日志记录
    """
    def __init__(self, logger, logname):
        self.logname = os.path.join(BASE_LOG_DIR, '%s' % logname)
        self.logger = logger
        self.logger.setLevel(logging.DEBUG)
        self.logger.propagate = False
        self.formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s: %(message)s', '%Y-%m-%d %H:%M:%S')

    def __console(self, level, message):
        # 创建一个FileHandler，用于写到本地
        fh = logging.handlers.TimedRotatingFileHandler(self.logname, when='MIDNIGHT', interval=1, encoding='utf-8')
        # fh = logging.FileHandler(self.logname, 'a', encoding='utf-8')
        fh.suffix = '%Y-%m-%d.log'
        fh.setLevel(logging.DEBUG)
        fh.setFormatter(self.formatter)
        self.logger.addHandler(fh)

        # 创建一个StreamHandler,用于输出到控制台
        ch = logging.StreamHandler()
        ch.setLevel(logging.DEBUG)
        ch.setFormatter(self.formatter)
        self.logger.addHandler(ch)

        if level == 'info':
            self.logger.info(message)
        elif level == 'debug':
            self.logger.debug(message)
        elif level == 'warning':
            self.logger.warning(message)
        elif level == 'error':
            self.logger.error(message)

        # 这两行代码是为了避免日志输出重复问题
        self.logger.removeHandler(ch)
        self.logger.removeHandler(fh)
        # 关闭打开的文件
        fh.close()

    def debug(self, message):
        self.__console('debug', message)

    def info(self, message):
        self.__console('info', message)

    def warning(self, message):
        self.__console('warning', message)

    def error(self, message):
        self.__console('error', message)


local = threading.local()


class RequestLogFilter(logging.Filter):
    """
    日志过滤器
    """

    def filter(self, record):
        record.sip = getattr(local, 'sip', 'none')
        record.dip = getattr(local, 'dip', 'none')
        record.body = getattr(local, 'body', 'none')
        record.path = getattr(local, 'path', 'none')
        record.method = getattr(local, 'method', 'none')
        record.username = getattr(local, 'username', 'none')
        record.status_code = getattr(local, 'status_code', 'none')
        record.reason_phrase = getattr(local, 'reason_phrase', 'none')
        record.get = getattr(local, 'get', 'none')
        record.post = getattr(local, 'post', 'none')
        record.agent = getattr(local, 'agent', 'none')

        return True


class RequestLogMiddleware(MiddlewareMixin):
    """
    将request的信息记录在当前的请求线程上。
    """

    def __init__(self, get_response=None):
        self.get_response = get_response
        self.apiLogger = logging.getLogger('web.log')

    def __call__(self, request):

        try:
            body = json.loads(request.body)
        except Exception:
            body = dict()

        if request.method == 'GET':
            body.update(dict(request.GET))
        else:
            body.update(dict(request.POST))

        local.body = body
        local.path = request.path
        local.method = request.method
        local.username = request.user
        local.get = request.GET
        local.post = request.POST
        local.agent = request.META.get('HTTP_USER_AGENT', '')
        local.sip = request.META.get('REMOTE_ADDR', '')
        local.dip = socket.gethostbyname(socket.gethostname())

        response = self.get_response(request)
        local.status_code = response.status_code
        local.reason_phrase = response.reason_phrase
        self.apiLogger.info('system-auto')

        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        # print('request.path_info:{}'.format(request.path_info))
        # print('request.GET:{}'.format(request.GET))
        # print('request.POST:{}'.format(request.POST))
        # print('request.body:{}'.format(request.body))
        # print('request.path:{}'.format(request.path))
        # print('request.method:{}'.format(request.method))
        # print('request.user:{}'.format(request.user))
        # print('request.META.get("QUERY_STRING"):{}'.format(request.META.get('QUERY_STRING', '')))
        # print('request.META.get("REMOTE_ADDR"):{}'.format(request.META.get('REMOTE_ADDR', '')))
        # print('request.META.get("HTTP_USER_AGENT"):{}'.format(request.META.get('HTTP_USER_AGENT', '')))
        # print('request.current_app:{}'.format(request.current_app))
        # print(self)
        pass

    def process_response(self, request, response):
        # print('response{}'.format(response))
        pass

    def process_exception(self, request, exception):
        import traceback
        logger = logging.getLogger('error.log')
        logger.error(traceback.format_exc())




