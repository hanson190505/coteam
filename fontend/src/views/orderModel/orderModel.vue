<template>
  <div>
    <a-table
      :columns="checkModelData"
      rowKey="id"
      :data-source="modelData"
      bordered
      size="small"
    >
      <template slot="sale_price" slot-scope="text, record, index">
        <editable-cell
          :text="text"
          @change="onCellChange(record.id, 'sale_price', $event)"
        />
      </template>
      <template slot="operation" slot-scope="text, record, index">
        <a-button type="primary" @click="onDelete(record.id)" size="small"
          >delete</a-button
        >
      </template>
      <template slot="footer" slot-scope="currentPageData">
        <span class="table-footer-span">模具费</span>
        <span class="table-footer-span"
          >采购合计(¥){{ sumBuy(currentPageData) }}</span
        >
        <span class="table-footer-span"
          >销售合计($):{{ sumModel(currentPageData) }}</span
        >
      </template>
    </a-table>
  </div>
</template>

<script>
import EditableCell from '@/components/common/EditableCell'
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
    dataIndex: 'mconstruct',
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
    title: '单价',
    dataIndex: 'price',
    width: '8%',
    scopedSlots: { customRender: 'price' }
  },
  {
    title: '销售价($)',
    dataIndex: 'sale_price',
    width: '8%',
    scopedSlots: { customRender: 'sale_price' }
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    scopedSlots: { customRender: 'remarks' }
  },
  {
    title: 'opration',
    dataIndex: 'opration',
    scopedSlots: { customRender: 'operation' }
  }
]
const columns2 = [
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
    title: '构造',
    dataIndex: 'model.mconstruct',
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
    title: '单价',
    dataIndex: 'model.price',
    width: '8%',
    scopedSlots: { customRender: 'price' }
  },
  {
    title: '销售价($)',
    dataIndex: 'sale_price',
    width: '8%',
    scopedSlots: { customRender: 'sale_price' }
  },
  {
    title: '备注',
    dataIndex: 'model.remarks',
    scopedSlots: { customRender: 'remarks' }
  },
  {
    title: 'opration',
    dataIndex: 'opration',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  components: {
    EditableCell
  },
  data() {
    return {
      salePriceValue: 0,
      columns,
      columns2
    }
  },
  props: {
    modelData: Array,
    checkCulumns: Number
  },
  // mounted() {
  //   this.checkModelData()
  // },
  computed: {
    checkModelData() {
      if (this.checkCulumns === 2) {
        return this.columns2
      }
      if (this.checkCulumns === 1) {
        return this.columns
      }
    }
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      this.$emit('setSalePrice', { id: key, val: value })
    },
    onDelete(id) {
      this.$emit('deleteNewModelRow', id)
    },
    sumModel(currentData) {
      let values = currentData.map(item => {
        return Number(item.sale_price)
      })
      return values.reduce((prev, curr) => {
        const value = Number(curr)
        if (!isNaN(value)) {
          return prev + curr
        } else {
          return prev
        }
      }, 0)
    },
    sumBuy(currentData) {
      if (this.checkCulumns === 1) {
        let values = currentData.map(item => {
          return Number(item.price)
        })
        return values.reduce((prev, curr) => {
          const value = Number(curr)
          if (!isNaN(value)) {
            return prev + curr
          } else {
            return prev
          }
        }, 0)
      }
      if (this.checkCulumns === 2) {
        let values = currentData.map(item => {
          return Number(item.model.price)
        })
        return values.reduce((prev, curr) => {
          const value = Number(curr)
          if (!isNaN(value)) {
            return prev + curr
          } else {
            return prev
          }
        }, 0)
      }
    }
  }
}
</script>

<style scoped>
.table-footer-span {
  padding-right: 2em;
}
</style>
