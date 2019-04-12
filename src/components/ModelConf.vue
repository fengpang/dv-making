<template>
      <!-- 栅格配置 -->
    <el-col :span="4">
      <el-form v-if="currentItem.type==='row'" :model="currentItem" ref="currentItem" label-width="100px">
        <el-form-item label="列距离" prop="name">
          <el-input v-model="currentItem.dis"></el-input>
        </el-form-item>
        <el-form-item label="行距离" prop="name">
          <el-input v-model="currentItem.rowDis"></el-input>
        </el-form-item>
        <el-form-item label="列" prop="name">
          <div v-for="(item, index) in currentItem.columns" :key="index">
            <el-input v-model="item.span"></el-input><i @click="delCol(currentItem.columns, item)" class="el-icon-remove remove"></i>
          </div>
          <el-button @click.native="addCol(currentItem.columns)">添加列</el-button>
        </el-form-item>
        <el-form-item label="高度" prop="name">
          <el-input v-model="currentItem.height"></el-input>
        </el-form-item>
      </el-form>

    <!-- 组件配置 -->
      <el-tabs v-else v-model="activeName">
        <el-tab-pane label="常规配置" name="first">
          <el-form v-if="currentItem.type === 'col'" :model="currentItem" ref="currentItem" label-width="100px">
              <el-form-item label="图形类型" prop="name">
                <el-select v-model="currentItem.component" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="标题" prop="name">
                <el-input v-model="currentItem.title" placeholder="模块标题"></el-input>
              </el-form-item>
              <el-form-item label="高度" prop="name">
                <el-input v-model="currentItem.height" placeholder="组件高度"></el-input>
              </el-form-item>
              <el-form-item label="url" prop="name">
                <el-input v-model="currentItem.url" placeholder="接口地址"></el-input>
              </el-form-item>
              <el-form-item label="x軸字段" prop="name">
                <el-input v-model="currentItem.xname" placeholder="横轴字段"></el-input>
              </el-form-item>
              <el-form-item label="y軸字段" prop="name">
                <el-input v-model="currentItem.yname" placeholder="值字段"></el-input>
              </el-form-item>
              <el-form-item label="系列字段" prop="name">
                <el-input v-model="currentItem.sname" placeholder="系列名称字段"></el-input>
              </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="图表配置" name="second">
          <el-form v-if="currentItem.type === 'col'" :model="currentItem.config" ref="currentItem" label-width="100px">
              <el-form-item label="线颜色" prop="name">
                <el-color-picker v-model="currentItem.config.color"></el-color-picker>
              </el-form-item>
              <el-form-item label="轴线颜色" prop="name">
                <el-color-picker v-model="currentItem.config.axisColor"></el-color-picker>
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
        </el-tab-pane>
      </el-tabs>
    </el-col>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      options: [
        {label: '柱状图', value: 'Custom'},
        {label: '折线图', value: 'DvLine'}
      ]
    }
  },
  props: {
    currentItem: Object
  },
  methods: {
    addCol (target) {
      target.push({span: 12, type: 'col', config: {}, panelName: 'DvPanel'})
    },
    delCol (target, item) {
      let index = target.indexOf(item)
      this.$delete(target, index)
    }
  }
}
</script>

<style>

</style>
