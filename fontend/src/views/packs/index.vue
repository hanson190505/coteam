<template>
<div>
    <a-button type="primary" @click="addPack">
      新增
    </a-button>
  <packs-table></packs-table>
  <post-pack :postPackDrawerVisible="postPackDrawerVisible" @addPack="addPack"></post-pack>
</div>
</template>

<script>
import PacksTable from './packsTable.vue';
import PostPack from './postPack.vue';
export default {
  components: {
    PacksTable,
    PostPack,
  },
  data() {
    return {
      postPackDrawerVisible:false
    }
  },
  methods: {
    addPack(){
      this.postPackDrawerVisible = !this.postPackDrawerVisible
    },
  },
}
</script>

<style></style>
