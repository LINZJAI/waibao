<template>
  <div class="record-wrapper">
    <div class="tree-con">
      <div class="tree-header">
        <div class="title">急救编号：{{ taskNo }}</div>
        <!-- <div class="btn">
          <el-button size="small" type="text" icon="el-icon-plus"
            >新增记录</el-button
          >
        </div> -->
      </div>
      <div class="tree-content">
        <evalList
          :configList="patientList"
          :infoId="infoId"
          :isModal="true"
        ></evalList>
        <!-- <BaseTree :configList="patientList" :infoId="infoId"></BaseTree> -->
      </div>
    </div>
    <el-dialog
      title="院前病历详情"
      :visible.sync="dialogVisible"
      width="800px"
      :show-close="true"
      :close-on-click-modal="true"
    >
      <div class="right-con">
        <div class="content">
          <PatientInfo
            ref="printable"
            v-if="currentPatient"
            :dataSource="currentPatient"
            :isEdit="isEdit"
          ></PatientInfo>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small" type="primary"
          >关闭</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.record-wrapper {
  height: 100%;
  display: flex;
  align-items: stretch;
  padding: 15px;
  .tree-con {
    width: 100%;
    border: 1px solid #dfdfdf;
    display: flex;
    flex-direction: column;

    .tree-header {
      height: 37px;
      border-bottom: 1px solid #dfdfdf;
      background: rgba(247, 250, 250, 1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 13px;
      .title {
        font-size: 13px;
        color: #333333;
        font-weight: bold;
      }
    }
    .tree-content {
      flex: 1;
      overflow: auto;
      padding: 10px;
    }
  }
  .right-con {
    /* width: 0; */
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    border: 1px solid #dfdfdf;
    border-left: 0;
    .tool {
      height: 37px;
      border-bottom: 1px solid #dfdfdf;
      display: flex;
      align-items: center;
      padding: 0 13px;
    }
    .content {
      flex: 1;
      overflow: auto;
      background: rgba(217, 220, 222, 1);
    }
  }
}
</style>
<script>
import BaseTree from '../../patient/components/baseTree'
import PatientInfo from '../../patient/components/patient-info'
import evalList from '../../patient/components/evalList'
import { getListByTaskNo, saveOrUpdateInfo } from '@/api/common'
import print from 'printing'
export default {
  props: {
    taskNo: {
      type: String
    }
  },
  data() {
    return {
      currentPatient: null,
      infoId: null,
      patientList: [],
      isEdit: false,
      dialogVisible: false
    }
  },
  methods: {
    init() {
      let taskNo = this.taskNo
      return getListByTaskNo(taskNo).then(res => {
        try {
          this.infoId = res.data[0].info.infoId
        } catch (error) {}

        this.patientList = res.data.map(item => {
          item.measure = item.measure || {}
          item.eval = item.eval || {}
          return {
            label: item.info.patientName + '的急救病历',
            infoId: item.info.infoId,
            onClick: () => {
              this.selectPatient(item)
              this.dialogVisible = true
            }
          }
        })
        return res.data
      })
    },
    selectPatient(patient) {
      this.currentPatient = patient
      this.infoId = this.currentPatient.info.infoId
    },
    onSave() {
      this.isEdit = false
      saveOrUpdateInfo(this.currentPatient).then(res => {
        this.$message.success('修改成功')
        this.refresh()
      })
    },
    refresh() {
      this.init().then(res => {
        let current = res.find(item => item.info.infoId === this.infoId)
        current && this.selectPatient(current)
      })
    },
    print() {
      print(this.$refs.printable.$el, {
        direction: 'vertical',
        injectGlobalCss: true,
        scanStyles: false,
        css: `
          .info-table {
            border: 0 !important;
            margin: 0 auto !important;
          }
          .el-button {
            display: none !important;
          }
        `
      })
    }
  },
  created() {
    this.init().then(res => {
      // res && res[0] && this.selectPatient(res[0])
    })
  },
  components: {
    BaseTree,
    PatientInfo,
    evalList
  }
}
</script>
