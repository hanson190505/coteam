<template>
  <div>
    <el-row>
      <el-col :span="4">
        <backend-searchVue
            @parentMethod="pagination"
            :keyWords="keyWords"
        ></backend-searchVue>
      </el-col>
      <el-col :span="8">
        <date-search @dateSearchDate="dateSearchDate"></date-search>
      </el-col>
      <el-col :span="4">
        <upload-pic @sendPicUrl="getPicUrl"></upload-pic>
      </el-col>
    </el-row>
    <el-table
        :data="imageData"
        border
        stripe
        @select="handleSelect"
        @select-all="handleSelect"
        ref="imageTableData"
    >
      <el-table-column
          type="selection"
          width="55"
          align="center"
      ></el-table-column>
      <el-table-column label="所属产品" align="center" prop="pro_number" width="120" :filters="filterProductList"
                       :filter-method="filterHandle">
        <template slot-scope="scope">
          <el-select
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.pro_number"
              filterable
              placeholder="请选择"
              @visible-change="selectTest"
          >
            <el-option
                v-for="item in productDataSelect"
                :key="item.id"
                :label="item.pro_number"
                :value="item.id"
            ></el-option>
          </el-select>
          <span v-else>{{ scope.row.pro_number }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属包装" align="center" width="120" prop="pack_number" :filters="filterPackList"
                       :filter-method="filterHandle">
        <template slot-scope="scope">
          <el-select
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.pack_number"
              filterable
              placeholder="请选择"
              @visible-change="packNumberSelect"
          >
            <el-option
                v-for="item in packDataSelect"
                :key="item.id"
                :label="item.pack_number"
                :value="item.id"
            ></el-option>
          </el-select>
          <span v-else>{{ scope.row.pack_number }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属订单" align="center" width="120" prop="order_number" :filters="filterOrderList"
                       :filter-method="filterHandle">
        <template slot-scope="scope">
          <el-select
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.order_number"
              filterable
              placeholder="请选择"
              @visible-change="orderNumberSelect"
          >
            <el-option
                v-for="item in orderDataSelect"
                :key="item.id"
                :label="item.order_number"
                :value="item.id"
            ></el-option>
          </el-select>
          <span v-else>{{ scope.row.order_number }}</span>
        </template>
      </el-table-column>
      <el-table-column label="上传日期" align="center" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.up_date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属" align="center" width="80">
        <template slot-scope="scope">
          <el-input
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.owner"
          ></el-input>
          <span v-else>{{ scope.row.owner }}</span>
        </template>
      </el-table-column>
      <el-table-column label="首页展示" align="center" width="80">
        <template slot-scope="scope">
          <el-input
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.is_home"
          ></el-input>
          <span v-else>{{ scope.row.is_home }}</span>
        </template>
      </el-table-column>
      <el-table-column label="首页顺序" align="center" width="80">
        <template slot-scope="scope">
          <el-input
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.home_index"
          ></el-input>
          <span v-else>{{ scope.row.home_index }}</span>
        </template>
      </el-table-column>
      <el-table-column label="cover" align="center" width="70">
        <template slot-scope="scope">
          <el-input
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.is_cover"
          ></el-input>
          <span v-else>{{ scope.row.is_cover }}</span>
        </template>
      </el-table-column>
      <el-table-column label="banner" align="center" width="70">
        <template slot-scope="scope">
          <el-input
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.is_banner"
          ></el-input>
          <span v-else>{{ scope.row.is_banner }}</span>
        </template>
      </el-table-column>
      <el-table-column label="alt" align="center" width="150">
        <template slot-scope="scope">
          <el-input
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.image_alt"
          ></el-input>
          <span v-else>{{ scope.row.image_alt }}</span>
        </template>
      </el-table-column>
      <el-table-column label="banner_title" align="center" width="200">
        <template slot-scope="scope">
          <el-input
              autosize
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.banner_title"
          ></el-input>
          <span v-else>{{ scope.row.banner_title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="banner_desc" align="center" width="200">
        <template slot-scope="scope">
          <el-input
              autosize
              v-if="scope.row.is_edit === 1"
              v-model="scope.row.banner_desc"
          ></el-input>
          <span v-else>{{ scope.row.banner_desc }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否占用" align="center" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.is_used }}</span>
        </template>
      </el-table-column>
      <el-table-column label="图片" align="center" width="300" fiexd>
        <template slot-scope="scope">
          <img
              :src="baseurl + scope.row.path"
              :alt="scope.row.path"
              class="image"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="120" align="center">
        <template slot-scope="scope">
          <el-button @click="handleDel(scope.row)" type="text" size="mini"
          >删除
          </el-button
          >
          <el-button
              @click="handleChange(scope.row)"
              type="text"
              size="mini"
              v-show="scope.row.is_edit === 0"
          >修改
          </el-button
          >
          <el-button
              @click="handleSave(scope.row)"
              type="text"
              size="mini"
              v-show="scope.row.is_edit === 1"
          >保存
          </el-button
          >
          <el-button
              @click="handleCancel(scope.row)"
              type="text"
              size="mini"
              v-show="scope.row.is_edit === 1"
          >取消
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
import pagiNation from '@/components/common/pagiNation'
import dateSearch from '@/components/common/dateSearch'
import backendSearchVue from '@/components/common/backendSearch.vue'
import uploadPic from '@/components/common/uploadPic'
import {getImages, delImage, patchImage} from '@/api/image'
import {getProducts} from '@/api/products'
import {getPacks} from '@/api/packs'
import {getOrderList} from '@/api/order'
import { uniqueArrObject } from '@/utils'

export default {
  name: 'imageTable',
  components: {
    pagiNation,
    backendSearchVue,
    dateSearch,
    uploadPic
  },
  data() {
    return {
      imageData: [],
      dataTotal: 0,
      baseurl: process.env.VUE_APP_API_PIC_URL,
      productDataSelect: [],
      packDataSelect: [],
      orderDataSelect: [],
      keyWords: ['owner', 'is_banner', 'image_alt'],
      tempData: {},
      filterProductList: [],
      filterPackList: [],
      filterOrderList: [],
    }
  },
  methods: {
    //调用后台类别数据
    selectTest(v) {
      if (v === true) {
        getProducts().then(res => {
          this.productDataSelect = res.data.results
        })
      }
    },
    packNumberSelect(v) {
      if (v === true) {
        getPacks().then(res => {
          this.packDataSelect = res.data.results
        })
      }
    },
    orderNumberSelect(v) {
      if (v === true) {
        getOrderList().then(res => {
          this.orderDataSelect = res.data.results
        })
      }
    },
    //选中处理
    handleSelect(row) {
      this.$emit('patchImageTable', row)
    },
    //日期搜索
    /**
     * @description: 按日期搜索
     * @param value
     */
    dateSearchDate(value) {
      if (!value) {
        this.pagination()
      } else {
        this.pagination({
          start_date: value[0],
          end_date: value[1],
          argument: 'date_search'
        })
      }
    },
    pagination(params) {
      //子组件backendSearch清空搜索条件时调用,设定page默认值为1
      if (!params) {
        params = {page: 1, page_size: 10}
      }
      getImages(params).then(res => {
        let tmpProductList = []
        let tmpPackList = []
        let tmpOrderList = []
        this.loading = false
        this.imageData = res.data.results
        this.imageData.forEach(image => {
          tmpProductList.push(image.pro_number)
          tmpPackList.push(image.pack_number)
          tmpOrderList.push(image.order_number)
        })
        this.dataTotal = res.data.count
        this.filterProductList = uniqueArrObject(tmpProductList)
        this.filterPackList = uniqueArrObject(tmpPackList)
        this.filterOrderList = uniqueArrObject(tmpOrderList)
      })
    },
    handleDel(row) {
      delImage(row.id).then(res => {
        this.pagination()
      })
    },
    handleChange(row) {
      row.is_edit = 1
      this.tempData = row
    },
    handleSave(row) {
      row.is_edit = 0
      patchImage(row.id, row).then(res => {
        this.pagination()
      })
    },
    handleCancel(row) {
      row.is_edit = 0
      this.row = this.tempData
    },
    clearSelect() {
      this.$refs.imageTableData.clearSelection()
    },
    //获取上传图片组件发送的图片网址
    getPicUrl(picurl) {
      this.$message('图片上传成功!')
    },
    filterHandle(value, row, column) {
      let property = column['property']
      return row[property] === value
    }
  },
  created() {
    this.pagination()
  }
}
</script>

<style>
.image {
  width: 300px;
}
</style>
