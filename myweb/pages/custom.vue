<template>
  <div class="custom-step">
    <h1 class="custom-title">Product Custom</h1>
    <el-steps :active="active" align-center finish-status="success">
      <el-step title="step 1" description="select product variety"></el-step>
      <el-step title="step 2" description="select product style"></el-step>
      <el-step title="step 3" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="step 4" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
    <div v-if="active==0" class="step-0">
      <p>Please select products variety</p>
      <el-select v-model="value">
        <el-option
          v-for="item in products_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div v-else-if="active==1 && value=='USB'">
      <usbStyle />
    </div>
    <div class="custom-next">
      <el-button style="margin-top: 12px;" @click="previous" v-if="previous_dis">Previous</el-button>
      <el-button style="margin-top: 12px;" @click="next" v-if="next_dis">Next</el-button>
      <el-button style="margin-top: 12px;" @click="done" v-if="done_dis">Done</el-button>
    </div>
  </div>
</template>

<script>
import usbStyle from '../components/custom/usbStyle'
export default {
  components: {
    usbStyle
  },
  data() {
    return {
      active: 0,
      next_dis: true,
      previous_dis: true,
      done_dis: false,
      value: '',
      products_options: [
        { value: 'USB', label: 'USB' },
        { value: 'POWERBANK', label: 'POWERBANK' }
      ]
    }
  },
  methods: {
    previous() {
      if (this.active > 0) {
        this.active--
      }
    },
    next() {
      if (this.value == '') {
        this.$message({
          message: 'Please select products type!',
          type: 'warning'
        })
      } else {
        this.active++
        if (this.active == 4) {
          this.next_dis = false
          this.previous_dis = false
          this.done_dis = true
        }
      }
    },
    done() {
      console.log('submit')
    }
  }
}
</script>

<style>
.custom-title {
  text-align: center;
}
.step-0 {
  text-align: center;
  margin-top: 20px;
}
.step-0 p {
  margin-bottom: 10px;
}
.custom-next {
  text-align: center;
}
</style>
