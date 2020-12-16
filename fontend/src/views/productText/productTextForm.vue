<template>
  <el-form :model="productTextData" label-width="80px">
    <el-form-item label="文本类别">
      <el-select v-model='productTextData.p_type' clearable>
        <el-option
            v-for='item in options'
            :key='item.value'
            :label='item.label'
            :value='item.value'
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="产品类别">
      <el-select
          v-model="productTextData.p_property"
          filterable
          placeholder="请选择"
          @visible-change="selectTest"
      >
        <el-option
            v-for="item in productTypeData"
            :key="item.id"
            :label="item.parent_category.category + '-' + item.category"
            :value="item.parent_category.category + '-' + item.category"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="内容">
      <el-input type='textarea' autosize v-model='productTextData.p_content'></el-input>
    </el-form-item>
    <el-form-item>
      <el-button v-if="buttonNumber === 1" @click='handleSave' type='primary' size='mini'>创建</el-button>
      <el-button v-if="buttonNumber === 2" @click='handleUpdate' type='primary' size='mini'>保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {getProductSubType, patchProductText, postProductText} from "@/api/products";

export default {
  name: "productTextForm",
  props: {
    productTextData: {
      type: Object,
      default: null
    },
    buttonNumber:Number
  },
  data() {
    return {
      options: [
        {value: 'description', label: 'description'},
        {value: 'custom', label: 'custom'},
        {value: 'prompt', label: 'prompt'},
        {value: 'others', label: 'others'}
      ],
      productTypeData: [],
    }
  },
  methods: {
    selectTest(v) {
      if (v === true) {
        getProductSubType().then(res => {
          this.productTypeData = res.data.results
        })
      }
    },
    handleSave() {
      postProductText(this.productTextData).then(res => {
        this.$message.success({
          message: '添加成功'
        })
      }).catch(_ => {
        this.$message.error({
          message: '添加失败'
        })
      })
    },
    handleUpdate() {
      if (this.productTextData.hasOwnProperty('id')) {
        patchProductText(this.productTextData.id, this.productTextData).then(_ => {
          this.$message.success({
            message: '修改成功'
          })
        }).catch(_ => {
          this.$message.error({
            message: '修改失败'
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>