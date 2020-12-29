<template>
  <div>
    <div class="pre-test-form" style="padding: 10px" id="pre-test-one-form">
      <el-form ref="form" label-width="62px" size="mini">
        <el-form-item label="首次分级：">
          <el-select
            popper-class="pre-test-popper"
            class="full-width"
            v-model="addModel.tieredMaster.classification"
            :class="`class-color-${addModel.tieredMaster.classification}`"
            :disabled="!isFirst"
          >
            <el-option
              v-for="(item, index) in addModel.dictMap.classification"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="修订分级：">
          <el-select
            popper-class="pre-test-popper"
            class="full-width"
            v-model="addModel.tieredMaster.reclassification"
            :class="`class-color-${addModel.tieredMaster.reclassification}`"
            :disabled="isFirst"
          >
            <el-option
              v-for="(item, index) in addModel.dictMap.classification"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="修订原因：">
          <el-input
            v-model="addModel.tieredMaster.reclassificationReason"
            :disabled="isFirst"
          ></el-input>
        </el-form-item>
        <el-form-item label="绿色通道：" class="green-enter">
          <el-checkbox
            v-model="addModel.tieredMaster.greenChannel"
          ></el-checkbox>
        </el-form-item>
        <el-form-item label="去向：">
          <el-select
            popper-class="pre-test-popper"
            class="full-width"
            v-model="addModel.tieredMaster.triageRegion"
          >
            <el-option
              v-for="(item, index) in addModel.dictMap.triage_region"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="诊室：">
          <el-select
            popper-class="pre-test-popper"
            class="full-width"
            v-model="addModel.tieredMaster.deptCode"
            @change="onChangeDept"
            filterable
          >
            <el-option
              v-for="(item, index) in deptList"
              :key="index"
              :label="item.deptName"
              :value="item.deptCode"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="接诊医生：">
          <el-select
            popper-class="pre-test-popper"
            class="full-width"
            v-model="addModel.tieredMaster.receptionEmpNo"
            @change="changeDoctor"
            filterable
          >
            <el-option
              v-for="(item, index) in doctorList"
              :key="index"
              :label="item.empName"
              :value="item.empNo"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="床位：">
          <el-select
            popper-class="pre-test-popper"
            class="full-width"
            v-model="addModel.tieredMaster.bedLabel"
          >
            <el-option
              v-for="(item, index) in bedList"
              :key="index"
              :label="item.deptName"
              :value="item.deptCode"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="挂号类型：">
          <el-select
            popper-class="pre-test-popper"
            class="full-width"
            v-model="addModel.tieredMaster.registerType"
          >
            <el-option
              v-for="(item, index) in addModel.dictMap.register_type"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="需要：">
          <div class="pre-test-form-row">
            <el-input-number
              :min="0"
              :controls="false"
              v-model="addModel.tieredMaster.assistantNum"
            ></el-input-number>
            <span style="margin-left: 10px">位医疗人员</span>
          </div>
        </el-form-item>
      </el-form>

      <div class="line"></div>

      <el-form ref="form" label-width="62px" size="mini">
        <el-form-item label="生命迹象：">
          <el-select v-model="addModel.tieredMaster.signOfLife">
            <el-option
              v-for="(item, index) in addModel.dictMap.sign_of_life"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="意识状态：">
          <el-select
            popper-class="pre-test-popper"
            class="full-width"
            v-model="addModel.tieredMaster.consciousness"
          >
            <el-option
              v-for="(item, index) in addModel.dictMap.consciousness"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="量测时间：">
          <el-date-picker
            class="full-width-input"
            v-model="addModel.tieredMaster.recordDate"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
          ></el-date-picker>
        </el-form-item>
      </el-form>

      <el-form ref="form" label-width="40px" size="mini" :inline="true">
        <el-form-item label="心率：" class="red-form-item">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 2) / 2}px`"
          >
            <el-input v-model="addModel.tieredMaster.heartRate"></el-input>
            <div class="unit">/min</div>
          </div>
        </el-form-item>
        <el-form-item label="脉搏：">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 2) / 2}px`"
          >
            <el-input v-model="addModel.tieredMaster.pulse"></el-input>
            <div class="unit">/min</div>
          </div>
        </el-form-item>
        <el-form-item label="呼吸：" class="red-form-item">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 3) / 3}px`"
          >
            <el-input v-model="addModel.tieredMaster.breath"></el-input>
            <div class="unit">/min</div>
          </div>
        </el-form-item>
        <el-form-item label="体温：" class="red-form-item">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 3) / 3}px`"
          >
            <el-input v-model="addModel.tieredMaster.temperature"></el-input>
            <div class="unit">°C</div>
          </div>
        </el-form-item>
        <el-form-item label="血氧：" class="red-form-item">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 3) / 3}px`"
          >
            <el-input v-model="addModel.tieredMaster.spo2"></el-input>
            <div class="unit">%</div>
          </div>
        </el-form-item>
        <el-form-item label="血压：" class="red-form-item">
          <div class="pre-test-form-row" :style="`width: ${fullWidth - 45}px`">
            <el-input
              placeholder="收缩压"
              v-model="addModel.tieredMaster.systolicPressure"
            ></el-input>
            <span style="width: 4px"></span>
            <el-input
              placeholder="舒张压"
              v-model="addModel.tieredMaster.diastolicPressure"
            ></el-input>
            <div class="unit">mmHg</div>
          </div>
        </el-form-item>
        <el-form-item label="疼痛：" class="red-form-item">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 2) / 2}px`"
          >
            <el-input v-model="addModel.tieredMaster.pain"></el-input>
            <more-btn
              @click.native="openRecordModal('tengtong-modal')"
            ></more-btn>
          </div>
        </el-form-item>
        <el-form-item label="昏迷：" class="red-form-item">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 2) / 2}px`"
          >
            <el-input v-model="addModel.tieredMaster.conk"></el-input>
            <more-btn @click.native="openRecordModal('hunmi-modal')"></more-btn>
          </div>
        </el-form-item>
        <el-form-item label="创伤：" class="red-form-item">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 2) / 2}px`"
          >
            <el-input v-model="addModel.tieredMaster.vulnus"></el-input>
            <more-btn
              @click.native="openRecordModal('chuangshang-modal')"
            ></more-btn>
          </div>
        </el-form-item>
        <el-form-item label="预警：" class="red-form-item">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 2) / 2}px`"
          >
            <el-input v-model="addModel.tieredMaster.mews"></el-input>
            <more-btn @click.native="openRecordModal('mews-modal')"></more-btn>
          </div>
        </el-form-item>
        <el-form-item label="身高：">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 3) / 3}px`"
          >
            <el-input v-model="addModel.tieredMaster.height"></el-input>
            <div class="unit">cm</div>
          </div>
        </el-form-item>
        <el-form-item label="体重：">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 3) / 3}px`"
          >
            <el-input v-model="addModel.tieredMaster.weight"></el-input>
            <div class="unit">kg</div>
          </div>
        </el-form-item>
        <el-form-item label="BMI：">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 3) / 3}px`"
          >
            <el-input v-model="addModel.tieredMaster.bmi"></el-input>
            <div class="unit">kg</div>
          </div>
        </el-form-item>
        <el-form-item label="血糖：">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 2) / 2}px`"
          >
            <el-input v-model="addModel.tieredMaster.sugar"></el-input>
            <div class="unit">mmol/L</div>
          </div>
        </el-form-item>
        <el-form-item label="瞳孔：">
          <div
            class="pre-test-form-row"
            :style="`width: ${(fullWidth - 45 * 2) / 2}px`"
          >
            <el-select
              v-model="addModel.tieredMaster.pupil"
              popper-class="pre-test-popper"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.pupil"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <tengtong-modal ref="tengtong-modal"></tengtong-modal>
    <hunmi-modal ref="hunmi-modal"></hunmi-modal>
    <mews-modal ref="mews-modal"></mews-modal>
    <chuangshang-modal ref="chuangshang-modal"></chuangshang-modal>
  </div>
</template>
<style lang="scss" scoped>
.green-enter {
  /deep/ {
    .el-form-item__label {
      color: #557c09;
    }
  }
}

.line {
  border-top: 1px solid #cccccc;
  margin-top: 8px;
  margin-bottom: 8px;
}

.red-form-item {
  /deep/ {
    .el-form-item__label {
      /* color: #cc0f00; */
    }
  }
}
.unit {
  margin-left: 5px;
}

.class-color-1 {
  /deep/ .el-input__inner {
    color: #cc0f00 !important;
  }
}
.class-color-2 {
  /deep/ .el-input__inner {
    color: #cc1c58 !important;
  }
}
.class-color-3 {
  /deep/ .el-input__inner {
    color: #d3730c !important;
  }
}
.class-color-4 {
  /deep/ .el-input__inner {
    color: #557c09 !important;
  }
}
</style>
<script>
import MoreBtn from '../more-btn'
import TengtongModal from '../../modal/tengtong-modal'
import HunmiModal from '../../modal/hunmi-modal'
import MewsModal from '../../modal/mews-modal'
import ChuangshangModal from '../../modal/chuangshang-modal'
import addModel from '../../add-model'
import { getDeptList, getBedList } from '@/api/pre-test'
import { getListUserStatus } from '@/api/common'
export default {
  components: {
    MoreBtn,
    TengtongModal,
    HunmiModal,
    MewsModal,
    ChuangshangModal
  },
  props: {},
  data() {
    return {
      fullWidth: 0,
      addModel,
      deptList: [],
      bedList: [],
      doctorList: []
    }
  },
  computed: {
    isFirst() {
      return !this.$route.path.includes('edit')
    }
  },
  methods: {
    setFullWidth() {
      this.fullWidth =
        document.querySelector('#pre-test-one-form').offsetWidth - 20 - 10
    },
    openRecordModal(modalName) {
      this.$refs[modalName].open(data => {
        if (modalName === 'tengtong-modal') {
          addModel.tieredMaster.pain = data.evalScore
          addModel.tieredMaster.painId = data.id
        } else if (modalName === 'hunmi-modal') {
          addModel.tieredMaster.conk = data.evalScore
          addModel.tieredMaster.conkId = data.id
        } else if (modalName === 'chuangshang-modal') {
          addModel.tieredMaster.vulnus = data.evalScore
          addModel.tieredMaster.vulnusId = data.id
        } else if (modalName === 'mews-modal') {
          addModel.tieredMaster.mews = data.evalScore
          addModel.tieredMaster.mewsId = data.id
        }
      })
    },
    onChangeDept(value) {
      let deptObj = this.deptList.find(
        item => item.deptCode === addModel.tieredMaster.deptCode
      )
      if (deptObj) {
        addModel.tieredMaster.deptName = deptObj.deptName
      }
      getBedList(value).then(res => {
        this.bedList = res.data
      })
    },
    changeDoctor(value) {
      let doctor = this.doctorList.find(item => item.empNo === value)
      if (doctor) {
        addModel.tieredMaster.receptionEmpName = doctor.empName
      } else {
        addModel.tieredMaster.receptionEmpName = ''
      }
    }
  },
  mounted() {
    this.setFullWidth()
    window.app.$on('resize', this.setFullWidth)
  },
  beforeDestroy() {
    window.app.$off('resize', this.setFullWidth)
  },
  created() {
    getDeptList().then(res => {
      this.deptList = res.data
    })
    getListUserStatus({ userType: 'doctor' }).then(res => {
      this.doctorList = res.data
    })
  }
}
</script>
