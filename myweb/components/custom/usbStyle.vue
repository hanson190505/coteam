<template>
  <div>
    <!-- <el-row :gutter="10">
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="primary" icon="el-icon-check"></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>-->
    <usb1 />
    <wristband />
  </div>
</template>

<script>
import usb1 from './usbSvg/usb1'
import usb2 from './usbSvg/usb2'
import wristband from './usbSvg/wristband'
export default {
  components: {
    usb1,
    usb2,
    wristband
  }
}
</script>

<style>
</style>
