<template>
  <div class="indexcontainer-items">
    <el-row>
      <el-col :span="8">
        <h1 class="indexcontainer-title">Professional</h1>
        <p>Every product will be tested</p>
        <p>Fast shipment and stable quality</p>
        <p class="indexcontainer-context-bottom">Use the best ingredients</p>
        <nuxt-link to="/professional">Learn More ></nuxt-link>
      </el-col>
      <el-col :span="8">
        <h1 class="indexcontainer-title">Factory</h1>
        <p>Regular factory</p>
        <p>The best choice for business customers</p>
        <p class="indexcontainer-context-bottom">Welcome field visit</p>
        <nuxt-link to="/factory">Learn More ></nuxt-link>
      </el-col>
      <el-col :span="8">
        <h1 class="indexcontainer-title">Custom</h1>
        <p>Provide product customization</p>
        <p>Just need an idea</p>
        <p class="indexcontainer-context-bottom">Leave the rest to us</p>
        <nuxt-link to="/custom" target="_blank">Learn More ></nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
.indexcontainer-items {
  text-align: center;
}
.indexcontainer-title {
  margin-bottom: 10px;
}
.indexcontainer-context-bottom {
  margin-bottom: 10px;
}
</style>
