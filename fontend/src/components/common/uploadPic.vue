<template>
  <div>
    <el-button type="primary" @click="picdialogVisible = true" size="mini">上传图片</el-button>
    <el-dialog title :visible.sync="picdialogVisible" width="50%" :append-to-body="true">
      <el-row>
        <el-col :span="4">
          <span>首页</span>
        </el-col>
        <el-col :span="4">
          <span>首页顺序</span>
        </el-col>
        <el-col :span="4">banner</el-col>
        <el-col :span="12">alt(首页,首页顺序,banner,alt非必填项)</el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <el-select v-model="uploadData.is_home" placeholder>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-input v-model="uploadData.home_index"></el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="uploadData.is_banner" placeholder>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-input v-model="uploadData.image_alt"></el-input>
        </el-col>
      </el-row>
      <el-upload
        class="upload-demo"
        ref="upload"
        :action="actionUrl"
        :on-success="uploadSuccess"
        :file-list="fileList"
        :limit="1"
        :data="uploadData"
        :headers="myheaders"
        accept="image/jpg, image/jpeg, image/png"
        :auto-upload="false"
        :on-exceed="handleExceed"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="uploadBtn">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'uploadPic',
  props: {
    owner: {
      type: String,
      default: 'public'
    },
    index: {
      type: Number,
      default: 99
    },
    number: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      picdialogVisible: false,
      actionUrl: process.env.VUE_APP_ACTION_URL,
      fileList: [],
      //图片上传附加数据
      uploadData: {
        owner: this.owner,
        number: this.number
      },
      myheaders: {
        authorization: window.localStorage.getItem('token')
      },
      options: [
        { value: '0', label: '否' },
        { value: '1', label: '是' }
      ]
    }
  },
  methods: {
    //图片上传成功后的返回结果
    uploadSuccess(res) {
      switch (res.status) {
        case 1000:
          this.$message('上传成功')
          this.$emit('sendPicUrl', {
            url: process.env.VUE_APP_API_PIC_URL + res.file,
            index: this.index,
            id: res.id
          })
          break
        case 1001:
          this.$message.error('图片尺寸太大,请选择500kb以下的图片')
          break
        case 1002:
          this.$message.error('非法的文件格式,或图片已损坏')
          break
        case 1003:
          this.$message('找到相同的图片')
          this.$emit('sendPicUrl', {
            url: process.env.VUE_APP_API_PIC_URL + res.file,
            index: this.index,
            id: res.id
          })
        default:
          break
      }
    },
    //超出文件数量控制
    handleExceed() {
      this.$message.error('单次只能上传一张图片')
    },
    //上传图片前控制
    uploadBtn() {
      if (this.uploadData.home_index === undefined) {
        this.uploadData.home_index = 0
      }
      if (this.uploadData.is_home === undefined) {
        this.uploadData.is_home = 0
      }
      if (this.uploadData.is_banner === undefined) {
        this.uploadData.is_banner = 0
      }
      if (this.number === '') {
        this.$message.error('请完整填写订单信息!')
      } else {
        this.uploadData.number = this.number
        this.$refs.upload.submit()
      }
    }
  }
}
</script>

<style></style>
``