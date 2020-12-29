<template>
  <div class="right-wrapper">
    <div class="head-con">
      <div
        class="tab-item"
        :class="{ active: selectedTab === 1 }"
        @click="selectedTab = 1"
        >预检评估</div
      >
      <div
        class="tab-item"
        :class="{ active: selectedTab === 2 }"
        @click="selectedTab = 2"
        >既往史</div
      >
      <div
        class="tab-item"
        :class="{ active: selectedTab === 3 }"
        @click="selectedTab = 3"
        >其他情况</div
      >
    </div>
    <div class="scroll-con">
      <div class="tab-content-1" v-show="selectedTab === 1">
        <one></one>
      </div>
      <div class="tab-content-2" v-show="selectedTab === 2">
        <two></two>
      </div>
      <div class="tab-content-3" v-show="selectedTab === 3">
        <three></three>
      </div>
    </div>

    <!-- <div class="footer-con pre-test-form">
      <div class="label">接诊医生：</div>
      <el-select
        popper-class="pre-test-popper"
        class="footer-input"
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
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
.right-wrapper {
  font-size: 12px;
  color: #333;
}
.head-con {
  height: 34px;
  background: #e1e2e7;
  display: flex;
  align-items: flex-end;
  padding: 0 6px;
  .tab-item {
    width: 71px;
    height: 29px;
    background: #cfd0d9;
    margin-right: 2px;
    border-radius: 4px 4px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    &.active {
      background: #fff;
    }
  }
}

.scroll-con {
  overflow: auto;
  /* height: calc(100vh - 176px); */
  height: calc(100vh - 142px);
  @include scrollBar;
}

.footer-con {
  height: 34px;
  display: flex;
  align-items: center;
  border-top: 1px solid #bbbbbb;
  padding: 0 10px;
  .footer-input {
    width: 0;
    flex: 1;
  }
}
</style>
<script>
import one from './add-right-tabs/one'
import two from './add-right-tabs/two'
import three from './add-right-tabs/three'
import addModel from '../add-model'
import { getListUserStatus } from '@/api/common'

export default {
  components: { one, two, three },
  props: {},
  data() {
    return {
      selectedTab: 1,
      addModel,
      doctorList: []
    }
  },
  methods: {
    changeDoctor(value) {
      let doctor = this.doctorList.find(item => item.empNo === value)
      if (doctor) {
        addModel.tieredMaster.receptionEmpName = doctor.empName
      } else {
        addModel.tieredMaster.receptionEmpName = ''
      }
    }
  },
  created() {
    // getListUserStatus({ userType: 'doctor' }).then(res => {
    //   this.doctorList = res.data
    // })
  }
}
</script>
