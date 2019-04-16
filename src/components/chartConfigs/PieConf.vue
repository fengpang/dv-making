<template>
  <el-form v-if="currentItem.type === 'col'" :model="currentItem.config" ref="currentItem" label-width="100px">
      <el-form-item label="线颜色" prop="name">
        <el-color-picker v-model="currentItem.config.color"></el-color-picker>
      </el-form-item>
      <el-form-item label="轴线颜色" prop="name">
        <el-color-picker v-model="currentItem.config.axisColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="区域填充" prop="name">
        <el-switch v-model="currentItem.config.areaStyle"></el-switch>
      </el-form-item>
      <el-form-item label="字号大小" prop="name">
        <el-input v-model="currentItem.config.fontSize" placeholder="字号大小"></el-input>
      </el-form-item>
      <el-form-item label="平滑曲线" prop="name">
        <el-switch v-model="currentItem.config.smooth"></el-switch>
      </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'LineConf',
  props: {
    currentItem: {
      type: Object,
      default () {
        return {config: {}}
      }
    }
  }
}
</script>

<style>

</style>
