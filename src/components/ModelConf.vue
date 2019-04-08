<template>
      <!-- 栅格配置 -->
    <el-col :span="4">
      <el-form v-if="currentItem.type==='row'" :model="currentItem" ref="currentItem" label-width="100px">
        <el-form-item label="栅格距离" prop="name">
          <el-input v-model="currentItem.dis"></el-input>
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
      <el-form v-if="currentItem.type === 'col'" :model="currentItem" ref="currentItem" label-width="100px">
          <el-form-item label="图形类型" prop="name">
            <el-select v-model="currentItem.componnet" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="高度" prop="name">
            <el-input v-model="currentItem.height" placeholder="组件高度"></el-input>
          </el-form-item>
          <el-form-item label="url" prop="name">
            <el-input v-model="currentItem.url" placeholder="接口地址"></el-input>
          </el-form-item>
          <el-form-item label="标题" prop="name">
            <el-input v-model="currentItem.title" placeholder="模块标题"></el-input>
          </el-form-item>
          <el-form-item label="图表配置" prop="name">
            <el-select v-model="currentItem.componnet" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
      </el-form>
    </el-col>
</template>

<script>
export default {
  data () {
    return {
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
      target.push({span: 12, type: 'col'})
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
