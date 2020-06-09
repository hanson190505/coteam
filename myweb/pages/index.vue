<template>
  <div class="container">
    <!-- banner -->
    <div
      class="home-banner"
      :style="{
        backgroundImage: 'url(' + banner_iamge + ')',
        backgroundPosition: 'center center'
      }"
    >
      <div class="banner-title">
        <nuxt-link to="/usb">USB</nuxt-link>
        <span>/</span>
        <nuxt-link to="/powerbank">POWERBANK</nuxt-link>
        <p @click="handleSendMail" class="contact-us">contact us ></p>
      </div>
    </div>
    <div class="home-product">
      <el-row>
        <el-col :span="12">
          <div
            class="home-product-item-1"
            :style="{
        backgroundImage: 'url(' + newImage + ')',
        backgroundPosition: 'center center'
      }"
          >
            <p class="home-product-item-title" @click="handleNew">NEW</p>
            <div class="home-product-dec">
              <p>Big and Fast storage usb</p>
              <p>Salor energy powerbank More than 20000 mAh</p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div
            class="home-product-item-2"
            :style="{
        backgroundImage: 'url(' + hotImage + ')',
        backgroundPosition: 'center center'
      }"
          >
            <p class="home-product-item-title" @click="handleHot">HOT</p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div
            class="home-product-item-3"
            :style="{
        backgroundImage: 'url(' + handleImage + ')',
        backgroundPosition: 'center center'
      }"
          >
            <p @click="handleSendMail" class="contact-us">contact us ></p>
          </div>
        </el-col>
        <el-col :span="12">
          <div
            class="home-product-item-4"
            :style="{
        backgroundImage: 'url(' + testImage + ')',
        backgroundPosition: 'center center'
      }"
          >
            <p>Products Test</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <indexcontainer />
    <!-- footer -->
    <div class="footer">
      <hr />
      <indexfooter />
    </div>
    <sendmail ref="sendmailref" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import indexfooter from '~/components/index/indexfooter'
import indexcontainer from '~/components/index/indexcontainer'
import sendmail from '~/components/sendmail'
import { getImage } from '~/api/images'
export default {
  components: {
    Logo,
    sendmail,
    indexfooter,
    indexcontainer
  },
  data() {
    return {
      imageData: ''
    }
  },
  asyncData() {
    return getImage({ is_banner: 1 }).then(res => {
      // return { imageData: process.env.IMAGE_URL + res.data.results[0].path }
      return { imageData: res.data.results }
    })
  },
  computed: {
    banner_iamge() {
      let image_url = ''
      this.imageData.forEach(el => {
        if (el.home_index === 1) {
          image_url = process.env.IMAGE_URL + el.path
        }
      })
      return image_url
    },
    newImage() {
      let image_url = ''
      this.imageData.forEach(el => {
        if (el.home_index === 2) {
          image_url = process.env.IMAGE_URL + el.path
        }
      })
      return image_url
    },
    hotImage() {
      let image_url = ''
      this.imageData.forEach(el => {
        if (el.home_index === 3) {
          image_url = process.env.IMAGE_URL + el.path
        }
      })
      return image_url
    },
    handleImage() {
      let image_url = ''
      this.imageData.forEach(el => {
        if (el.home_index === 4) {
          image_url = process.env.IMAGE_URL + el.path
        }
      })
      return image_url
    },
    testImage() {
      let image_url = ''
      this.imageData.forEach(el => {
        if (el.home_index === 5) {
          image_url = process.env.IMAGE_URL + el.path
        }
      })
      return image_url
    }
  },
  methods: {
    handleSendMail() {
      this.$refs.sendmailref.showDialog()
    },
    handleNew() {
      console.log('new')
    },
    handleHot() {
      console.log('hot')
    }
  }
}
</script>

<style>
.container {
  /* padding-top: 20px; */
}
img {
  width: 100%;
}
.home-banner {
  height: 600px;
  background-color: #336699;
}
.banner-title {
  display: block;
  font-size: 3.5rem;
  text-align: center;
  /* line-height: 600px; */
  color: #336699;
  padding-top: 250px;
}
.banner-title a {
  color: #336699;
}
.home-product-item-1,
.home-product-item-4 {
  background-color: #ffcc66;
  height: 500px;
  margin: 10px;
}
.home-product-item-2,
.home-product-item-3 {
  background-color: #ffcc667e;
  height: 500px;
  margin: 10px;
}
.home-product-item-3 p {
  font-size: 2.8rem;
  color: #ffffff;
  text-align: center;
  line-height: 500px;
}
.home-product-item-title {
  font-size: 4rem;
  color: #003366;
  text-align: center;
  display: block;
  width: 100%;
}
.home-product-item-title:hover {
  cursor: pointer;
  background-color: #336699;
  color: #ffffff;
}
.home-product-dec {
  text-align: center;
  margin-top: 300px;
  color: #ffffff;
}
.home-product-dec p {
  font-size: 1.5rem;
}
.contact-us {
  font-size: 0.6em;
}
.contact-us:hover {
  color: #ffcc66;
  cursor: pointer;
}
.home-product-item-4 p {
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  line-height: 500px;
}
.footer {
  width: 80%;
  margin-left: 10%;
  /* text-align: center; */
}

.footer ul li a:visited {
  color: #000000;
}
</style>
