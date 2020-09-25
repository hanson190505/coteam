### [缓存](https://docs.djangoproject.com/zh-hans/3.0/topics/cache/)

- 缓存是用来做什么的
  - 提升服务器的响应速度,提升用户体验
  - 减少磁盘IO(inputu/output)
- 缓存通常使用内存实现
  - 以空间换时间

### PyInstaller

- 可以将Python程序打包成exe
- 可以使用Python图形化编程开发windows程序
  - Tkinter
  - Turtle

### Python四大器

- 生成器
- 迭代器
- 装饰器
- 描述器
  - @property
    - 介入到属性或对象的获取,设置,删除等操作

### 抽象方法

- python中的抽象方法
  - 定义函数
  - 函数并没有函数体,直接抛出NotImplementedError(没有实现的错误)

### DRF

- 能自动生成页面
- 数据修改
  - POST
    - 怎么用都行
  - PUT
    - 全量更新
      - 需要提供所有字段信息
      - 如果字段存在默认值,这个字段如果没有修改,就不需要传递了
      - 如果字段没有默认值,就必须提供值
  - PATCH
    - 差量更新
      - 只需要提供想要修改字段的信息

#### 序列化器

- 序列化反序列化
- 模型对象字典对象互相转换
- 提供基本验证
  - is_valid()
  - 验证之后才能保存
  - 验证不通过会返回错误信息,erros
- 序列化数据集合
  - 需要手动告诉序列化器many=True
  - JsonResponse需要设置safe=False
- serializers
  - Serializer
    - 原生序列化,需要手动搞定
  - ModelSerializer
    - 模型序列化
    - 继承自Serializer
    - 动态生成字段映射和抽象方法实现
  - HyperLinkerModelSerializer
    - 超链接的模型序列化模式
    - 需要配置好单个模型的获取方式
    - 实际开发中使用较少
      - 有全部暴露风险

#### REST-Framework的视图函数

- FBV
  - @api_view
    - 添加了访问方式的请求控制
- CBV
  - APIView
- 双R
  - Request
    - 参数获取
    - request.data,可以接收POST,PUT,PATCH携带的参数
    - 原生的只能接收POST参数
    - 将django的request作为了自己的私有属性_request
  - Response
    - 内容决策器
    - 可以根据不同的客户端返回不同的内容
    - 根据请求头中的Accept进行决策
    - 返回的时候根据content_type进行渲染

#### APIView源码分析

- 继承
  - django的View
- 属性
  - args
  - authentication_classes
  - content_negotiation_class
  - format_kwarg
  - headers
  - kwargs
  - metadata_class
  - parser_classes
  - permission_classes
  - renderer_classes
  - request
  - response
  - schema
  - settings
  - throttle_classes
  - versioning_class
- 方法
  - as_view
    - 重写
  - allowed_methods
  - default_response_headers
  - http_method_not_allowed
    - 重写
  - permission_denied
  - throttled
  - get_authenticate_header
  - get_parser_context
  - get_renderer_context
  - get_exception_handler_context
  - get_view_name
  - get_format_suffix
  - get_renderers
  - get_parsers
  - get_authenticators
  - get_thr0ttles
  - get_content_negotiator
  - get_exception_handler
  - perform_content_negotiation
  - perform_exception_handler
  - check_permissions
  - check_object_permissions
  - check_throttles
  - determine_version
  - initialize_request
  - initial
  - finalize_response
  - handle_exception
  - raise_uncaught_exception
  - dispatch
    - 重写
  - options
    - 重写
    - 一种选项方式

- 执行流程问题

  - as_view
    - 重写
    - 调用父类的as_view
  - 调用APIView的dispatch
    - initialize_request
      - 使用django的request构建了DRF中request
      - get_parsers
      - get_authenticators
      - get_content_negotiator
      - parser_context
    - initial
      - get_format_suffix
      - perform_content_negotiation
      - determine_version
      - perform_authentication
      - check_permissions
      - check_throttles
    - 根据业务需求写代码
    - finalize_response
    - 如果有异常调用handle_exception
      - 如果是认证相关的错误
      - 调用get_authenticate_header
      - get_exception_handler
        - EXCEPTION_HANDLER在settings中设置
      - get_exception_handler_context
        - 会返回本次请求的所有的视图函数和所有参数
      - 使用exception_handler处理相关错误,生成response
        - 如果能生成直接返回
        - 不能生成则raise_uncaught_exception直接抛异常
    - 根据请求方法进行分发

- GenericAPIView

  - 继承

    - APIView

  - 属性

    - queryset
    - serializer_class
    - lookup_field
    - lookup_url_kwarg
    - filter_backends
      - DEFAULT_FIELD_BACKENDS
    - pagination_class
      - DEFAULT_PAGINATION_CLASS

    - 方法
      - get_queryset
      - get_object
      - get_serializer
      - get_serializer_class
      - get_serializer_context
      - filter_queryset
      - paginator
      - paginate_queryset
      - get_paginated_response
    - 扩充了APIView,添加了关于模型的操作



### 错误集合

- POST  http://127.0.0.1:8000/two/addperson

- RuntimeError: You called this URL via POST, but the URL doesn't end in a slash and you have APPEND_SLASH set. Django can't redirect to the slash URL while maintaining POST data. Change your form to point to 127.0.0.1:8000/two/addperson/ (note the trailing slash), or set APPEND_SLASH=False in your Django settings.

  - 在发post请求的时候,url末尾加上'/'即可解决

    http://127.0.0.1:8000/two/addperson/