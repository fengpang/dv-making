<template>
  <el-row>
    <PageConf :template="template"></PageConf>
    <MainView :template="template" v-model="currentItem"></MainView>
    <ModelConf :current-item="currentItem"></ModelConf>
    <el-button @click.native="dialogVisible = true">预览</el-button>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%">
  <PreView :template="template"></PreView>
  <span slot="footer" class="dialog-footer">
  </span>
</el-dialog>
  </el-row>
</template>

<script>
import PageConf from './PageConf'
import ModelConf from './ModelConf'
import MainView from './MainView'
import PreView from './Preview'

export default {
  data () {
    return {
      dialogVisible: false,
      template: {
        width: 1000,
        height: 800,
        bgc: 'pink',
        config: {},
        components: []
      },
      currentItem: {}
    }
  },
  components: {
    PageConf,
    ModelConf,
    MainView,
    PreView
  }
}
</script>
