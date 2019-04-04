<template>
  <el-row>
    <el-col :span="6">
      <el-form :model="template" ref="template" label-width="100px" class="demo-template">
        <el-form-item label="页面宽" prop="name">
          <el-input v-model="template.width"></el-input>
        </el-form-item>
        <el-form-item label="页面高" prop="name">
          <el-input v-model="template.height"></el-input>
        </el-form-item>
        <el-form-item label="行" prop="name">
          <el-input v-model="template.row"></el-input>
        </el-form-item>
        <el-form-item label="列" prop="name">
          <el-input v-model="template.col"></el-input>
        </el-form-item>
        <el-form-item label="图形类型" prop="name">
          <el-select v-model="template.components[currentId].type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="空间占比" prop="name">
          <el-input v-model="template.components[currentId].space"></el-input>
        </el-form-item>
        <el-form-item label="基础配置" prop="name">
          <el-input v-model="template.components[currentId].config"></el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="18" class="view" :style="{width: `${template.width}px`, height: `${template.height}px`}">
      <div class="grid-item" v-for="(item, index) in template.components" :key="index" :style="item.style" @click="currentId = index" :class="{active: currentId === index}">
        <component v-if="item.type" style="width: 100%;height: 100%;" :is="item.type"></component>
        <span v-else>{{index}}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Custom from './common/charts/Custom'

export default {
  data () {
    return {
      template: {
        width: 1000,
        height: 800,
        row: 3,
        col: 3,
        components: [{
          type: '',
          space: '0',
          config: ''
        }]
      },
      options: [
        {label: '柱状图', value: 'Custom'}
      ],
      currentId: 0
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    repain () {
      if (!this.template || !this.template.row || !this.template.col) return
      this.currentId = 0
      let total, width, height
      total = this.template.row * this.template.col
      width = this.template.width / this.template.col + 'px'
      height = this.template.height / this.template.row + 'px'
      this.template.components = []
      for (let i = 0; i < total; i++) {
        this.template.components.push({style: {width, height}})
      }
    }
  },
  watch: {
    'template.row': {
      immediate: true,
      handler () {
        this.repain()
      }
    },
    'template.col': {
      immediate: true,
      handler () {
        this.repain()
      }
    }
  },
  components: {
    Custom
  }
}
</script>

<style lang="less" scoped>
 .view {
   background: pink;
   display: flex;
   flex-wrap: wrap;
   .grid-item {
     box-sizing: border-box;
     border: 1px solid black;
   }
   .active {
     background: red;
   }
 }
</style>
