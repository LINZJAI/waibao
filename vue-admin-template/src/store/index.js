import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import baseUser from './modules/baseUser'

import conversation from '../views/consultation/components/im/store/modules/conversation'
import group from '../views/consultation/components/im/store/modules/group'
import user from '../views/consultation/components/im/store/modules/user'
import video from '../views/consultation/components/im/store/modules/video'
import friend from '../views/consultation/components/im/store/modules/friend'
import blacklist from '../views/consultation/components/im/store/modules/blacklist'
import { Message } from 'element-ui'
Vue.use(Vuex)
// console.log(getters, 'getters')
const store = new Vuex.Store({
  modules: {
    app,
    settings,
    baseUser,
    conversation,
    group,
    friend,
    blacklist,
    user,
    video
  },
  getters: {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.baseUser.token,
    avatar: state => state.baseUser.avatar,
    name: state => state.baseUser.name,
    hidden(state) {
      // eslint-disable-next-line no-unused-vars
      const temp = state.current
      if (typeof document.hasFocus !== 'function') {
        return document.hidden
      }
      return !document.hasFocus()
    }
  },
  mutations: {
    startComputeCurrent(state) {
      state.intervalID = setInterval(() => {
        state.current = Date.now()
      }, 500)
    },
    stopComputeCurrent(state) {
      clearInterval(state.intervalID)
      state.intervalID = 0
    },
    showMessage(state, options) {
      if (state.message) {
        state.message.close()
      }
      state.message = Message({
        message: options.message,
        type: options.type || 'success',
        duration: options.duration || 2000,
        offset: 40
      })
    }
  }
})

export default store
