<template>
  <div>
    {{ logsData }}
  </div>
</template>

<script>
import { getLogs } from '@/api/getLogs'
export default {
  data() {
    return {
      logsData: ''
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      getLogs().then(res => {
        console.log(res)
        this.logsData = res.data
      })
    }
  }
}
</script>

<style></style>
