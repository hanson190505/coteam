### 一.奇怪的问题

- 1.更改虚拟环境位置之后,pip install会安装到系统默认环境中,需要修改虚拟环境中activate文件中的虚拟环境路径
  - VIRTUAL_ENV="/Users/zhangsha/Desktop/hanson/vue-front-backend/env"
  - 注:这个解决方案很麻烦
  - 以后谨记,移动文件的时候,先free requirements文件,然后删除环境重新设定环境,安装包.