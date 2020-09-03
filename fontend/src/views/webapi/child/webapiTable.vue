<template>
  <div>
    <el-button type="primary" @click="addWebApiRow()">新增</el-button>
    <el-table
      :data="webapidata"
      border
      highlight-current-row
      style="width=99.9%"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column label="seo-title" align="center" width="200" fixed>
        <template slot-scope="scope">
          <el-input autosize v-if="scope.row.status === 1" v-model="scope.row.seo_title"></el-input>
          <span v-else>{{ scope.row.seo_title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="seo-desc" align="center" width="300" fixed>
        <template slot-scope="scope">
          <el-input autosize v-if="scope.row.status === 1" v-model="scope.row.seo_desc"></el-input>
          <span v-else>{{ scope.row.seo_desc }}</span>
        </template>
      </el-table-column>
      <el-table-column label="log-svg" align="center" width="300" fixed>
        <template slot-scope="scope">
          <el-input autosize v-if="scope.row.status === 1" v-model="scope.row.log_svg"></el-input>
          <span v-else>{{ scope.row.log_svg }}</span>
        </template>
      </el-table-column>
      <el-table-column label="公司名称" align="center" width="200" fixed>
        <template slot-scope="scope">
          <el-input autosize v-if="scope.row.status === 1" v-model="scope.row.company_name"></el-input>
          <span v-else>{{scope.row.company_name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="公司地址" align="center" width="300" fixed>
        <template slot-scope="scope">
          <el-input autosize v-if="scope.row.status === 1" v-model="scope.row.company_addr"></el-input>
          <span v-else>{{scope.row.company_addr}}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否可用" align="center" width="100" fixed>
        <template slot-scope="scope">
          <el-input autosize v-if="scope.row.status === 1" v-model="scope.row.is_use"></el-input>
          <span v-else>{{scope.row.is_use}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="120">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.status === 1"
            @click="saveRow(scope.row)"
            type="text"
            size="mini"
          >保存</el-button>
          <el-button v-else @click="changeRow(scope.row)" type="text" size="mini">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagi-nation @pagination="pagination" :getDataTotal="dataTotal"></pagi-nation>
    <change-data ref="changeForm"></change-data>
  </div>
</template>

<script>
import { postWebapi, getWebapi, patchWebApi } from '@/api/webapi'
import pagiNation from '@/components/common/pagiNation'
import changeData from './changeData'
export default {
  name: 'webapiTable',
  components: {
    pagiNation,
    changeData,
  },
  data() {
    return {
      webapidata: [],
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
        this.loading = false
        this.webapidata = res.data.results
        this.dataTotal = res.data.count
      })
    },
    changeRow(row) {
      row.status = 1
      // this.$refs.changeForm.handleChange(row)
    },
    saveRow(row) {
      if (row.id) {
        patchWebApi(row.id, row).then((res) => {
          this.pagination()
        })
      } else {
        postWebapi(row).then((res) => {})
      }
    },
    addWebApiRow() {
      let newValue = {
        seo_title: '',
        seo_desc: '',
        log_svg: '',
        company_name: '',
        company_addr: '',
        is_use: 0,
        // 1--新增
        status: 1,
      }
      this.webapidata.push(newValue)
    },
  },
  created() {
    this.pagination()
  },
}
</script>

<style>
</style>