<template>
  <div class="order-detail">
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/orders' }">订单管理</el-breadcrumb-item>
        <el-breadcrumb-item>订单明细</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form ref="form" :model="orderdetail" label-width="80px" size="mini" inline-message>
        <el-row>
          <el-col :span="6">
            <el-form-item label="订单编号" prop="order_number">
              <el-input v-model="orderdetail.order_number" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客户名称">
              <el-select
                v-model="orderdetail.customer.lite_name"
                filterable
                placeholder="请选择"
                @visible-change="selectTest"
                :disabled="formdisabl"
              >
                <el-option
                  v-for="item in customerData"
                  :key="item.lite_name"
                  :label="item.lite_name"
                  :value="item.lite_name"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="汇率" prop="ex_rate">
              <el-input v-model="orderdetail.ex_rate" :disabled="formdisabl"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="完成状态" prop="is_done">
              <el-select size="mini" v-model="orderdetail.is_done" clearable :disabled="formdisabl">
                <el-option
                  v-for="item in Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="下单日期">
              <!-- <el-input v-model="orderdetail.order_date"></el-input> -->
              <el-date-picker
                v-model="orderdetail.order_date"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
                :disabled="formdisabl"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单交期">
              <!-- <el-input v-model="orderdetail.deliver_date"></el-input> -->
              <el-date-picker
                v-model="orderdetail.deliver_date"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
                :disabled="formdisabl"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="金额($)">
              <!-- <el-input v-model="orderdetail.order_amount"></el-input> -->
              <el-input v-model="orderdetail.order_amount" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="金额(¥)">
              <!-- <el-input v-model="orderdetail.order_amount"></el-input> -->
              <el-input v-model="rmbOrderAmount" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="出货地址">
              <!-- <el-input
                v-model="orderdetail.ship_addr"
                :disabled="formdisabl"
              ></el-input>-->
              <el-select
                v-model="orderdetail.ship_addr"
                filterable
                placeholder="请选择"
                @visible-change="selectShipAddr"
                :disabled="formdisabl"
              >
                <el-option
                  v-for="item in customerAddr"
                  :key="item.addr"
                  :label="item.addr"
                  :value="item.addr"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="备注">
              <el-input v-model="orderdetail.text" :disabled="formdisabl"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 模具 -->
        <el-row>
          <el-col :span="4">
            <add-model @hideOrderTable="dialogStatus2" @getNewModelData="getNewModel"></add-model>
          </el-col>
          <el-col :span="4">
            <a-button type="primary" @click="selectModel">select model</a-button>
          </el-col>
        </el-row>
        <order-model
          :modelData="newModelData"
          @deleteNewModelRow="deleteModel"
          @setSalePrice="getSalePrice"
          :checkCulumns="orderModelColumn"
        ></order-model>
        <add-order-model
          :visible="addOrderModelVisible"
          :addOrderModelData="addOrderModelData"
          @pushModelData="pushModelData"
          @delNewAddModel="delNewAddModel"
        ></add-order-model>
        <!-- 图片功能区 -->
        <el-row>
          <el-col :span="18">
            <upload-pic :number="orderdetail.order_number" :owner="'order'" @sendPicUrl="getPicUrl"></upload-pic>
            <div v-for="(item, index) in orderdetail.order_image" :key="index">
              <span>{{ item }}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <pic-carousel :proPicUrl="picUrl" ref="picCar"></pic-carousel>
            <!-- <div class="order-img">
              <img
                :src="this.orderdetail.order_pic"
                @click="imgLook"
                class="orderImg"
              />
            </div>-->
          </el-col>
        </el-row>
      </el-form>
      <el-button type="primary" @click="editOrderDetail" v-show="editOrder">修改订单</el-button>
      <el-button type="warning" @click="saveOrderDetail" v-show="saveOrder">保存订单</el-button>
      <el-button type="primary" @click="addSubOrderRow">新增明细</el-button>
      <el-button type="primary" @click="purchaseDetail">采购详情</el-button>
      <el-button type="primary" @click="shipDetail">出货详情</el-button>

      <el-table :data="suborderdetail" style="width: 99.9%" show-summary highlight-current-row>
        <!-- <el-table-column type="selection" width="40"></el-table-column> -->
        <el-table-column label="产品名称" width="150" fixed>
          <template slot-scope="scope">
            <el-input v-if="scope.row.status" size="mini" v-model="scope.row.pro_name"></el-input>
            <span v-else>{{ scope.row.pro_name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="类型" width="100">
          <template slot-scope="scope">
            <!-- <el-input v-if="scope.row.status" size="mini" v-model="scope.row.pro_item"></el-input> -->
            <el-select
              v-if="scope.row.status"
              size="mini"
              v-model="scope.row.pro_item"
              clearable
              placeholder="请选择"
            >
              <el-option
                v-for="item in proOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <span v-else>{{ proOptions[scope.row.pro_item - 1].label }}</span>
          </template>
        </el-table-column>
        <el-table-column label="产品尺寸" width="120" fixed>
          <template slot-scope="scope">
            <el-input v-if="scope.row.status" size="mini" v-model="scope.row.pro_size"></el-input>
            <span v-else>{{ scope.row.pro_size }}</span>
          </template>
        </el-table-column>
        <el-table-column label="产品颜色" width="200" fixed>
          <template slot-scope="scope">
            <add-product-color
              :parentProColor="scope"
              @getProColor="handleSelect"
              @delProColor="delProColor"
              :addColorBtn="childAddColorBtn"
            ></add-product-color>
          </template>
        </el-table-column>
        <el-table-column label="产品包装" width="120">
          <template slot-scope="scope">
            <el-input v-if="scope.row.status" size="mini" v-model="scope.row.pro_pack"></el-input>
            <span v-else>{{ scope.row.pro_pack }}</span>
          </template>
        </el-table-column>
        <el-table-column label="描述" width="150">
          <template slot-scope="scope">
            <el-input v-if="scope.row.status" size="mini" v-model="scope.row.pro_desc"></el-input>
            <span v-else>{{ scope.row.pro_desc }}</span>
          </template>
        </el-table-column>
        <el-table-column label="数量" prop="pro_qt" width="120">
          <template slot-scope="scope">
            <el-input v-if="scope.row.status" size="mini" v-model="scope.row.pro_qt"></el-input>
            <span v-else>{{ scope.row.pro_qt }}</span>
          </template>
        </el-table-column>
        <el-table-column label="单价($)" width="100">
          <template slot-scope="scope">
            <el-input
              v-if="scope.row.status"
              size="mini"
              v-model="scope.row.pro_price"
              @blur="subAmount(scope.row)"
            ></el-input>
            <span v-else>{{ scope.row.pro_price }}</span>
          </template>
        </el-table-column>
        <el-table-column label="重量(g)" width="80">
          <template slot-scope="scope">
            <el-input v-if="scope.row.status" size="mini" v-model="scope.row.pro_weight"></el-input>
            <span v-else>{{ scope.row.pro_weight }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column label="汇率" width="80">
          <template slot-scope="scope">
            <el-input v-if="scope.row.status" size="mini" v-model="scope.row.sub_ex_rate"></el-input>
            <span v-else>{{ scope.row.sub_ex_rate }}</span>
          </template>
        </el-table-column>-->
        <el-table-column label="金额($)" prop="sub_amount" width="120">
          <template slot-scope="scope">
            <el-input v-if="scope.row.status" size="mini" v-model="scope.row.sub_amount"></el-input>
            <span v-else>{{ scope.row.sub_amount | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120" fixed="right">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="editSubOrderRow(scope.$index, scope.row)"
              v-show="editOrder"
            >修改</el-button>
            <el-button size="mini" type="text" @click="delSubOrderRow(scope.$index, scope.row)">删除</el-button>
            <!-- <el-button type="text" @click="addSubOrderRow(scope.row)">新增</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <!-- 选择现有模具 -->
      <a-drawer
        :visible="visible"
        width="90%"
        height="50%"
        placement="top"
        :body-style="{ paddingBottom: '80px' }"
        @close="onClose"
      >
        <model-table ref="modelref" :selectingShow="true" @getNewModelData="getNewModel"></model-table>
        <!-- <order-tomodel :selectingShow="true" @getNewModelData="getNewModel"></order-tomodel> -->
      </a-drawer>
      <el-button type="primary" @click="firstSaveSuborder">保存订单明细修改</el-button>
      <el-dialog :visible.sync="imgdialogVisible" width="96%">
        <div>
          <img :src="orderdetail.order_pic" width="99%" />
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { getCustomer, getCustomerAddr } from '@/api/customer'
import { getSubToken } from '@/api/token'
import {
  getSubOrder,
  patchSubOrder,
  postSubOrder,
  getOrder,
  getSubOrderList,
  patchOrder,
  getOrderToModel,
  postOrderToModel,
  patchOrderToModel
} from '@/api/order'
import addProductColor from '@/components/common/addProductColor'
import uploadPic from '@/components/common/uploadPic'
import orderModel from '../orderModel/orderModel'
import addModel from '../orderModel/addModel'
import orderTomodel from '../orderModel/orderTomodel'
import selectModel from '../orderModel/selectModel'
import modelTable from '../orderModel/modelTable'
import addOrderModel from '../orderModel/addOrderModel'
import picCarousel from '../../components/common/picCarousel'
export default {
  name: 'OrderDetail',
  components: {
    addProductColor,
    uploadPic,
    orderModel,
    addModel,
    orderTomodel,
    selectModel,
    modelTable,
    addOrderModel,
    picCarousel
  },
  data() {
    return {
      orderModelColumn: 1,
      newModelData: [],
      submitModelData: [],
      customerAddr: [],
      childAddColorBtn: true,
      btn: 'btn',
      //控制订单表状态
      formdisabl: true,
      //绑定form表单的对象不能为空,必须先指定字段,然后从服务器拿值
      orderdetail: {
        order_number: '',
        customer: '',
        order_date: '',
        deliver_date: '',
        ex_rate: 0,
        order_amount: 0,
        ship_addr: '',
        text: '',
        order_pic: ''
      },
      actionUrl: process.env.VUE_APP_ACTION_URL,
      //订单表合计金额(人民币)
      rmbOrderAmount: 0,
      suborderdetail: [],
      customerData: [],
      //模具选择表
      visible: false,
      //增加模具
      addOrderModelVisible: false,
      addOrderModelData: [],
      //控制订单明细表修改,保存按钮显示及功能
      editSubOrder: true,
      saveSubOrder: false,
      //控制修改,保存订单按钮
      editOrder: true,
      saveOrder: false,
      proOptions: [
        { value: 1, label: '硅胶' },
        { value: 2, label: '五金' },
        { value: 3, label: 'USB' },
        { value: 4, label: '移动电源' },
        { value: 5, label: '其他' }
      ],
      Options: [
        { value: 0, label: '正常' },
        { value: 1, label: '紧急' }
      ],
      fileList: [],
      picUrl: [],
      //放大图片弹出框
      getPicUrl(pirurl) {},
      imgdialogVisible: false,
      //图片上传附加数据
      uploadData: {
        token: window.sessionStorage.getItem('token')
      }
    }
  },
  computed: {
    // picUrl() {
    //   return this.suborderdetail.order_image.map(item => {
    //     return process.env.VUE_APP_API_PIC_URL + item
    //   })
    // }
  },
  methods: {
    //客户名称选择时,调用后台客户数据
    selectTest(v) {
      if (v === true) {
        getCustomer().then(res => {
          this.customerData = res.data
        })
      }
    },
    //编辑订单
    editOrderDetail() {
      this.formdisabl = false
      this.editOrder = false
      this.saveOrder = true
      this.uploadbtnstatus = false
    },
    //图片处理相关
    handleRemove() {},
    beforeRemove() {},
    uploadSuccess(res) {
      this.uploadbtnstatus = true
      this.orderdetail.order_pic = process.env.VUE_APP_API_PIC_URL + res.file
    },
    handlebeforeupload() {},
    //查看大图
    imgLook() {
      this.imgdialogVisible = true
    },
    //保存修改订单
    saveOrderDetail() {
      this.formdisabl = true
      this.editOrder = true
      this.saveOrder = false
      this.beforeSubmitOrder()
      patchOrder(this.orderdetail.order_number, '', this.orderdetail)
        .then(res => {
          this.$message.success('订单修改成功')
          this.submitModelData.forEach(element => {
            if (element.sale_price) {
              if (!element.hasOwnProperty('id')) {
                postOrderToModel(element)
                  .then(res => {
                    this.$message.success('新增模具成功')
                    this.getData()
                  })
                  .catch(err => {})
              } else {
                patchOrderToModel(element.id, element)
                  .then(res => {
                    this.$message.success('模具更新成功')
                    this.getData()
                  })
                  .catch(res => {})
              }
            } else {
              this.$message('请输入模具销售价')
            }
          })
        })
        .catch(_ => {
          this.$message('网络错误,刷新重试')
        })
    },
    //订单合计所有订单明细金额
    sumOrderAmount() {
      let count = 0
      for (const i of this.suborderdetail) {
        count += i.sub_amount * 1
      }
      this.orderdetail.order_amount = count
      this.rmbOrderAmount = count * this.orderdetail.ex_rate * 1
      // return count
    },
    //订单明细合计
    subAmount(row) {
      row.sub_amount = row.pro_price * row.pro_qt * 1
    },
    //保存订单明细
    firstSaveSuborder() {
      // console.log(this.suborderdetail)
      this.sumOrderAmount()
      if (!window.sessionStorage.getItem('subtoken')) {
        this.$message.error('请勿重复提交,或刷新重试')
      } else {
        this.suborderdetail.forEach(el => {
          if (el.hasOwnProperty('id')) {
            if (el.status === 1) {
              patchSubOrder(el.id, '', el).then(() => {
                el.status = 0
                this.saveOrderDetail()
              })
            } else {
              // console.log('无更改')
            }
          } else {
            el.status = 0
            postSubOrder(el)
              .then(res => {
                this.saveOrderDetail()
              })
              .catch(res => {
                const h = this.$createElement
                this.$notify({
                  title: '警告',
                  message: h(
                    'i',
                    { style: 'color: teal' },
                    '网络错误,请刷新重试'
                  )
                })
              })
          }
        })
      }
      window.sessionStorage.removeItem('subtoken')
    },
    //新增订单明细
    addSubOrderRow(row) {
      this.childAddColorBtn = false
      let newValue = {
        pro_name: '',
        pro_item: 1,
        pro_size: '',
        pro_color: '',
        pro_pack: '',
        pro_desc: '',
        pro_qt: 0,
        pro_price: 0,
        pro_weight: 0,
        order_number: this.orderdetail.order_number,
        // sub_ex_rate: this.orderdetail.ex_rate,
        sub_amount: 0,
        status: 1
      }
      this.suborderdetail.push(newValue)
    },
    //编辑订单明细
    editSubOrderRow(index, row) {
      row.status = 1
      this.childAddColorBtn = false
    },
    //删除订单明细,index是当个订单明细在suborderdetail中的索引位置,row是当行数据
    delSubOrderRow(index, row) {
      if (!row.hasOwnProperty('id')) {
        this.$confirm('数据未保存,确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.suborderdetail.splice(index, 1)
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      } else {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            // console.log(index)
            // console.log(row)
            this.suborderdetail.splice(index, 1)
            patchSubOrder(row.id, '', { is_delete: 1 }).then(res => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '删除失败!'
            })
          })
      }
    },
    //TODO:采购详情
    purchaseDetail() {},
    //TODO:出货详情
    shipDetail() {},
    //删除颜色
    delProColor(value, index) {
      let newValue = ''
      this.suborderdetail[index].pro_color.split('|').forEach((el, i) => {
        if (!(el.indexOf(value) !== -1)) {
          if (el !== '') {
            newValue += el + '|'
          }
        }
      })
      this.suborderdetail[index].pro_color = newValue
    },
    //获取子组件选择搜索后的颜色
    handleSelect(item, index) {
      if (this.suborderdetail[index].pro_color === undefined) {
        this.suborderdetail[index].pro_color = JSON.stringify(item) + '|'
      } else {
        this.suborderdetail[index].pro_color += JSON.stringify(item) + '|'
      }
    },
    //获取后台客户地址数据
    selectShipAddr(v) {
      if (v === true) {
        getCustomerAddr().then(res => {
          this.customerAddr = res.data.results
        })
      }
    },
    //模具相关操作
    // TODO:订单已录入模具,要实现添加新模具,同时新增两套以上模具不成功
    beforeSubmitOrder() {
      let newModelData = [...this.newModelData]
      newModelData.forEach(el => {
        if (!el.hasOwnProperty('id')) {
          this.submitModelData.push({
            order_number: this.orderdetail.order_number,
            model: el.model.id,
            sale_price: el.sale_price
          })
        } else {
          this.submitModelData.push({
            order_number: this.orderdetail.order_number,
            model: el.model.id,
            sale_price: el.sale_price,
            id: el.id
          })
        }
      })
    },
    //打开新增模具后隐藏订单
    hideOrderTable() {
      this.dialogVisible = false
    },
    selectModel() {
      this.visible = true
      this.hideOrderTable()
    },
    onClose() {
      this.visible = false
      this.dialogVisible = true
    },
    dialogStatus2(bol) {
      this.dialogVisible = bol
    },
    getNewModel(res) {
      let modelData = []
      this.newModelData.forEach(el => {
        modelData.push(el.model.number)
      })
      if (modelData.indexOf(res.number) !== -1) {
        this.$message.error(`${res.number}已存在,请重新选择`)
      } else {
        this.addOrderModelData.push(res)
        this.visible = false
        this.dialogVisible = true
        this.addOrderModelVisible = true
      }
    },
    //新增模具后,更新现有模具数据显示
    pushModelData() {
      getOrderToModel({
        order_number: window.sessionStorage.getItem('order_number')
      }).then(res => {
        this.newModelData = res.data
      })
    },
    //删除新选择的模具
    delNewAddModel(id) {
      let addOrderModelData = [...this.addOrderModelData]
      let promise = new Promise((resolve, reject) => {
        this.addOrderModelData = addOrderModelData.filter(
          item => item.id !== id
        )
        resolve(true)
      }).then(() => {
        if (this.addOrderModelData.length === 0) {
          this.addOrderModelVisible = false
        }
      })
    },
    getSalePrice(val) {
      let newData = [...this.newModelData]
      let target = newData.find(item => item.id === val.id)
      if (target) {
        target.sale_price = val.val
        this.newModelData = newData
      }
    },
    deleteModel(id) {
      let newModelData = [...this.newModelData]
      this.newModelData = newModelData.filter(item => item.id !== id)
      patchOrderToModel(id, { is_delete: 1 })
        .then(res => {
          this.$message.success('删除成功')
        })
        .catch(err => {
          this.$message.error('删除失败,刷新重试')
        })
    },
    getData() {
      let number = window.sessionStorage.getItem('order_number')
      getOrder(number).then(res => {
        this.orderdetail = res.data
        this.picUrl = res.data.order_image.map(item => {
          return process.env.VUE_APP_API_PIC_URL + item
        })
        getOrderToModel({ order_number: res.data.order_number }).then(res => {
          this.orderModelColumn = 2
          this.newModelData = res.data
        })
        getSubOrderList({ order_number: number }).then(res => {
          this.suborderdetail = res.data
          res.data.forEach(el => {
            el.status = 0
          })
          if (res.data.length === 0) {
          }
        })
      })
      getSubToken()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.order-img {
  height: 150px;
  overflow: hidden;
}
.orderImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.el-select {
  display: block;
}
</style>
