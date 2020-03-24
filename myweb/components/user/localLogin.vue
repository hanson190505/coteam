<template>
  <div>
    <!-- <div v-if="$store.state.auth">
      <p>
        You are authenticated. You can see the
        <NuxtLink to="/secret"> secret page </NuxtLink>!
      </p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/login"> login </NuxtLink>.
    </p> -->
    <img src="~/assets/icons/svg/logined.svg" class="logined-svg" />
    <el-button v-if="$store.state.auth" type="info" size="mini" @click="logout"
      >logout</el-button
    >
    <el-button v-else type="info" size="mini">
      <nuxt-link to="/login">login</nuxt-link>
    </el-button>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  methods: {
    logout() {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
    }
  }
}
</script>
<style>
.logined-svg {
  width: 30px;
}
</style>
