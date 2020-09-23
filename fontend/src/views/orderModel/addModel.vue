<template>
  <div>
    <a-button type="primary" @click="showDrawer">New Model</a-button>
    <a-drawer
      title="Create New Model"
      :visible="visible"
      width="40%"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
      :destroyOnClose="true"
    >
      <a-form-model
        ref="addModelForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="supplier" prop="supplier">
          <a-select
            size="default"
            @dropdownVisibleChange="dropdownVisibleChange"
            v-model="form.supplier"
          >
            <a-select-option
              v-for="(item, index) in customers"
              :key="index"
              :value="item.lite_name"
            >{{ item.lite_name }}</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="attribute" prop="atr">
          <a-select placeholder="非必填项目">
            <a-select-option value="1">自有</a-select-option>
            <a-select-option value="2">工厂</a-select-option>
            <a-select-option value="3">样品</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="material" prop="material">
          <a-select placeholder="非必填项目">
            <a-select-option value="1">铜模</a-select-option>
            <a-select-option value="2">钢模</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="size" prop="size">
          <a-input v-model="form.size" placeholder="非必填项目" />
        </a-form-model-item>
        <a-form-model-item label="construct" prop="construct">
          <a-input v-model="form.construct" placeholder="非必填项目" />
        </a-form-model-item>
        <a-form-model-item label="production date" prop="pro_date">
          <a-date-picker v-model="form.pro_date" />
        </a-form-model-item>
        <a-form-model-item label="useful life" prop="useful_life">
          <a-input v-model="form.useful_life" placeholder="非必填项目" />
        </a-form-model-item>
        <a-form-model-item label="price" prop="price">
          <a-input v-model="form.price" />
        </a-form-model-item>
        <a-form-model-item label="remarks" prop="remarks">
          <a-input v-model="form.remarks" type="textarea" />
        </a-form-model-item>
        <a-button type="primary" @click="submit">Create</a-button>
      </a-form-model>
    </a-drawer>
  </div>
</template>

<script>
import { getCustomer } from '@/api/customer'
import { postOrderModel } from '@/api/order'
export default {
  data() {
    return {
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      customers: [],
      form: {
        supplier: '',
        atr: Number,
        material: Number,
        size: '',
        construct: '',
        pro_date: '',
        useful_life: '',
        price: '',
        remarks: ''
      },
      rules: {
        supplier: [
          {
            required: true,
            message: 'Please select supplier',
            trigger: 'change'
          }
        ],
        pro_date: [{ required: true, message: 'Please select date' }],
        price: [{ required: true, message: 'Please input price' }]
      }
    }
  },
  methods: {
    //下拉列表展开时,获取客户表数据
    dropdownVisibleChange() {
      if (this.customers.length === 0) {
        getCustomer()
          .then(res => {
            this.customers = res.data
          })
          .catch(err => {})
      }
    },
    submit() {
      this.form.pro_date = this.form.pro_date.format('YYYY-MM-DD')
      postOrderModel(this.form)
        .then(res => {
          this.$emit('getData')
          this.$emit('getNewModelData', res.data)
          this.onClose()
          this.$message.success('提交成功')
        })
        .catch(err => {
          this.$message.error('提交失败,请重新录入')
          this.onClose()
          this.form = {}
        })
    },
    showDrawer() {
      this.visible = true
      this.$emit('hideOrderTable', false)
    },
    onClose() {
      this.visible = false
      this.$emit('hideOrderTable', true)
    }
  }
}
</script>

<style></style>
