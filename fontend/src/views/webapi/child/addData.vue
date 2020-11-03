<template>
  <div>
    <a-button type="primary" @click="showDrawer">New Data</a-button>
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
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="seo_title" prop="seo_title">
          <a-input v-model="form.seo_title"/>
        </a-form-model-item>
        <a-form-model-item label="seo_desc" prop="seo_desc">
          <a-input v-model="form.seo_desc" type="textarea"/>
        </a-form-model-item>
        <a-form-model-item label="company_name" prop="company_name">
          <a-input v-model="form.company_name" placeholder="非必填项目" />
        </a-form-model-item>
        <a-form-model-item label="company_addr" prop="company_addr">
          <a-input v-model="form.company_addr" placeholder="非必填项目"/>
        </a-form-model-item>
        <a-form-model-item label="logo_svg" prop="logo_svg">
          <a-input v-model="form.logo_svg" placeholder="非必填项目" />
        </a-form-model-item>
        <a-button type="primary" @click="submit">Create</a-button>
      </a-form-model>
    </a-drawer>
  </div>
</template>

<script>
import { postWebapi } from '@/api/webapi'
export default {
  data() {
    return {
      visible: false,
      labelCol: { span: 5 },
      wrapperCol: { span: 14 },
      customers: [],
      form: {
        seo_title: '',
        seo_desc: '',
        company_name: '',
        company_addr: '',
        logo_svg: '',
      },
    }
  },
  methods: {
    submit() {
      postWebapi(this.form)
        .then(res => {
          this.$emit('getData')
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
