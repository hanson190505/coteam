<template>
  <a-table :columns="columns" rowKey="id" :data-source="packData" :pagination="pagination" :loading="loading">

  </a-table>
</template>

<script>
import { getPacks } from "@/api/packs";
const columns = [
  {
    title:'编号',
    dataIndex:'pack_number',
    key:'pack_number',
    width:'10%',
    scopedSlots:{customRender:'pack_number'}
  },
  {
    title:'尺寸',
    dataIndex:'size',
    key:'size',
    width:'10%',
    scopedSlots:{customRender:'size'}
  },
  {
    title:'材质',
    dataIndex:'material',
    key:'material',
    width:'10%',
    scopedSlots:{customRender:'material'}
  },
  {
    title:'重量',
    dataIndex:'weight',
    key:'weight',
    width:'10%',
    scopedSlots:{customRender:'weight'}
  },
  {
    title:'描述',
    dataIndex:'description',
    key:'description',
    width:'60%',
    scopedSlots:{customRender:'description'}
  }
]
export default {
  data() {
    return {
      columns:columns,
      packData:[],
      pagination:{},
      loading:true
    }
  },
  methods: {
    getData() {
      getPacks().then(res=>{
        let pagination = { ...this.pagination }
        pagination.total = res.data.count 
        this.packData = res.data.results
        this.loading = false
        this.pagination = pagination
      })
    }
  },
  mounted() {
    this.getData();
  },
}
</script>

<style></style>
