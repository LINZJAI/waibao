<template>
  <div class="detail-wrapper">
    <div class="left-part">
      <div class="title-con">
        求救信息
      </div>
      <div class="form-con">
        <table>
          <colgroup>
            <col width="33%" />
            <col width="66%" />
          </colgroup>
          <tr>
            <td>急救编号：</td>
            <td>{{ info.taskNo }}</td>
          </tr>
          <tr>
            <td>求救类型：</td>
            <td>{{ info.task.eventType }}</td>
          </tr>
          <tr>
            <td>危重等级：</td>
            <td>{{ info.task.dangerLevel }}</td>
          </tr>
          <tr>
            <td>发单时间：</td>
            <td>{{ info.task.dispatchTime }}</td>
          </tr>
          <tr>
            <td>患者姓名：</td>
            <td>{{ info.task.patientName }}</td>
          </tr>
          <tr>
            <td>性 别：</td>
            <td>{{ info.task.sex }}</td>
          </tr>
          <tr>
            <td>年 龄：</td>
            <td>{{ info.task.age }}岁</td>
          </tr>
          <tr>
            <td>身 份：</td>
            <td>{{ info.task.personDesc }}</td>
          </tr>
          <tr>
            <td>主 诉：</td>
            <td>{{ info.task.complaints }} </td>
          </tr>
          <tr>
            <td>车牌号：</td>
            <td>{{ info.carNo }}</td>
          </tr>
          <tr>
            <td>到院时间：</td>
            <td>{{ info.arrivedHospitalTime }}</td>
          </tr>
          <tr>
            <td>任务状态：</td>
            <td>{{ info.nodeName }}</td>
          </tr>
          <tr>
            <td>出诊医生：</td>
            <td>{{ info.doctorList.map(item => item.empName).join('，') }}</td>
          </tr>
          <tr>
            <td>初步诊断：</td>
            <td>{{ measure.diagnosis }}</td>
          </tr>
          <tr>
            <td>会诊目的：</td>
            <td>{{ data.title }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="main-part">
      <div class="main-top-part">
        <Video></Video>
      </div>
      <div class="main-bottom-part">
        <div class="main-bottom-left-part"> </div>
        <div class="main-bottom-right-part"></div>
      </div>
    </div>
    <div class="right-part">
      <div class="title-bar">
        会诊医生
      </div>
      <div class="info-box">
        <div class="right-table-con">
          <table>
            <colgroup>
              <col width="33%" />
              <col width="66%" />
            </colgroup>
            <tr>
              <td class="key">
                申请者：
              </td>
              <td class="value">
                <div>
                  --
                  <!-- 孔帝魁（心血管科） -->
                </div>
              </td>
            </tr>
            <tr>
              <td class="key">
                专家：
              </td>
              <td class="value">
                <div>
                  --
                  <!-- 孔帝魁（心血管科） -->
                </div>
                <!-- <div>
                  孔帝魁（心血管科）
                </div>
                <div>
                  孔帝魁（心血管科）
                </div> -->
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="title-bar">
        会诊交流
      </div>
      <div class="message-con">
        <Im></Im>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.detail-wrapper {
  display: flex;
  height: 100%;
  align-items: stretch;
}
.left-part {
  width: 250px;
  background: #223355;
  .title-con {
    margin: 20px 20px 0;
    text-align: center;
    font-size: 15px;
    color: #ffffff;
  }
  .form-con {
    background: rgba(28, 40, 63, 1);
    border-radius: 8px;
    padding: 20px 20px;
    margin: 12px 8px;
    table {
      font-size: 12px;
      color: #aeb3be;
      width: 100%;
      table-layout: fixed;
      td,
      tr {
        border-bottom: 1px dashed #0c1015;
        height: 30px;
      }
    }
  }
}
.main-part {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .main-top-part {
    flex: 2;
    background: url('./images/连接中.png');
    background-size: cover;
  }
  .main-bottom-part {
    flex: 1;
    display: flex;
    align-items: stretch;
    .main-bottom-left-part {
      flex: 1;
      /* background: url('./images/心电动图.gif'); */
      background: url('./images/连接中.png');
      background-size: cover;
    }
    .main-bottom-right-part {
      flex: 1;
      background: url('./images/连接中.png');
      background-size: cover;
    }
  }
}
.right-part {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .title-bar {
    height: 30px;
    background: rgba(225, 226, 231, 1);
    border: 1px solid rgba(223, 223, 223, 1);
    font-size: 14px;
    color: #333;
    padding-left: 16px;
    line-height: 30px;
    font-weight: bold;
  }
  .info-box {
    height: 120px;
    overflow: auto;
    .right-table-con {
      padding: 10px 20px;
      table {
        font-size: 12px;
        color: #555;
        .key {
          font-weight: bold;
          text-align: right;
        }
        .value {
          line-height: 25px;
        }
      }
    }
  }

  .message-con {
    flex: 1;
    /* background: saddlebrown; */
  }
}

/deep/ {
  #video-grid {
    position: fixed !important;
    width: calc((100vw - 550px) / 2);
    height: calc((100vh - 50px) / 3);
    z-index: 111;
    bottom: 0;
    right: 300px;
    padding: 0 !important;
    background: #000;
    overflow: hidden;
    #main-video {
      position: fixed !important;
      width: calc((100vw - 550px) / 2);
      height: calc((100vh - 50px) / 3);
      z-index: 111;
      bottom: 0;
      left: 250px;
      padding: 0;
      video {
        object-fit: cover !important;
        background: url('./images/连接中.png');
      }
    }
    .video-box {
      float: left;
      width: 33.33%;
      height: 33.33%;
      position: static !important;
      padding: 0 !important;
      video {
        object-fit: cover !important;
        background: url('./images/连接中.png');
      }
    }
  }
  .isCar-video-box {
    position: fixed !important;
    z-index: 2;
    padding: 0 !important;
    left: 250px;
    right: 300px;
    height: calc((100vh - 50px) * 2 / 3);
    top: 50px;
    padding: 0;
    overflow: hidden;
    video {
      background: url('./images/连接中.png');
      object-fit: cover !important;
    }
  }
}
</style>
<script>
import Video from './components/video/index.vue'
import Im from './components/im/index.vue'
import {
  getConsultDetail,
  getPatientDetail,
  getTaskDispatchDetail
} from '@/api/common'
export default {
  props: {},
  data() {
    return {
      data: {},
      info: {
        task: {},
        doctorList: []
      },
      measure: {}
    }
  },
  methods: {},
  created() {
    getConsultDetail(this.$route.query.id).then(res => {
      this.data = res.data
      getTaskDispatchDetail(res.data.dispatchId).then(res => {
        this.info = res.data
      })
      getPatientDetail(res.data.patientId).then(res => {
        this.measure = res.data[0].measure
      })
    })
  },
  components: {
    Video,
    Im
  }
}
</script>
