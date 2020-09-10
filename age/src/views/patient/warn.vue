<template>
  <div class="warn-wrapper">
    <div class="left-part">
      <div class="title">健康预警</div>
      <WhiteBox style="height: 105px;margin-bottom: 12px">
        <div class="top-content">
          <div class="text-con">
            <div class="text-1"
              >预警：<span class="red">窦性心律不齐、偶发室上早搏</span></div
            >
            <div class="text-2"
              >窦性心动过缓：41阵次，累计时长：04:31:12<br />
              窦性心动过速：351阵次，累计时长：02:08:36
              <br />室上性早搏：2次</div
            >
          </div>
          <img
            src="./images/warn/随访问诊.png"
            @click="$router.push('/patient/follow')"
            alt=""
          />
          <img src="./images/warn/联系患者.png" @click="msg(1)" alt="" />
          <img src="./images/warn/联系家属.png" @click="msg(2)" alt="" />
        </div>
      </WhiteBox>

      <WhiteBox title="健康报告" class="bottom-white-box">
        <div class="bottom-content">
          <img src="./images/warn/健康报告1.png" alt="" />
          <img src="./images/warn/健康报告2.png" alt="" />
          <img src="./images/warn/健康报告3.png" alt="" />
          <img src="./images/warn/健康报告4.png" alt="" />
          <img src="./images/warn/健康报告5.png" alt="" />
          <img src="./images/warn/健康报告6.png" alt="" />
          <img src="./images/warn/健康报告7.png" alt="" />
        </div>
      </WhiteBox>
    </div>
    <div class="right-part">
      <WhiteBox title="危重等级" :border="false">
        <div class="right-content">
          <div class="radio-con">
            <div class="label">危重等级：</div>
            <div class="radio-box">
              <el-radio v-model="radio1" label="1" border size="mini"
                >普通等级</el-radio
              >
              <el-radio v-model="radio1" label="2" border size="mini"
                >重危等级</el-radio
              >
            </div>
          </div>
          <div class="warn-tip-con">
            注：等级调整为重危，会将患者的档案，病史，病历，异常数据等实时同步到120急救中心。
          </div>
        </div>
      </WhiteBox>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.warn-wrapper {
  display: flex;
  padding: 12px;
}
.left-part {
  flex: 1;
  .title {
    font-size: 14px;
    color: #333333;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .top-content {
    display: flex;
    align-items: center;
    height: 50px;
    padding-top: 25px;
    .text-con {
      flex: 1;
      .text-1 {
        font-size: 13px;
        color: #333;
        font-weight: bold;
        .red {
          color: #e20a0a;
        }
      }
      .text-2 {
        font-size: 12px;
        color: #777777;
        margin-top: 5px;
      }
    }
    img {
      width: 60px;
      margin-left: 40px;
      cursor: pointer;
    }
  }
}
.right-part {
  width: 300px;
  margin-left: 12px;
  height: 175px;
  margin-top: 28px;
  /deep/ .title-header {
    margin-bottom: 0;
  }
}

.radio-con {
  font-size: 12px;
  color: #333;
  display: flex;
  align-items: center;
  .label {
  }
  .radio-box {
    flex: 1;
    /deep/ {
      .el-radio {
        margin-right: 10px;
      }
      .el-radio.is-bordered + .el-radio.is-bordered {
        margin: 0;
      }
    }
  }
}

.warn-tip-con {
  background: rgba(255, 233, 208, 1);
  border: 1px solid rgba(247, 204, 143, 1);
  padding: 10px 10px;
  font-size: 12px;
  color: #e20a0a;
  margin-top: 25px;
}

.bottom-content {
  background: #606060;
  overflow: hidden;
  padding-bottom: 30px;
  img {
    width: 700px;
    display: block;
    margin: 12px auto 0;
  }
}

.bottom-white-box {
  height: calc(100vh - 220px);
  /* padding-bottom: 50px; */
}
</style>
<script>
import WhiteBox from '@/components/white-box'
export default {
  props: {},
  data() {
    return {
      radio1: '2'
    }
  },
  methods: {
    msg(type) {
      if (type == 1) {
        this.$alert('张先生  18811325324', '联系患者', {
          confirmButtonText: '确定',
          callback: action => {}
        })
      } else if (type == 2) {
        this.$alert('李先生  18811325325', '联系家属', {
          confirmButtonText: '确定',
          callback: action => {}
        })
      }
    }
  },
  components: {
    WhiteBox
  }
}
</script>
