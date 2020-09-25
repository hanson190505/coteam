<template>
  <div>
    <a-select
      show-search
      placeholder="Select a person"
      option-filter-prop="children"
      style="width: 200px"
      :filter-option="filterOption"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    >
      <a-select-option v-for="(item, index) in list_dir" :key="index" :value="item">{{ item }}</a-select-option>
    </a-select>
    <a-table :columns="columns" :data-source="logsData" bordered></a-table>
  </div>
</template>
<script>
import { getLogs } from '@/api/getLogs'
const columns = [
  {
    title: 'asctime',
    dataIndex: 'asctime'
  },
  {
    title: 'threadName',
    dataIndex: 'threadName'
  },
  {
    title: 'task_id',
    dataIndex: 'task_id'
  },
  {
    title: 'filename',
    dataIndex: 'filename'
  },
  {
    title: 'levelname',
    dataIndex: 'levelname'
  },
  {
    title: 'message',
    dataIndex: 'message'
  }
]
export default {
  data() {
    return {
      list_dir: [],
      logsData: [],
      columns
    }
  },
  methods: {
    handleChange(value) {
      getLogs(value).then(res => {
        this.logsData = res.data.l_log
      })
    },
    handleBlur() {
      console.log('blur')
    },
    handleFocus() {
      getLogs('get_options').then(res => {
        this.list_dir = res.data.l_dir
      })
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      )
    }
  }
}
</script>
