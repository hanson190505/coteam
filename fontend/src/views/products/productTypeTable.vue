<template>
  <div>
    <el-dialog :visible.sync="visible" width="50%" :before-close="handleClose">
      <el-button type="primary" @click="addProductType">新增目录</el-button>
      <el-table :data="productTypeTableData" :loading="loading">
        <el-table-column prop="parent_category" label="一级类别">
          <template slot-scope='scope'>
            <span>{{ scope.row.parent_category.category }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="category" label="二级类别">
          <template slot-scope='scope'>
            <span>{{ scope.row.category }}</span>
          </template>
        </el-table-column>
      </el-table>
      <pagi-nation @pagination="pagination" :getDataTotal="dataTotal"></pagi-nation>
    </el-dialog>
    <el-dialog :visible.sync="addProductTypeVisible">
      <add-product-sub-type></add-product-sub-type>
    </el-dialog>
  </div>
</template>

<script>
import pagiNation from '@/components/common/pagiNation'
import {getProductType, getProductSubType} from "@/api/products";
import AddProductSubType from "@/views/products/addProductSubType";

export default {
  components: {
    AddProductSubType,
    pagiNation
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dataTotal: 0,
      productTypeTableData: [],
      loading: true,
      addProductTypeVisible:false
    }
  },
  methods: {
    pagination(params) {
      if (!params) {
        params = {page: 1, page_size: 10}
      }
      getProductSubType(params).then(res => {
        this.productTypeTableData = res.data.results
        this.loading = false
        this.dataTotal = res.data.count
      })
    },
    handleClose(done) {
      let promise = new Promise((resolve, reject) => {
        this.$emit('closeAddproductType')
        resolve()
      }).then(res => {
        done()
      })
    },
    addProductType(){
      this.addProductTypeVisible = true
    }
  },
  mounted() {
    this.pagination()
  }
}
</script>

<style>
</style>