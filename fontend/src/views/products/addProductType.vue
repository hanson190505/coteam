<template>
  <el-dialog :visible.sync="visible" width="50%" :before-close="handleClose">
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
          <el-select
            v-if="scope.row.status === 1"
            v-model="scope.row.category"
            filterable
            placeholder="请选择"
            @visible-change="selectTest"
          >
            <el-option
              v-for="item in productTypeDataSelect"
              :key="item.id"
              :label="item.category"
              :value="item.id"
            ></el-option>
          </el-select>
          <span v-else>{{ scope.row.category}}</span>
        </template>
      </el-table-column>
      <el-table-column label="产品子类" align="center" width="120" fiexd>
        <template slot-scope="scope">
          <el-input v-if="scope.row.status === 1" v-model="scope.row.category"></el-input>
          <span v-else>{{ scope.row.category }}</span>
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
          <el-button @click="handleDel(scope.$index, scope.row)" type="text" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="handleAdd()" type="text" size="mini">新增</el-button>
    <pagi-nation @pagination="pagination" :getDataTotal="dataTotal"></pagi-nation>
  </el-dialog>
</template>

<script>
import {
  postProductType,
  getProductType,
  patchProductType,
} from '@/api/products'
import pagiNation from '@/components/common/pagiNation'
import { delTableRow } from '@/utils/delTablerow'
export default {
  data() {
    return {
      productsTypeData: [],
      productTypeDataSelect: [],
      dataTotal: 0,
      loading: true,
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    pagiNation,
  },
  methods: {
    //调用后台类别数据
    selectTest(v) {
      if (v === true) {
        getProductType().then((res) => {
          this.productTypeDataSelect = res.data.results
          // console.log(res.data)
        })
      }
    },
    pagination(params) {
      if (!params) {
        params = { page: 1, page_size: 10 }
      }
      getProductType(params).then((res) => {
        res.data.results.forEach((el) => {
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
        status: 1,
      })
    },
    //提交新目录
    handleSubmit(row) {
      postProductType(row)
        .then((res) => {
          this.$notify({
            message: '提交成功',
            type: 'success',
          })
          row.status = 0
        })
        .catch((err) => {
          this.$notify.error({
            message: '提交失败',
          })
        })
    },
    handleChange(row) {
      row.status = 1
    },
    handleSave(row) {
      if (row.id) {
        patchProductType(row.id, row)
          .then((res) => {
            this.$notify({
              message: '修改成功',
              type: 'success',
            })
            row.status = 0
          })
          .catch((err) => {
            this.$notify.error({
              message: '修改失败',
            })
          })
      } else {
        this.handleSubmit(row)
      }
    },
    //删除订单
    handleDel(index, row) {
      if (!row.hasOwnProperty('id')) {
        this.$confirm('数据未保存,确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.productsTypeData.splice(index, 1)
            this.$message({
              type: 'success',
              message: '删除成功!',
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除',
            })
          })
      } else {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            console.log(index)
            console.log(row)
            this.productsTypeData.splice(index, 1)
            patchProductType(row.id, { is_delete: 1 }).then((res) => {
              this.$message({
                type: 'success',
                message: '删除成功!',
              })
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '删除失败!',
            })
          })
      }
    },
    //关闭窗口处理
    handleClose(done) {
      let promise = new Promise((resolve, reject) => {
        this.$emit('closeAddproductType')
        resolve()
      }).then((res) => {
        done()
      })
    },
  },
  created() {
    this.pagination()
  },
}
</script>

<style>
</style>