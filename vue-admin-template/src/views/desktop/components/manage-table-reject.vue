<template>
  <div class="info-table-wrapper">
    <table class="info-table">
      <colgroup>
        <col width="120px" />
        <col width="20%" />
        <col width="120px" />
        <col width="20%" />
        <col width="120px" />
        <col width="20%" />
        <col width="120px" />
        <col width="20%" />
      </colgroup>
      <tr>
        <th colspan="8">{{ taskInfo.taskNo }}</th>
      </tr>
      <tr>
        <td class="key">急救单位：</td>
        <td class="value" colspan="3">{{ taskInfo.departureHospital }}</td>
        <td class="key"> 受理时间：</td>
        <td class="value">{{ taskInfo.dispatchTime }}</td>
        <td class="key">任务状态：</td>
        <td class="value">已拒绝</td>
      </tr>
      <tr>
        <td class="key">调度人员：</td>
        <td class="value">{{ taskInfo.dispatchEmpName }}</td>
        <td class="key"> 取消原因：</td>
        <td class="value" colspan="7">{{ taskInfo.reason }}</td>
      </tr>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.block-select {
  width: 100%;
}
</style>
<script>
import { listCarStatus, getListUserStatus } from '@/api/common'
export default {
  props: {
    taskInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      carDict: [],
      carNo: null,

      doctorDict: [],
      nurseDict: [],
      driverDict: [],
      dispatcherDict: [],
      doctorList: [],
      nurseList: [],
      driverNo: null,
      dispatchEmpNo: null,
      phone: null
    }
  },
  methods: {
    getUserInfo(empNo, list) {
      return list.find(item => item.empNo == empNo)
    },
    changeDriver(empNo) {
      if (empNo) {
        this.phone = this.getUserInfo(empNo, this.driverDict).phone
      }
    },
    mergeData() {
      let driverObj = this.getUserInfo(this.driverNo, this.driverDict) || {}
      let dispatcherObj =
        this.getUserInfo(this.dispatchEmpNo, this.dispatcherDict) || {}

      return {
        taskNo: this.$route.query.taskNo,
        carNo: this.carNo,
        driverNo: driverObj.empNo,
        driverName: driverObj.empName,
        dispatchEmpNo: dispatcherObj.empNo,
        dispatchEmpName: dispatcherObj.empName,
        driverPhone: this.phone,
        nurseList: this.nurseList.map(no =>
          this.getUserInfo(no, this.nurseDict)
        ),
        doctorList: this.doctorList.map(no =>
          this.getUserInfo(no, this.doctorDict)
        )
      }
    }
  },
  created() {
    listCarStatus().then(res => {
      this.carDict = res.data.filter(item => item.normal && !item.inTask)
    })
    getListUserStatus({
      userType: 'doctor',
      inTask: false,
      normal: true
    }).then(res => {
      this.doctorDict = res.data
    })
    getListUserStatus({
      userType: 'nurse',
      inTask: false,
      normal: true
    }).then(res => {
      this.nurseDict = res.data
    })
    getListUserStatus({
      userType: 'driver',
      inTask: false,
      normal: true
    }).then(res => {
      this.driverDict = res.data
    })
    getListUserStatus({
      userType: 'dispatcher',
      inTask: false,
      normal: true
    }).then(res => {
      this.dispatcherDict = res.data
    })
  },
  components: {}
}
</script>
