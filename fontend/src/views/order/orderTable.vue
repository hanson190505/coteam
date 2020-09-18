<template>
  <div>
    <a-button type="primary" @click="handleAdd">
      新增订单
    </a-button>
    <a-table
      :columns="columns"
      rowKey="order_number"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      bordered
    >
      <template slot="image" slot-scope="text, record">
        <img :src="record.order_pic" alt="" width="100px" />
      </template>
      <template slot="operation" slot-scope="text, record">
        <!-- record即当前行数据 -->
        <a-popconfirm
          v-if="data.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.order_number)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
      <template slot="footer" slot-scope="currentPageData">
        合计:{{ orderSum(currentPageData) }}
      </template>
    </a-table>
  </div>
</template>
<script>
import {
  getOrderList,
  getSubOrderList,
  postOrder,
  postSubOrder,
  patchOrder
} from '@/api/order'
const columns = [
  {
    title: '订单编号',
    dataIndex: 'order_number',
    width: '10%'
  },
  {
    title: '客户名称',
    dataIndex: 'customer.lite_name',
    width: '7%'
  },
  {
    title: '下单日期',
    dataIndex: 'order_date',
    width: '7%'
  },
  {
    title: '订单交期',
    dataIndex: 'deliver_date',
    width: '7%'
  },
  {
    title: '汇率',
    dataIndex: 'ex_rate',
    width: '5%'
  },
  {
    title: '订单金额',
    dataIndex: 'order_amount',
    width: '7%'
  },
  {
    title: '备注',
    dataIndex: 'text',
    width: '10%'
  },
  {
    title: 'image',
    dataIndex: 'image',
    scopedSlots: { customRender: 'image' }
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

export default {
  components: {},
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    //   获取订单数据
    fetch(params = {}) {
      this.loading = true
      getOrderList().then(res => {
        const pagination = { ...this.pagination }
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = res.data.count
        this.loading = false
        this.data = res.data.results
        this.pagination = pagination
      })
    },
    // 新增订单
    handleAdd() {},
    // 删除订单
    onDelete(key) {
      const data = [...this.data]
      // 对数组进行筛选,返回新的数组
      patchOrder(key, '', { is_delete: 1 }).then(res => {
        this.data = data.filter(item => item.order_number !== key)
      })
    },
    // 金额总计
    orderSum(currentData) {
      let values = currentData.map(item => {
        return Number(item.order_amount)
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
<style scoped></style>
