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
        <td class="value">已受理</td>
      </tr>
      <template v-for="(item, index) in dispatchRecordList">
        <AcceptPart
          v-if="item.status !== '0'"
          :key="index"
          :item="item"
          :index="index"
          :carDict="carDict"
          :doctorDict="doctorDict"
          :nurseDict="nurseDict"
          :driverDict="driverDict"
          :dispatcherDict="dispatcherDict"
          :savePart="savePart"
          :onPrint="onPrint"
          :openDispatchDetailModal="openDispatchDetailModal"
          :cancelDispatch="cancelDispatch"
          :delCar="delCar"
        >
        </AcceptPart>
        <NoAcceptPart
          v-else
          :key="index"
          :item="item"
          :index="index"
          :carDict="carDict"
          :doctorDict="doctorDict"
          :nurseDict="nurseDict"
          :driverDict="driverDict"
          :dispatcherDict="dispatcherDict"
          :savePart="savePart"
          :onPrint="onPrint"
          :delPart="delPart"
          :openDispatchDetailModal="openDispatchDetailModal"
          :cancelDispatch="cancelDispatch"
          :delCar="delCar"
        >
        </NoAcceptPart>
      </template>
    </table>

    <el-button type="primary" class="add-car" @click="addCar" size="small"
      >新增车辆</el-button
    >
    <el-button type="text" class="user-info" @click="openUserInfoModal"
      >人员通讯录</el-button
    >
    <el-dialog title="人员通讯录" :visible.sync="dialogVisible" width="600">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column label="序号" width="50" type="index" align="center">
        </el-table-column>
        <el-table-column prop="carIndex" label="车辆" min-width="100">
        </el-table-column>
        <el-table-column prop="post" label="职务" min-width="100">
        </el-table-column>
        <el-table-column prop="name" label="姓名" min-width="100">
        </el-table-column>
        <el-table-column prop="phone" label="电话" min-width="100">
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >关闭</el-button
        >
      </div>
    </el-dialog>

    <div class="print-table" v-if="printData" ref="printable">
      <div class="print-title">{{ taskInfo.departureHospital }}出车单</div>
      <div class="print-time">{{
        moment(taskInfo.dispatchTime).format('YYYY-MM-DD')
      }}</div>
      <table class="info-table">
        <colgroup>
          <col width="90" />
          <col width="140" />
          <col width="90" />
          <col width="90" />
          <col width="90" />
          <col width="90" />
          <col width="140" />
        </colgroup>
        <tr>
          <td class="label">急救编号</td>
          <td>{{ taskInfo.taskNo }}</td>
          <td class="label">受理时间</td>
          <td colspan="2">{{ taskInfo.dispatchTime }}</td>
          <td class="label">联系电话</td>
          <td>{{ printData.driverPhone }}</td>
        </tr>
        <tr>
          <td class="label">患者姓名</td>
          <td>{{ taskInfo.patientName }}}}</td>
          <td class="label">患者性别</td>
          <td colspan="2">{{ taskInfo.sex }}</td>
          <td class="label">患者年龄</td>
          <td>{{ taskInfo.age }}</td>
        </tr>
        <tr>
          <td class="label">身份证号</td>
          <td>无名氏</td>
          <td class="label">求救类型</td>
          <td colspan="2">{{ taskInfo.eventType }}</td>
          <td class="label">求救方式</td>
          <td>{{ taskInfo.askHelpType }}</td>
        </tr>
        <tr>
          <td class="label">地址</td>
          <td colspan="4">{{ taskInfo.eventLocation }}</td>
          <td class="label">呼救区域</td>
          <td></td>
        </tr>
        <tr>
          <td class="label">出车单位</td>
          <td colspan="4">{{ taskInfo.departureHospital }}</td>
          <td class="label">呼救区域</td>
          <td></td>
        </tr>
        <tr>
          <td class="label">主诉</td>
          <td colspan="2">{{ taskInfo.complaints }}</td>
          <td class="label">初步诊断</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td class="label">处理结果</td>
          <td colspan="2"></td>
          <td class="label">空诊原因</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td class="label">送往医院</td>
          <td colspan="4">{{ printData.departureHospital }}</td>
          <td class="label">行驶里程</td>
          <td></td>
        </tr>
        <tr>
          <td class="label">派单时间</td>
          <td>{{ printData.dispatchTime }}</td>
          <td class="label">出车时间</td>
          <td colspan="2">{{ printData.carStartTime }}</td>
          <td class="label">抵达现场</td>
          <td>{{ printData.arrivedPlaceTime }}</td>
        </tr>
        <tr>
          <td class="label">病人上车</td>
          <td></td>
          <td class="label">到院时间</td>
          <td colspan="2">{{ printData.arrivedHospitalTime }}</td>
          <td class="label">完成时间</td>
          <td>{{ printData.eventTime }}</td>
        </tr>
        <tr>
          <td class="label">备注</td>
          <td colspan="6" style="height: 100px"></td>
        </tr>
      </table>
    </div>
    <DispatchDetailModal ref="DispatchDetailModal"></DispatchDetailModal>
  </div>
