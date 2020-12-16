<template>
  <div>
    <el-button type='primary' @click='addProductText'>新增</el-button>
    <el-table ref='productTextTable' :data='productTextData' v-loading="loading"
              border
              stripe
              @select="handleSelect"
              @select-all="handleSelect">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column label='添加日期' width='100'>
        <template slot-scope='scope'>
          <span>{{ scope.row.pub_date }}</span>
        </template>
      </el-table-column>
      <el-table-column label='文本类别' width='120'>
        <template slot-scope='scope'>
          <span>{{ scope.row.p_type }}</span>
        </template>
      </el-table-column>
      <el-table-column label='产品类别' width='200'>
        <template slot-scope='scope'>
          <span>{{ scope.row.p_property }}</span>
        </template>
      </el-table-column>
      <el-table-column label='内容' width='600'>
        <template slot-scope='scope'>
          <el-input type='textarea' autosize v-model='scope.row.p_content'></el-input>
        </template>
      </el-table-column>
      <el-table-column label='操作' fixed='right' width='120' align='center'>
        <template slot-scope='scope'>
          <el-button v-if="scope.row.is_edit !== 0" @click='handleChange(scope.row)' type='text' size='mini'
          >修改
          </el-button
          >
          <el-button
              @click='handleDel(scope.$index, scope.row)'
              type='text'
              size='mini'
          >删除
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <pagi-nation
        @pagination="pagination"
        :getDataTotal="dataTotal"
    ></pagi-nation>
    <el-button type='primary' @click='ProductTextSelected' v-if='ProductTextSelectedShow'>确 定</el-button>
    <el-dialog :visible.sync="dialogVisible">
      <product-text-form :productTextData="productTextDataRow" :buttonNumber="buttonNumber"></product-text-form>
    </el-dialog>
  </div>
</template>

<script>
import {getProductText, postProductText, getProductType, getProductSubType} from '@/api/products'
import pagiNation from '@/components/common/pagiNation'
import ProductTextForm from "@/views/productText/productTextForm";

export default {
  name: 'productTextTable',
  components: {
    ProductTextForm,
    pagiNation,
  },
  props: {
    ProductTextSelectedShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      productTextData: [],
      productTextDataRow:{},
      productText: {
        is_edit: 0,
        pub_date: '',
        p_type: '',
        p_content: '',
      },
      options: [
        {value: 'description', label: 'description'},
        {value: 'custom', label: 'custom'},
        {value: 'prompt', label: 'prompt'},
        {value: 'others', label: 'others'}
      ],
      dataTotal: 0,
      loading: true,
      productTypeData: [],
      selected: [],
      dialogVisible:false,
      buttonNumber:0
    }
  },
  mounted() {
    this.pagination()
  },
  methods: {
    pagination(params) {
      //子组件backendSearch清空搜索条件时调用,设定page默认值为1
      if (!params) {
        params = {page: 1, page_size: 10}
      }
      getProductText(params).then(res => {
        this.productTextData = res.data.results
        this.loading = false
        this.dataTotal = res.data.count
      })
    },
    addProductText() {
      this.productTextDataRow = {}
      this.buttonNumber = 1
      this.dialogVisible = true
    },
    handleChange(row) {
      this.productTextDataRow = row
      this.buttonNumber = 2
      this.dialogVisible = true
    },
    handleDel(index, row) {
      this.productTextData.splice(index, 1)
    },
    handleSelect(row) {
      this.selected = row
    },
    ProductTextSelected() {
      this.$emit('ProductTextSelected', this.selected)
      this.removeSelected()
    },
    removeSelected() {
      this.$refs.productTextTable.clearSelection()
    }
  }
}
</script>

<style scoped>

</style>