<template>
  <div>
    <el-row class="row" :style="{height: `${height}px`, marginBottom: `${rowDis}px`}">
      <el-col class="cols"
        v-for="(item, index) in columns"
        :key="index"
        @click.native="slectCol(item)"
        :style="{paddingLeft: `${+dis/2}px`, paddingRight: `${+dis/2}px`, backgroundColor: item.bc}"
        :span="+item.span">
        <div class="item" :class="{active: currentItem === item}">
          <component :is="item.panel || template.panel" :title="item.title">
            <component
              v-if="item.component"
              :is="item.component"
              :config="item.config"
              style="width: 100%; height: 100%;"></component>
              <h4 v-else>哇咔咔</h4>
          </component>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    template: Object,
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
  },
  methods: {
    slectCol (item) {
      this.$emit('active', item)
    }
  }
}
</script>

<style lang="less" scoped>
  .item {
    border: 1px dashed rgb(17, 17, 17);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  .cols {
    height: 100%;
    &:hover {
      .item {
        background-color: rgba(109, 197, 131, 0.4);
      }
    }
  }
  .active {
    border: 2px solid rgb(236, 74, 74);
  }
</style>
