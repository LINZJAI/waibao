import request from '../utils/request'

/** 用户、车辆信息统计 */
export function userAndCar() {
  return request({
    url: `/taskDispatch/count/userAndCar`,
    method: 'get'
  })
}

/** 患者信息统计 */
export function patient() {
  return request({
    url: `/taskDispatch/count/patient`,
    method: 'get'
  })
}
/** 患者信息统计 */
export function getListByDate(query) {
  return request({
    url: `/taskDispatch/getListByDate`,
    method: 'post',
    data: query
  })
}

/** 获取所有车辆及当前位置 */
export function getListCarLocation() {
  return request({
    url: '/car/listCarLocation',
    method: 'get'
  })
}
