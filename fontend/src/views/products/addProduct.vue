<template>
  <div class="home">
    <el-dialog
        title
        :visible.sync="addProductVisble"
        width="95%"
        :before-close="close"
        :destroy-on-close="true"
    >
      <el-form :model="addProductData" ref="addProductData" label-width="70px">
        <el-row>
          <el-col :span="4">
            <el-form-item label="一级目录">
              <span>{{ addProductData.one_category }}</span>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="二级目录">
              <span>{{ addProductData.tow_category }}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item label="类目">
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
            <el-form-item label="材质">
              <el-select v-model="addProductData.material">
                <el-option
                    v-for="item in materialOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="包装">
              <el-select v-model="addProductData.pro_pack">
                <el-option
                    v-for="item in PackOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
              </el-select>
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
          <el-col :span="4">
            <el-form-item label="logo尺寸">
              <el-input v-model="addProductData.imprint_size"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item label="logo工艺">
              <el-checkbox-group
                  v-model="addProductData.imprint_methods"
                  size="normal"
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
              <el-input v-model="addProductData.seo_title" placeholder="placeholder"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="seo描述">
              <el-input type="textarea" placeholder="placeholder" v-model="addProductData.seo_desc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--        产品详情-->
        <el-row>
          <el-col>
            <el-form-item label='产品描述'>
              <el-button type='primary' @click='selectProductTextTable'>选择</el-button>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-input type="textarea" v-model="addProductData.description"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label='定制说明'>
              <el-button type='primary' @click='selectCustom'>选择</el-button>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-input type="textarea" v-model="addProductData.custom"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label='补充说明'>
              <el-button type='primary' @click='selectPrompt'>选择</el-button>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-input type="textarea" v-model="addProductData.prompt"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!--        添加颜色-->
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
        <!-- 添加包装 -->
        <postproduct-to-pack :products="addProductData" :getProductToPacks="getProductToPacks"></postproduct-to-pack>
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
      <el-dialog
          :visible.sync='ProductTextTabledialogVisible'
          width='90%'
          :append-to-body="true"
          :before-close="ProductTextTableDialogClose"
      >
        <product-text-table ref='ProductTextSelectTable' :ProductTextSelectedShow='true'
                            @ProductTextSelected='ProductTextSelected'></product-text-table>
      </el-dialog>
    </el-dialog>
  </div>
</template>
<script>
import {getProductType, getProductSubType} from '@/api/products'
import picCarousel from '@/components/common/picCarousel'
import uploadPic from '@/components/common/uploadPic'
import addProductColor from '@/components/common/addProductColor'
import imageTable from '../imageManage/imageTable'
import {postProducts, patchProducts} from '@/api/products'
import {patchImage} from '@/api/image'
import PostproductToPack from './postproductToPack.vue'
import ProductTextTable from '@/views/productText/productTextTable'

const imprintMethodsList = ['Silkscreen', 'Laser Engrave', 'UV', 'FCP']

export default {
  name: 'addProduct',
  components: {
    ProductTextTable,
    picCarousel,
    uploadPic,
    addProductColor,
    imageTable,
    PostproductToPack,
  },
  props: {
    addProductVisble: {
      type: Boolean,
      default: false
    },
    addProductData: {
      type: Object,
      default: function () {
        return {
          pro_color: '',
          imprint_methods: [],
          imprint_location: [],
          capacities: []
        }
      }
    },
    getProductToPacks: Array
  },
  data() {
    return {
      imageData: [],
      PicDialogTableVisible: false,
      ProductTextTabledialogVisible: false,
      productTypeData: [],
      pic_url: [],
      pic_id: '',
      options: [
        {label: '是', value: 1},
        {label: '否', value: 0}
      ],
      materialOptions: [
        {label: 'Plastic', value: 'Plastic'},
        {label: 'Aluminum', value: 'Aluminum'},
        {label: 'Aluminum&Plastic', value: 'Aluminum&Plastic'},
        {label: 'custom', value: 'custom'}
      ],
      PackOptions: [
        {label: 'Polybag', value: 'Polybag'},
        {label: 'Aluminum', value: 'Aluminum'},
        {label: 'PP Case', value: 'PP Case'},
        {label: 'Tin Box', value: 'Tin Box'},
        {label: 'Custom', value: 'Custom'},
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
      ],
      //判定选择productText的是哪个组件.1--description 2--custom 3--prompt
      whoSelecting: 0
    }
  },
  methods: {
    selectProductTextTable() {
      this.ProductTextTabledialogVisible = true
      this.whoSelecting = 1
    },
    selectCustom() {
      this.ProductTextTabledialogVisible = true
      this.whoSelecting = 2
    },
    selectPrompt() {
      this.ProductTextTabledialogVisible = true
      this.whoSelecting = 3
    },
    //调用后台类别数据
    selectTest(v) {
      if (v === true) {
        getProductSubType().then(res => {
          this.productTypeData = res.data.results
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
    getPicUrl(picurl) {
      this.pic_url.push(picurl.url)
      this.pic_id = picurl.id
    },
    //获取wangeditor数据
    getEditorData() {
      // this.addProductData.pro_desc = this.editor.txt.html()
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
            if (this.pic_id !== null) {
              patchImage(this.pic_id, {pro_number: res.data.id}).then(res => {
                this.$notify({
                  message: '创建成功',
                  type: 'success'
                })
              })
            }
            this.$message.success('创建成功')
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
            this.$emit('closeAddProductDialog')
            this.pic_url = []
          })
          .catch(_ => {
          })
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
        patchImage(el.id, {pro_number: id})
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
    },
    ProductTextSelected(data) {
      this.ProductTextTabledialogVisible = false
      if (data.length > 0) {
        switch (this.whoSelecting) {
          case 1:
            for (let i = 0; i <= data.length; i++) {
              this.addProductData.description += data[i].p_content
              if (i === data.length - 1) break;
              this.addProductData.description += '/'
            }
            break
          case 2:
            for (let i = 0; i <= data.length; i++) {
              this.addProductData.custom += data[i].p_content
              if (i === data.length - 1) break;
              this.addProductData.custom += '/'
            }
            break
          case 3:
            for (let i = 0; i <= data.length; i++) {
              this.addProductData.prompt += data[i].p_content
              if (i === data.length - 1) break;
              this.addProductData.prompt += '/'
            }
            break
        }
      }
    },
    ProductTextTableDialogClose(done) {
      this.$confirm('数据未确认,是否关闭？')
          .then(_ => {
            this.$refs.ProductTextSelectTable.removeSelected()
            done();
          })
          .catch(_ => {
          });
    }
  }
}
</script>

<style></style>
