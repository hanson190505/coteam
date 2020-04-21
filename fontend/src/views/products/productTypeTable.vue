<template>
  <div>
    <el-table
      :data="productsTypeData"
      border
      show-summary
      highlight-current-row
      style="width=99.9%"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    ></el-table>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>