<template>
  <el-popover
  placement="left"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="日期"></el-table-column>
    <el-table-column width="100" property="name" label="姓名"></el-table-column>
    <el-table-column width="300" property="address" label="地址"></el-table-column>
  </el-table>
  <el-button slot="reference">click 激活</el-button>
</el-popover>
</template>

<script>
export default {

}
</script>

<style>

</style>