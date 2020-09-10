import request from '@/utils/request'

/** 获取所有车辆及状态 */
export function listCarStatus(data) {
  return request({
    url: '/car/listCarStatus',
    method: 'post',
    data: {}
  })
}

/** 今日急救任务统计 */
export function countTask(data) {
  return request({
    url: '/emergTask/countTask',
    method: 'get',
    data: {}
  })
}

/** 查询急救任务列表 */
export function getList(query) {
  return request({
    url: '/emergTask/getList',
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

/** 获取所有用户和状态 */
export function getListUserStatus(query) {
  return request({
    url: '/user/listUserStatus',
    method: 'post',
    data: query
  })
}
/** 获取所有用户和状态 */
export function getDetail(taskNo) {
  return request({
    url: `/emergTask/getDetail/${taskNo}`,
    method: 'get'
  })
}
/** 确认派单 */
export function acceptTask(query) {
  return request({
    url: `/taskDispatch/acceptTask`,
    method: 'post',
    data: query
  })
}
/** 拒绝 */
export function rejectTask(taskNo, reason) {
  return request({
    url: `/taskDispatch/rejectTask`,
    method: 'post',
    data: { taskNo, reason }
  })
}

/** 消息列表 */
export function getReceiverMessage(query) {
  return request({
    url: `/sys/message/receiver/getPage`,
    method: 'post',
    data: query
  })
}

/** 批量已读 */
export function readAll(list) {
  return request({
    url: `/sys/message/receiver/readAll`,
    method: 'post',
    data: { list }
  })
}
/** 批量删除 */
export function deleteAll(list) {
  return request({
    url: `/sys/message/receiver/deleteAll`,
    method: 'post',
    data: { list }
  })
}

/** 患者列表 */
export function getPatientList(query) {
  return request({
    url: `/emergTask/getPage`,
    method: 'post',
    data: query
  })
}

/** 患者详情 */
export function getListByTaskNo(taskNo) {
  return request({
    url: `/dispatch/patientInfo/getListByTaskNo/${taskNo}`,
    method: 'get'
  })
}
/** 保存患者信息 */
export function saveOrUpdateInfo(query) {
  return request({
    url: `/dispatch/patientInfo/saveOrUpdateInfo`,
    method: 'post',
    data: query
  })
}
/** 获取消息详情 */
export function getMessageDetail(messageId) {
  return request({
    url: `/sys/message/receiver/getDetail/${messageId}`,
    method: 'get'
  })
}
/** 归档 */
export function archive(taskNo) {
  return request({
    url: `/emergTask/archive/${taskNo}`,
    method: 'get'
  })
}
/** 修改调度记录 */
export function updateDispatchRecord(query) {
  return request({
    url: `/taskDispatch/updateDispatchRecord`,
    method: 'post',
    data: query
  })
}
/** 获取调度记录详情 */
export function getTaskDispatchDetail(dispatchId) {
  return request({
    url: `/taskDispatch/getDetail/${dispatchId}`,
    method: 'get'
  })
}
/** 确认消息 */
export function ackAll(list) {
  return request({
    url: `/sys/message/receiver/ackAll`,
    method: 'post',
    data: { list }
  })
}
/** 取消调度 */
export function cancelDispatchRecord(dispatchId, reason) {
  return request({
    url: `/taskDispatch/cancelDispatchRecord`,
    method: 'post',
    data: {
      dispatchId: dispatchId,
      reason: reason
    }
  })
}
/** 删除调度 */
export function deleteDispatchRecord(dispatchId) {
  return request({
    url: `/taskDispatch/deleteDispatchRecord/${dispatchId}`,
    method: 'get'
  })
}

/** 患者列表 */
export function getConsultList(query) {
  return request({
    url: `/consult/info/getPage`,
    method: 'post',
    data: query
  })
}

/** 获取车辆执行中调度记录和最后会诊信息 */
export function getConsultDetailForCarNo(carNo) {
  return request({
    url: `/taskDispatch/getConsultDetailForCarNo/${carNo}`,
    method: 'get'
  })
}
