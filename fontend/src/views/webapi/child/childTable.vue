<template>
  <div>
    <add-data @getData="getData"></add-data>
    <a-table
      :columns="columns"
      rowKey="id"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      bordered
    >
      <template
        v-for="col in ['seo_title', 'seo_desc', 'logo_svg']"
        :slot="col"
        slot-scope="text, record, index"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="(e) => handleChange(e.target.value, index, col)"
          />
          <template v-else>{{ text }}</template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record, index">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.id, index)">Save</a>
            <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(index, record)">
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
import { postWebapi, getWebapi, patchWebApi } from '@/api/webapi'
import addData from './addData';
const columns = [
    {
    title: 'id',
    dataIndex: 'id',
    width: '5%',
    scopedSlots: { customRender: 'id' }
  },
  {
    title: 'seo_title',
    dataIndex: 'seo_title',
    width: '20%',
    scopedSlots: { customRender: 'seo_title' }
  },
  {
    title: 'seo_desc',
    dataIndex: 'seo_desc',
    width: '30%',
    scopedSlots: { customRender: 'seo_desc' }
  },
  {
    title: 'is_use',
    dataIndex: 'is_use',
    width: '6%',
    scopedSlots: { customRender: 'is_use' }
  },
  {
    title: 'company_name',
    dataIndex: 'company_name',
    ellipsis: true,
    width: '10%',
    scopedSlots: { customRender: 'company_name' }
  },
  {
    title: 'company_addr',
    dataIndex: 'company_addr',
    ellipsis: true,
    width: '10%',
    scopedSlots: { customRender: 'company_addr' }
  },
  {
    title: 'logo_svg',
    dataIndex: 'logo_svg',
    ellipsis: true,
    // width: '10%',
    scopedSlots: { customRender: 'logo_svg' }
  },
  {
    title: 'opration',
    dataIndex: 'opration',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  components: {
    addData
  },
  props: {
    selectingShow: {
      type: Boolean,
      default: false
    }
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
    // 获取数据
    getData() {
      this.loading = true
      getWebapi().then(res => {
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
        patchWebApi(id, target)
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
    cancel(index, record) {
      this.getData()
    },
    onDelete(id, index) {
      patchWebApi(id, { is_delete: 1 })
        .then(res => {
          this.data.splice(index, 1)
          this.$message.success('删除成功')
        })
        .catch(err => {
          this.$message.error('删除失败')
        })
    },
  }
}
</script>

<style scoped>
.editable-row-operations a {
  margin-right: 1em;
}
</style>
