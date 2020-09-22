<template>
  <div>
    <a-table
      :columns="columns"
      rowKey="id"
      :data-source="data"
      :loading="loading"
      bordered
      size="small"
    >
      <template slot="atr" slot-scope="text">
        {{ text | modelAttr }}
      </template>
      <template slot="material" slot-scope="text">
        {{ text | modelMaterial }}
      </template>
    </a-table>
  </div>
</template>

<script>
import { getOrderModels, patchOrderModel, postOrderModel } from '@/api/order'
import addModel from './addModel'
const columns = [
  {
    title: '供应商',
    dataIndex: 'supplier',
    width: '8%',
    scopedSlots: { customRender: 'supplier' }
  },
  {
    title: '编号',
    dataIndex: 'number',
    width: '10%',
    scopedSlots: { customRender: 'number' }
  },
  {
    title: '属性',
    dataIndex: 'atr',
    width: '5%',
    scopedSlots: { customRender: 'atr' }
  },
  {
    title: '材质',
    dataIndex: 'material',
    width: '5%',
    scopedSlots: { customRender: 'material' }
  },
  {
    title: '尺寸',
    dataIndex: 'size',
    width: '8%',
    scopedSlots: { customRender: 'size' }
  },
  {
    title: '构造',
    dataIndex: 'construct',
    width: '5%',
    scopedSlots: { customRender: 'construct' }
  },
  {
    title: '生产日期',
    dataIndex: 'pro_date',
    width: '10%',
    scopedSlots: { customRender: 'pro_date' }
  },
  {
    title: '使用寿命',
    dataIndex: 'useful_life',
    width: '8%',
    scopedSlots: { customRender: 'useful_life' }
  },
  {
    title: '单价',
    dataIndex: 'price',
    width: '8%',
    scopedSlots: { customRender: 'price' }
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    scopedSlots: { customRender: 'remarks' }
  }
]
export default {
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      editingKey: '',
      editingRow: 0,
      selectedRowKeys: [],
      columns
    }
  },
  mounted() {
    // this.getData()
  },
  computed: {},
  methods: {
    // 获取数据
    getData() {
      this.loading = true
      getOrderModels().then(res => {
        pagination.total = res.data.count
        this.loading = false
        this.data = res.data.results
      })
    }
  }
}
</script>

<style scoped></style>
