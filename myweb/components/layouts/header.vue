<template>
  <div class="normal-header">
    <el-row :gutter="0">
      <el-col :span="2" class="hidden-sm-and-down">
        <div>logo</div>
      </el-col>
      <el-col :span="16" class="hidden-sm-and-down">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#003366"
          text-color="#ffffff"
          active-text-color="#ffcc66"
        >
          <el-menu-item index="1">
            <nuxt-link to="/">HOME</nuxt-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">PRODUCTS</template>
            <el-menu-item index="2-1">
              <nuxt-link to="/usb">USB</nuxt-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <nuxt-link to="/powerbank">POWERBANK</nuxt-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <nuxt-link to="/about">ABOUT</nuxt-link>
          </el-menu-item>
          <el-menu-item index="4">
            <nuxt-link to="/contact">CONTACT</nuxt-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6" class="hidden-sm-and-down">
        <div>profile</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {}
</script>
<style>
.normal-header {
}
</style>
