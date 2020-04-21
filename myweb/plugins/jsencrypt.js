import Vue from 'vue';
import CryptoJs from 'crypto-js'

Vue.use(CryptoJs)

// TODO:1.设计用户登录之后所有数据传输都加密处理;2.keyStr单独生成,会话期保存在store中,关闭页面(发送登出请求,后端删除keyStr)即失效;3.api随机生成16位字符串
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

// export default { //加密
//   set(word, keyStr) {
//     keyStr = keyStr ? keyStr : 'abcdefghijklmnop';
//     var key = CryptoJS.enc.Utf8.parse(keyStr); //Latin1 w8m31+Yy/Nw6thPsMpO5fg==
//     var srcs = CryptoJS.enc.Utf8.parse(word);
//     var encrypted = CryptoJS.AES.encrypt(srcs, key, {
//       mode: CryptoJS.mode.ECB,
//       padding: CryptoJS.pad.Pkcs7
//     });
//     return encrypted.toString();
//   },
//   //解密
//   get(word, keyStr) {
//     keyStr = keyStr ? keyStr : 'abcdefghijklmnop';
//     var key = CryptoJS.enc.Utf8.parse(keyStr); //Latin1 w8m31+Yy/Nw6thPsMpO5fg==
//     var decrypt = CryptoJS.AES.decrypt(word, key, {
//       mode: CryptoJS.mode.ECB,
//       padding: CryptoJS.pad.Pkcs7
//     });
//     return CryptoJS.enc.Utf8.stringify(decrypt).toString();
//   }

// }
