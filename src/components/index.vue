<template>
  <el-row>
    <PageConf :template="template"></PageConf>
    <MainView :template="template" v-model="currentItem"></MainView>
    <ModelConf :current-item="currentItem"></ModelConf>
  </el-row>
</template>

<script>
import PageConf from './PageConf'
import ModelConf from './ModelConf'
import MainView from './MainView'

export default {
  data () {
    return {
      template: {
        width: 1000,
        height: 800,
        bgc: 'pink',
        components: []
      },
      currentItem: {}
    }
  },
  components: {
    PageConf,
    ModelConf,
    MainView
  }
}
</script>
