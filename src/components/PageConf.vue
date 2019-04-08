<template>
  <!-- 添加组件 -->
  <el-col :span="4">
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
    <draggable
      :list="rows"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :clone="deepCoy"
      ghost-class="ghost">
        <el-button>添加栅格</el-button>
    </draggable>
      <el-button @click="dialogVisible = true">查看数据</el-button>
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
  </el-col>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      rows: [{
        type: 'row',
        dis: 0,
        height: 50,
        name: 'Grid',
        columns: [{span: 12, type: 'col'}, {span: 12, type: 'col'}]
      }]
    }
  },
  methods: {
    deepCoy (item) {
      return JSON.parse(JSON.stringify(item))
    }
  },
  props: {
    template: Object
  }
}
</script>

<style>

</style>
