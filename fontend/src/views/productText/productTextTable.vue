<template>
  <div>
  <el-table :data='productTextData' v-loading="loading">
    <el-table-column prop='pub_date' label='添加日期' width='100'>
      <template slot-scope='scope'>
        <span>{{ scope.row.pub_date }}</span>
      </template>
    </el-table-column>
    <el-table-column prop='p_type' label='类别' width='100'>
      <template slot-scope='scope'>
        <el-select v-model='scope.row.p_type' placeholder clearable>
          <el-option
            v-for='item in options'
            :key='item.value'
            :label='item.label'
            :value='item.value'
          ></el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column prop='p_content' label='内容' width='500'>
      <template slot-scope='scope'>
        <el-input type='textarea' :rows='2' v-model='scope.row.p_content'></el-input>
      </template>
    </el-table-column>
    <el-table-column label='操作' fixed='right' width='120' align='center'>
      <template slot-scope='scope'>
        <el-button v-if='scope.row.is_edit === 1' @click='handleAdd(scope.row)' type='text' size='mini'
        >新增
        </el-button
        >
        <el-button v-else @click='handleSave(scope.row)' type='text' size='mini'
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
    </div>
</template>

<script>
import { getProductText, postProductText, patchProductText, getProducts } from '@/api/products'
import pagiNation from '@/components/common/pagiNation'
export default {
  name: 'productTextTable',
  components: {
    pagiNation,
  },
  data() {
    return {
      productTextData: [],
      productText:{
        is_edit: 0,
        pub_date:'',
        p_type:'',
        p_content:'',
      },
      options: [
        { value: 'description', label: 'description' },
        { value: 'custom', label: 'custom' },
        { value: 'prompt', label: 'prompt' },
        { value: 'others', label: 'others' }
      ],
      dataTotal:0,
      loading:true
    }
  },
  mounted() {
    this.pagination()
  },
  methods: {
    pagination(params) {
      //子组件backendSearch清空搜索条件时调用,设定page默认值为1
      if (!params) {
        params = { page: 1, page_size: 10 }
      }
      getProductText(params).then(res => {
        this.productsData = res.data.results
        this.loading = false
        this.dataTotal = res.data.count
      })
    },
  }
}
</script>

<style scoped>

</style>