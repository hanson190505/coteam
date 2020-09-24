<template>
  <div class="home">
    <el-container>
      <el-header height="60px">
        <!-- Header content -->
        <nav-bar></nav-bar>
        <el-row>
          <el-col :span="14"></el-col>
        </el-row>
      </el-header>
      <el-main height>
        <!-- Main content -->
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import navBar from '@/components/navbar'
// import { getExRate } from '@/api/utilsApi'
export default {
  name: 'home',
  components: {
    navBar
  },
  data() {
    return {
      // exData: { data1: { name: '' }, data2: { name: '' }, data3: { name: '' } }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('userInfo/logout')
      this.$router.push('/login')
    }
  },
  created() {
    // getExRate().then(res => {
    //   this.exData = res.data
    // })
  }
  // destroyed() {
  //   window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
  // }
}
</script>

<style lang="less" scoped>
// .el-header {
//   background-color: #545c64;
//   font-size: 20px;
// }
// .logo {
//   line-height: 60px;
//   height: 60px;
// }
// .userinfo {
//   line-height: 60px;
//   height: 60px;
//   float: right;
//   .username {
//     margin-right: 10px;
//     color: aliceblue;
//   }
// }
// .ex-rate {
//   font-size: 10px;
//   color: aliceblue;
// }
// .fBuyPri {
//   margin-right: 10px;
// }
// .ex-rate-item {
//   margin-top: 3px;
// }
</style>
