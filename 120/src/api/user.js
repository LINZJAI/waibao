import request from '@/utils/request'

/** 登录 */
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

/** 修改密码 */
export function updatePasswor(query) {
  return request({
    url: '/user/updatePassword',
    method: 'post',
    data: query
  })
}
/** 获取用户信息 */
export function getInfo() {
  return request({
    url: '/user/getInfo',
    method: 'get'
  })
}
