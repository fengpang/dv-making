<template>
    <!-- 组件配置 -->
    <el-form :model="currentItem" v-if="currentItem.style" inline>
      <el-form-item label="背景色">
        <el-color-picker v-model="currentItem.style.background"></el-color-picker>
      </el-form-item>
      <el-form-item label="层级">
        <el-input-number v-model="currentItem.style.zIndex" :min="1" :max="10" label="描述文字"></el-input-number>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  data () {
    return {
      componentConf: {

      }
    }
  },
  props: {
    currentItem: Object
  },
  methods: {
  }
}
</script>

<style>

</style>
