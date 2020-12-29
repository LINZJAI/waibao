import request from '@/utils/request'

/** 批量获取字典项目 */
export function multiGetList(list) {
  return request({
    url: '/sys/dict/multiGetList',
    method: 'post',
    data: {
      list
    }
  })
}
/** 批量获取字典项目 */
export function getDiagNodeList() {
  return request({
    url: '/triage/diagsDict/getDiagNodeList',
    method: 'get'
  })
}

/** 批量获取字典项目 */
export function getDiagNodeDetail(itemCode, cancelToken) {
  return request({
    url: `/triage/diagsDict/getDiagNodeDetail/${itemCode}`,
    method: 'get',
    cancelToken
  })
}

/** 获取科室列表 */
export function getDeptList() {
  return request({
    url: `/sys/dept/getDeptList`,
    method: 'post',
    data: {
      type: '1'
    }
  })
}

/** 获取科室空床位 */
export function getBedList(deptCode) {
  return request({
    url: `/sys/bed/getList/${deptCode}`,
    method: 'get'
  })
}

/** 分诊记录：创建并获取急诊ID */
export function createRegisterId() {
  return request({
    url: `/triage/register/createRegisterId`,
    method: 'get'
  })
}
/** 表单：保存或者修改 */
export function formSave(data) {
  return request({
    url: `/form/save`,
    method: 'post',
    data
  })
}
/** 表单：根据块类型和ID获取表单列表 */
export function getListByBlock(formCode, blockId, blockType = 'triage') {
  return request({
    url: `/form/getDetailListByBlock`,
    method: 'post',
    data: {
      blockType,
      formCode,
      blockId
    }
  })
}
/** 表单：根据块类型和ID获取表单列表 */
export function formGetById(id) {
  return request({
    url: `/form/get/${id}`,
    method: 'get'
  })
}
/** 分诊记录：保存 */
export function registerSave(data) {
  return request({
    url: `/triage/register/save`,
    method: 'post',
    data
  })
}
/** 分诊记录：保存 */
export function registerUpdate(data) {
  return request({
    url: `/triage/register/update`,
    method: 'post',
    data
  })
}
/** 分诊记录：分页 */
export function registerGetPage(data) {
  return request({
    url: `/triage/register/getPage`,
    method: 'post',
    data
  })
}
/** 分诊记录：保存 */
export function getDetail(registerId) {
  return request({
    url: `/triage/register/getDetail/${registerId}`,
    method: 'get'
  })
}
/** 分诊记录：统计病人去向 */
export function countByRegion(data) {
  return request({
    url: `/triage/register/countByRegion`,
    method: 'post',
    data
  })
}

/** 获取表单项目 */
export function getItemValueList(formCode) {
  return request({
    url: `/form/getItemValueList/${formCode}`,
    method: 'get'
  })
}
/** 获取表单项目 */
export function getPatientInfo(keyword) {
  return request({
    url: `/dispatch/patientInfo/getPage`,
    method: 'post',
    data: { keyword, size: 99999999, hadFinishNodeCode: 'task_over' }
  })
}
/** 获取表单项目 */
export function createFromEms(registerId, infoId) {
  return request({
    url: `/triage/register/createFromEms`,
    method: 'post',
    data: { registerId, infoId }
  })
}

/** 获取一段日期的调度记录 */
export function getListByDate() {
  return request({
    url: `/taskDispatch/getListByDate`,
    method: 'post',
    data: { hadFinishNodeCode: 'task_over' }
  })
}
