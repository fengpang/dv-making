<template>
    <!-- 主体 -->
    <el-col :span="16" class="view" ref="view" :style="{position: 'relative', width: `1000px`, height: `800px`, backgroundColor: pageConf.bgImg || pageConf.bgc}">
      <draggable
        :list="template.pages[template.currentPage].components"
         @end="onEnd"
         @start="onStart"
         @add="onadd"
         style="height: 100%;"
        group="components"
        ghost-class="ghost">
      <div
        v-for="(item, index) in template.pages[template.currentPage].components"
        :key="index"
        @mousemove="onMouseOver($event, item)"
        class="row"
        style="width: 100%; position: relative;">
        <h1 style="margin: 0;" @dblclick="activeChange(item)" :style="getStyle(item.style)"></h1>
      </div>
      </draggable>
    </el-col>
</template>

<script>
import Grid from './Grid'

export default {
  data () {
    return {
      offset: {},
      extendDirection: ''
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
    onEnd (event) {
      const {left, top} = this.$refs.view.$el.getBoundingClientRect()
      const {newIndex, originalEvent} = event
      const {clientX, clientY} = originalEvent
      this.template.pages[this.template.currentPage].components[newIndex].style.left = `${clientX - left + this.offset.x}px`
      this.template.pages[this.template.currentPage].components[newIndex].style.top = `${clientY - top + this.offset.y}px`
    },
    getStyle (style = {left: 0, top: 0}) {
      return {
        position: 'absolute',
        width: '100px',
        height: '100px',
        background: 'purple',
        ...style
      }
    },
    onStart (event) {
      const {originalEvent} = event
      const {clientX, clientY} = originalEvent
      const {left, top} = event.item.children[0].getBoundingClientRect()
      this.offset = {x: left - clientX, y: top - clientY}
      console.log(this.offset.x, this.offset.y)
    },
    onadd (event) {
      const {width, height} = Array.prototype.slice.call(event.to.children, -1)[0].children[0].getBoundingClientRect()
      const {left, top} = this.$refs.view.$el.getBoundingClientRect()
      const {newIndex, originalEvent} = event
      const {clientX, clientY} = originalEvent
      this.$set(this.template.pages[this.template.currentPage].components[newIndex], 'style', {left: `${clientX - left - (width / 2)}px`, top: `${clientY - top - (height / 2)}px`})
    },
    onMouseOver (event, item) {
      let direction
      const {left, top, width, height} = event.target.getBoundingClientRect()
      const {clientX, clientY} = event
      const x = clientX - left
      const y = clientY - top
      const changeDirection = direction => {
        const cursorMap = {
          top: 'row-resize',
          right: 'col-resize',
          bottom: 'row-resize',
          left: 'col-resize'
        }
        this.$set(item.style, 'cursor', cursorMap[direction])
        this.direction = direction
      }
      const isClose = (num, target) => {
        return Math.abs(num - target) <= 20
      }

      if (x > 0 && isClose(y, 0)) {
        changeDirection('top')
      }
      if (isClose(x, width) && y > 0) {
        changeDirection('right')
      }
      if (x > 0 && isClose(y, height)) {
        changeDirection('bottom')
      }
      if (isClose(x, 0) && y > 0) {
        changeDirection('left')
      }
      this.extendDirection = direction
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
