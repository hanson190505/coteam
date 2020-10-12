<template>
  <div>
    <a-table
      :columns="columns"
      rowKey="id"
      :data-source="addOrderModelData"
      :pagination="{ size: 'small' }"
      bordered
      v-show="visible"
      size="small"
    >
      <template slot="sale_price" slot-scope="text, record, index">
        <a-input v-model="record.sale_price"></a-input>
      </template>
      <template slot="operation" slot-scope="text, record, index">
        <div class="editable-row-operations">
          <span>
            <a @click="() => save(record.id, index)">Save</a>
          </span>
          <span>
            <a @click="() => onDelete(record.id, index)">Delete</a>
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
import { getOrderModels, patchOrderModel, postOrderModel } from '@/api/order'
const columns = [
  {
    title: '供应商',
    dataIndex: 'supplier',
    width: '8%',
    scopedSlots: { customRender: 'supplier' },
  },
  {
    title: '编号',
    dataIndex: 'number',
    width: '10%',
    scopedSlots: { customRender: 'number' },
  },
  {
    title: '构造',
    dataIndex: 'construct',
    width: '5%',
    scopedSlots: { customRender: 'construct' },
  },
  {
    title: '生产日期',
    dataIndex: 'pro_date',
    width: '10%',
    scopedSlots: { customRender: 'pro_date' },
  },
  {
    title: '采购单价',
    dataIndex: 'price',
    width: '8%',
    scopedSlots: { customRender: 'price' },
  },
  {
    title: '销售单价($)',
    dataIndex: 'sale_price',
    width: '13%',
    scopedSlots: { customRender: 'sale_price' },
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    width: '15%',
    scopedSlots: { customRender: 'remarks' },
  },
  {
    title: 'opration',
    dataIndex: 'opration',
    scopedSlots: { customRender: 'operation' },
  },
]
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    addOrderModelData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      editingKey: '',
      editingRow: 0,
      salePrice: 0,
      columns,
    }
  },
  mounted() {},
  computed: {},
  methods: {
    save(id, index) {
      //TODO: 点击保存===(上传之前确定销售单价不为0)上传订单-模具数据===删除此条内容===更新已有模具显示内容
      console.log(this.addOrderModelData[index].sale_price)
    },
    onDelete(id, index) {
      patchOrderModel(id, { is_delete: 1 })
        .then((res) => {
          this.data.splice(index, 1)
          this.$message.success('删除成功')
        })
        .catch((err) => {
          this.$message.error('删除失败')
        })
    },
  },
}
</script>

<style scoped>
.editable-row-operations a {
  margin-right: 1em;
}
</style>
