<template>
  <div class="record-wrapper">
    <div class="tree-con">
      <div class="tree-header">
        <div class="title">急救编号：{{ $route.query.taskNo }}</div>
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
          ref="evalList"
        ></evalList>
        <!-- <BaseTree :configList="patientList" :infoId="infoId"></BaseTree> -->
      </div>
    </div>
    <div class="right-con" v-if="currentPatient">
      <div class="tool" v-if="currentPatient">
        <el-button size="mini" @click="$router.back()">返回</el-button>
        <el-button size="mini" v-if="isEdit" @click="onSave">保存</el-button>
        <el-button size="mini" v-else @click="isEdit = true">修改</el-button>
        <el-button size="mini" v-if="isEdit" @click="isEdit = false"
          >取消</el-button
        >
        <el-button size="mini" @click="print">打印</el-button>
      </div>
      <div class="content">
        <PatientInfo
          ref="printable"
          v-if="currentPatient"
          :dataSource="currentPatient"
          :isEdit="isEdit"
        ></PatientInfo>
      </div>
    </div>
    <div class="right-con" v-if="currentEval">
      <div class="tool">
        <el-button size="mini" @click="$router.back()">返回</el-button>
        <el-button size="mini" v-if="isEdit" @click="onEvalSave"
          >保存</el-button
        >
        <el-button size="mini" v-else @click="isEdit = true">修改</el-button>
        <el-button size="mini" v-if="isEdit" @click="isEdit = false"
          >取消</el-button
        >
        <el-button size="mini" @click="print">打印</el-button>
      </div>
      <div class="content">
        <span :class="{ readOnly: !isEdit }">
          <component
            :is="currentEval.component"
            ref="evalForm"
            :infoId="infoId"
            :patientName="patientName"
          ></component>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.record-wrapper {
  height: 100%;
  display: flex;
  align-items: stretch;
  padding: 15px;
  .tree-con {
    width: 260px;
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
    width: 0;
    flex: 1;
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

.readOnly {
  pointer-events: none;
}
</style>
<script>
import BaseTree from './components/baseTree'
import PatientInfo from './components/patient-info'
import evalList from './components/evalList'
import { getListByTaskNo, saveOrUpdateInfo } from '@/api/common'
import print from 'printing'
export default {
  props: {},
  data() {
    return {
      currentPatient: null,
      currentEval: null,
      infoId: null,
      patientList: [],
      isEdit: false,
      infoId: '',
      patientName: ''
    }
  },
  methods: {
    init() {
      let taskNo = this.$route.query.taskNo
      return getListByTaskNo(taskNo).then(res => {
        this.patientList = res.data.map(item => {
          item.measure = item.measure || {}
          item.eval = item.eval || {}
          return {
            label: item.info.patientName + '的急救病历',
            infoId: item.info.infoId,
            onClick: () => {
              this.selectPatient(item)
            }
          }
        })
        return res.data
      })
    },
    selectPatient(patient) {
      this.currentPatient = patient
      this.currentEval = null
      this.infoId = this.currentPatient.info.infoId
      this.$refs.evalList.$refs.tree.setCurrentKey(null)
    },
    onSave() {
      saveOrUpdateInfo(this.currentPatient).then(res => {
        this.isEdit = false
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
    },

    onEvalSave() {
      this.$refs.evalForm.save().then(res => {
        this.$message.success('保存成功')
        this.isEdit = false
      })
    }
  },
  created() {
    this.init().then(res => {
      this.infoId = res && res[0] && res[0].info.infoId
      this.patientName = res && res[0] && res[0].info.patientName
      res && res[0] && this.selectPatient(res[0])
    })
  },
  components: {
    BaseTree,
    PatientInfo,
    evalList
  }
}
</script>
