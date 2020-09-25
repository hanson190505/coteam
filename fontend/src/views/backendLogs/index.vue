<template>
  <div>
    <log-select></log-select>
  </div>
</template>

<script>
import { getLogs } from '@/api/getLogs'
import logSelect from './logSelect'
export default {
  components: { logSelect },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style></style>
