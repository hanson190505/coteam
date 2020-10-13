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
    <a-table :columns="columns" :data-source="logsData" rowKey="time_stamp" bordered></a-table>
  </div>
</template>
<script>
import { getLogs } from '@/api/getLogs'
const columns = [
  {
    title: 'time',
    dataIndex: 'time'
  },
  {
    title: 'username',
    dataIndex: 'username'
  },
  {
    title: 'status_code',
    dataIndex: 'status_code'
  },
  {
    title: 'sip',
    dataIndex: 'sip'
  },
  {
    title: 'dip',
    dataIndex: 'dip'
  },
  {
    title: 'reason_phrase',
    dataIndex: 'reason_phrase'
  },
  {
    title: 'level',
    dataIndex: 'level'
  },
  {
    title: 'method',
    dataIndex: 'method'
  },
  {
    title: 'get',
    dataIndex: 'get'
  },
  {
    title: 'post',
    dataIndex: 'post'
  },
  {
    title: 'path',
    dataIndex: 'path'
  },
  {
    title: 'agent',
    dataIndex: 'agent'
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
        // console.log(res)
        this.logsData = res.data.l_log
      })
    },
    handleBlur() {},
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
