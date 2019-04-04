<template>
  <div>
    <chart class="chart" :options="options" :manual-update="false"></chart>
  </div>
</template>

<script>

var data = []
var categories = ['categoryA', 'categoryB', 'categoryC']
export default {
  name: 'Custom',
  computed: {
    options () {
      data = [
        // 维度X   维度Y   其他维度 ...
        [ 3.4, 4.5, 15, 43 ],
        [ 4.2, 2.3, 20, 91 ],
        [ 10.8, 9.5, 30, 18 ],
        [ 7.2, 8.8, 18, 57 ]
      ]
      function renderItem (params, api) {
        var point = api.coord([api.value(0), api.value(1)])
        return {
          type: 'group',
          children: [
            {
              type: 'rect',
              shape: {
                x: point[0],
                y: 20,
                width: 30,
                height: params.coordSys.height - 10
              },
              style: api.style({fill: 'green', stroke: 'yellow'})
            },
            {
              type: 'rect',
              shape: {
                x: point[0] + 10,
                y: 10,
                width: 30,
                height: params.coordSys.height - 10
              },
              style: api.style({fill: 'green', stroke: 'yellow'})
            },
            {
              type: 'polygon',
              shape: {
                points: [
                  [point[0], 20], [point[0] + 10, 10], [point[0] + 40, 10], [point[0] + 30, 20]
                ]
              },
              style: api.style({fill: 'green', stroke: 'yellow'})
            },
            {
              type: 'polygon',
              shape: {
                points: [
                  [point[0], 10 + params.coordSys.height], [point[0] + 10, params.coordSys.height], [point[0] + 40, params.coordSys.height], [point[0] + 30, 10 + params.coordSys.height]
                ]
              },
              style: api.style({color: 'pink', opacity: 1})
            }
          ]
        }
      }
      return {
        tooltip: {
          formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[3] + ' ms'
          }
        },
        title: {
          text: 'Profile',
          left: 'center'
        },
        dataZoom: [{
          type: 'slider',
          filterMode: 'weakFilter',
          showDataShadow: false,
          top: 400,
          height: 10,
          borderColor: 'transparent',
          backgroundColor: '#e2e2e2',
          handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
          handleSize: 20,
          handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
          },
          labelFormatter: ''
        }, {
          type: 'inside',
          filterMode: 'weakFilter'
        }],
        grid: {
          height: 300
        },
        xAxis: {
          // min: startTime,
          // scale: true
          // axisLabel: {
          //   formatter: function (val) {
          //     return Math.max(0, val - startTime) + ' ms'
          //   }
          // }
        },
        yAxis: {
          data: categories
        },
        series: [{
          type: 'custom',
          renderItem: renderItem,
          itemStyle: {
            normal: {
              opacity: 0.8
            }
          },
          encode: {
            x: 0,
            y: 1
          },
          data: data
        }]
      }
    }
  }
}
</script>
