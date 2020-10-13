<template>
  <div>
    <add-model @getData="getData" :hidden="selectingShow"></add-model>
    <a-table
      :columns="columns"
      rowKey="id"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      bordered
    >
      <template
        v-for="col in ['size', 'remarks', 'construct', 'material']"
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
      <template slot="atr" slot-scope="text, record, index">
        <div key="atr">
          <a-select v-if="record.editable" @select="handleSelect" :default-value="text">
            <!-- 不设置 default-value 的话, 选择框会很小-->
            <a-select-option
              v-for="(item, index) in ['自有', '工厂', '样品']"
              :key="index"
              :value="index"
            >{{ item }}</a-select-option>
          </a-select>
          <template v-else>{{ text | modelAttr }}</template>
        </div>
      </template>
      <template slot="material" slot-scope="text, record, index">
        <div key="material">
          <a-select v-if="record.editable" @select="handleSelectMaterial" :default-value="text">
            <!-- 不设置 default-value 的话, 选择框会很小-->
            <a-select-option
              v-for="(item, index) in ['铜模', '钢模']"
              :key="index"
              :value="index"
            >{{ item }}</a-select-option>
          </a-select>
          <template v-else>{{ text | modelMaterial }}</template>
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
    <a-button type="primary" @click="submit">确定</a-button>
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
    width: '8%',
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
  components: {
    addModel
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
      selectedRowKeys: [],
      selectData: [],
      tableSelecting: false,
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
        this.editingRow = index
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
    cancel(index, record) {
      this.getData()
    },
    onDelete(id, index) {
      patchOrderModel(id, { is_delete: 1 })
        .then(res => {
          this.data.splice(index, 1)
          this.$message.success('删除成功')
        })
        .catch(err => {
          this.$message.error('删除失败')
        })
    },
    handleSelect(v) {
      this.data[this.editingRow].atr = v
    },
    handleSelectMaterial(v) {
      this.data[this.editingRow].material = v
    },
    //选中行的id
    onSelectChange(key, row) {
      this.selectedRowKeys = key
      row.forEach(el => {
        el.sale_price = 0
      })
      this.selectData = row
    },
    submit() {
      this.selectData.forEach(el => {
        this.$emit('getNewModelData', el)
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
