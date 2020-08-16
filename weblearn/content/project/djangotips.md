# django项目记录

### 奇葩问题

#### 路由'/'无法找到

- ```python
  # 主路由
  urlpatterns = [
      path('api/', include(router.urls)),
      path('api/sendmail/', SendEmail.as_view()),
      path('', include('home.urls'))
    # path('/', include('home.urls'))不可以加'/'
  ]
  
  # 项目路由
  from django.urls import path
  from home import views
  urlpatterns = [
      path('', views.home_index, name='home_index'),
    # 同样不可以加'/',加了之后django无法匹配路由
      path('products/', views.products, name='products'),
  ]
  ```


### 静态文件相关

#### 采用docker部署项目时,图片等静态文件解决方案

- 思路:django容器的图片等静态资源文件映射到外部宿主机一个存储卷,然后nginx容器同样新建一个存放静态资源的目录映射到这个存储卷

  ```dockerfile
  version: '3.7'
  
  services:
    api:
      ...
      volumes:
        - static_volume:/usr/src/api/image
    nginx:
  		...
      volumes:
        - static_volume:/usr/src/api/image
  		...
  volumes:
    static_volume:
  
  ```

- nginx配置文件中,利用正则表达式转发静态文件路由的文件寻找地址

  ```nginx
  location ~ .*/products/(.*)\.(gif|jpg|jpeg|png|bmp|swf|svg)$ {
         alias /usr/src/api/image/$1.$2;
         charset utf-8,gbk;
     }
  # css,js文件查找
  location ~ .*/(.*)\.(js|css)$　{
         alias /usr/src/api/static/$2/$1.$2;
     }
  ```

  - 这里的~ .*/products/(.*)\.(gif|jpg|jpeg|png|bmp|swf|svg)$是正则表达式写法,alias /usr/src/api/image/$1.$2;即把改路由映射到nginx容器的/usr/src/api/image/文件夹,js和css的配置大致一致，不过需要注意的是$2/$1.$2代表是查找css目录下的*.css文件或js目录下的*.js文件