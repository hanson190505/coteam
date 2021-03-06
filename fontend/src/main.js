import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import store from './store'
import './icons' // icon
import * as filters from './filters' // global filters
import JSEncrypt from 'jsencrypt'
// import CKEditor from 'ckeditor4-vue'

import {
  Table,
  Pagination,
  Button,
  Popconfirm,
  Carousel,
  Icon,
  Input,
  FormModel,
  Modal,
  Select,
  Drawer,
  DatePicker,
  Checkbox
} from 'ant-design-vue'

Vue.use(Pagination)
Vue.component(Button.name, Button)
Vue.component(Popconfirm.name, Popconfirm)
Vue.component(Carousel.name, Carousel)
Vue.component(Icon.name, Icon)
Vue.component(Input.name, Input)
Vue.component(Modal.name, Modal)
Vue.component(FormModel.name, FormModel)
Vue.component(FormModel.Item.name, FormModel.Item)
Vue.component(Select.name, Select)
Vue.component(Select.Option.name, Select.Option)
Vue.component(Drawer.name, Drawer)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Table.name, Table)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Checkbox.Group.name, Checkbox.Group)

Vue.use(Element, {
  size: 'mini',
  zIndex: 3000
})

// Vue.use(CKEditor)

Vue.config.productionTip = false
//全局注册vuex实例,store
Vue.prototype.$store = store
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
//JSEncrypt加密方法(参数1:数据，参数2：公钥)
Vue.prototype.$jsEncrypt = function (data, pub_key) {
  let encrypt = new JSEncrypt()
  encrypt.setPublicKey(pub_key)
  let en_data = encrypt.encrypt(data.toString())
  return en_data
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')