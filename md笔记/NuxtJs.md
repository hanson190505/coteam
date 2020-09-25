# NuxtJs

### 一. 安装和使用

1. 安装

   - ```bash
     npx create-nuxt-app <项目名称>
     ```

### 二. 坑坑坑

1. asyncData方法仅限在页面组件生效,在子组件和共用组件不生效

2. 按需引入element ui的时候,涉及到$message等全局函数需要单独挂载

   ```javascript
   //Vue.use(Message)
   //不需要use,否则会在刷新页面的时候弹出空白消息提示框
   Vue.prototype.$message = Message
   ```

   

### 三. 错误集锦

### crypto-js和PyCryptodome实现aec加密数据

#### 一.前端使用[crypto-js](https://github.com/brix/crypto-js)插件,后端django使用[PyCryptodome](https://pypi.org/project/pycryptodome/)

- 前端代码

```javascript
// ../plugins/jsencrypto.js
import Vue from 'vue';
import CryptoJs from 'crypto-js'

Vue.use(CryptoJs)

export function encryptPWD(word, keyStr) {
  keyStr = keyStr ? keyStr : 'abcdefghijklmnop';
  var key = CryptoJs.enc.Utf8.parse(keyStr); //Latin1 w8m31+Yy/Nw6thPsMpO5fg==
  var srcs = CryptoJs.enc.Utf8.parse(word);
  var encrypted = CryptoJs.AES.encrypt(srcs, key, {
    mode: CryptoJs.mode.ECB,
    padding: CryptoJs.pad.Pkcs7
  });
  return encrypted.toString();
}

//注册插件
//./nuxt.config.js
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/jsencrypt',
  ],
```

- 后端代码

```python
from Crypto.Cipher import AES
import base64
from Crypto.Util.Padding import pad


class AesCrypt:
    def __init__(self, model, iv, encode_, key='abcdefghijklmnop'):
        self.encrypt_text = ''
        self.decrypt_text = ''
        self.encode_ = encode_
        self.model = {'ECB': AES.MODE_ECB, 'CBC': AES.MODE_CBC}[model]
        self.key = self.add_16(key)
        if model == 'ECB':
            self.aes = AES.new(self.key, self.model)  # 创建一个aes对象
        elif model == 'CBC':
            self.aes = AES.new(self.key, self.model, iv)  # 创建一个aes对象

        # 这里的密钥长度必须是16、24或32，目前16位的就够用了

    def add_16(self, par):
        par = par.encode(self.encode_)
        while len(par) % 16 != 0:
            par += b'\x00'
        return par

    # 加密
    def aesencrypt(self, text):
        text = pad(text.encode('utf-8'), AES.block_size, style='pkcs7')
        self.encrypt_text = self.aes.encrypt(text)
        return base64.encodebytes(self.encrypt_text).decode().strip()

    # 解密
    def aesdecrypt(self, text):
        text = base64.decodebytes(text.encode(self.encode_))
        self.decrypt_text = self.aes.decrypt(text)
        return self.decrypt_text.decode(self.encode_).strip('\0').strip("\n")


# if __name__ == '__main__':
#     pr = AesCrypt('ECB', '', 'utf-8', 'abcdefghijklmnop')
#     pr1 = AesCrypt("ECB", "", "utf-8")
#     en_text = pr.aesencrypt('123456')
#     print('密文:', en_text)
#     print('明文:', pr1.aesdecrypt(en_text))

```

#### 2.模板里面for循环报错

```javascript
vue.runtime.esm.js?2b0e:619 [Vue warn]: Duplicate keys detected: '0'. This may cause an update error.

found in

---> <Usb1> at components/custom/usbSvg/usb1.vue
       <UsbStyle> at components/custom/usbStyle.vue
         <Pages/custom.vue> at pages/custom.vue
           <Nuxt>
             <Default> at layouts/default.vue
               <Root>
```

- 存在两个for语句,里面的index绑定数据重复了,修改使其不重复即可解决

### 四.使用技巧

#### 1.svg里image引用本地图片技巧

- 

