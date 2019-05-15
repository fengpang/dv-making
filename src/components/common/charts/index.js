import Custom from './Custom'
import DvLine from './DvLine'
import DvBar from './DvBar'
import DvPie from './DvPie'

const charts = [
  Custom,
  DvLine,
  DvBar,
  DvPie
]

const defaultConfig = {
  fontSize: 12,
  labelColor: '#fff',
  axisColor: 'rgba(0, 255, 238, 1)'
}

export default function install (Vue, options = defaultConfig) {
  Vue.prototype.$config = options
  charts.forEach(chart => {
    Vue.component(chart.name, chart)
  })
}
