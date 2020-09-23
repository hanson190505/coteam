<template>
  <div>
    <a-table :columns="columns" rowKey="id" :data-source="modelData" bordered size="small">
      <template slot="operation" slot-scope="text, record, index">
        <a-button type="primary" @click="onDelete(record.id)" size="small">delete</a-button>
      </template>
    </a-table>
  </div>
</template>

<script>
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
  data() {
    return {
      columns
    }
  },
  props: {
    modelData: Array
  },
  methods: {
    onDelete(id) {
      this.$emit('deleteNewModelRow', id)
    }
  }
}
</script>

<style>
</style>