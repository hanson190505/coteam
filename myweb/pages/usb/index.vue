<template>
  <div class="usb-container">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="vertical"
          background-color="#336699"
          text-color="#ffffff"
          active-text-color="#ffcc66"
        >
          <el-menu-item v-for="(item, index) in menus" :key="index" :index="item.index">
            <p @click="searchUsbData(item.param)">{{ item.title }}</p>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-row :gutter="20" class="product-row">
          <el-col :span="5" v-for="(item, index) in usbData" :key="index">
            <el-card shadow="always" class="product-card">
              <img :src="item.pro_image" />
              <p @click="handleSendMail" class="contact-us">contact us ></p>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <sendmail ref="sendmailref" />
  </div>
</template>

<script>
import { getProducts, getProductType } from '~/api/goods'
import sendmail from '~/components/sendmail'
export default {
  data() {
    return {
      menus: [
        { param: '', title: 'ALL', index: '1' },
        { param: { is_hot: '1' }, title: 'HOT', index: '2' },
        { param: { kw: 'new' }, title: 'NEW', index: '3' },
        { param: { sub_type: '1' }, title: 'USB 2.0', index: '4' }
      ],
      activeIndex: '1',
      usbData: []
    }
  },
  components: {
    sendmail
  },
  asyncData({ params, error }) {
    return getProducts(params)
      .then(res => {
        console.log(res.data.results)
        res.data.results.forEach(el => {
          el.pro_image = process.env.IMAGE_URL + el.pro_image[0]
        })
        return { usbData: res.data.results }
      })
      .catch(err => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  },
  async fetch({ error }) {
    let data = await getProductType()
      .then(res => {
        console.log(res.data.results)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  },
  methods: {
    searchUsbData(params) {
      getProducts(params)
        .then(res => {
          console.log(res.data.results)
          this.usbData = res.data.results
        })
        .catch(err => {
          error({ statusCode: 404, message: 'Post not found' })
        })
    },
    handleSendMail() {
      this.$refs.sendmailref.showDialog()
    }
  }
}
</script>

<style>
.usb-container {
  padding-top: 10px;
  margin-left: 10%;
}
.product-card img {
  width: 100%;
}
.product-row .el-col {
  padding-bottom: 10px;
}
</style>
