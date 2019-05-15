<template>
  <!-- <div class="panel animated"
       :style="{ height }"
       :class="animates[animateIndex]"> -->
  <div class="panel animated">
    <slot name="title">
      <div class="header">
        <h4 v-if="title" class="title">{{ title }}</h4>
      </div>
    </slot>
    <slot/>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'DvPanel',
  props: {
    title: String,
    rLable: String
  }
}
</script>

<style lang="less" scoped>
  .panel {
    width: 100%;
    height: 100%;
    padding: 19px 10px;
    box-sizing: border-box;
    background: url("../../assets/box-bg.png") no-repeat;
    background-size: 101% 101%;
    background-position: center;
    .header {
      color: #fff;
      display: flex;
      justify-content: space-between;
      .title {
        margin: 0;
        &:before {
          content: ' ';
          width: 4px;
          height: 0.8em;
          margin: 0 3px;
          display: inline-block;
          background-color: #0078fe;
        }
      }
      .source {
        font-size: 13px;
      }
    }
  }
</style>
