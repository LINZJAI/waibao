import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'

import { MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
console.log(store, 'store')
import router from './router'
import '@/icons' // icon
// import "@/permission"; // permission control
import commonMixin from '@/mixins/common.mixin'

import tim from './views/consultation/components/im/tim'
import TIM from 'tim-js-sdk'
// import store from './views/consultation/components/im/store'
import './views/consultation/components/im/assets/icon/iconfont.css'
import './views/consultation/components/im/assets/icon/tim.css'
import Avatar from './views/consultation/components/im/components/avatar.vue'
Vue.component('avatar', Avatar)
window.tim = tim
window.TIM = TIM
window.store = store
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。
Vue.prototype.tim = tim
Vue.prototype.TIM = TIM
Vue.prototype.$store = store
Vue.prototype.$confirm = MessageBox.confirm
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.mixin(commonMixin)

Vue.directive('loadmore', {
  bind(el, binding) {
    console.log(el, 'el')
    // 获取element-ui定义好的scroll盒子
    const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown__wrap')
    SELECTWRAP_DOM.addEventListener('scroll', function() {
      const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight
      if (CONDITION) {
        binding.value()
      }
    })
  }
})

window.app = new Vue({
  el: '#app',

  router,
  // store,
  render: h => h(App)
})
