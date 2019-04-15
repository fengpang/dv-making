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
      <el-form-item v-if="currentItem.config.areaStyle" label="渐变色（上）" prop="name">
        <el-color-picker show-alpha v-model="currentItem.config.topColor"></el-color-picker>
      </el-form-item>
      <el-form-item v-if="currentItem.config.areaStyle" label="渐变色（下）" prop="name">
        <el-color-picker show-alpha v-model="currentItem.config.bototmColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="字号大小" prop="name">
        <el-input v-model="currentItem.config.fontSize" placeholder="字号大小"></el-input>
      </el-form-item>
      <el-form-item label="y轴单位" prop="name">
        <el-input v-model="currentItem.config.unit" placeholder="单位"></el-input>
      </el-form-item>
      <el-form-item label="单位轴距" prop="name">
        <el-input v-model="currentItem.config.nameGap" placeholder="单位"></el-input>
      </el-form-item>
      <el-form-item label="坐标系位置" prop="name">
        <el-input v-model="currentItem.config.grid" placeholder="坐标系位置"></el-input>
      </el-form-item>
      <el-form-item label="图例" prop="name">
        <el-switch v-model="currentItem.config.legendVisible"></el-switch>
      </el-form-item>
      <el-form-item label="滚动条" prop="name">
        <el-switch v-model="currentItem.config.dataroomVisible"></el-switch>
      </el-form-item>
      <el-form-item label="虚线" prop="name">
        <el-switch v-model="currentItem.config.dashed"></el-switch>
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
