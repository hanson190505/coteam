<template>
  <a-table
    :columns="columns"
    rowKey="id"
    :data-source="packData"
    :pagination="pagination"
    :loading="loading"
    :row-selection="{
      selectedRowKeys: selectedRowKeys,
      onChange: onSelectChange
    }"
  >
    <template slot="image" slot-scope="text, record">
      <div
        v-for="item in record.pack_image"
        :key="item.id"
        style="display:inline"
      >
        <img :src="item.path" alt="" width="100" />
      </div>
    </template>
  </a-table>
</template>

<script>
import { getPacks } from '@/api/packs'
const columns = [
  {
    title: '编号',
    dataIndex: 'pack_number',
    key: 'pack_number',
    width: '10%',
    scopedSlots: { customRender: 'pack_number' }
  },
  {
    title: '尺寸',
    dataIndex: 'size',
    key: 'size',
    width: '10%',
    scopedSlots: { customRender: 'size' }
  },
  {
    title: '材质',
    dataIndex: 'material',
    key: 'material',
    width: '10%',
    scopedSlots: { customRender: 'material' }
  },
  {
    title: '重量',
    dataIndex: 'weight',
    key: 'weight',
    width: '10%',
    scopedSlots: { customRender: 'weight' }
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    width: '40%',
    scopedSlots: { customRender: 'description' }
  },
  {
    title: '图片',
    dataIndex: 'image',
    width: '20%',
    scopedSlots: { customRender: 'image' }
  }
]
export default {
  data() {
    return {
      columns: columns,
      packData: [],
      pagination: {},
      loading: true,
      selectedRowKeys: [],
      selectData: [],
      baseurl: process.env.VUE_APP_API_PIC_URL
    }
  },
  methods: {
    getData() {
      getPacks().then(res => {
        let pagination = { ...this.pagination }
        pagination.total = res.data.count
        res.data.results.forEach(el => {
          if (el.pack_image.length !== 0) {
            el.pack_image.forEach(image => {
              image.path = this.baseurl + image.path
            })
          }
        })
        this.packData = res.data.results
        this.loading = false
        this.pagination = pagination
      })
    },
    onSelectChange(key, row) {
      this.selectedRowKeys = key
      this.selectData = row
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style></style>
