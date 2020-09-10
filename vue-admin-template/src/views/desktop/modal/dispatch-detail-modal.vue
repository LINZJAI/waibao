<template>
  <el-dialog title="急救任务进度跟踪" :visible.sync="dialogVisible" width="800">
    <table class="info-table" v-if="dataSource">
      <colgroup>
        <col width="100" />
        <col width="100" />
        <col width="100" />
        <col width="60" />
        <col width="60" />
        <col width="100" />
        <col width="60" />
        <col width="60" />
      </colgroup>
      <tr>
        <th colspan="8">进度跟踪</th>
      </tr>
      <tr>
        <td class="key">车辆{{ index + 1 }}：</td>
        <td class="value">{{ dataSource.carNo }}</td>
        <td class="key">车内电话：</td>
        <td class="value" colspan="2">{{ dataSource.driverPhone }}</td>
        <td class="key">出诊医生：</td>
        <td class="value" colspan="2">{{
          dataSource.doctorList.map(item => item.empName).join('，')
        }}</td>
      </tr>
      <tr>
        <td class="key">调度派单时间：</td>
        <td class="value">{{ dataSource.dispatchTime }}</td>
        <td class="key">调度人员：</td>
        <td class="value" colspan="2">{{ dataSource.dispatchEmpName }}</td>
        <td class="key">状态：</td>
        <td class="value" colspan="2">{{ dataSource.nodeName }}</td>
      </tr>
      <tr>
        <td class="key">出车时间：</td>
        <td class="value">{{ dataSource.carStartTime }}</td>
        <td class="key">抵达现场时间：</td>
        <td class="value" colspan="2">{{ dataSource.arrivedPlaceTime }}</td>
        <td class="key">任务完成时间：</td>
        <td class="value" colspan="2">{{ dataSource.eventTime }}</td>
      </tr>
      <tbody v-for="(item, index) in dataSource.patientList" :key="index">
        <tr>
          <td class="key">病人{{ index }}：</td>
          <td class="value">{{ item.info.patientName }}</td>
          <td class="key">性别：</td>
          <td class="value">{{ item.info.sex }}</td>
          <td class="key">年龄：</td>
          <td class="value">{{ item.info.age }}</td>
          <td class="key">身份证号：</td>
          <td class="value">{{ item.info.idCard }}</td>
        </tr>
        <tr>
          <td class="key">院前病情转归：</td>
          <td class="value" colspan="2">{{
            item.measure && item.measure.diseaseOutcome
          }}</td>
          <td class="key">初步诊断：</td>
          <td class="value" colspan="4">{{
            item.measure && item.measure.diagnosis
          }}</td>
        </tr>
        <tr>
          <td class="key">送往医院：</td>
          <td class="value">{{ dataSource.departureHospital }}</td>
          <td class="key">主要病史：</td>
          <td class="value">{{
            dataSource.eval && dataSource.eval.medicalHistory
          }}</td>
          <td class="key">急救收费：</td>
          <td class="value">{{ item.info.totalPrice }}</td>
          <td class="key">危重等级：</td>
          <td class="value">{{ item.info.dangerLevel }}</td>
        </tr>
      </tbody>
    </table>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
    </div>
  </el-dialog>
</template>
<style lang="scss" scoped></style>
<script>
import { getTaskDispatchDetail } from '@/api/common'
export default {
  props: {},
  data() {
    return {
      dialogVisible: false,
      dataSource: null,
      index: 0
    }
  },
  methods: {
    open(item, index) {
      this.dialogVisible = true
      getTaskDispatchDetail(item.dispatchId).then(res => {
        this.dataSource = res.data
        this.index = index
      })
    }
  },
  components: {}
}
</script>
