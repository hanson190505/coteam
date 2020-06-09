<template>
  <el-card>
    <div class="idnex-doc">
      <ul class="idnex-doc-ul">
        <li>
          <p>Customized products do not support return and exchange applications</p>
        </li>
        <li>
          <p>For color sensitive products, please use Pantone color number</p>
        </li>
        <li>
          <p>test</p>
        </li>
        <li>
          <p>test</p>
        </li>
        <li>
          <p>test</p>
        </li>
        <li>
          <p>test</p>
        </li>
      </ul>
    </div>
    <el-row :gutter="10">
      <el-col :span="6">
        <h4>USB</h4>
        <ul class="foot-usb">
          <li>
            <nuxt-link :to="{name:'usb', params:{sub_type:'USB2.0'}}">USB 2.0</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/usb">USB 3.0</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/usb">USB 32GB</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/usb">USB 64GB</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6">
        <h4>PWOERBANK</h4>
      </el-col>
      <el-col :span="6">
        <h4>Support</h4>
      </el-col>
      <el-col :span="6">
        <h4>CONTACT</h4>
        <!-- <div class="foot-msg">
        E-mail:
        <a href="mailto:infochinagoodgifts@gmail.com">infochinagoodgifts@gmail.com</a>
      </div>
        <p>Address:DongGuang City GuangDong Province China</p>-->
        <ul class="foot-msg">
          <li>
            E-mail:
            <a href="mailto:infochinagoodgifts@gmail.com">infochinagoodgifts@gmail.com</a>
          </li>
          <li>Address:LongGang ShenZhen City GuangDong Province China</li>
          <li></li>
          <li></li>
        </ul>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  async fetch({ error }) {
    let data = await getProductType()
      .then(res => {
        console.log(res.data.results)
      })
      .catch(err => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  }
}
</script>

<style>
.foot-msg,
.foot-usb {
  list-style-type: none;
}
.foot-msg li,
.foot-usb li {
  font-size: 0.6em;
  margin-top: 10px;
}
.idnex-doc {
  margin-bottom: 10px;
}
.idnex-doc-ul {
  list-style: outside;
  font-size: 0.6em;
  margin-left: 20px;
}
.idnex-doc-ul li,
.idnex-doc-ul p {
  font-size: 0.6em;
}
</style>
