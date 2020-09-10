<template>
  <div class="detail-con">
    <DetailTablePersonal
      :dataSource="detail"
      v-if="detail.taskInfo.eventType == '个人求救'"
    ></DetailTablePersonal>
    <!-- <HelpTableQt></HelpTableQt> -->
    <DetailTableGroup
      :dataSource="detail"
      v-if="detail.taskInfo.eventType == '群体事件'"
    ></DetailTableGroup>
    <ManageTable
      ref="ManageTable"
      :taskInfo="detail.taskInfo"
      :dispatchRecordList="detail.dispatchRecordList"
      v-if="detail.taskInfo.status === '0'"
    ></ManageTable>
    <ManageTableReject
      ref="ManageTableReject"
      :taskInfo="detail.taskInfo"
      v-if="detail.taskInfo.status === '-1'"
    ></ManageTableReject>
    <ManageTableCancel
      ref="ManageTableReject"
      :taskInfo="detail.taskInfo"
      v-if="detail.taskInfo.status === '-2'"
    ></ManageTableCancel>
    <ManageTableAccept
      ref="ManageTableAccept"
      :taskInfo="detail.taskInfo"
      :dispatchRecordList="detail.dispatchRecordList"
      :openSuccessModal="openSuccessModal"
      v-if="detail.taskInfo.status === '1'"
    ></ManageTableAccept>
    <ManageTableComplete
      ref="ManageTableAccept"
      :taskInfo="detail.taskInfo"
      :dispatchRecordList="detail.dispatchRecordList"
      :openSuccessModal="openSuccessModal"
      v-if="detail.taskInfo.status === '2'"
    ></ManageTableComplete>
    <div class="footer-btn-row" v-if="detail.taskInfo.status === '0'">
      <el-button size="small" @click="$router.back()">返回</el-button>
      <el-button size="small" type="danger" @click="reject">拒绝派车</el-button>
      <el-button size="small" type="primary" @click="submit"
        >确定派单</el-button
      >
    </div>
    <div class="footer-btn-row" v-if="detail.taskInfo.status === '-1'">
      <el-button size="small" @click="$router.back()">返回</el-button>
    </div>
    <div class="footer-btn-row" v-if="detail.taskInfo.status === '-2'">
      <el-button size="small" @click="$router.back()">返回</el-button>
    </div>
    <div class="footer-btn-row" v-if="detail.taskInfo.status === '2'">
      <el-button size="small" @click="$router.back()">返回</el-button>
    </div>
    <div class="footer-btn-row" v-if="detail.taskInfo.status === '1'">
      <el-button size="small" @click="$router.back()">返回</el-button>
      <!-- <el-button size="small">补录调度信息</el-button> -->
      <el-button
        size="small"
        type="primary"
        @click="archive"
        v-if="detail.taskInfo.canArchive"
        >归档</el-button
      >
    </div>
    <SuccessModal ref="SuccessModal" :init="init"></SuccessModal>
  </div>
</template>
<style lang="scss" scoped>
.detail-con {
  padding: 15px;
  overflow: auto;
}
.footer-btn-row {
  margin: 20px;
  display: flex;
  justify-content: center;
}
</style>
<script>
import DetailTablePersonal from '../components/detail-table-personal'
import DetailTableGroup from '../components/detail-table-group'
import ManageTable from '../components/manage-table'
import ManageTableReject from '../components/manage-table-reject'
import ManageTableAccept from '../components/manage-table-accept.vue'
import ManageTableComplete from '../components/manage-table-complete'
import ManageTableCancel from '../components/manage-table-cancel'
import {
  getDetail,
  acceptTask,
  rejectTask,
  archive,
  deleteDispatchRecord
} from '@/api/common'
import SuccessModal from '../modal/success-modal'
export default {
  props: {},
  data() {
    return {
      detail: {
        dispatchRecordList: [],
        taskInfo: {}
      },
      manageInfo: {
        cardList: []
      }
    }
  },

  methods: {
    init() {
      getDetail(this.$route.query.taskNo).then(res => {
        this.detail = {
          dispatchRecordList: [],
          taskInfo: {}
        }
        this.$nextTick(() => {
          this.detail = res.data
          if (this.detail.taskInfo.status === '0') {
            this.detail.dispatchRecordList = [
              {
                taskNo: '',
                carNo: '',
                driverNo: '',
                driverName: '',
                driverPhone: '',
                nurseList: [],
                doctorList: [],
                doctorNoList: [],
                nurseNoList: [],
                driverDict: [],
                mode: 'edit',
                status: '0'
              }
            ]
          } else {
            this.detail.dispatchRecordList = this.detail.dispatchRecordList.map(
              item => {
                return {
                  ...item,
                  doctorNoList: item.doctorList.map(o => o.empNo),
                  nurseNoList: item.nurseList.map(o => o.empNo),
                  mode: 'view',
                  driverDict: []
                }
              }
            )
          }
        })
      })
    },
    reject() {
      this.$prompt('拒绝理由', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        if (value) {
          rejectTask(this.$route.query.taskNo, value).then(res => {
            // this.$message.success('拒绝成功')
            // this.$router.back()
            this.$refs.SuccessModal.open('拒绝成功')
          })
        }
      })
    },
    submit() {
      let queryList = this.$refs.ManageTable.mergeData()
      Promise.all(queryList.map(q => acceptTask(q))).then(res => {
        // this.$message.success('派单成功')
        this.$refs.SuccessModal.open('已派单成功，等待车辆确认任务～')
        // this.$router.back()
      })
    },
    archive() {
      this.$confirm('是否确认归档?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        archive(this.$route.query.taskNo).then(res => {
          // this.$message.success('归档成功')
          // this.init()
          this.$refs.SuccessModal.open('归档成功')
        })
      })
    },
    openSuccessModal(title) {
      this.$refs.SuccessModal.open(title)
    }
  },
  created() {
    this.init()
  },
  mounted() {
    // this.$refs.SuccessModal.open()
  },
  components: {
    DetailTablePersonal,
    DetailTableGroup,
    ManageTable,
    ManageTableReject,
    ManageTableAccept,
    SuccessModal,
    ManageTableComplete,
    ManageTableCancel
  }
}
</script>
