import Vue from 'vue'
import Vuex from 'vuex'
// 这里是我们的仓库

// 仓库结构
// state:仓库里的数据
// mutations: 用来修改仓库数据，但是不能写异步代码
// getters: 类似于computed，可以用来筛选仓库数据
// actions: 调用mutation函数，可以执行异步代码

// 特点：
// 1.仓库数据是响应式的
// 2.仓库数据要想修改，唯一途径是mutations里面的函数
// 3.仓库数据并不能持久化，一旦刷新页面数据就没有了

// 仓库场合：
// 1.登录之后的用户信息
// 2.购物车内容
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// 日志打印  对每一步操作都打印相关信息记录
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: debug ? [createLogger()] : []
})
