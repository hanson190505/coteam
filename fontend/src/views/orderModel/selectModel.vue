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
      <!-- <model-table ref="modelref" :selectingShow="true"></model-table> -->
      <order-tomodel :selectingShow="true"></order-tomodel>
    </a-drawer>
  </div>
</template>

<script>
import modelTable from './modelTable'
import orderTomodel from './orderTomodel'
export default {
  components: {
    modelTable,
    orderTomodel
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    selectModel() {
      this.visible = true
      this.$emit('hideOrderTable')
    },
    onClose() {
      this.$emit('getNewModel', '123')
      this.visible = false
      this.$emit('hideOrderTable')
    }
  }
}
</script>

<style></style>
