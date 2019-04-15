<template>
  <div>
    <el-row class="row" :style="{height: `${height}px`, marginBottom: `${rowDis}px`}">
      <el-col class="cols"
        v-for="(item, index) in columns"
        :key="index"
        :style="{paddingLeft: `${+dis/2}px`, paddingRight: `${+dis/2}px`, backgroundColor: item.bc}"
        :span="+item.span">
        <div class="item" :class="{active: currentItem === item}">
          <component
            v-if="item.component"
            :is="item.component"
            :config="item.config"
            style="width: 100%; height: 100%;"></component>
          <h4 v-else>哇咔咔</h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      default () {
        return [{span: 12, type: 'col', config: {}}, {span: 12, type: 'col', config: {}}]
      },
      type: Array
    },
    dis: {
      default () {
        return 0
      },
      type: [String, Number]
    },
    rowDis: {
      default () {
        return 0
      },
      type: [String, Number]
    },
    height: {
      default () {
        return 500
      },
      type: [String, Number]
    },
    components: Array,
    currentItem: Object
  }
}
</script>

<style lang="less" scoped>
  .item {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  .cols {
    height: 100%;
  }
</style>
