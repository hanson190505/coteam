<template>
  <div class="container">
    <el-form :model="localLoginData" ref="localLoginData" label-width="80px">
      <el-form-item label="name">
        <el-input v-model="localLoginData.name"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="localLoginData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="postLogin">login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import { getPubKey, localLogin } from '../api/user'
import { encryptPWD } from '../plugins/jsencrypt'
export default {
  data() {
    return {
      localLoginData: {}
    }
  },
  middleware: 'notAuthenticated',
  methods: {
    postLogin() {
      getPubKey()
        .then(res => {
          console.log(res)
          localLogin({
            login: 'login',
            password: encryptPWD(this.localLoginData.password.toString())
          }).then(res => {
            console.log(res)
          })
        })
        .catch(error => {})
    }
  }
}
</script>
