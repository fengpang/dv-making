<template>
  <el-row>
    <!-- 添加组件 -->
    <el-col :span="4">
      <el-form :model="template" ref="template" label-width="100px" class="demo-template">
        <el-form-item label="页面宽" prop="name">
          <el-input v-model="template.width"></el-input>
        </el-form-item>
        <el-form-item label="页面高" prop="name">
          <el-input v-model="template.height"></el-input>
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
    </el-col>

    <!-- 主体 -->
    <el-col :span="16" class="view" :style="{width: `${template.width}px`, height: `${template.height}px`}">
      <draggable
        :list="template.components"
        group="people"
        ghost-class="ghost">
      <div
        v-for="(item, index) in template.components"
        :key="index"
        class="row"
        style="width: 100%; position: relative;">
        <component
          :is="item.name"
          @active="activeChange"
          :class="{active: currentItem === item}"
          :columns="item.columns"
          :currentItem="currentItem"
          :height="item.height"
          :dis="item.dis"></component>
          <div class="icons">
            <i class="el-icon-delete delete-icon" @click="delCol(template.components, item)"></i>
            <i class="el-icon-success success-icon" @click="selctRow(item)"></i>
          </div>
      </div>
      </draggable>
    </el-col>

    <!-- 栅格配置 -->
    <el-col v-if="currentItem.type==='row'" :span="4">
      <el-form :model="template" ref="template" label-width="100px">
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
    </el-col>

    <!-- 组件配置 -->
    <el-col v-if="currentItem.type==='col'" :span="4">
      <el-form v-if="currentItem" :model="template" ref="template" label-width="100px">
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
    <el-col :span="4">
      <draggable
        :list="list"
        group="people"
        ghost-class="ghost">
        <div
          class="list-group-item"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </el-col>
  </el-row>
</template>

<script>
import Grid from './Grid'
import Draggable from 'vuedraggable'

export default {
  data () {
    return {
      dialogVisible: false,
      template: {
        width: 1000,
        height: 800,
        components: []
      },
      options: [
        {label: '柱状图', value: 'Custom'},
        {label: '折线图', value: 'DvLine'}
      ],
      currentId: 0,
      currentItem: {},
      list: [
        { name: 'John', id: 0 },
        { name: 'Joao', id: 1 },
        { name: 'Jean', id: 2 }
      ],
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
    addComponent (component) {
      this.template.components.push({
        type: 'row',
        dis: 0,
        height: 50,
        name: component,
        columns: [{span: 12, type: 'col'}, {span: 12, type: 'col'}]
      })
    },
    delCol (target, item) {
      let index = target.indexOf(item)
      this.$delete(target, index)
    },
    addCol (target) {
      target.push({span: 12, type: 'col'})
    },
    activeChange (item) {
      this.currentItem = item
    },
    selctRow (row, index) {
      this.currentItem = row
    },
    deepCoy (item) {
      return JSON.parse(JSON.stringify(item))
    }
  },
  components: {
    Draggable,
    Grid
  }
}
</script>

<style lang="less" scoped>
 .view {
   overflow: auto;
   background: pink;
   .grid-item {
     box-sizing: border-box;
     border: 1px solid black;
   }
   .active {
     background: #6dc583;
   }
   .row {
     &:hover{
       .icons {
         opacity: 1;
       }
     }
   }
   .icons {
    transition: opacity .3s ease-out;
    opacity: 0;
    position: absolute;
    top: 100%;
    left: 90%;
    font-size: 25px;
    z-index: 233;
    transform: translate(-50%, -50%);
     .delete-icon {
       &:hover {
         color: red;
         cursor: pointer;
       }
     }
     .success-icon {
       &:hover {
        color: green;
        cursor: pointer;
       }
     }
   }
 }
 .remove {
   &:hover {
     color: red;
     cursor: pointer;
   }
 }
 .ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
