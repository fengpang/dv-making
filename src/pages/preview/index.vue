<template>
  <div class="view" :style="{width: `${template.width}px`, height: `${template.height}px`, backgroundColor: template.bgImg || template.bgc}">
      <div
        v-for="(item, index) in template.components"
        :key="index"
        class="row"
        style="width: 100%; position: relative;">
        <component
          :is="item.name"
          :columns="item.columns"
          :height="item.height"
          :rowDis="item.rowDis"
          :dis="item.dis"></component>
      </div>
  </div>
</template>

<script>
import Grid from './PreGrid'
export default {
  data () {
    return {
      template: {}
    }
  },
  components: {
    Grid
  },
  methods: {
    getStorage (name) {
      return JSON.parse(localStorage.getItem(name))
    }
  },
  created () {
    this.template = this.getStorage('template') || this.template
    console.log(this.template)
  }
}
</script>
