<template>
  <div>
    <el-button type="primary" size="small" @click="selectPacks"
      >选择包装</el-button
    >
    <el-table :data="packsData">
      <el-table-column
        prop="pack_number"
        label="编号"
        width="80"
      ></el-table-column>
      <el-table-column prop="size" label="尺寸" width="100"></el-table-column>
      <el-table-column
        prop="material"
        label="材质"
        width="100"
      ></el-table-column>
      <el-table-column prop="weight" label="重量" width="60"></el-table-column>
      <el-table-column
        prop="description"
        label="描述"
        width="500"
      ></el-table-column>
      <el-table-column label="图片" prop="pack_image">
        <template slot-scope="scope">
          <el-carousel trigger="click" height="150px">
            <el-carousel-item
              v-for="(item, index) in scope.row.pack_image"
              :key="index"
            >
              <img :src="item.path" class="car-img" width="auto"  alt=""/>
            </el-carousel-item>
          </el-carousel>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleDel(scope)" type="text" size="mini"
            >删除</el-button
          >
          <el-button
            v-if="scope.row.is_save === 0"
            type="text"
            size="mini"
            @click="upload(scope)"
            >保存</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :visible.sync="packsDialogVisible"
      width="80%"
      :before-close="handleClose"
      :append-to-body="true"
    >
      <packs-table
        @getSelectedPacks="getSelectedPacks"
        ref="packsTable"
      ></packs-table>
      <el-button type="primary" size="small" @click="confirm">确定</el-button>
    </el-dialog>
  </div>
</template>

<script>
import PicCarousel from '@/components/common/picCarousel.vue'
import PacksTable from '../packs/packsTable.vue'
import { postProductToPack, getProductToPack } from '@/api/packs'
export default {
  components: {
    PacksTable,
    PicCarousel
  },
  data() {
    return {
      packsDialogVisible: false,
      selectedPacks: [],
      packsData: this.getProductToPacks
    }
  },
  props: {
    products: Object,
    getProductToPacks: Array
  },
  methods: {
    selectPacks() {
      this.packsDialogVisible = !this.packsDialogVisible
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.selectedPacks.forEach(el => {
            if (this.packsData.indexOf(el) === -1) {
              el.is_save = 0
              this.packsData.push(el)
            } else {
              this.$message.warning({
                message: `${el.pack_number}已添加,请重新选择`
              })
            }
          })
          this.$refs.packsTable.emptySelectedRowKeys()
          done()
        })
        .catch(_ => {})
    },
    getSelectedPacks(rows) {
      this.selectedPacks = rows
    },
    confirm() {
      // this.selectedPacks.forEach(el => {
      //   if (this.packsData.indexOf(el) === -1) {
      //     el.is_save = 0
      //     this.packsData.push(el)
      //   } else {
      //     this.$message.warning({
      //       message: `${el.pack_number}已添加,请重新选择`
      //     })
      //   }
      // })
      console.log(this.packsData)
    },
    upload(scope) {
      postProductToPack({
        product: this.products.id,
        packs: scope.row.id
      }).then(res => {
        console.log(res)
        scope.row.is_save = 1
      })
    },
    handleDel(scope) {
      this.packsData.splice(scope.$index, 1)
    }
  }
}
</script>

<style></style>
