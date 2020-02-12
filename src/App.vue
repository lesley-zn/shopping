<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
// import Home from './components/Home'
export default {
  name: 'App'
}
function fn () {
  // 获取设备的宽,保存到变量 screen_w
  var screenw = document.body.clientWidth || document.documentElement.clientWidth
  // 设计稿的宽
  var desw = 750

  var rate = screenw / desw
  // 320  /     640   = 0.5  * 100 = 50
  document.documentElement.style.fontSize = rate * 100 + 'px'
}
fn()
// js改变手机屏  调用fn执行
window.addEventListener('resize', fn)
</script>

<style>
/* 引入重置样式 */
@import './assets/css/reset.css';
@import './assets/css/index.css';
@import './assets/css/normalize.css'

</style>
