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
import { postOrderToModel } from '@/api/order'
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
    title: '采购单价',
    dataIndex: 'price',
    width: '8%',
    scopedSlots: { customRender: 'price' }
  },
  {
    title: '销售单价($)',
    dataIndex: 'sale_price',
    width: '13%',
    scopedSlots: { customRender: 'sale_price' }
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    width: '15%',
    scopedSlots: { customRender: 'remarks' }
  },
  {
    title: 'opration',
    dataIndex: 'opration',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    addOrderModelData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      editingKey: '',
      editingRow: 0,
      salePrice: 0,
      columns
    }
  },
  mounted() {},
  computed: {},
  methods: {
    save(id, index) {
      let sale_price = this.addOrderModelData[index].sale_price
      let order_number = window.sessionStorage.getItem('order_number')
      let newOrderToModelData = {}
      if (sale_price === 0) {
        this.$message.error('请输入模具销售单价')
      } else {
        newOrderToModelData.sale_price = sale_price
        newOrderToModelData.order_number = order_number
        newOrderToModelData.model = id
        postOrderToModel(newOrderToModelData).then(res => {
          this.$message.success('模具添加成功')
          this.$emit('pushModelData')
          this.$emit('delNewAddModel', id)
        })
      }
    },
    onDelete(id, index) {
      this.$emit('delNewAddModel', id)
    }
  }
}
</script>

<style scoped>
.editable-row-operations a {
  margin-right: 1em;
}
</style>
