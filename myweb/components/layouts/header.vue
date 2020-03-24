<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="2" class="hidden-sm-and-down">
        <div>logo</div>
      </el-col>
      <el-col :span="10" class="hidden-sm-and-down">
        <ul class="nav">
          <li v-for="(item, index) in menus" :key="index" class="nav-item">
            <nuxt-link :to="item.path">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="12" class="hidden-sm-and-down">
        <localLogin />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import localLogin from '../user/localLogin'
export default {
  components: {
    localLogin
  },
  data() {
    return {
      menus: [
        { path: '/', title: 'HOME' },
        { path: '/powerbank', title: 'POWERBANK' },
        { path: '/usb', title: 'USB' },
        { path: '/about', title: 'ABOUT' },
        { path: '/contact', title: 'CONTACT' }
      ]
    }
  }
}
</script>
<style>
.nav {
  display: flex;
  list-style: none;
}
.nav-item :hover {
  background-color: #336699;
}
.nav-item a {
  display: block;
  height: 30px;
  padding: 0 20px;
}
.nuxt-link-exact-active {
  color: #ffcc66 !important;
}
</style>
