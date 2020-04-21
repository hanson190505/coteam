<template>
  <div id="app">
    <div class="header-row">
      <Header />
    </div>
    <nuxt />
  </div>
</template>
<script>
import Header from '@/components/layouts/header'
import MiniHeader from '@/components/layouts/MiniHeader'
export default {
  components: {
    Header,
    MiniHeader
  }
}
</script>
<style>
.header-row {
  background-color: #336699;
  height: 60px;
  text-align: center;
  font-size: 0.8em;
  line-height: 60px;
  color: #ffffff;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 999;
}
/* @media screen and (max-width: 768px) {
  .header-row {
    font-size: 12px;
    height: 30px;
    line-height: 30px;
  }
} */
</style>
