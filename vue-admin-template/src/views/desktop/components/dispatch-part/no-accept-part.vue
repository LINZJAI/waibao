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
        <el-select
          placeholder="请选择"
          size="mini"
          v-model="item.carNo"
          @change="changeCar"
          v-else
        >
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
          v-model="item.driverNo"
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
      <td class="value" colspan="3">
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
      <td class="value" colspan="3">
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
    </tr>

    <tr :key="index + 'four'" v-if="partMode !== 'noAccept'">
      <td class="key">状态：</td>
      <td class="value" colspan="7">
        <div class="status-td">
          <span v-if="item.mode == 'view'">{{ item.nodeName }}</span>
          <div class="block"></div>
          <el-button
            type="text"
            @click="item.mode = 'view'"
            v-if="item.mode == 'edit'"
            >取消编辑</el-button
          >
          <el-button
            type="text"
            v-if="item.mode == 'view'"
            @click="item.mode = 'edit'"
            >编辑</el-button
          >

          <el-button type="text" v-else @click="savePart(item)">保存</el-button>

          <el-button type="text" @click="onPrint(item)">打印出车单</el-button>
          <el-button type="text" @click="cancelDispatch(item, index)"
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
    delPart: {
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
    partMode: {
      type: String,
      default: ''
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
  methods: {
    getCarInfo(carNo) {
      return this.carDict.find(item => item.carNo == carNo)
    },
    changeCar(item) {
      this.item.driverPhone = this.getCarInfo(item).carPhone
    }
  },
  components: {}
}
</script>
