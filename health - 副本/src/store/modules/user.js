import { login, logout, getInfo } from '@/api/user'
import { getUserInfo, setUserInfo, removeUserInfo } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    userInfo: getUserInfo()
  }
}

const state = getDefaultState()

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    setUserInfo(userInfo)
    state.userInfo = userInfo
  },
  REMOVE_USERINFO: (state, userInfo) => {
    state.userInfo = null
    removeUserInfo()
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
