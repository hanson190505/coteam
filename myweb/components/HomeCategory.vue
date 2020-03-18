<template>
  <div id="category">
    <el-row :gutter="10">
      <el-col :span="8" v-for="(item, index) in indexProducts" :key="index">
        <el-card :body-style="{ padding: '0px' }" class="category-card">
          <img :src="item.imgsrc" :alt="item.imgalt" class="image" />
          <div style="padding: 14px;">
            <span class="title">{{ item.title }}</span>
            <br />
            <span class="info">{{ item.info }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">contact</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indexProducts: []
    }
  },
  mounted() {
    this.indexProducts = [
      {
        imgsrc:
          'https://isabela.iweb.co.uk/resize/ZT0xMjA5NjAwJmg9NTAwJnE9NzUmdD1vdXRib3VuZCZ1cmw9aHR0cHMlM0ElMkYlMkZzdGF0aWMubXltZW1vcnkuY28udWslMkZtZWRpYSUyRmNhdGFsb2clMkZwcm9kdWN0JTJGbCUyRmElMkZsYXJnZV80MjQ1Nl8xMzY4NjA4NDQwLmpwZyZ3PTUwMA==/',
        imgalt: 'usb category',
        title: 'USB',
        info: 'usb3.0 usb2.0'
      },
      {
        imgsrc:
          'https://images-na.ssl-images-amazon.com/images/I/51Ko8jpE-xL._AC_SX569_.jpg',
        imgalt: 'Power Bank Category',
        title: 'POWER-BANK',
        info: '5000-8000-10000-15000-20000mAh'
      },
      {
        imgsrc:
          'https://5.imimg.com/data5/EV/SO/MY-33984718/3-ranges-mini-usb-handy-fan-with-500x500.jpg',
        imgalt: 'Usb Fan Category',
        title: 'USB-FAN',
        info: 'mix variety usb fan'
      }
    ]
  }
}
</script>
<style>
#category {
  display: flex;
  justify-content: space-around;
}
.category-card {
  height: 100%;
  width: 100%;
  text-align: center;
  vertical-align: middle;
}
.image {
  height: 100%;
  width: 100%;
}
@media screen and (max-width: 768px) {
  /* .image {
    height: 100px;
    width: 100px;
  } */
}
</style>
