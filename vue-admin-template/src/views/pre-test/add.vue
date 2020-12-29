<template>
  <div class="add-wrapper" v-if="isInit">
    <div class="left-part">
      <add-left-part></add-left-part>
    </div>
    <div class="main-part">
      <div class="head-con">
        <div class="head-title">三区四级分诊</div>
        <div class="label">分诊时间：</div>

        <el-date-picker
          size="mini"
          v-model="addModel.tieredMaster.tieredTime"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
        ></el-date-picker>
        <el-button
          size="mini"
          type="primary"
          style="margin-left: 5px"
          @click="save"
          >保存</el-button
        >
      </div>
      <div class="main-con">
        <div class="mid-part">
          <add-mid-part></add-mid-part>
        </div>
        <div class="right-part">
          <add-right-part></add-right-part>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.add-wrapper {
  display: flex;
  background: #f5f5f5;
  .left-part {
    width: 300px;
    background: #fff;
  }
  .main-part {
    flex: 1;
    width: 0;
    .head-con {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      .head-title {
        font-size: 14px;
        color: #333;
        flex: 1;
      }
      .label {
        font-size: 12px;
        color: #333;
      }
    }
    .main-con {
      background: #ffffff;
      box-shadow: 0px 1px 0px 0px rgba(183, 183, 183, 0.5);
      border-radius: 3px;
      border: 1px solid #cecece;
      min-height: 20px;
      margin: 0 12px 12px;
      display: flex;
      .mid-part {
        width: 0;
        flex: 8;
      }
      .right-part {
        width: 0;
        flex: 5;
      }
    }
  }
}
</style>
<script>
import AddLeftPart from './components/add-left-part'
import MoreBtn from './components/more-btn'
import AddMidPart from './components/add-mid-part'
import AddRightPart from './components/add-right-part'

import {
  multiGetList,
  getDiagNodeList,
  createRegisterId,
  registerSave,
  getDetail,
  registerUpdate
} from '@/api/pre-test'
import addModel from './add-model'
import moment from 'moment'

export default {
  components: {
    AddLeftPart,
    MoreBtn,
    AddMidPart,
    AddRightPart
  },
  props: {},
  data() {
    return {
      addModel,
      isInit: false
    }
  },
  methods: {
    save() {
      let promise
      if (this.$route.query.registerId) {
        promise = registerUpdate
      } else {
        promise = registerSave
      }

      function IsCard(str) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        return reg.test(str)
      }

      if (
        addModel.tieredRegister.idcard &&
        !IsCard(addModel.tieredRegister.idcard)
      ) {
        return this.$message.warning('请输入正确的身份证号码')
      }

      if (!addModel.tieredRegister.arriveInHospitalTime) {
        return this.$message.warning('请输入来院时间')
      }
      promise({
        tieredRegister: addModel.tieredRegister,
        tieredMaster: addModel.tieredMaster,
        tieredAllergyList: addModel.tieredAllergyList,
        basicDataList: addModel.basicDataList
      }).then(res => {
        this.$message.success('保存成功')
        this.$router.push('/pre-test')
      })
    }
  },
  created() {
    addModel.init()
    multiGetList([
      'occupation',
      'to_hispital_way',
      'patient_source',
      'fee_type',
      'first_treatment',
      'key_diseases',
      'classification',
      'triage_region',
      'register_type',
      'sign_of_life',
      'consciousness',
      'pupil',
      'allergic_history',
      'fall_risk_cause',
      'prevent_measure',
      'religious',
      'spirit',
      'cognitive',
      'psychological',
      'social',
      'economic',
      'edu_need',
      'traffic',
      'abuse',
      'children_growth_eval',
      'edu_degree',
      'diagnosis'
    ]).then(res => {
      addModel.dictMap = res.data

      getDiagNodeList().then(res => {
        addModel.diagNodeList = res.data
      })

      if (this.$route.query.registerId) {
        getDetail(this.$route.query.registerId).then(res => {
          addModel.tieredRegister = res.data.tieredRegister
          addModel.tieredMaster = res.data.tieredMaster
          addModel.tieredAllergyList = res.data.tieredAllergyList
          addModel.basicDataList = res.data.basicDataList
          addModel.eventList = res.data.eventList
          this.isInit = true
        })
      } else {
        createRegisterId().then(res => {
          addModel.tieredRegister.registerId = res.data.seq
          addModel.tieredMaster.tieredTime = moment(
            addModel.tieredMaster.tieredTime || moment()
          ).format('YYYY-MM-DD HH:mm:ss')
          this.isInit = true
        })
      }
    })
  }
}
</script>
