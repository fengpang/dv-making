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
              <el-form-item label="外框" prop="name">
              <el-select v-model="currentItem.panel">
                <el-option
                  v-for="item in panels"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"></el-option>
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
          <component v-if="configs[currentItem.component]" :is="configs[currentItem.component]" :currentItem="currentItem"></component>
        </el-tab-pane>
      </el-tabs>
    </el-col>
</template>

<script>
import { LineConf, BarConf, PieConf } from '@/components/chartConfigs/index'
export default {
  data () {
    return {
      activeName: 'first',
      options: [
        {label: '3D柱状图', value: 'Custom'},
        {label: '折线图', value: 'DvLine'},
        {label: '柱状图', value: 'DvBar'},
        {label: '饼图', value: 'DvPie'}
      ],
      configs: {
        DvLine: 'LineConf',
        DvBar: 'BarConf',
        DvPie: 'PieConf'
      },
      panels: [
        {label: '无外框', value: 'DefaultPanel'},
        {label: '1', value: 'DvPanel'}
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
  },
  components: {
    LineConf,
    BarConf,
    PieConf
  }
}
</script>

<style>

</style>
