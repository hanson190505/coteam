<template>
  <div>
    <add-model @getData="getData"></add-model>
    <a-table
      :columns="columns"
      rowKey="id"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      bordered
    >
      <template
        v-for="col in ['atr', 'size', 'remarks', 'construct']"
        :slot="col"
        slot-scope="text, record, index"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, index, col)"
          />
          <template v-else>{{ text }}</template>
        </div>
      </template>
      <!-- <template slot="addr_type" slot-scope="text, record, index">
        <div :key="addr_type">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, index, 'addr_type')"
          />
          {{ text | addrType }}
        </div>
      </template>-->
      <template slot="operation" slot-scope="text, record, index">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.id, index)">Save</a>
            <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(index)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(index)">Edit</a>

            <!-- record即当前行数据 -->
            <a-popconfirm
              v-if="data.length"
              title="Sure to delete?"
              @confirm="() => onDelete(record.id, index)"
            >
              <a href="javascript:;">Delete</a>
            </a-popconfirm>
          </span>
        </div>
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
    width: '5%',
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
  },
  {
    title: 'opration',
    dataIndex: 'opration',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  components: {
    addModel
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      editingKey: '',
      columns
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    // 获取数据
    getData() {
      this.loading = true
      getOrderModels().then(res => {
        let pagination = { ...this.pagination }
        pagination.total = res.data.count
        this.loading = false
        this.data = res.data.results
        this.pagination = pagination
      })
    },
    handleChange(value, index, col) {
      const newData = [...this.data]
      const target = newData[index]
      if (target) {
        target[col] = value
        this.data = newData
      }
    },
    edit(index) {
      const newData = [...this.data]
      const target = newData[index]
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save(id, index) {
      let newData = [...this.data]
      let target = newData[index]
      if (target) {
        patchOrderModel(id, target)
          .then(res => {
            target.editable = false
            this.data = newData
            this.$message.success('修改成功')
          })
          .catch(err => {
            this.$message.error('修改失败')
          })
      }
    },
    cancel(index) {
      let newData = [...this.data]
      let target = newData[index]
      if (target) {
        target.editable = false
        this.data = newData
      }
    },
    onDelete(id, index) {
      patchCustomerAddr(id, { is_delete: 1 })
        .then(res => {
          this.data.splice(index, 1)
          this.$message.success('删除成功')
        })
        .catch(err => {
          this.$message.error('删除失败')
        })
    }
  }
}
</script>

<style scoped>
.editable-row-operations a {
  margin-right: 1em;
}
</style>
