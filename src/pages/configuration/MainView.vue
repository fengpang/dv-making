<template>
    <!-- 主体 -->
    <el-col :span="16" class="view" ref="view" :style="{position: 'relative', width: `1000px`, height: `800px`, backgroundColor: pageConf.bgImg || pageConf.bgc}">
      <draggable
        :list="template.pages[template.currentPage].components"
         @end="onEnd"
         @start="onStart"
         style="height: 100%;"
        group="components"
        ghost-class="ghost">
      <div
        v-for="(item, index) in template.pages[template.currentPage].components"
        :key="index"
        class="row"
        style="width: 100%; position: relative;">
        <h1 :style="getStyle(item.style)"></h1>
      </div>
      </draggable>
    </el-col>
</template>

<script>
import Grid from './Grid'

export default {
  data () {
    return {
      offset: {}
    }
  },
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
    },
    onEnd (event) {
      const {left, top} = this.$refs.view.$el.getBoundingClientRect()
      const {newIndex, originalEvent} = event
      const {clientX, clientY} = originalEvent
      this.$set(this.template.pages[this.template.currentPage].components[newIndex], 'style', {left: `${clientX - left + this.offset.x}px`, top: `${clientY - top + this.offset.y}px`})
    },
    getStyle ({left, top} = {left: 0, top: 0}) {
      return {
        position: 'absolute',
        left,
        top,
        width: '100px',
        height: '100px',
        background: 'purple'
      }
    },
    onStart (event) {
      const {originalEvent} = event
      const {clientX, clientY} = originalEvent
      const {left, top} = event.item.children[0].getBoundingClientRect()
      this.offset = {x: left - clientX, y: top - clientY}
    }
  },
  model: {
    prop: 'currentItem',
    event: 'currentChange'
  },
  computed: {
    pageConf: () => (this.template && this.template.pageConf) || {}
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
