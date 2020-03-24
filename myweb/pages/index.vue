<template>
  <div class="container">
    <el-carousel height="500px">
      <el-carousel-item v-for="(item, index) in imageData" :key="index">
        <img :src="item.path" :alt="item.image_alt" />
      </el-carousel-item>
    </el-carousel>
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
</style>
