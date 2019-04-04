<template>
  <div class="chart-wrapper">
    <chart :options="options" :manual-update="false"></chart>
  </div>
</template>

<script>
// import Config from './mixins/Config'

export default {
  props: {
    dashed: String,
    color: {
      type: String,
      default () {
        return 'red'
      }
    },
    unit: {
      type: String,
      default () {
        return '万人'
      }
    },
    data: {
      type: Object,
      default () {
        return {
          '竣工': [{name: 2015, value: 2300}, {name: 2016, value: 2220}, {name: 2017, value: 2202}, {name: 2018, value: 2022}, {name: 2019, value: 2992}]
        }
      }
    },
    settings: {
      type: Object,
      default () {
        return {}
      }
    },
    grid: {
      type: Object,
      default () {
        return { bottom: 80, left: 0, right: 27, top: 80, containLabel: true, backgroundColor: 'gary' }
      }
    }
  },
  computed: {
    legendData () {
      return Object.keys(this.data)
    },
    options () {
      let result = this.dealData(this.data)
      let options = {
        color: this.color,
        legend: Object.assign({}, this.legendData),
        tooltip: {
          trigger: 'axis',
          formatter: `{c}${this.unit}`
        },
        dataZoom: [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 100,
            top: 340,
            bottom: 42,
            backgroundColor: 'rgba(15, 41, 129, 1)',
            fillerColor: 'rgba(97, 231, 255, 0.5)',
            borderColor: 'rgba(97,231,255,0)',
            dataBackground: {
              lineStyle: {
                color: 'rgba(54, 142, 192, 1)'
              },
              areaStyle: {
                color: 'rgba(54, 142, 192, 1)'
              }
            },
            handleStyle: {
              color: 'rgba(97,231,255,1)',
              opacity: 0.1
            }
          }
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 255, 238, 1)'
            },
            symbolSize: 8,
            symbol: ['none', 'arrow']
          },
          axisLabel: {
            padding: [0, 0, 0, 0],
            color: '#fff',
            fontSize: 18,
            interval: 0
          },
          splitLine: {
            show: this.showYSplitline,
            lineStyle: {
              color: 'rgba(0, 255, 238, .1)',
              type: 'solid'
            }
          },
          axisTick: {
            show: false,
            inside: true,
            length: 2,
            lineStyle: {
              color: 'rgba(0, 255, 238, 1)'
            }
          },
          data: result.xData
        },
        yAxis: {
          type: 'value',
          name: this.unit,
          nameGap: this.nameGap,
          nameTextStyle: {
            color: '#fff',
            fontSize: 18
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 255, 238, 1)'
            },
            symbolSize: 8,
            symbol: ['none', 'arrow']
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(0, 255, 238, .1)',
              type: 'solid'
            }
          },
          axisLabel: {
            color: '#fff',
            fontSize: 18
          },
          axisTick: {
            show: false,
            length: 2,
            lineStyle: {
              color: '#fff'
            }
          }
        },
        grid: this.grid,
        series: result.series
      }
      // Object.assign(options.xAxis, this.chartConfig.xAxis)
      // delete this.chartConfig.xAxis
      // Object.assign(options, this.chartConfig)
      return options
    }
  },
  methods: {
    dealData (data) {
      let xData = []
      let series = []
      let opacity = this.areaStyle ? 1 : 0
      let areaStyle = this.areaStyle || ['rgba(193,58,226,0.53)', 'rgba(109,79,239,0.53)']
      for (let key in data) {
        let itemData = data[key].map(({value}) => value)
        let itemXData = data[key].map(({name}) => name)
        xData = itemXData.length > xData.length ? itemXData : xData
        series.push({
          name: key,
          data: itemData,
          type: 'line',
          symbol: 'circle',
          symbolSize: 8,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: areaStyle[0] // 0% 处的颜色
              }, {
                offset: 1, color: areaStyle[1] // 100% 处的颜色
              }]
            },
            opacity: opacity
          },
          animationDelay: 500,
          lineStyle: {type: this.dashed}
        })
      }
      return {xData, series}
    }
  }
  // mixins: [Config]
}
</script>

<style>

</style>
