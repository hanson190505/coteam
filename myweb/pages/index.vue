<template>
  <div class="container">
    <!-- banner -->
    <div
      class="home-banner"
      :style="{
        backgroundImage: 'url(' + imageData + ')',
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
    return {}
  },
  asyncData() {
    return getImage({ is_banner: 1 }).then(res => {
      return { imageData: process.env.IMAGE_URL + res.data.results[0].path }
    })
  },
  methods: {
    handleSendMail() {
      this.$refs.sendmailref.showDialog()
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
  font-size: 3.5em;
  text-align: center;
  /* line-height: 600px; */
  color: #336699;
  padding-top: 250px;
}
.banner-title a {
  color: #336699;
}
.contact-us {
  font-size: 0.6em;
}
.contact-us:hover {
  color: #ffcc66;
  cursor: pointer;
}
.footer {
  width: 80%;
  margin-left: 10%;
}

.footer ul li a:visited {
  color: #000000;
}
</style>
