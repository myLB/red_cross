<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import './assets/js/rem.js'
export default {
  name: 'app',
}
</script>

<style src="./assets/css/common.css"></style>
<style src="./assets/css/less/common.less"></style>
<style>
  .mint-cell-wrapper{
    font-size: 0.14rem;
    line-height: 0.46rem;
    color: #333;
  }
  .mint-cell-allow-right::after{
    width: 0.07rem;
    height: 0.07rem;
    border-color: #666;
    right: .07rem;
    border-width: 1px 1px 0 0;
  }
</style>
