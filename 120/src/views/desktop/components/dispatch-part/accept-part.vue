<template>
  <tbody>
    <tr :key="index">
      <td class="key carName"
        >车辆{{ index + 1 }}：
        <el-popover
          v-if="item.abnormalMessage"
          placement="right-start"
          title="突发状况"
          width="120"
          trigger="hover"
          :content="item.abnormalMessage.title"
          popper-class="car-waring-popover"
        >
          <img
            src="../../../../assets/images/突发状况.png"
            alt=""
            class="warning-icon"
            slot="reference"
          />
        </el-popover>
        <i
          class="el-icon-close"
          @click="delCar(item, index)"
          v-if="index !== 0 && item.status === '0'"
        ></i>
      </td>
      <td class="value">
        <span v-if="item.mode == 'view'">{{ item.carNo }}</span>
        <el-select placeholder="请选择" size="mini" v-model="item.carNo" v-else>
          <el-option
            v-for="(item, index) in carDict"
            :key="index"
            :value="item.carNo"
            :label="item.carNo"
          >
          </el-option>
        </el-select>
      </td>
      <td class="key">车内电话：</td>
      <td class="value">
        <span v-if="item.mode == 'view'">{{ item.driverPhone }}</span>
        <el-input v-else size="mini" v-model="item.driverPhone"></el-input>
      </td>
      <td class="key">司机：</td>
      <td class="value">
        <span v-if="item.mode == 'view'">{{ item.driverName }}</span>
        <el-select
          placeholder="请选择"
          v-else
          size="mini"
          v-model="item.driverName"
        >
          <el-option
            v-for="(item, index) in driverAllDict"
            :key="index"
            :value="item.empNo"
            :label="item.empName"
          >
          </el-option>
        </el-select>
      </td>
      <td class="key">调度员：</td>
      <td class="value">
        <span v-if="item.mode == 'view'">{{ item.dispatchEmpName }}</span>
        <el-select
          placeholder="请选择"
          v-else
          size="mini"
          v-model="item.dispatchEmpNo"
        >
          <el-option
            v-for="(item, index) in dispatcherDict"
            :key="index"
            :value="item.empNo"
            :label="item.empName"
          ></el-option>
        </el-select>
      </td>
    </tr>
    <tr :key="index + 'two'">
      <td class="key">出诊医生：</td>
      <td class="value" colspan="2">
        <span v-if="item.mode == 'view'">{{
          item.doctorList.map(item => item.empName).join('，')
        }}</span>
        <el-select
          placeholder="请选择"
          v-else
          class="block-select"
          size="mini"
          v-model="item.doctorNoList"
          multiple
        >
          <el-option
            v-for="(o, index) in doctorAllDict"
            :key="index"
            :value="o.empNo"
            :label="o.empName"
          ></el-option>
        </el-select>
      </td>
      <td class="key">出诊护士：</td>
      <td class="value" colspan="2">
        <span v-if="item.mode == 'view'">{{
          item.nurseList.map(item => item.empName).join('，')
        }}</span>
        <el-select
          placeholder="请选择"
          v-else
          class="block-select"
          size="mini"
          v-model="item.nurseNoList"
          multiple
        >
          <el-option
            v-for="(o, index) in nurseAllDict"
            :key="index"
            :value="o.empNo"
            :label="o.empName"
          ></el-option>
        </el-select>
      </td>
      <td class="key">患者数量：</td>
      <td class="value">
        <span v-if="item.mode == 'view'">{{ item.patientSize }}</span>
        <el-input v-else size="mini" v-model="item.patientSize"></el-input>
      </td>
    </tr>
    <tr :key="index + 'three'">
      <td class="key">调度派单时间：</td>
      <td class="value">
        <span v-if="item.mode == 'view'">{{ item.dispatchTime }} </span>
        <el-input v-else size="mini" v-model="item.dispatchTime"></el-input>
      </td>
      <td class="key">出车时间：</td>
      <td class="value">
        <span v-if="item.mode == 'view'">{{ item.eventTime }}</span>
        <el-input v-else size="mini" v-model="item.eventTime"></el-input>
      </td>
      <td class="key">抵达现场时间：</td>
      <td class="value">
        <span v-if="item.mode == 'view'">{{ item.arrivedPlaceTime }}</span>
        <el-input v-else size="mini" v-model="item.arrivedPlaceTime"></el-input>
      </td>
      <td class="key">任务完成时间：</td>
      <td class="value">
        <span v-if="item.mode == 'view'">{{ item.arrivedHospitalTime }}</span>
        <el-input
          v-else
          size="mini"
          v-model="item.arrivedHospitalTime"
        ></el-input>
      </td>
    </tr>
    <tr :key="index + 'four'">
      <td class="key">状态：</td>

      <td class="value" colspan="7">
        <div class="status-td">
          <span v-if="item.status == '-1'">已拒绝</span>
          <span v-else-if="item.status == '-2'">已取消</span>
          <span v-else>{{ item.nodeName }}</span>
          <div class="block"></div>

          <!-- <el-button
            type="text"
            v-if="item.mode == 'view'"
            @click="item.mode = 'edit'"
            >编辑</el-button
          >
          <el-button type="text" v-else @click="savePart(item)">保存</el-button> -->

          <el-button type="text" @click="onPrint(item)">打印出车单</el-button>

          <el-button
            type="text"
            @click="cancelDispatch(item, index)"
            v-if="item.status == '1'"
            >取消任务</el-button
          >
          <el-button type="text" @click="openDispatchDetailModal(item, index)"
            >进度跟踪</el-button
          >
        </div>
      </td>
    </tr>
  </tbody>
</template>
<style lang="scss" scoped>
.block-select {
  width: 100%;
}
</style>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    },
    carDict: {
      type: Array,
      default: () => []
    },
    doctorDict: {
      type: Array,
      default: () => []
    },
    nurseDict: {
      type: Array,
      default: () => []
    },
    driverDict: {
      type: Array,
      default: () => []
    },
    dispatcherDict: {
      type: Array,
      default: () => []
    },
    savePart: {
      type: Function,
      default: () => {}
    },
    onPrint: {
      type: Function,
      default: () => {}
    },
    openDispatchDetailModal: {
      type: Function,
      default: () => {}
    },
    cancelDispatch: {
      type: Function,
      default: () => {}
    },
    delCar: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {
    nurseAllDict() {
      let result = [...this.nurseDict]

      for (let i = 0; i < this.item.nurseList.length; i++) {
        if (!result.find(item => item.empNo == this.item.nurseList[i].empNo)) {
          result.push(this.item.nurseList[i])
        }
      }
      return result
    },
    doctorAllDict() {
      let result = [...this.doctorDict]
      for (let i = 0; i < this.item.doctorList.length; i++) {
        if (!result.find(item => item.empNo == this.item.doctorList[i].empNo)) {
          result.push(this.item.doctorList[i])
        }
      }
      return result
    },
    driverAllDict() {
      return this.item.driverDict
    }
  },
  watch: {
    driverDict: {
      handler() {
        if (
          this.item.driverNo &&
          !this.driverDict.find(item => item.empNo === this.item.driverNo)
        ) {
          this.item.driverDict = [
            ...this.driverDict,
            {
              empName: this.item.driverName,
              empNo: this.item.driverNo
            }
          ]
        } else {
          this.item.driverDict = [...this.driverDict]
        }
      },
      immediate: true
    }
  },
  methods: {},
  components: {}
}
</script>
