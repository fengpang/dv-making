export default {
  data () {
    return {
      chartConfig: {
        color: this.color,
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
          }
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
        grid: this.grid
      }
    }
  }
}
