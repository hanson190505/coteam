<template>
  <div>
    <add-addr @getData="getData"></add-addr>
    <a-table
      :columns="columns"
      rowKey="id"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      bordered
    >
      <template
        v-for="col in ['country', 'city', 'addr']"
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
      <template slot="addr_type" slot-scope="text, record, index">
        <div key="addr_type">
          <a-select v-if="record.editable" @select="handleSelect" :default-value="text">
            <!-- 不设置 default-value 的话, 选择框会很小-->
            <a-select-option
              v-for="(item, index) in ['common', 'other']"
              :key="index"
              :value="index"
            >{{ item }}</a-select-option>
          </a-select>
          <template v-else>{{ text | addrType }}</template>
        </div>
      </template>
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
import {
  getCustomerAddr,
  postCustomerAddr,
  patchCustomerAddr
} from '@/api/customer'
import addAddr from './addAddr'
const columns = [
  {
    title: '客户',
    dataIndex: 'customer',
    width: '10%',
    scopedSlots: { customRender: 'customer' }
  },
  {
    title: '类别',
    dataIndex: 'addr_type',
    width: '10%',
    scopedSlots: { customRender: 'addr_type' }
  },
  {
    title: '联系人',
    dataIndex: 'linkman',
    width: '10%',
    scopedSlots: { customRender: 'linkman' }
  },
  {
    title: '国家',
    dataIndex: 'country',
    width: '10%',
    scopedSlots: { customRender: 'country' }
  },
  {
    title: '城市',
    dataIndex: 'city',
    width: '10%',
    scopedSlots: { customRender: 'city' }
  },
  {
    title: '邮编',
    dataIndex: 'postcode',
    width: '10%',
    scopedSlots: { customRender: 'postcode' }
  },
  {
    title: '详细地址',
    dataIndex: 'addr',
    scopedSlots: { customRender: 'addr' }
  },
  {
    title: 'opration',
    dataIndex: 'opration',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  components: {
    addAddr
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      editingKey: '',
      editingRow: 0,
      columns
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    // 地址类别选择后,修改对应数据
    handleSelect(v) {
      this.data[this.editingRow].addr_type = v
    },
    // 获取数据
    getData() {
      this.loading = true
      getCustomerAddr().then(res => {
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
        this.editingRow = index
        this.data = newData
      }
    },
    save(id, index) {
      let newData = [...this.data]
      let target = newData[index]
      if (target) {
        patchCustomerAddr(id, target)
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
      this.getData()
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
