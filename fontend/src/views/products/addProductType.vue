<template>
  <el-dialog :visible.sync="visible" width="40%" :before-close="handleClose">
    <el-table
      :data="productsTypeData"
      border
      show-summary
      highlight-current-row
      style="width=99.9%"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-table-column label="产品类别" align="center" width="150" fiexd>
        <template slot-scope="scope">
          <el-select v-if="scope.row.status === 1" v-model="scope.row.category" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span v-else>{{ scope.row.category }}</span>
        </template>
      </el-table-column>
      <el-table-column label="产品子类" align="center" width="120" fiexd>
        <template slot-scope="scope">
          <el-input v-if="scope.row.status === 1" v-model="scope.row.sub_type"></el-input>
          <span v-else>{{ scope.row.sub_type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="提交日期" align="center" width="120" fiexd>
        <template slot-scope="scope">
          <span>{{ scope.row.pub_date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button @click="handleAdd()" type="text" size="mini">新增</el-button>
          <el-button
            v-if="scope.row.status === 1"
            @click="handleSave(scope.row)"
            type="text"
            size="mini"
          >保存</el-button>
          <el-button v-else @click="handleChange(scope.row)" type="text" size="mini">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagi-nation @pagination="pagination" :getDataTotal="dataTotal"></pagi-nation>
  </el-dialog>
</template>

<script>
import {
  postProductType,
  getProductType,
  patchProductType
} from '@/api/products'
import pagiNation from '@/components/common/pagiNation'
export default {
  data() {
    return {
      options: [
        { value: 'USB', label: 'usb' },
        { value: 'POWERBANK', label: 'powerbank' },
        { value: 'ELECTRONICS', label: 'electronics' }
      ],
      productsTypeData: [],
      dataTotal: 0,
      loading: true
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    pagiNation
  },
  methods: {
    pagination(params) {
      if (!params) {
        params = { page: 1, page_size: 10 }
      }
      getProductType(params).then(res => {
        res.data.results.forEach(el => {
          el.status = 0
        })
        this.productsTypeData = res.data.results
        this.loading = false
        this.dataTotal = res.data.count
      })
    },
    handleAdd() {
      this.productsTypeData.push({
        category: '',
        sub_type: '',
        status: 1
      })
    },
    //提交新目录
    handleSubmit(row) {
      postProductType(row)
        .then(res => {
          this.$notify({
            message: '提交成功',
            type: 'success'
          })
          row.status = 0
        })
        .catch(err => {
          this.$notify.error({
            message: '提交失败'
          })
        })
    },
    handleChange(row) {
      row.status = 1
    },
    handleSave(row) {
      if (row.id) {
        patchProductType(row.id, row)
          .then(res => {
            this.$notify({
              message: '修改成功',
              type: 'success'
            })
            row.status = 0
          })
          .catch(err => {
            this.$notify.error({
              message: '修改失败'
            })
          })
      } else {
        this.handleSubmit(row)
      }
    },
    //关闭窗口处理
    handleClose(done) {
      let promise = new Promise((resolve, reject) => {
        this.$emit('closeAddproductType')
        resolve()
      }).then(res => {
        done()
      })
    }
  },
  created() {
    this.pagination()
  }
}
</script>

<style>
</style>