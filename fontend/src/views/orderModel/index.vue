<template>
  <model-table ref="modeltable"></model-table>
</template>

<script>
import modelTable from './modelTable'
export default {
  components: {
    modelTable
  },
  mounted() {
    this.$refs.modeltable.getData()
  }
}
</script>

<style></style>
