<template>
  <el-row>
    <PageConf :template="template" @increasePage="increasePage"></PageConf>
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
import PreView from './preview/Preview'

export default {
  data () {
    return {
      dialogVisible: false,
      template: {
        width: 1000,
        height: 800,
        currentPage: 0,
        panel: 'DefaultPanel',
        bgc: 'pink',
        config: {},
        pages: [
          {name: '首页', components: []}
        ]
      },
      currentItem: {}
    }
  },
  methods: {
    increasePage (name) {
      this.template.pages.push({components: [], name})
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
