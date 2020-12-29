<template>
  <div>
    <el-dialog
      title="院前病情归转"
      :visible.sync="dialogVisible"
      width="500px"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <el-form ref="form" :model="formData" label-width="100px" size="small">
        <el-form-item label="转移去向">
          <el-radio-group v-model="formData.type" style="width: 100%">
            <el-radio
              v-for="(item, index) in typeList"
              :key="index"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item label="住院病区" v-if="formData.type === '转住院'">
          <el-select v-model="formData.deptCode" style="width: 100%">
            <el-option
              v-for="(item, index) in deptList"
              :key="index"
              :value="item.deptCode"
              :label="item.deptName"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          :label="`${formData.type.replace('转', '')}接诊医生`"
          v-if="formData.type === '转住院' || formData.type === '转急诊'"
        >
          <el-select v-model="formData.doctorNo" style="width: 100%">
            <el-option
              v-for="(item, index) in doctorList"
              :key="index"
              :value="item.empNo"
              :label="item.empName"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          :label="`${formData.type.replace('转', '')}接诊护士`"
          v-if="formData.type === '转住院' || formData.type === '转急诊'"
        >
          <el-select v-model="formData.nurseNo" style="width: 100%">
            <el-option
              v-for="(item, index) in nurseList"
              :key="index"
              :value="item.empNo"
              :label="item.empName"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="死亡时间" v-if="formData.type === '死亡'">
          <el-date-picker
            type="datetime"
            v-model="formData.deliveryTime"
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="死亡地点" v-if="formData.type === '死亡'">
          <el-input
            v-model="formData.deathPlace"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="死亡原因" v-if="formData.type === '死亡'">
          <el-input
            v-model="formData.deathReason"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="医院名称" v-if="formData.type === '其他'">
          <el-input
            v-model="formData.otherHospital"
            style="width: 100%"
          ></el-input>
        </el-form-item>

        <el-form-item label="交接时间" v-if="formData.type === '其他'">
          <el-date-picker
            type="datetime"
            v-model="formData.deliveryTime"
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="他院接诊医生" v-if="formData.type === '其他'">
          <el-input
            v-model="formData.otherDoctorName"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="他院接诊护士" v-if="formData.type === '其他'">
          <el-input
            v-model="formData.otherNurseName"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item label="具体说明" v-if="formData.type !== '死亡'">
          <el-input v-model="formData.remark" style="width: 100%"></el-input>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <el-button @click="close" size="small">取消</el-button>
        <el-button @click="save" size="small" type="primary">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped></style>
<script>
import {
  patient_prepare_typeList,
  patient_prepare_list,
  getListUserStatus
} from '@/api/common'
import { getDeptList } from '@/api/pre-test'
export default {
  data() {
    return {
      dialogVisible: false,
      callback: null,
      formData: {
        type: '',
        deptCode: '',
        deptName: '',
        doctorNo: '',
        doctorName: '',
        nurseNo: '',
        nurseName: '',
        remark: '',
        deliveryTime: '',
        deathPlace: '',
        deathReason: ''
      },
      typeList: [
        {
          label: '转住院',
          value: '转住院'
        },
        {
          label: '转急诊',
          value: '转急诊'
        },
        {
          label: '死亡',
          value: '死亡'
        },
        {
          label: '其他',
          value: '其他'
        }
      ],

      deptList: [],
      doctorList: [],
      nurseList: []
    }
  },
  methods: {
    open(oldData, callback) {
      this.dialogVisible = true
      this.callback = callback
      this.formData = Object.assign(
        {
          type: this.typeList[0].value,
          deptCode: '',
          deptName: '',
          doctorNo: '',
          doctorName: '',
          nurseNo: '',
          nurseName: '',
          remark: '',
          deliveryTime: '',
          deathPlace: '',
          deathReason: ''
        },
        oldData
      )
    },
    close() {
      this.dialogVisible = false
    },
    syncData() {
      this.deptName =
        (
          this.deptList.find(
            item => item.deptCode === this.formData.deptCode
          ) || {}
        ).deptName || ''
      this.doctorName =
        (
          this.doctorList.find(item => item.empNo === this.formData.doctorNo) ||
          {}
        ).doctorName || ''
      this.nurseName =
        (
          this.nurseList.find(item => item.empNo === this.formData.nurseNo) ||
          {}
        ).nurseName || ''
    },
    save() {
      this.close()
      this.syncData()
      this.callback && this.callback(this.formData)
    }
  },
  created() {
    getListUserStatus({
      userType: 'doctor',
      inTask: false,
      normal: true
    }).then(res => {
      this.doctorList = res.data
    })
    getListUserStatus({
      userType: 'nurse',
      inTask: false,
      normal: true
    }).then(res => {
      this.nurseList = res.data
    })
    getDeptList().then(res => {
      this.deptList = res.data
    })
  },
  components: {}
}
</script>
