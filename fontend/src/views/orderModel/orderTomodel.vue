<template>
  <div>
    <a-table
      :columns="columns"
      rowKey="id"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
        onSelect:onSelected
      }"
      bordered
      size="small"
    >
      <template slot="atr" slot-scope="text">{{ text | modelAttr }}</template>
      <template slot="material" slot-scope="text">{{ text | modelMaterial }}</template>
    </a-table>
    <a-button type="primary" @click="submit">确定</a-button>
  </div>
</template>

<script>
import {
  getOrderModels,
  patchOrderModel,
  postOrderModel,
  getOrderToModel
} from '@/api/order'
import addModel from './addModel'
const columns = [
  {
    title: '订单编号',
    dataIndex: 'order_number.order_number',
    width: '10%',
    scopedSlots: { customRender: 'order_number' }
  },
  {
    title: '供应商',
    dataIndex: 'model.supplier',
    width: '8%',
    scopedSlots: { customRender: 'supplier' }
  },
  {
    title: '编号',
    dataIndex: 'model.number',
    width: '10%',
    scopedSlots: { customRender: 'number' }
  },
  {
    title: '属性',
    dataIndex: 'model.atr',
    width: '5%',
    scopedSlots: { customRender: 'atr' }
  },
  {
    title: '材质',
    dataIndex: 'model.material',
    width: '5%',
    scopedSlots: { customRender: 'material' }
  },
  {
    title: '尺寸',
    dataIndex: 'model.size',
    width: '8%',
    scopedSlots: { customRender: 'size' }
  },
  {
    title: '构造',
    dataIndex: 'model.construct',
    width: '5%',
    scopedSlots: { customRender: 'construct' }
  },
  {
    title: '生产日期',
    dataIndex: 'model.pro_date',
    width: '10%',
    scopedSlots: { customRender: 'pro_date' }
  },
  {
    title: '使用寿命',
    dataIndex: 'model.useful_life',
    width: '8%',
    scopedSlots: { customRender: 'useful_life' }
  },
  {
    title: '单价',
    dataIndex: 'model.price',
    width: '8%',
    scopedSlots: { customRender: 'price' }
  },
  {
    title: '备注',
    dataIndex: 'model.remarks',
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
      tableSelecting: false,
      selectData: [],
      columns
    }
  },
  mounted() {
    this.getData()
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    }
  },
  methods: {
    // 获取数据
    getData() {
      this.loading = true
      getOrderToModel().then(res => {
        let pagination = { ...this.pagination }
        pagination.total = res.data.count
        this.loading = false
        this.data = res.data.results
      })
    },
    //选中行的id
    onSelectChange(key, row) {
      this.selectedRowKeys = key
      this.selectData = row
    },
    onSelected(data, selected, row, e) {},
    submit() {
      // this.$emit('getNewModelData2', this.selectData)
      this.selectData.forEach(el => {
        this.$emit('getNewModelData', el.model)
      })
    }
  }
}
</script>

<style scoped></style>
