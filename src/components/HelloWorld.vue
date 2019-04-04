<template>
  <div class="hello">
    <DvLine></DvLine>
    <Custom></Custom>
  </div>
</template>

<script>

import DvLine from './common/charts/DvLine'
import Custom from './common/charts/Custom'

export default {
  name: 'HelloWorld',
  components: {
    DvLine,
    Custom
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
