<template>
  <el-form v-if="currentItem.type === 'col'" :model="currentItem.config" ref="currentItem" label-width="100px">
      <el-form-item label="柱子颜色" prop="name">
        <el-color-picker show-alpha v-model="currentItem.config.color"></el-color-picker>
      </el-form-item>
      <el-form-item label="轴线颜色" prop="name">
        <el-color-picker v-model="currentItem.config.axisColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="渐变色（上）" prop="name">
        <el-color-picker show-alpha v-model="currentItem.config.topColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="渐变色（下）" prop="name">
        <el-color-picker show-alpha v-model="currentItem.config.bottomColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="字号大小" prop="name">
        <el-input v-model="currentItem.config.fontSize" placeholder="字号大小"></el-input>
      </el-form-item>
      <el-form-item label="y轴单位" prop="name">
        <el-input v-model="currentItem.config.unit" placeholder="单位"></el-input>
      </el-form-item>
      <el-form-item label="单位轴距" prop="name">
        <el-input v-model="currentItem.config.nameGap" placeholder="单位轴距"></el-input>
      </el-form-item>
      <el-form-item label="坐标系位置" prop="name">
        <el-input v-model="currentItem.config.grid" placeholder="坐标系位置"></el-input>
      </el-form-item>
      <el-form-item label="柱宽" prop="name">
        <el-input v-model="currentItem.config.barWidth" placeholder="柱宽"></el-input>
      </el-form-item>
      <el-form-item label="图例" prop="name">
        <el-switch v-model="currentItem.config.legendVisible"></el-switch>
      </el-form-item>
      <el-form-item label="滚动条" prop="name">
        <el-switch v-model="currentItem.config.dataroomVisible"></el-switch>
      </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'BarConf',
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
