<template>
  <div class="container">
    <div class="home-banner"></div>
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
      imageData: []
    }
  },
  asyncData() {
    return getImage({ is_banner: 1 }).then(res => {
      res.data.results.forEach(el => {
        el.path = process.env.IMAGE_URL + el.path
      })
      return { imageData: res.data.results }
    })
  }
}
</script>

<style>
.container {
  padding-top: 20px;
}
img {
  width: 100%;
}
.home-banner {
  background-image: url();
}
</style>
