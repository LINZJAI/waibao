<template>
  <div class="call-form">
    <el-form label-width="80px" size="mini">
      <el-form-item label="报案人：">
        <el-input v-model="formData.contactName" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="联系电话：">
        <el-input v-model="formData.contactPhone" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="事故地址：">
        <el-input
          v-model="formData.eventLocation"
          size="mini"
          id="thisLocal"
        ></el-input>
      </el-form-item>
      <el-form-item label="指派医院：">
        <el-select v-model="formData.taskSend" size="mini">
          <el-option
            v-for="(item, index) in hospitalDict"
            :key="index"
            :value="item.code"
            :label="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="建议车辆：">
        <el-input-number
          v-model="formData.proposeCarNumber"
          size="mini"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="病人姓名：">
        <el-input v-model="formData.patientName" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="病人性别：">
        <el-select v-model="formData.sex" size="mini">
          <el-option value="男" label="男"></el-option>
          <el-option value="女" label="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="病人年龄：">
        <el-input v-model="formData.age" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="病人身份：">
        <el-input v-model="formData.personDesc" size="mini"></el-input>
      </el-form-item>
    </el-form>

    <el-tabs v-model="activeTab">
      <el-tab-pane label="报案人代诉" name="报案人代诉">
        <el-input
          type="textarea"
          class="tab-textarea"
          v-model="formData.complaints"
        ></el-input>
      </el-tab-pane>
      <el-tab-pane label="患者主诉" name="患者主诉">
        <el-input
          type="textarea"
          class="tab-textarea"
          v-model="formData.complaints"
        ></el-input>
      </el-tab-pane>
    </el-tabs>
    <el-form label-width="100px" size="mini" class="bottom-form">
      <el-form-item label="患者情况：">
        <el-radio-group v-model="formData.patientCondition" size="mini">
          <el-radio label="昏迷">昏迷</el-radio>
          <el-radio label="清醒">清醒</el-radio>
          <el-radio label="意识不清">意识不清</el-radio>
          <el-radio label="死亡">死亡</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <div class="footer-btn">
      <el-button type="primary" size="medium" @click="submit"
        >受理求救</el-button
      >
    </div>
    <SuccessModal ref="SuccessModal"></SuccessModal>
  </div>
</template>
<style lang="scss" scoped>
@import './call-form.scss';
</style>
<script>
import { saveAndSend } from '@/api/api'
import SuccessModal from '../modal/success-modal'
import moment from 'moment'
const formData = {
  eventType: '个人求救',
  dangerLevel: '',
  patientName: '',
  sex: '',
  age: '',
  personDesc: '',
  contactName: '',
  contactPhone: '',
  eventLocation: '',
  representation: false,
  complaints: '',
  askHelpType: '',
  longitude: '',
  latitude: '',
  taskSend: '',
  proposeCarNumber: 1,
  patientCondition: ''
}

export default {
  props: ['hospitalDict'],
  data() {
    return {
      formData: JSON.parse(JSON.stringify(formData)),
      activeTab: '报案人代诉'
    }
  },
  methods: {
    submit() {
      let data = { ...this.formData }
      var myGeo = new BMap.Geocoder()
      // 将地址解析结果显示在地图上,并调整地图视野
      myGeo.getPoint(this.eventLocation, (point) =>  {
        if (point) {
          // console.log(point, 'point')
          data.latitude = point.lat
          data.longitude = point.lng
          data.taskSendList = this.formData.taskSend
            ? [
                {
                  departureHospitalCode: this.formData.taskSend,
                  proposeCarNumber: this.formData.proposeCarNumber
                }
              ]
            : []
          data.representation = !!(this.activeTab === '报案人代诉')
          data.eventTime = moment().format('YYYY-MM-DD HH:mm:ss')
          saveAndSend(data).then(res => {
            this.formData = JSON.parse(JSON.stringify(formData))
            this.$refs.SuccessModal.open(
              '急救任务已成功分配给指派医院，等待医院确认受理',
              res.data.taskNo
            )
          })
        } else {
          return this.$message.warning('您选择地址没有解析到结果!')
        }
      })
    }
  },
  created() {
    window.setLocal = local => {
      this.formData.eventLocation = local
    }
  },
  components: {
    SuccessModal
  }
}
</script>
