<template>
  <div class="container">
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
      </div>
    </div>
    <HomeCategory />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import HomeCategory from '../components/HomeCategory'
import { getImage } from '../api/images'
export default {
  components: {
    Logo,
    HomeCategory
  },
  data() {
    return {
      imageData: ''
      // banner: {
      //   backgroundImage: 'url(' + require(this.imageData) + ') ',
      //   backgroundPosition: 'center center',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover'
      // }
    }
  },
  asyncData() {
    return getImage({ is_banner: 1 }).then(res => {
      return { imageData: process.env.IMAGE_URL + res.data.results[0].path }
    })
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
}
.banner-title {
  display: block;
  font-size: 60px;
  text-align: center;
  line-height: 600px;
  color: #336699;
}
.banner-title a:visited {
  color: #336699;
}
</style>
