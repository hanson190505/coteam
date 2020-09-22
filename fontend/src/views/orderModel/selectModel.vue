<template>
  <div>
    <a-button type="primary" @click="selectModel">select model</a-button>
    <a-drawer
      :visible="visible"
      width="90%"
      height="50%"
      placement="top"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <model-table ref="selectmodeltable" :selectingShow="true"></model-table>
    </a-drawer>
  </div>
</template>

<script>
import modelTable from './modelTable'
export default {
  components: {
    modelTable
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    // selectModel() {
    //   this.$refs.selectmodeltable.selectingTableShow('aaa')
    //   this.visible = !this.visible
    // },
    selectModel() {
      this.visible = true
      this.$emit('hideOrderTable')
    },
    onClose() {
      this.visible = false
      this.$emit('hideOrderTable')
    }
  }
}
</script>

<style></style>
