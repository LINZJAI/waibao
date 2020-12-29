<template>
  <div class="add-left-part">
    <div class="head-con">
      <div class="head-title">登记</div>
      <div class="block"></div>
      <div class="head-btn" @click="openReadCardModal">
        <img src="../../../assets/images/pre-test/快速登记.png" alt="" />
      </div>
      <div class="head-btn" @click="openSelectPatientModal">
        <img src="../../../assets/images/pre-test/查看挂号信息.png" alt="" />
      </div>
    </div>
    <div class="scroll-con">
      <div class="user-con">
        <img
          class="user-head"
          src="../../../assets/images/pre-test/女.png"
          v-if="addModel.tieredRegister.sex === '女'"
        />
        <img
          class="user-head"
          src="../../../assets/images/pre-test/男.png"
          v-else
        />
        <div class="user-info pre-test-form">
          <el-form ref="form" label-width="40px" size="mini">
            <el-form-item label="团队：">
              <div class="form-content">
                <el-input
                  clearable=""
                  v-model="addModel.tieredRegister.massIncidentsContent"
                ></el-input>
                <!-- <more-btn></more-btn> -->
              </div>
            </el-form-item>
            <div class="pre-test-form-row">
              <el-checkbox
                style="margin-left: 4px"
                v-model="addModel.tieredRegister.unknownName"
              ></el-checkbox>
              <div class="label" style="margin: 0 4px">无名氏</div>
              <el-input v-model="noName"></el-input>
            </div>
            <el-form-item label="姓名：">
              <el-input v-model="addModel.tieredRegister.name"></el-input>
            </el-form-item>
            <el-form-item label="姓别：">
              <el-radio-group v-model="addModel.tieredRegister.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="生日：">
              <el-date-picker
                v-model="addModel.tieredRegister.birthday"
                value-format="yyyy-MM-dd"
                @change="onChangeBirthday"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="年龄：">
              <div class="age-input">
                <el-input placeholder="岁" v-model="age1"></el-input>
                <el-input placeholder="月" v-model="age2"></el-input>
                <el-input placeholder="天" v-model="age3"></el-input>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="pre-test-form" style="padding-left: 5px;padding-right: 5px">
        <el-form ref="form" label-width="60px" size="mini" :inline="true">
          <el-form-item label="急救编号：">
            <el-input
              class="full-width-input"
              v-model="addModel.tieredRegister.registerId"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="挂号号码：">
            <el-input
              style="width: 103px"
              v-model="addModel.tieredRegister.registerNo"
            ></el-input>
          </el-form-item>
          <el-form-item label="急诊次数：">
            <el-input
              style="width: 45px"
              v-model="addModel.tieredRegister.visitId"
            ></el-input>
          </el-form-item>
          <el-form-item label="从事职业：">
            <el-autocomplete
              popper-class="pre-test-popper"
              style="width: 74px"
              v-model="addModel.tieredRegister.occupation"
              :fetch-suggestions="
                (s, cb) => addModel.getDictMap('occupation', cb)
              "
              placeholder="请填写"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-input
              style="width: 74px"
              v-model="addModel.tieredRegister.phone"
            ></el-input>
          </el-form-item>
          <el-form-item label="证件号码：">
            <el-input
              class="full-width-input"
              v-model="addModel.tieredRegister.idcard"
            ></el-input>
          </el-form-item>
          <el-form-item label="住址：">
            <el-input
              class="full-width-input"
              v-model="addModel.tieredRegister.address"
            ></el-input>
          </el-form-item>
          <el-form-item label="工作单位：">
            <el-input
              class="full-width-input"
              v-model="addModel.tieredRegister.wordAddress"
            ></el-input>
          </el-form-item>

          <el-form-item label="来院方式：">
            <el-autocomplete
              popper-class="pre-test-popper"
              class="full-width-input"
              v-model="addModel.tieredRegister.toHispitalWay"
              :fetch-suggestions="
                (s, cb) => addModel.getDictMap('to_hispital_way', cb)
              "
              placeholder="请填写"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item label="来源：">
            <el-autocomplete
              popper-class="pre-test-popper"
              class="full-width-input"
              v-model="addModel.tieredRegister.patientSource"
              :fetch-suggestions="
                (s, cb) => addModel.getDictMap('patient_source', cb)
              "
              placeholder="请填写"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item label="来院时间：">
            <el-date-picker
              class="full-width-input"
              v-model="addModel.tieredRegister.arriveInHospitalTime"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="发病时间：">
            <el-date-picker
              class="full-width-input"
              v-model="addModel.tieredRegister.diseaseTime"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="性质：">
            <el-select
              popper-class="pre-test-popper"
              style="width: 110px"
              v-model="addModel.tieredRegister.feeType"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.fee_type"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="先救治后付款：" label-width="84px">
            <el-select
              popper-class="pre-test-popper"
              style="width: 194px"
              v-model="addModel.tieredRegister.firstTreatment"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.first_treatment"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重点病种：">
            <el-select
              popper-class="pre-test-popper"
              class="full-width-input"
              placeholder="十大病种"
              v-model="addModel.tieredRegister.keyDiseases"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.key_diseases"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="初步诊断：">
            <el-autocomplete
              popper-class="pre-test-popper"
              class="full-width-input"
              v-model="addModel.tieredRegister.diagnosis"
              :fetch-suggestions="
                (s, cb) => addModel.getDictMap('diagnosis', cb)
              "
              placeholder="请填写"
            ></el-autocomplete>
          </el-form-item>
        </el-form>
      </div>

      <div class="zhushu-con">
        <div class="label">主诉：</div>
        <el-input
          class="pre-test-form"
          type="textarea"
          :rows="15"
          v-model="addModel.tieredRegister.complaint"
        ></el-input>
      </div>
    </div>
    <read-card-modal ref="read-card-modal"></read-card-modal>
    <select-patient-modal ref="select-patient-modal"></select-patient-modal>
  </div>
