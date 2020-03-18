<template>
  <div id="mini-header">
    <el-row>
      <el-col :span="8" class="hidden-sm-and-up">
        <el-dropdown>
          <span class="el-dropdown-link">
            PRODUCTS<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="dropdown-item">
              <nuxt-link to="/usb" class="usb-link">USB</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <nuxt-link to="/powerbank">POWERBANK</nuxt-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="16" class="hidden-sm-and-up mini-nv-bar-r">
        <nuxt-link to="/" class="nuxt-a">HOME</nuxt-link>
        <nuxt-link to="/about" class="nuxt-a">ABOUT</nuxt-link>
        <nuxt-link to="/contact" class="nuxt-a">CONTACT</nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.mini-nv-bar-r {
  display: flex;
  justify-content: flex-end;
}
.nuxt-a {
  margin-right: 5px;
}
.el-dropdown-menu {
  background-color: #003366;
}
.dropdown-item {
  background-color: #003366;
}
.usb-link {
  background-color: red;
}
</style>
