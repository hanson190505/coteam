<template>
  <div id="app">
    <div class="header-row">
      <Header />
      <MiniHeader />
    </div>
    <nuxt />
  </div>
</template>
<script>
import Header from '../components/layouts/header'
import MiniHeader from '../components/layouts/MiniHeader'
export default {
  components: {
    Header,
    MiniHeader
  }
}
</script>
<style>
.header-row {
  background-color: #003366;
  height: 60px;
  text-align: center;
  font-size: 20px;
  line-height: 60px;
  color: #ffffff;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 999;
}
@media screen and (max-width: 768px) {
  .header-row {
    font-size: 12px;
    height: 30px;
    line-height: 30px;
  }
}
</style>
