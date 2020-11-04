<template>
  <div>
    <el-input
      v-model="search"
      size="mini"
      clearable
      placeholder="请输入关键字..."
      @clear="handleSearchClear"
      @keyup.enter.native="sendSearch"
      @input="handleInput"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="sendSearch"
      ></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'backendSearch',
  props:{
    keyWords:Array
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handleInput() {
      if (this.search === '') {
        this.$emit('parentMethod')
      }
    },
    sendSearch() {
      const search = this.search

      let params = {}
      this.keyWords.forEach(el => {
        params[el] = search
      });
      if (search) {
        this.$emit('parentMethod', params)
      }
    },
    //清空搜索框后的事件
    handleSearchClear() {
      this.$emit('parentMethod')
    }
  }
}
</script>

<style scoped></style>
