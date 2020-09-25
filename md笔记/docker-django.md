## docker-django

ssh -i ~/.ssh/LightsailDefaultKey-us-east-2.pem ubuntu@3.135.197.102

```
192.168.3.45 0.0.0.0 127.0.0.1
```

### alpinelinux操作

```bash
chown -R nginx:nginx app/  #修改文件夹所属用户
```





### docker操作

- 容器操作

```bash
docker ps -aq   #列出所有容器
docker stop $(docker ps -aq) #停止所有容器
docker rm $(docker ps -aq) #删除所有容器
docker rmi $(docker images -q) #删除所有镜像
docker cp mycontainer:/opt/file.txt /opt/local/ #复制文件
docker cp /opt/local/file.txt mycontainer:/opt/ #赋值文件
```



### 坑坑坑

- vue修改配置后需要重新执行npm run XXX命令
- nginx本地测试开了翻墙全局代理之后各种连不上,出错.....傻
- 浏览器测试任何不明觉厉的问题先刷新网页,后清缓存,确保不是浏览器作怪



### 待解决问题

##### 刷新页面

- 除了首页,其他页面刷新时,用户名信息不会正常显示
  - 直接引用store中的值可解决

#### 聚合API

- 在部署后不能正常请求到数据,怀疑是服务器在国外的原因

### 错误集锦

1.ERROR: In file /Users/zhangsha/Desktop/vue-front-backend/.env.dev: environment variable name 'EMAIL_HOST_USER ' may not contain whitespace.

- env环境变量文件里的等号两边不能有空格

  ```python
  EMAIL_HOST_USER=hanjiwen30@163.com
  ```

  

2.OCI runtime create failed: container_linux.go:346: starting container process caused "exec: \"/usr/src/api/entrypoint.sh\": permission denied": unknown

- 修改源文件的权限即可解决

3.Fatal error, can't open config file 'redis.conf'

- command执行的配置文件是容器中文件位置,需要映射宿主机文件到容器可解决这个问题

```dockerfile
redis:
    restart: always
    ports:
      - 6379:6379
    image: redis
    volumes:
      - ./redis.conf:/etc/redis/redis.conf
    networks:
      - django-nginx
    command: redis-server /etc/redis/redis.conf
```

4."server" directive is not allowed here in /etc/nginx/nginx.conf:1

5.模型新增HstoreField,migrate的时候提示错误

```
django.db.utils.ProgrammingError: type "hstore" does not exist
LINE 1: ...ULL, "pro_pack" varchar(64) NOT NULL, "pro_color" hstore NOT...
```

- 解决方案:进入db容器,进入数据库,执行`CREATE EXTENSION IF NOT EXISTS hstore;
- 解决方案2:在migrations.py里设置

```python
class Migration(migrations.Migration):
    operations = [
      # 需要放在代码最前面
        HStoreExtension(),
    ]
```

#### redis相关

```python
redis.exceptions.ConnectionError: Error 111 connecting to 127.0.0.1:6379. Connection refused.
```

- 在settings中把Redis路由改成Redis容器

```python
'LOCATION': os.environ.get("REDISHOST", 'redis://redis:6379/1'),
```





### postgres

- 进入容器后操作数据库

  ```bash
  docker exec -i vue_db bash
  psql -Uhanson -dcoteamdb
  \dt 查看所有数据库表
  \d 表名  查看表结构
  插入数据:
  INSERT INTO user_userinfo (id,u_name,u_password,creat_time,is_delete,is_use,permissions) VALUES (1, 'admin', '111111', '2020-02-19', 0, 1, 1);
  更新数据
  UPDATE table_name
  SET column_name1 = value1, column_name2 = value2,……
  [WHERE <condition>]; 
  删除数据
  DELETE FROM table_name WHERE [condition];
  如果没有WHERE,将删除所有数据
  删除表
  DROP TABLE table_name;
  删除表字段
  ALTER TABLE table_name 
  DROP COLUMN column_name;
  删除表字段同时删除关联字段
  ALTER TABLE table_name 
  DROP COLUMN column_name CASCADE;
  ```

### db压力测试

```bash
ab -n 1000 -c 100 http://test.com
```

### cloud flare lets encrypt 证书docker申请

- 首先创建目录,并新建cloudflare配置文件

  ```bash
  sudo mkdir -p /data/letsencrypt/
  sudo vim /data/letsencrypt/cloudflare.ini
  ```

- cloudflare.ini配置文件

  ```bash
  dns_cloudflare_email = hansoncoteam@gmail.com
  dns_cloudflare_api_key = 448210bba62bf997557fef1bbc8798a3827c4
  ```

- 之后执行Docker的一次性执行模式启动一个客户端容器

  ```bash
  docker run -it --rm --name certbot \
              -v "/etc/letsencrypt:/etc/letsencrypt" \
              -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
              -v "/data/letsencrypt:/.secrets" \
              certbot/dns-cloudflare certonly \
              --dns-cloudflare-credentials /.secrets/cloudflare.ini \
              --dns-cloudflare-propagation-seconds 60 \
              --server https://acme-v02.api.letsencrypt.org/directory \
              -d yourweb.com -d '*.yourweb.com'
  ```

  注: 如果你不需要签通配符证书的话，那么可以去掉 `--server https://acme-v02.api.letsencrypt.org/directory` 参数，另外，如果你的域名生效时间很长，可以考虑适当调大 `--dns-cloudflare-propagation-seconds 60` 中的等待时间（单位秒）。

  执行脚本之后，会问你几个简单的问题，依次是选择申请证书的验证方式（DNS记录、临时验证Web服务、网站根目录的静态文件），用户协议是否同意，询问你的邮箱，并分享给基金会，如果你没有使用 `-d` 参数声明要签的网站域名还会询问你网站域名是什么。

- 如果一切顺利，你的证书公钥私钥等文件将会一家人整整齐齐的摆放在我们映射好的目录：

  ```bash
  /etc/letsencrypt/live
  ```

### 日志管理

- Dokcer日志快速查看命令

  ```bash
  docker logs container-name
  ```

  