</template>
<style lang="scss" scoped>
.add-left-part {
  border-right: 1px solid #ddd;
  .scroll-con {
    overflow: auto;
    @include scrollBar;
    height: calc(100vh - 84px);
  }
}

.user-con {
  padding: 10px;
  display: flex;
  margin-bottom: -9px;
  .user-head {
    width: 71px;
    height: 87px;
    margin-right: 10px;
  }
  .user-info {
    width: 0;
    flex: 1;
    .age-input {
      display: flex;
      .el-input {
        flex: 1;
        &:nth-child(2) {
          margin: 0 4px;
        }
      }
    }
  }
}

.zhushu-con {
  padding: 4px 10px;
  margin-bottom: 20px;
  .label {
    font-size: 12px;

    margin-bottom: 4px;
  }
  /deep/ {
    .el-textarea__inner {
      resize: none;
    }
  }
}
.sm-con {
  padding: 0 10px;
  border-top: 1px solid #ddd;
  height: 26px;
  font-size: 12px;
  display: flex;
  align-items: center;
  .el-input {
    width: 55px;
  }
}

.head-con {
  display: flex;
  align-items: center;
  height: 34px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  padding: 0 10px;
  color: #333;
  .head-btn {
    width: 23px;
    height: 19px;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    cursor: pointer;
    img {
      width: 12px;
    }
  }
}

.form-content {
  display: flex;
  .el-input {
    flex: 1;
    width: 0;
  }
}

