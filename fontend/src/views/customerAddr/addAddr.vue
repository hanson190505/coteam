<template>
  <div>
    <a-button type="primary" @click="showDrawer">
      <a-icon type="plus" />New Addr
    </a-button>
    <a-drawer
      title="Create New Addr"
      :visible="visible"
      width="720"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form-model
        ref="addAddrForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="客户" prop="customer">
          <a-select
            size="default"
            @dropdownVisibleChange="dropdownVisibleChange"
            v-model="form.customer"
          >
            <a-select-option
              v-for="(item, index) in customers"
              :key="index"
              :value="item.lite_name"
            >{{ item.lite_name }}</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="地址类别" prop="addr_type">
          <a-select>
            <a-select-option value="0">common</a-select-option>
            <a-select-option value="1">other</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="联系人" prop="linkman">
          <a-input v-model="form.linkman" />
        </a-form-model-item>
        <a-form-model-item label="国家" prop="country">
          <a-input v-model="form.country" placeholder="非必填项目" />
        </a-form-model-item>
        <a-form-model-item label="城市" prop="city">
          <a-input v-model="form.city" placeholder="非必填项目" />
        </a-form-model-item>
        <a-form-model-item label="邮编" prop="postcode">
          <a-input v-model="form.postcode" placeholder="非必填项目" />
        </a-form-model-item>
        <a-form-model-item label="详细地址" prop="addr">
          <a-input v-model="form.addr" type="textarea" />
        </a-form-model-item>
        <a-button type="primary" @click="submit">Create</a-button>
      </a-form-model>
    </a-drawer>
  </div>
</template>

<script>
import { getCustomer, postCustomerAddr } from '@/api/customer'
export default {
  data() {
    return {
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      customers: [],
      form: {
        customer: '',
        addr_type: 1,
        country: '',
        city: '',
        addr: ''
      },
      rules: {
        customer: [
          {
            required: true,
            message: 'Please select customer',
            trigger: 'change'
          }
        ],
        addr: [{ required: true, message: 'Please input addr' }]
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
      postCustomerAddr(this.form).then(res => {
        this.$emit('getData')
        this.visible = false
      })
    },
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    }
  }
}
</script>

<style></style>
