## VueLearn

### Promise用法

- 处理异步调用事件(回调地狱)的ES6语法
- 是一个对象,构造函数
- 

### Vue模板语法

#### v-cloak

- 解决插值表达式存在的'闪现'问题

- 提供样式
  - [v-cloak]{
  - display:none;
  - }
- 在插值表达式所在的标签中添加v-cloak标签

#### v-text

- 在标签中使用,显示text内容
- v-text='message'

#### v-html

- 填充HTML片段
- 存在安全问题
- 本网站内部数据使用即可,外部数据不要使用

#### v-pre

- 显示原始填充信息,跳过编译过程

#### 数据响应式

- 数据绑定
- v-once
  - 只编译一次,之后不再响应式渲染
  - 如果数据后续不需要修改,则可以使用v-once,提供性能



### Router

##### Router配置

- 项目src目录新建router文件夹,新建index.js文件来封装vue-router
- import VueRouter from 'vue-router'
- import Vue from 'vue'
- 通过Vue.use(插件)来安装插件
- 创建VueRouter对象
- export default router导出
- 在main.js挂载

##### 具体使用

- routers对象数组设置
  - path:组件路径----'/path'
  - component:导入的组件
- 引入相关组件
- router-link标签可以指向routers定义的路径
  - to='/path'
  - 默认渲染成a标签
  - tag='标签',即可自定义最终渲染标签
  - replace 属性,直接使用使标签不能通过浏览器点击返回
  - 被点击的router-link标签会有一个class=ruter-link-active
    - active-class='isactive',可以自定义标签class
    - 或者在路由构造器中设置LinkActiveClass:'isactive'
- router-view标签,决定点击router-link后,视图渲染的位置
- 路由重定向
  - 在routers对象中设置redirect:'/path'
- 路由显示模式设置----mode
  - hash  默认模式,路由中间有'#'
  - history 常用模式
  - abstract

##### 通过代码的方式跳转路径($router,全局属性)

- 定义@click事件
- this.$router.push('/path')----可以点返回
- this.$router.replace('/path')--不可以点返回

#### 动态路由

