<template>
  <el-row>
    <PageConf :template="template" @increasePage="increasePage"></PageConf>
    <MainView :template="template" v-model="currentItem"></MainView>
    <ModelConf :current-item="currentItem"></ModelConf>
    <el-button @click.native="preview">预览</el-button>
  </el-row>
</template>

<script>
import PageConf from './PageConf'
import ModelConf from './ModelConf'
import MainView from './MainView'
import ruoter from 'vue-router'

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
    },
    preview () {
      this.addRoute()
      console.log(this.$router)
      window.open('http://localhost:8080/#/preview')
    },
    setStorage (name, data) {
      localStorage.setItem(name, JSON.stringify(data))
    },
    clearStorage () {
      window.onbeforeunload = () => localStorage.clear()
    },
    addRoute () {
      ruoter.addRoutes([
        {
          name: 'preview',
          path: '/preview',
          component: () => import('@/pages/preview')
        }
      ])
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
