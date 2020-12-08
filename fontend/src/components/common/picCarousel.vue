<template>
  <div class="block">
    <el-carousel trigger="click">
      <el-carousel-item v-for="(item, index) in proPicUrl" :key="index">
        <img :src="item" class="car-img" height='auto'/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'picCarousel',
  data() {
    return {
      picUrlList: []
    }
  },
  props: {
    proPicUrl: Array
  },
  computed: {},
  methods: {}
}
</script>

<style>
.car-img {
  width: 100%;
}
</style>
