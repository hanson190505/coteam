<template>
  <div>
    <a-table
      :columns="columns"
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
        模具费:{{ sumModel(currentPageData) }}
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
    title: '销售价',
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
export default {
  components: {
    EditableCell
  },
  data() {
    return {
      salePriceValue: 0,
      columns
    }
  },
  props: {
    modelData: Array
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
  }
}
</script>

<style></style>
