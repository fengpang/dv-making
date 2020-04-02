<template>
  <el-col :span="4">
    <el-tabs v-model="activeName">
      <el-tab-pane label="页面配置" name="first">
        <!-- 添加组件 -->
          <el-form :model="template" ref="template" label-width="100px" class="demo-template">
            <el-form-item label="页面宽" prop="name">
              <el-input v-model="template.width"></el-input>
            </el-form-item>
            <el-form-item label="页面高" prop="name">
              <el-input v-model="template.height"></el-input>
            </el-form-item>
            <el-form-item label="背景色" prop="name">
              <el-color-picker v-model="template.bgc"></el-color-picker>
            </el-form-item>
            <el-form-item label="自定义背景图" prop="name">
              <el-input v-model="template.bgImg"></el-input>
            </el-form-item>
            <el-form-item label="模块容器" prop="name">
              <el-select v-model="template.panel">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          <draggable
            :list="components"
            :group="{ name: 'components', pull: 'clone', put: false }"
            :clone="deepCoy"
            ghost-class="ghost">
              <el-button class="move">添加栅格</el-button>
          </draggable>
            <el-button @click="dialogVisible = true">查看数据</el-button>
            <el-row>
              <el-col :span="12">
                <el-input v-model="pagename" placeholder="页面名称" @keyup.enter.native="increasePage"></el-input>
              </el-col>
              <el-col :span="12">
                <el-button @click="increasePage">新增页面</el-button>
              </el-col>
            </el-row>
            <div>
              <el-button v-for="(item, index) in template.pages" :key="index" @click="template.currentPage = index">{{ item.name || index + 1 }}</el-button>
            </div>
          </el-form>
          <!-- JSON信息 -->
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
            <span>{{this.template}}</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="图表全局配置" name="seconed">
        <!-- 添加组件 -->
          <el-form :model="template" ref="template" label-width="100px" class="demo-template">
            <el-form-item label="轴颜色" prop="axisColor">
              <el-color-picker v-model="template.config.axisColor"></el-color-picker>
            </el-form-item>
            <el-form-item label="标签颜色" prop="labelColor">
              <el-color-picker v-model="template.config.labelColor"></el-color-picker>
            </el-form-item>
            <el-form-item label="标签字号" prop="labelFontSize">
              <el-input v-model="template.config.fontSize"></el-input>
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
      dialogVisible: false,
      pagename: '',
      components: [{
        name: 'DvBar'
      }],
      options: [
        {label: '无外框', value: 'DefaultPanel'},
        {label: '1', value: 'DvPanel'}
      ]
    }
  },
  methods: {
    deepCoy (item) {
      return JSON.parse(JSON.stringify(item))
    },
    increasePage () {
      this.template.currentPage = this.template.pages.length - 1
      this.$emit('increasePage', this.pagename)
      this.pagename = ''
    }
  },
  props: {
    template: Object
  }
}
</script>

<style lang="less" scoped>
.move {
  &:hover {
    cursor: move;
  }
}
</style>
