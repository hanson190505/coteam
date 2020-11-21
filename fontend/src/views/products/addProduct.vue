<template>
  <div class="home">
    <el-dialog
      title
      :visible.sync="addProductVisble"
      width="95%"
      :before-close="close"
      @opened="opened"
      :destroy-on-close="true"
    >
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
                  :label="item.category"
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
            <el-form-item label="MOQ">
              <el-input v-model="addProductData.moq"></el-input>
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
          <!-- <el-col :span="4">
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
          </el-col> -->
        </el-row>
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item label="logo工艺">
              <el-checkbox-group
                v-model="addProductData.imprint_methods"
                size="normal"
                @change="hanleImpintMethods"
              >
                <el-checkbox
                  v-for="item in imprintMethodsList"
                  :key="item"
                  :label="item"
                >
                  {{ item }}
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item label="logo位置">
              <el-checkbox-group
                v-model="addProductData.imprint_location"
                size="normal"
              >
                <el-checkbox
                  v-for="item in imprintLocationList"
                  :key="item"
                  :label="item"
                >
                  {{ item }}
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" :offset="0">
            <el-form-item label="容量">
              <el-checkbox-group
                v-model="addProductData.capacities"
                size="normal"
              >
                <el-checkbox
                  v-for="item in capacitiesList"
                  :key="item"
                  :label="item"
                >
                  {{ item }}
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="seo标题">
              <el-select
                v-model="addProductData.seo_title"
                filterable
                placeholder="请选择"
                @visible-change="selectWebApi"
              >
                <el-option
                  v-for="item in webApiData"
                  :key="item.seo_title"
                  :label="item.seo_title"
                  :value="item.seo_title"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="seo描述">
              <el-select
                v-model="addProductData.seo_desc"
                filterable
                placeholder="请选择"
                @visible-change="selectWebApi"
              >
                <el-option
                  v-for="item in webApiData"
                  :key="item.seo_desc"
                  :label="item.seo_desc"
                  :value="item.seo_desc"
                ></el-option>
              </el-select>
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
        capacities = models.CharField('容量', max_length=128, default='custom')
        moq = models.IntegerField('起订量', default=100) imprint_location =
        models.CharField('logo位置', max_length=64, default='custom')
        imprint_size = models.CharField('logo尺寸', max_length=128,
        default='custom') material = models.CharField('材质', max_length=64,
        default='custom')
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
            <!-- <ckeditor
            v-model="addProductData.pro_desc"
            :config="editorConfig"
            @ready="prefill"
          ></ckeditor> -->
            <div id="demo1"></div>
          </el-col>
        </el-row>
      </el-form>
      <el-button type="primary" @click="onSubmit">创建</el-button>
      <el-button type="primary" @click="handleSave">保存</el-button>
      <el-dialog
        :visible.sync="PicDialogTableVisible"
        width="95%"
        :append-to-body="true"
      >
        <image-table
          @patchImageTable="patchImageTable"
          ref="imageTable"
        ></image-table>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="selectImage">确 定</el-button>
        </div>
      </el-dialog>
    </el-dialog>
  </div>
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
import { getWebapi } from '@/api/webapi'
import wangEditor from 'wangeditor'

const imprintMethodsList = ['Silkscreen', 'Laser Engrave', 'UV', 'FCP']
// const imprintLocationList = ['Side', 'Front', 'Backend', 'custom']

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
          pro_color: '',
          imprint_methods: [],
          imprint_location: [],
          capacities: []
        }
      }
    }
  },
  data() {
    return {
      imageData: [],
      PicDialogTableVisible: false,
      webApiData: [],
      productTypeData: [],
      pic_url: [],
      pic_id: '',
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 }
      ],
      childAddColorBtn: true,
      editor: null,
      editorData: '',
      imprintMethodsList: [
        'Silkscreen',
        'Laser Engrave',
        'UV',
        'FCP',
        'custom'
      ],
      imprintLocationList: ['Side', 'Front', 'Backend', 'custom'],
      capacitiesList: [
        '128MB',
        '256MB',
        '512MB',
        '1GB',
        '2GB',
        '4GB',
        '8GB',
        '16GB',
        '32GB',
        '64GB',
        '128GB',
        '1800mAh',
        '2000mAh',
        '2200mAh',
        '2600mAh',
        '2800mAh',
        '3000mAh',
        '3200mAh',
        '4000mAh',
        '5000mAh',
        '8000mAh',
        '10000mAh',
        'custom'
      ]
    }
  },
  methods: {
    //imprint_methods
    hanleImpintMethods(value) {
      // this.addProduct.imprint_methods = this.imprintMethods.toString()
    },
    //打开dialog的之后,创建富文本对象
    opened() {
      const editor = new wangEditor('#demo1')
      // 配置 onchange 回调函数，将数据同步到 vue 中
      // editor.config.onchange = newHtml => {
      //   this.addProductData.pro_desc = newHtml
      // }
      // 创建编辑器
      editor.create()
      editor.txt.html(this.addProductData.pro_desc)
      this.editor = editor
    },
    //wangeditor
    //调用后台类别数据
    selectTest(v) {
      if (v === true) {
        getProductType().then(res => {
          // res.data.results.forEach(el => {
          //   if (el.parent_category !== null) {
          //     this.productTypeData.push(el)
          //   }
          // })
          this.productTypeData = res.data.results
        })
      }
    },
    selectWebApi(v) {
      getWebapi().then(res => {
        this.webApiData = res.data.results
      })
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
    getPicUrl(picurl) {
      this.pic_url.push(picurl.url)
      this.pic_id = picurl.id
    },
    //获取wangeditor数据
    getEditorData() {
      this.addProductData.pro_desc = this.editor.txt.html()
      let im = this.addProductData.imprint_methods
      if (im.length === 0) {
        im = 'custom'
      } else {
        this.addProductData.imprint_methods = im.toString()
      }
      let iml = this.addProductData.imprint_location
      if (iml.length === 0) {
        iml = 'custom'
      } else {
        this.addProductData.imprint_location = iml.toString()
      }
      let imCapacities = this.addProductData.capacities
      if (imCapacities.length === 0) {
        imCapacities = 'custom'
      } else {
        this.addProductData.capacities = imCapacities.toString()
      }
    },
    //提交
    onSubmit() {
      this.getEditorData()
      postProducts(this.addProductData)
        .then(res => {
          patchImage(this.pic_id, { pro_number: res.data.id }).then(res => {
            this.$notify({
              message: '创建成功',
              type: 'success'
            })
          })
        })
        .catch(error => {
          this.$notify.error({
            message: '创建失败'
          })
        })
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
      this.getEditorData()
      patchProducts(this.addProductData.id, this.addProductData)
        .then(res => {
          this.$emit('closeAddProductDialog')
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
      // this.addProductData.pro_desc = 'test'
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
        patchImage(el.id, { pro_number: id })
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
