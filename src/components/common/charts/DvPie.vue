<!-- 正常饼图-->
<template>
  <chart :manual-update="false"
         class="datav-chart"
         ref="chart"
         :options="option"/>
</template>

<script>
export default {
  name: 'DvPie',
  props: {
    url: String,
    data: {
      type: Array,
      default () {
        return [
          {name: '品类A', value: 110},
          {name: '品类B', value: 200}
        ]
      }
    },
    config: {
      type: Object,
      default () {
        return {
          radius: ['50%', '50%'],
          roseType: true,
          unit: '万元',
          color: ['red', 'pink'],
          center: ['50%', '50%']
        }
      }
    }
  },
  computed: {
    option () {
      let formatter = `{b} : <br/>{c}${this.config.unit} ({d}%)`
      return {
        tooltip: {
          trigger: 'item',
          formatter
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: this.config.radius,
            color: this.color,
            center: this.config.center,
            roseType: this.roseType,
            data: this.data,
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
