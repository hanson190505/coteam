<template>
  <div>
    <el-button type='primary' @click='addProductText'>新增</el-button>
    <el-table ref='productTextTable' :data='productTextData' v-loading="loading"
              @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column prop='pub_date' label='添加日期' width='100'>
        <template slot-scope='scope'>
          <span>{{ scope.row.pub_date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop='p_type' label='文本类别' width='120'>
        <template slot-scope='scope'>
          <el-select v-if='scope.row.is_edit === 0' v-model='scope.row.p_type' placeholder clearable>
            <el-option
                v-for='item in options'
                :key='item.value'
                :label='item.label'
                :value='item.value'
            ></el-option>
          </el-select>
          <span v-else>{{ scope.row.p_type }}</span>
        </template>
      </el-table-column>
      <el-table-column label='产品类别' width='200'>
        <template slot-scope='scope'>
          <el-select
              v-model="scope.row.p_property"
              filterable
              placeholder="请选择"
              @visible-change="selectTest"
              v-if='scope.row.is_edit === 0'
          >
            <el-option
                v-for="item in productTypeData"
                :key="item.id"
                :label="item.parent_category.category + '-' + item.category"
                :value="item.parent_category.category + '-' + item.category"
            ></el-option>
          </el-select>
          <span v-else>{{ scope.row.p_property }}</span>
        </template>
      </el-table-column>
      <el-table-column prop='p_content' label='内容' width='600'>
        <template slot-scope='scope'>
          <el-input type='textarea' autosize v-model='scope.row.p_content'></el-input>
        </template>
      </el-table-column>
      <el-table-column label='操作' fixed='right' width='120' align='center'>
        <template slot-scope='scope'>
          <el-button v-if="scope.row.is_edit === 0" @click='handleSave(scope.row)' type='text' size='mini'
          >保存
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
  </div>
</template>

<script>
import {getProductText, postProductText, getProductType, getProductSubType} from '@/api/products'
import pagiNation from '@/components/common/pagiNation'

export default {
  name: 'productTextTable',
  components: {
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
    }
  },
  mounted() {
    this.pagination()
  },
  methods: {
    selectTest(v) {
      if (v === true) {
        getProductSubType().then(res => {
          // res.data.results.forEach(el => {
          //   if (el.parent_category !== null) {
          //     this.productTypeData.push(el)
          //   }
          // })
          console.log(res.data.results)
          this.productTypeData = res.data.results
        })
      }
    },
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
      this.productTextData.push({
        is_edit: 0,
        pub_date: '',
        p_type: '',
        p_content: '',
      })
    },
    handleSave(row) {
      if (!row.hasOwnProperty('id')) {
        postProductText(row).then(res => {
          row.is_edit = 1
          this.$message.success({
            message: '添加成功'
          })
        }).catch(_ => {
          this.$message.error({
            message: '添加失败'
          })
        })
      } else {
        this.$message.success({
          message: '请勿重复提交!'
        })
      }
    },
    handleDel(index, row) {
      this.productTextData.splice(index, 1)
    },
    handleSelectionChange(val) {
      this.selected = val
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