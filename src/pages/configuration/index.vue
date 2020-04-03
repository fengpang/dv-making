<template>
  <el-row>
    <PageConf :template="template" @increasePage="increasePage"></PageConf>
    <MainView :template="template" v-model="currentItem"></MainView>
    <ModelConf :current-item="currentItem"></ModelConf>
    <!-- <el-button @click.native="preview">预览</el-button> -->
  </el-row>
</template>

<script>
import PageConf from './PageConf'
import ModelConf from './ModelConf'
import MainView from './MainView'

export default {
  data () {
    return {
      dialogVisible: false,
      template: {
        pageConf: {
          width: 1000,
          height: 800,
          panel: 'DefaultPanel',
          bgc: 'pink'
        },
        currentPage: 0,
        pages: [
          {name: '首页', components: []}
        ]
      },
      currentItem: {style: {}}
    }
  },
  methods: {
    increasePage (name) {
      this.template.pages.push({components: [], name})
    },
    preview () {
      window.open('http://localhost:8080/#/preview')
    },
    setStorage (name, data) {
      localStorage.setItem(name, JSON.stringify(data))
    },
    clearStorage () {
      window.onbeforeunload = () => localStorage.clear()
    }
  },
  watch: {
    template: {
      deep: true,
      handler () {
        this.setStorage('template', this.template)
      }
    }
  },
  components: {
    PageConf,
    ModelConf,
    MainView
  },
  created () {
    this.setStorage('template', this.template)
    this.clearStorage()
    this.template.config = this.$config
  }
}
</script>
