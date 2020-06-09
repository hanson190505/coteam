<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404">404</h1>
    <h1 v-else>应用发生错误异常</h1>
    <h1>
      <nuxt-link to="/">Go Home</nuxt-link>
    </h1>
  </div>
</template>

<script>
export default {
  props: ['error']
  // layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script>

<style>
.error-container {
  text-align: center; /*让div内部文字居中*/
  border-radius: 20px;
  width: 300px;
  height: 350px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
