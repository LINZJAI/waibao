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
        <td class="value" colspan="7">{{ taskInfo.departureHospital }}</td>
      </tr>
      <NoAcceptPart
        v-for="(item, index) in dispatchRecordList"
        :key="index"
        :item="item"
        :index="index"
        :carDict="carDict"
        :doctorDict="doctorDict"
        :nurseDict="nurseDict"
        :driverDict="driverDict"
        :dispatcherDict="dispatcherDict"
        :delCar="delCar"
        partMode="noAccept"
      >
      </NoAcceptPart>
    </table>

    <el-button type="primary" class="add-car" @click="addCar" size="small"
      >新增车辆</el-button
    >
  </div>
</template>
<style lang="scss" scoped>
.block-select {
  width: 100%;
}
.add-car {
  margin: 10px 0;
}
</style>
<script>
import {
  listCarStatus,
  getListUserStatus,
  deleteDispatchRecord
} from '@/api/common'
import NoAcceptPart from './dispatch-part/no-accept-part'
export default {
  props: {
    taskInfo: {
      type: Object,
      default: () => ({})
    },
    dispatchRecordList: {
      type: Array,
      default: () => []
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
      nurseList: []
    }
  },
  methods: {
    getUserInfo(empNo, list) {
      return list.find(item => item.empNo == empNo)
    },

    mergeData() {
      let result = []
      for (let item of this.dispatchRecordList) {
        let driverObj = this.getUserInfo(item.driverNo, this.driverDict) || {}
        let dispatcherObj =
          this.getUserInfo(item.dispatchEmpNo, this.dispatcherDict) || {}

        result.push({
          ...item,
          taskNo: this.$route.query.taskNo,
          carNo: item.carNo,
          driverNo: driverObj.empNo,
          driverName: driverObj.empName,
          dispatchEmpNo: dispatcherObj.empNo,
          dispatchEmpName: dispatcherObj.empName,
          driverPhone: item.driverPhone,
          nurseList: item.nurseNoList.map(no =>
            this.getUserInfo(no, this.nurseDict)
          ),
          doctorList: item.doctorNoList.map(no =>
            this.getUserInfo(no, this.doctorDict)
          )
        })
      }
      return result
    },

    addCar() {
      this.dispatchRecordList.push({
        taskNo: '',
        carNo: '',
        driverNo: '',
        driverName: '',
        driverPhone: '',
        nurseList: [],
        doctorList: [],
        doctorNoList: [],
        nurseNoList: [],
        mode: 'edit',
        status: '0'
      })
    },
    delCar(item, index) {
      if (item.dispatchId) {
        this.$confirm('是否删除此调度?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteDispatchRecord(item.dispatchId).then(res => {
            this.openSuccessModal('删除此调度成功~')
          })
        })
      } else {
        this.dispatchRecordList.splice(index, 1)
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
  components: {
    NoAcceptPart
  }
}
</script>
