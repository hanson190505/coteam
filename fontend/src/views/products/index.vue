<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-button type="primary" @click="addproductType">新增类别</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="addproductData">新增产品</el-button>
      </el-col>
    </el-row>
    <Product-table
      @checkproductData="checkproductData"
      @checkProductTopackData="checkProductTopackData"
    ></Product-table>
    <add-product
      ref="addProductComponent"
      :addProductData="productsData"
      :getProductToPacks="getProductToPacks"
      :addProductVisble="addProductVisible"
      @closeAddProductDialog="closeAddProductDialog"
    ></add-product>
    <addProduct-type
      :visible="addproductTypeVisible"
      @closeAddproductType="closeAddproductType"
    ></addProduct-type>
  </div>
</template>

<script>
import ProductTable from './ProductTable'
import addProductType from './addProductType'
import addProduct from './addProduct'
import wangEditor from 'wangeditor'
import { getPack } from '@/api/packs'
export default {
  components: {
    ProductTable,
    addProductType,
    addProduct
  },
  data() {
    return {
      productsData: {
        pro_color: '',
        imprint_methods: [],
        capacities: [],
        imprint_location: []
      },
      getProductToPacks: [],
      addproductTypeVisible: false,
      addProductVisible: false
    }
  },
  methods: {
    pagination() {},
    //新增分类
    addproductType() {
      this.addproductTypeVisible = true
    },
    //新增产品
    addproductData() {
      this.addProductVisible = true
    },
    closeAddproductType() {
      this.addproductTypeVisible = false
    },
    closeAddProductDialog() {
      this.addProductVisible = false
      this.productsData = {
        pro_color: '',
        imprint_methods: [],
        imprint_location: [],
        capacities: []
      }
    },
    checkProductTopackData(data) {
      if (data.length > 0) {
        data.forEach(el => {
          getPack(el).then(res => {
            res.data.pack_image.forEach(image => {
              image.path = process.env.VUE_APP_API_PIC_URL + image.path
            })
            this.getProductToPacks.push(res.data)
          })
        })
      }
    },
    checkproductData(data) {
      data.pro_image.forEach(el => {
        this.$refs.addProductComponent.getPicUrl({
          url: process.env.VUE_APP_API_PIC_URL + el
        })
      })
      this.addProductVisible = true
      this.productsData = data
    }
  }
}
</script>

<style scoped></style>
