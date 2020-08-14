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

- 