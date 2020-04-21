<template>
  <el-dialog title :visible.sync="addProductVisble" width="95%" :before-close="close">
    <el-form :model="addProductData" ref="addProductData" label-width="70px">
      <el-row>
        <el-col :span="4">
          <el-form-item label="类别">
            <el-select
              v-model="addProductData.sub_type"
              filterable
              placeholder="请选择"
              @visible-change="selectTest"
            >
              <el-option
                v-for="item in productTypeData"
                :key="item.id"
                :label="item.category + '--' + item.sub_type"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="编号">
            <el-input v-model="addProductData.pro_number"></el-input>
            <!-- <span>{{ addProductData.pro_number }}</span> -->
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="名称">
            <el-input v-model="addProductData.pro_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="尺寸">
            <el-input v-model="addProductData.pro_size"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="重量(g)">
            <el-input v-model="addProductData.pro_weight"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="规格">
            <el-input v-model="addProductData.pro_model"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <el-form-item label="包装">
            <el-input v-model="addProductData.pro_pack"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="单价">
            <el-input v-model="addProductData.pro_price"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="新品">
            <el-select v-model="addProductData.is_new">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="热销">
            <el-select v-model="addProductData.is_hot">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="折扣">
            <el-select v-model="addProductData.is_discount">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="折扣数">
            <el-input v-model="addProductData.pro_discount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="seo标题">
            <el-input v-model="addProductData.seo_title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="seo描述">
            <el-input v-model="addProductData.seo_desc"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="颜色">
            <add-product-color
              :ProductColor="addProductData"
              @getProColor="handleSelect"
              @delProColor="delProColor"
              :addColorBtn="(childAddColorBtn = false)"
            ></add-product-color>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 添加图片 -->
      <el-row>
        <el-button type="primary" @click="selectPic">选择图片</el-button>
        <el-col :span="18">
          <upload-pic
            :number="addProductData.pro_number"
            :owner="'product'"
            @sendPicUrl="getPicUrl"
          ></upload-pic>
          <div v-for="(item, index) in pic_url" :key="index">
            <span>{{ item }}</span>
          </div>
        </el-col>
        <el-col :span="6">
          <pic-carousel :proPicUrl="pic_url" ref="picCar"></pic-carousel>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <!-- <el-form-item> -->
          <ckeditor v-model="addProductData.pro_desc" :config="editorConfig" @ready="prefill"></ckeditor>
          <!-- </el-form-item> -->
        </el-col>
      </el-row>
    </el-form>
    <el-button type="primary" @click="onSubmit">创建</el-button>
    <el-button type="primary" @click="handleSave">保存</el-button>
    <el-dialog :visible.sync="PicDialogTableVisible" width="95%" :append-to-body="true">
      <image-table @patchImageTable="patchImageTable" ref="imageTable"></image-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="selectImage">确 定</el-button>
      </div>
    </el-dialog>
  </el-dialog>
</template>
<script>
import { getProductType } from '@/api/products'
import picCarousel from '@/components/common/picCarousel'
import uploadPic from '@/components/common/uploadPic'
import richText from '@/components/ckeditor/richText'
import addProductColor from '@/components/common/addProductColor'
import imageTable from '../imageManage/imageTable'
import { postProducts, patchProducts } from '@/api/products'
import { patchImage } from '@/api/image'
export default {
  name: 'addProduct',
  components: {
    picCarousel,
    uploadPic,
    richText,
    addProductColor,
    imageTable
  },
  props: {
    addProductVisble: {
      type: Boolean,
      default: false
    },
    addProductData: {
      type: Object,
      default: function() {
        return {
          pro_color: ''
        }
      }
    }
  },
  data() {
    return {
      imageData: [],
      PicDialogTableVisible: false,
      productTypeData: [],
      // addProductData: {
      //   pro_color: '',
      //   pro_pic: ''
      // },
      pic_url: [],
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 }
      ],
      childAddColorBtn: true,
      editorConfig: {
        toolbar: [
          ['Source'],
          ['Styles', 'Format', 'Font', 'FontSize'],
          ['Bold', 'Italic'],
          ['Undo', 'Redo'],
          ['Image'],
          ['About']
        ]
      }
    }
  },
  methods: {
    //调用后台类别数据
    selectTest(v) {
      if (v === true) {
        getProductType().then(res => {
          this.productTypeData = res.data.results
          console.log(res.data)
        })
      }
    },
    //删除颜色
    delProColor(value, index) {
      let newValue = ''
      this.productsData[index].pro_color.split('|').forEach((el, i) => {
        if (!(el.indexOf(value) !== -1)) {
          if (el !== '') {
            newValue += el + '|'
          }
        }
      })
      this.productsData[index].pro_color = newValue
    },
    //获取子组件选择搜索后的颜色
    handleSelect(item) {
      if (this.addProductData.pro_color === '') {
        this.addProductData.pro_color = JSON.stringify(item) + '|'
      } else {
        this.addProductData.pro_color += JSON.stringify(item) + '|'
      }
    },
    //获取图片地址
    getPicUrl(picurl, index) {
      this.pic_url.push(picurl)
    },
    //提交
    onSubmit() {
      postProducts(this.addProductData)
        .then(res => {})
        .catch(error => {})
    },
    close() {
      this.$confirm('数据未保存,确认关闭?')
        .then(_ => {
          // let promis = new Promise((resolve, reject) => {
          this.$emit('closeAddProductDialog')
          this.pic_url = []
        })
        .catch(_ => {})
    },
    //修改后保存
    handleSave() {
      patchProducts(this.addProductData.id, this.addProductData)
        .then(res => {
          this.$notify({
            message: '提交成功',
            type: 'success'
          })
        })
        .catch(err => {
          this.$notify.error({
            message: '提交失败'
          })
        })
    },
    prefill() {
      this.addProductData.pro_desc = 'test'
    },
    //选择图片
    selectPic() {
      this.PicDialogTableVisible = true
    },
    patchImageTable(row) {
      this.imageData = row
    },
    handlePatchImageTable(id) {
      this.imageData.forEach(el => {
        patchImage({ pro_number: id }, el.id)
          .then(res => {
            this.pic_url.push(process.env.VUE_APP_API_PIC_URL + res.data.path)
            this.$refs.imageTable.clearSelect()
            this.PicDialogTableVisible = false
          })
          .catch(error => {
            this.$notify.error({
              title: '错误',
              message: '图片选中失败,请重试'
            })
          })
      })
    },
    //已选择图片后确定
    selectImage() {
      if (this.addProductData.id) {
        this.handlePatchImageTable(this.addProductData.id)
      } else {
        postProducts(this.addProductData)
          .then(res => {
            this.handlePatchImageTable(res.data.id)
          })
          .catch(error => {
            this.$notify.error({
              title: '错误',
              message: '产品提交不成功,请重试'
            })
          })
      }
    }
  }
}
</script>

<style></style>