.full-width-input {
  width: 218px;
}
</style>
<script>
import MoreBtn from '../components/more-btn'
import addModel from '../add-model'
import moment from 'moment'
import readCardModal from '../modal/read-card-modal'
import SelectPatientModal from '../modal/select-patient-modal'
import { createFromEms } from '@/api/pre-test'
export default {
  components: { MoreBtn, readCardModal, SelectPatientModal },
  props: {},
  data() {
    return {
      addModel,
      noName: '',
      age1: '',
      age2: '',
      age3: ''
    }
  },
  computed: {
    age() {
      let age = ''
      if (this.age1) {
        age += `${this.age1}岁`
      }
      if (this.age2) {
        age += `${this.age2}月`
      }
      if (this.age3) {
        age += `${this.age3}天`
      }
      return age
    },
    isFirst() {
      return !this.$route.query.registerId
    }
  },
  watch: {
    'addModel.tieredRegister.unknownName'() {
      if (addModel.tieredRegister.unknownName) {
        this.noName = moment().format('YYYYMMDDHHmm')
        addModel.tieredRegister.name = '无名氏' + this.noName
      } else {
        addModel.tieredRegister.name = ''
        this.noName = ''
      }
    },
    age() {
      addModel.tieredRegister.age = this.age
    }
  },
  methods: {
    ages(str) {
      var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)
      if (r == null) return false
      var d = new Date(r[1], r[3] - 1, r[4])
      if (
        d.getFullYear() == r[1] &&
        d.getMonth() + 1 == r[3] &&
        d.getDate() == r[4]
      ) {
        var Y = new Date().getFullYear()
        return Y - r[1]
      }
      return '输入的日期格式错误！'
    },

    openReadCardModal() {
      this.$refs['read-card-modal'].open(info => {
        // let info = {
        //   bornDay: '19950313',
        //   certAddress: '广东省深圳市福田区益田路2008号高发城驰苑1栋A-1011',
        //   certNumber: '44081119950313033X',
        //   certOrg: '深圳市公安局福田分局',
        //   certType: ' ',
        //   effDate: '20200925',
        //   errorMsg: '读卡成功',
        //   expDate: '20300925',
        //   gender: '男',
        //   identityPic: ' ',
        //   nation: '汉',
        //   nationCode: '1',
        //   partyName: '林仲杰'
        // }
        addModel.tieredRegister.name = info.partyName
        addModel.tieredRegister.address = info.certAddress
        addModel.tieredRegister.idcard = info.certNumber
        addModel.tieredRegister.sex = info.gender
        addModel.tieredRegister.birthday = moment(info.bornDay).format(
          'YYYY-MM-DD'
        )
        this.age1 = this.ages(moment(info.bornDay).format('YYYY-MM-DD'))
      })
    },
    openSelectPatientModal() {
      this.$refs['select-patient-modal'].open(selectedPatient => {
        const merge = () => {
          addModel.tieredRegister.name = selectedPatient.patientName
          addModel.tieredRegister.sex = selectedPatient.sex
          addModel.tieredRegister.birthday = selectedPatient.birthday
          addModel.tieredRegister.idcard = selectedPatient.idCard
          addModel.tieredRegister.phone = selectedPatient.contactPhone
          addModel.tieredRegister.complaint = selectedPatient.complaints
          addModel.tieredRegister.address = selectedPatient.address
        }
        if (this.isFirst) {
          return this.$confirm('是否创建分诊记录?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
            .then(() => {
              createFromEms(
                addModel.tieredRegister.registerId,
                selectedPatient.infoId
              ).then(res => {
                Object.assign(addModel.tieredRegister, res.data.tieredRegister)
                Object.assign(addModel.tieredMaster, res.data.tieredMaster)
                this.$router.replace(
                  `/pre-test/add?registerId=${addModel.tieredRegister.registerId}`
                )
                addModel.tieredMaster.tieredTime = moment(
                  addModel.tieredMaster.tieredTime || moment()
                ).format('YYYY-MM-DD HH:mm:ss')
              })
            })
            .catch(e => {
              merge()
            })
        }
        merge()
      })
    },
    onChangeBirthday() {
      if (addModel.tieredRegister.birthday) {
        this.age1 = this.ages(
          moment(addModel.tieredRegister.birthday).format('YYYY-MM-DD')
        )
      }
    }
  },
  created() {
    let age = addModel.tieredRegister.age
    if (addModel.tieredRegister.age) {
      if (age.includes('岁')) {
        this.age1 = age.split('岁')[0] || ''
        age = age.split('岁')[1]
      }
      if (age.includes('月')) {
        this.age2 = age.split('月')[0] || ''
        age = age.split('月')[1]
      }
      if (age.includes('天')) {
        this.age3 = age.split('天')[0] || ''
      }
    }
  }
}
</script>
