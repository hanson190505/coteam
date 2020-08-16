<template>
  <div>
    <el-table
      :data="webApiData"
      border
      highlight-current-row
      style="width=99.9%"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column label="seo-title" align="center" width="100" fixed>
        <template slot-scope="scope">
          <span>{{ scope.row.seo_title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="seo-desc" align="center" width="260" fixed>
        <template slot-scope="scope">
          <span>{{ scope.row.seo_desc }}</span>
        </template>
      </el-table-column>
      <el-table-column label="公司名称" align="center" width="100" fixed>
        <template slot-scope="scope">
          <span>{{scope.row.company_name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="公司地址" align="center" width="300" fixed>
        <template slot-scope="scope">
          <span>{{scope.row.company_addr}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="120">
        <template slot-scope="scope">
          <el-button @click="changeRow(scope.row)" type="text" size="mini">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagi-nation @pagination="pagination" :getDataTotal="dataTotal"></pagi-nation>
    <change-data ref="changeForm"></change-data>
  </div>
</template>

<script>
import { postWebapi, getWebapi } from '@/api/webapi'
import pagiNation from '@/components/common/pagiNation'
import changeData from './changeData'
export default {
  name: 'userTable',
  components: {
    pagiNation,
    changeData,
  },
  data() {
    return {
      WebApiData: [],
      loading: true,
      dataTotal: 0,
    }
  },
  methods: {
    pagination(params) {
      //子组件backendSearch清空搜索条件时调用,设定page默认值为1
      if (!params) {
        params = { page: 1, page_size: 10 }
      }
      getWebapi(params).then((res) => {
        this.WebApiData = res.data.results
        this.dataTotal = res.data.count
        this.loading = false
      })
    },
    changeRow(row) {
      this.$refs.changeForm.handleChange(row)
    },
  },
  created() {
    this.pagination()
  },
}
</script>

<style>
</style>