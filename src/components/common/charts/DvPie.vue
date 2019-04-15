<!-- 正常饼图-->
<template>
  <chart :manual-update="false"
         class="datav-chart"
         ref="chart"
         @mouseover="clearInterval"
         @mouseout="addInterval(0)"
         :options="option"/>
</template>

<script>
export default {
  props: {
    color: Array,
    showPercent: Boolean,
    roseType: String,
    radius: Array,
    url: String,
    formatter: Function
  },
  computed: {
    option () {
      let formatter = this.formatter || `{b} : <br/>{c}${this.unit} ({d}%)`
      return {
        tooltip: {
          trigger: 'item',
          formatter: formatter
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: this.radius,
            color: this.color,
            center: ['50%', '50%'],
            roseType: this.roseType,
            data: this.localData || this.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              color: '#fff',
              formatter: '{b}\n{d}%'
            },
            animationDelay: 500
          }
        ]
      }
    }
  }
}
</script>
