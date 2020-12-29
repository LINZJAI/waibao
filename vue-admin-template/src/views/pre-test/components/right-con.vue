<template>
  <div class="right-con">
    <div class="scroll-con">
      <div class="user-con">
        <img
          class="user-head"
          src="../../../assets/images/pre-test/女.png"
          v-if="info.tieredRegister.sex === '女'"
        />
        <img
          class="user-head"
          src="../../../assets/images/pre-test/男.png"
          v-else
        />
        <div class="user-info pre-test-form">
          <el-form ref="form" label-width="40px" size="mini">
            <el-form-item label="编号：">
              <el-input
                readonly
                v-model="info.tieredRegister.registerId"
              ></el-input>
            </el-form-item>
            <el-form-item label="姓名：">
              <el-input readonly v-model="info.tieredRegister.name"></el-input>
            </el-form-item>
            <el-form-item label="姓别：">
              <el-input readonly v-model="info.tieredRegister.sex"></el-input>
            </el-form-item>
            <el-form-item label="年龄：">
              <div class="age-input">
                <el-input readonly :value="age1 ? age1 + '岁' : ''"></el-input>
                <el-input readonly :value="age2 ? age2 + '月' : ''"></el-input>
                <el-input readonly :value="age3 ? age3 + '天' : ''"></el-input>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="pre-test-form" style="padding-right: 10px">
        <el-form ref="form" label-width="70px" size="mini">
          <el-form-item label="职业：">
            <el-input
              readonly
              :value="info.tieredRegister.occupation"
            ></el-input>
          </el-form-item>
          <el-form-item label="证件号码：">
            <el-input readonly :value="info.tieredRegister.idcard"></el-input>
          </el-form-item>
          <el-form-item label="住址：">
            <el-input readonly :value="info.tieredRegister.address"></el-input>
          </el-form-item>
          <el-form-item label="工作单位：">
            <el-input
              readonly
              :value="info.tieredRegister.wordAddress"
            ></el-input>
          </el-form-item>
          <el-form-item label="来院方式：">
            <el-input
              readonly
              :value="info.tieredRegister.toHispitalWay"
            ></el-input>
          </el-form-item>
          <el-form-item label="来院时间：">
            <el-input
              readonly
              :value="info.tieredRegister.arriveInHospitalTime"
            ></el-input>
          </el-form-item>
          <el-form-item label="去向：">
            <el-input
              readonly
              :value="info.tieredMaster.triageRegion"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>

      <table class="pre-test-table">
        <colgroup>
          <col width="33%" />
          <col width="67%" />
        </colgroup>

        <tr>
          <th>处理项目</th>
          <th>处理时间</th>
        </tr>
        <tr class="tr-block">
          <td></td>
          <td></td>
        </tr>
        <tr v-for="(item, index) in info.eventList" :key="index">
          <td>{{ item.eventName }}</td>
          <td>{{ item.eventTime }}</td>
        </tr>

        <tr class="tr-block">
          <td></td>
          <td></td>
        </tr>
      </table>

      <div class="zhushu-con  pre-test-form">
        <div class="label">主诉</div>
        <el-input
          type="textarea"
          :value="info.tieredRegister.complaint"
        ></el-input>
      </div>

      <div class="sm-con pre-test-form">
        <div class="label">生命迹象：</div>
        <el-input :value="info.tieredMaster.signOfLife"></el-input>
        <div style="width: 5px"></div>
        <div class="label">意识状态：</div>
        <el-input :value="info.tieredMaster.consciousness"></el-input>
      </div>

      <table class="pre-test-table">
        <colgroup>
          <col width="33%" />
          <col width="67%" />
        </colgroup>

        <tr>
          <th>监测项目</th>
          <th>监测值</th>
        </tr>
        <tr class="tr-block">
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>心率</td>
          <td>{{
            info.tieredMaster.heartRate
              ? info.tieredMaster.heartRate + '次/min'
              : '- -'
          }}</td>
        </tr>
        <tr>
          <td>呼吸</td>

          <td>{{
            info.tieredMaster.breath
              ? info.tieredMaster.breath + '次/min'
              : '- -'
          }}</td>
        </tr>
        <tr>
          <td>收缩压</td>

          <td>{{
            info.tieredMaster.systolicPressure
              ? info.tieredMaster.systolicPressure + 'mmHg'
              : '- -'
          }}</td>
        </tr>
        <tr>
          <td>舒张压</td>

          <td>{{
            info.tieredMaster.diastolicPressure
              ? info.tieredMaster.diastolicPressure + 'mmHg'
              : '- -'
          }}</td>
        </tr>
        <tr>
          <td>体温</td>

          <td>{{
            info.tieredMaster.temperature
              ? info.tieredMaster.temperature + '°C'
              : '- -'
          }}</td>
        </tr>
        <tr>
          <td>血氧</td>

          <td>{{
            info.tieredMaster.spo2 ? info.tieredMaster.spo2 + '%' : '- -'
          }}</td>
        </tr>
        <tr>
          <td>血糖</td>

          <td>{{
            info.tieredMaster.sugar ? info.tieredMaster.sugar + 'mmol/L' : '- -'
          }}</td>
        </tr>
        <tr class="tr-block">
          <td></td>
          <td></td>
        </tr>
        <tr class="tr-block">
          <td></td>
          <td></td>
        </tr>
        <tr class="tr-block">
          <td></td>
          <td></td>
        </tr>
        <tr class="tr-block">
          <td></td>
          <td></td>
        </tr>
        <tr class="tr-block">
          <td></td>
          <td></td>
        </tr>
        <tr class="tr-block">
          <td></td>
          <td></td>
        </tr> </table
    ></div>

    <div class="footer-con">
      <!-- <button class="pre-test-btn">
        就医规矩
        <img src="../../../assets/images/pre-test/就医轨迹.png" alt="" />
      </button> -->
      <button class="pre-test-btn" @click="goDetail">
        会诊详情
        <img src="../../../assets/images/pre-test/会诊详情.png" alt="" />
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.right-con {
  border-left: 1px solid #ddd;
  .scroll-con {
    overflow: auto;
    @include scrollBar;
    height: calc(100vh - 78px);
    margin-bottom: -1px;
  }
}
.user-con {
  padding: 10px;
  display: flex;
  margin-bottom: -10px;
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

.footer-con {
  border-top: 1px solid #ddd;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 12px;
  padding: 0 10px;
  position: relative;
  z-index: 2;
}
</style>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      info: {
        basicDataList: [],
        tieredAllergyList: [],
        tieredMaster: {},
        tieredRegister: {},
        eventList: []
      }
    }
  },
  computed: {
    age1() {
      return (this.info.tieredRegister.age || '').split('岁')[0]
    },
    age2() {
      return ((this.info.tieredRegister.age || '').split('岁')[1] || '').split(
        '月'
      )[0]
    },
    age3() {
      return ((this.info.tieredRegister.age || '').split('月')[1] || '').split(
        '天'
      )[0]
    }
  },
  methods: {
    goDetail() {
      if (this.info.tieredRegister.registerId) {
        this.$router.push(
          `/pre-test/edit?registerId=${this.info.tieredRegister.registerId}`
        )
      }
    }
  }
}
</script>