</template>
<style lang="scss" scoped>
.block-select {
  width: 100%;
}
.info-table-wrapper {
  position: relative;
  .user-info {
    position: absolute;
    top: -3px;
    right: 10px;
  }
}
.dialog-footer {
  text-align: center;
}
.print-table {
  width: 720px;
  display: none;
  .print-title {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    padding: 10px;
  }
  .print-time {
    text-align: right;
    font-size: 12px;
    padding: 0px 0 10px;
  }
  .label {
    text-align: center;
    padding: 0;
  }
  table {
    table-layout: fixed;
    border-collapse: collapse;
    td,
    tr {
      border: 1px solid #000;
      padding: 0 10px;
    }
  }
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
import moment from 'moment'
import print from 'printing'
import {
  updateDispatchRecord,
  acceptTask,
  cancelDispatchRecord
} from '@/api/common'
import AcceptPart from '../components/dispatch-part/accept-part'
import NoAcceptPart from '../components/dispatch-part/no-accept-part'
import DispatchDetailModal from '../modal/dispatch-detail-modal'
export default {
  props: {
    taskInfo: {
      type: Object,
      default: () => ({})
    },
    dispatchRecordList: {
      type: Array,
      default: () => []
    },
    openSuccessModal: {
      type: Function
    }
  },
  data() {
    return {
      mode: 'view',
      carDict: [],
      doctorDict: [],
      nurseDict: [],
      driverDict: [],
      dispatcherDict: [],
      dialogVisible: false,
      printData: null,
      driverAllDict: []
    }
  },
  computed: {
    tableData() {
      let result = []
      for (let i = 0; i < this.dispatchRecordList.length; i++) {
        let driver = this.getUserInfo(
          this.dispatchRecordList[i].driverNo,
          this.driverAllDict
        )
        if (driver) {
          result.push({
            carIndex: `车辆${i + 1}`,
            post: '司机',
            name: driver.empName,
            phone: driver.phone
          })
        }

        let dispatcher = this.getUserInfo(
          this.dispatchRecordList[i].dispatchEmpNo,
          this.dispatcherDict
        )
        if (dispatcher) {
          result.push({
            carIndex: `车辆${i + 1}`,
            post: '调度员',
            name: dispatcher.empName,
            phone: dispatcher.phone
          })
        }

        result.push(
          ...(this.dispatchRecordList[i].doctorList || []).map(item => ({
            carIndex: `车辆${i + 1}`,
            post: '出诊医生',
            name: item.empName,
            phone: item.phone
          }))
        )
        result.push(
          ...(this.dispatchRecordList[i].nurseList || []).map(item => ({
            carIndex: `车辆${i + 1}`,
            post: '出诊护士',
            name: item.empName,
            phone: item.phone
          }))
        )
      }
      return result
    }
  },
  methods: {
    moment,
    onPrint(item) {
      this.printData = item

      this.$nextTick(() => {
        print(this.$refs.printable, {
          direction: 'vertical',
          injectGlobalCss: true,
          scanStyles: false,
          css: `
          .print-table {
            display: block !important;
          }
        `
        })
      })
    },
    openUserInfoModal() {
      this.dialogVisible = true
    },
    getUserInfo(empNo, list) {
      return list.find(item => item.empNo == empNo)
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
    },
    mergeData(item) {
      console.log(item, 'iyee')
      let driverObj = this.getUserInfo(item.driverNo, item.driverDict) || {}
      let dispatcherObj =
        this.getUserInfo(item.dispatchEmpNo, this.dispatcherDict) || {}

      return {
        ...item,
        taskNo: this.$route.query.taskNo,
        carNo: item.carNo,
        driverNo: driverObj.empNo,
        driverName: driverObj.empName,
        dispatchEmpNo: dispatcherObj.empNo,
        dispatchEmpName: dispatcherObj.empName,
        driverPhone: item.driverPhone,
        nurseList: item.nurseNoList.map(no =>
          this.getUserInfo(no, [...this.nurseDict, ...item.nurseList])
        ),
        doctorList: item.doctorNoList.map(no =>
          this.getUserInfo(no, [...this.doctorDict, ...item.doctorList])
        )
      }
    },
    savePart(item) {
      let query = this.mergeData(item)
      if (item.dispatchId) {
        updateDispatchRecord(query).then(res => {
          Object.assign(item, res.data)
          // this.$message.success('保存成功')
          item.mode = 'view'
          this.openSuccessModal('已派单成功，等待车辆确认任务～')
        })
      } else {
        acceptTask(query).then(res => {
          // this.$message.success('派单成功')
          // this.$router.back()
          this.openSuccessModal('新增车辆成功，等待车辆确认任务～')
        })
      }
    },
    delPart(index) {
      this.$confirm('是否删除此调度?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.dispatchRecordList.splice(index, 1)
      })
    },
    openDispatchDetailModal(item, index) {
      this.$refs.DispatchDetailModal.open(item, index)
    },
    cancelDispatch(item, index) {
      this.$prompt('取消任务理由', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: item.abnormalMessage ? item.abnormalMessage.title : ''
      }).then(({ value }) => {
        if (value) {
          cancelDispatchRecord(item.dispatchId, value).then(res => {
            this.$message.success(`任务已取消，原因为：${value}`)
            this.$parent.init()
          })
        }
      })
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
      userType: 'driver'
      // inTask: false,
      // normal: true
    }).then(res => {
      this.driverAllDict = res.data
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
    AcceptPart,
    NoAcceptPart,
    DispatchDetailModal
  }
}
</script>
