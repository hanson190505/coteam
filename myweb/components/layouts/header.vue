<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="2" class="hidden-sm-and-down">
        <div class="svg-logo">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 58 27"
            style="enable-background:new 0 0 58 27;"
            xml:space="preserve"
            class="svg-logo"
          >
            <g>
              <polygon class="st0" points="30.56,8 29,12 9,12 9,8 	" />
              <polygon class="st0" points="57,8 57,12 35.89,12 38,8 	" />
              <polygon class="st0" points="33.3,1 31.74,5 1,5 1,1 	" />
              <polygon class="st0" points="57,1 57,5 33.7,5 33.3,1 	" />
              <polygon class="st0" points="32.04,15 30.75,19 9,19 9,15 	" />
              <polygon class="st0" points="57,15 57,19 32.19,19 34.31,15 	" />
              <polygon class="st0" points="29.79,22 28.5,26 1,26 1,22 	" />
              <polygon class="st0" points="57,22 57,26 28.5,26 30.61,22 	" />
            </g>
            <path
              class="st1"
              d="M33.7,5l-0.39-3.87c-0.02,0-0.04,0-0.06,0L31.74,5l-1.18,3L29,12h4l-0.96,3l-1.29,4l-0.96,3l-1.29,4l2.11-4
	l1.58-3l2.12-4l1.58-3L38,8h-4L33.7,5z"
            />
          </svg>
        </div>
      </el-col>
      <el-col :span="8" class="hidden-sm-and-down">
        <el-menu
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
      <!-- <el-col :span="4" class="hidden-sm-and-down">
        <localLogin />
      </el-col>-->
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
      searchWords: ''
    }
  }
}
</script>
<style>
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
.st0 {
  fill: #ffcc66;
}
.st1 {
  fill: none;
  stroke: #ffcc66;
  stroke-width: 0.25;
  stroke-miterlimit: 10;
}
.svg-logo {
  height: 50px;
  margin-top: 2.5px;
}
</style>
