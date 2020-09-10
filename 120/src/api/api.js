import request from '@/utils/request'

/** 获取指派医院信息 */
export function getHospitalList() {
  return request({
    url: '/sys/dict/getHospitalList',
    method: 'post',
    data: {}
  })
}

/** 保存并调派急救任务 */
export function saveAndSend(data) {
  return request({
    url: '/emergTask/saveAndSend',
    method: 'post',
    data: data
  })
}

/** 分页查询急救记录 */
export function getPage(query) {
  return request({
    url: '/emergTask/getPage',
    method: 'post',
    data: query
  })
}
/** 获取急救任务详情 */
export function getDetail(taskNo) {
  return request({
    url: `/emergTask/getDetail/${taskNo}`,
    method: 'get'
  })
}
/** 获取急救任务详情 */
export function saveAndSendForTask(taskNo, taskSendList) {
  return request({
    url: `/emergTask/saveAndSendForTask/${taskNo}`,
    method: 'post',
    data: {
      taskSendList
    }
  })
}
/** 获取急救任务详情 */
export function cancelEmergTask(query) {
  return request({
    url: `/emergTask/cancel`,
    method: 'post',
    data: query
  })
}
