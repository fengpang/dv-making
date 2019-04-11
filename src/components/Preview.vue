<template>
  <div>
      <div
        v-for="(item, index) in template.components"
        :key="index"
        class="row"
        :style="{width: `${template.width}px`, height: `${template.height}px`, backgroundColor: template.bgImg || template.bgc}"
        style="width: 100%; position: relative;">
        <component
          :is="item.name"
          @active="activeChange"
          :columns="item.columns"
          :height="item.height"
          :rowDis="item.rowDis"
          :dis="item.dis"></component>
      </div>
  </div>
</template>

<script>
import Grid from './Grid'
export default {
  props: {
    template: Object
  },
  components: {
    Grid
  }
}
</script>

<style>

</style>
