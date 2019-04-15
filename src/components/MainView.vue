<template>
    <!-- 主体 -->
    <el-col :span="16" class="view" :style="{width: `${template.width}px`, height: `${template.height}px`, backgroundColor: template.bgImg || template.bgc}">
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
          :rowDis="item.rowDis"
          :dis="item.dis"></component>
          <div class="icons">
            <i class="el-icon-delete delete-icon" @click="delCol(template.components, item)"></i>
            <i class="el-icon-success success-icon" @click="selctRow(item)"></i>
          </div>
      </div>
      </draggable>
    </el-col>
</template>

<script>
import Grid from './Grid'

export default {
  components: {
    Grid
  },
  props: {
    currentItem: Object,
    template: Object
  },
  methods: {
    activeChange (item) {
      this.$emit('currentChange', item)
    },
    selctRow (row, index) {
      this.$emit('currentChange', row)
    },
    delCol (target, item) {
      let index = target.indexOf(item)
      this.$delete(target, index)
    }
  },
  model: {
    prop: 'currentItem',
    event: 'currentChange'
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
     border: 2px solid red;
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
