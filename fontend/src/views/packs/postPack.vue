<template>
  <a-drawer placement="right" :closeabel="false" :visible="postPackDrawerVisible" @close="onClose" width="40%">
    <a-form-model :model="postData">
      <a-form-model-item label="编号">
        <a-input v-model="postData.pack_number" />
      </a-form-model-item>
            <a-form-model-item label="尺寸">
        <a-input v-model="postData.size" />
        </a-form-model-item>
        <a-form-model-item label="材质" prop="material">
          <a-select>
            <a-select-option value="Tinplate">Tinplate</a-select-option>
            <a-select-option value="Aluminum">Aluminum</a-select-option>
            <a-select-option value="Carton">Carton</a-select-option>
            <a-select-option value="Plastic">Plastic</a-select-option>
            <a-select-option value="Tinplate&Sponge">Tinplate&Sponge</a-select-option>
            <a-select-option value="Aluminum&Sponge">Aluminum&Sponge</a-select-option>
            <a-select-option value="Carton&Sponge">Carton&Sponge</a-select-option>
            <a-select-option value="custom">custom</a-select-option>
          </a-select>
        </a-form-model-item>
            <a-form-model-item label="重量">
        <a-input v-model="postData.weight" />
      </a-form-model-item>
            <a-form-model-item label="描述">
        <a-input v-model="postData.description" type="textarea"/>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        Create
      </a-button>
      <a-button style="margin-left: 10px;">
        Cancel
      </a-button>
    </a-form-model-item>
    </a-form-model>
  </a-drawer>
</template>

<script>
import { postPack } from "@/api/packs";
export default {
  props: {
    postPackDrawerVisible:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      postData: {},
    }
  },
  methods: {
    onClose(){
      this.$emit('addPack')
    },
    onSubmit(){
      postPack(this.postData).then(res=>{
        this.$emit('addPack')
      })
    }
  },
}
</script>

<style>

</style>