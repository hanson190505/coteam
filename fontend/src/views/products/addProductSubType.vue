<template>
  <el-form :model="ProductSubTypeData" ref="ProductSubTypeData" label-position=left label-width="80px">
    <el-form-item label="一级类别">
      <el-select
              v-model="ProductSubTypeData.parent_category"
              filterable
              placeholder="请选择"
              clearable
              @visible-change="getParentType"
          >
            <el-option
                v-for="item in productTypeData"
                :key="item.id"
                :label="item.category"
                :value="item.id"
            ></el-option>
          </el-select>
      <small>请选择一级目录,如不存在,请新增</small>
      <el-input v-model="parentCategoryData.category" :disabled="disabled"></el-input>
      <el-button type="primary" size="mini" round @click="addParentCategory">新增一级目录</el-button>
      <el-button type="primary" size="mini" round :disabled="disabled" @click="postParentCategory">保存</el-button>
    </el-form-item>
    <el-form-item label="二级类别">
      <el-input v-model="ProductSubTypeData.category"></el-input>
    </el-form-item>
      <el-form-item>
    <el-button type="primary" @click="onSubmit">创建二级目录</el-button>
    <el-button type="danger" @click="resetForm">取消</el-button>
  </el-form-item>
  </el-form>
</template>

<script>
import {
  getProductType,
    postProductSubType,
    postProductType
} from '@/api/products'
export default {
  name: "addProductSubType",
  data(){
    return{
      ProductSubTypeData:{},
      productTypeData:[],
      disabled:true,
      parentCategoryData:{}
    }
  },
  methods: {
    getParentType(){
      getProductType().then(res=>{
        this.productTypeData = res.data.results
      })
    },
    addParentCategory(){
      this.disabled = false
    },
    postParentCategory(){
      postProductType(this.parentCategoryData).then(res => {
        this.$message.success('提交成功')
      }).catch(err=>{
        this.$message.error({
          message:'提交失败'
        })
      })
    },
    onSubmit(){
      postProductSubType(this.ProductSubTypeData).then(res=>{
        this.$message.success('提交成功')
      }).catch(_ =>{
        this.$message.error('提交失败')
      })
    },
    resetForm(){
      this.ProductSubTypeData = {}
    },
    handleClose(){
      this.disabled = false
    }
  }
}
</script>

<style scoped>

</style>