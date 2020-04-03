<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="2" class="hidden-sm-and-down">
        <div>logo</div>
      </el-col>
      <el-col :span="8" class="hidden-sm-and-down">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#336699"
          text-color="#ffffff"
          active-text-color="#ffcc66"
        >
          <el-menu-item v-for="(item, index) in menus" :key="index" :index="item.index">
            <nuxt-link :to="item.path">{{ item.title }}</nuxt-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="10" class="hidden-sm-and-down">
        <el-input
          placeholder="please input keywords"
          v-model="searchWords"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4" class="hidden-sm-and-down">
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
        { path: '/', title: 'HOME', index: '1' },
        { path: '/powerbank', title: 'POWERBANK', index: '2' },
        { path: '/usb', title: 'USB', index: '3' }
      ],
      searchWords: '',
      activeIndex: '1'
    }
  }
}
</script>
<style>
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
