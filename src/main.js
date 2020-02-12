// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 淘宝团队处理移动端分辨率自适应的解决方案插件
// import 'lib-flexible'
// 异步请求模块
import axios from 'axios'
import qs from 'qs'
// 处理移动端单击300毫秒延迟问题
import fastclick from 'fastclick'

// elementUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
fastclick.attach(document.body)
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.use(Mint)
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
