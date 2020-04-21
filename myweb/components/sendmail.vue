<template>
  <el-dialog title="Send Mail" :visible.sync="sendmailVisible" width="50%" @close="handleClose">
    <el-form :model="sendmailData" ref="sendmailDataref" label-width="120px" :rules="rules">
      <el-form-item label="Your e-mail" prop="subject">
        <el-input v-model="sendmailData.subject" type="email" autocomplete autofocus></el-input>
      </el-form-item>
      <el-form-item label="Message" prop="message">
        <el-input v-model="sendmailData.message" type="textarea" :rows="4"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="sendmailVisible = false">cancel</el-button>
      <el-button type="primary" @click="handleSendMail">submit</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { sendMail } from '../api/user'
export default {
  data() {
    return {
      sendmailVisible: false,
      sendmailData: {},
      rules: {
        subject: [
          {
            type: 'email',
            required: true,
            message: 'please input your email',
            trigger: 'blur'
          }
        ],
        message: [
          {
            required: true,
            message: 'please input your message',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleClose() {},
    handleSendMail() {
      this.$refs.sendmailDataref.validate(valid => {
        if (valid) {
          this.sendmailData.message =
            this.sendmailData.message + '\n' + this.sendmailData.subject
          sendMail(null, this.sendmailData)
            .then(res => {
              this.$notify({
                message: res.data.msg,
                type: res.data.type
              })
              this.sendmailVisible = false
              this.sendmailData.message = ''
            })
            .catch(error => {
              this.$notify({
                message: 'unknown mistake',
                type: 'error'
              })
            })
        } else {
          return false
        }
      })
    },
    showDialog() {
      this.sendmailVisible = true
    }
  }
}
</script>

<style>
</style>
