<template>
  <div class="car-tab-wrapper">
    <div class="top-part">
      <div class="left-part">
        <div class="info-table-wrapper" style="margin-bottom: 0">
          <table class="info-table">
            <colgroup>
              <col width="70px" />
              <col width="12%" />
              <col width="70px" />
              <col width="12%" />
              <col width="70px" />
              <col width="10%" />
              <col width="70px" />
              <col width="15%" />
            </colgroup>
            <tr>
              <th colspan="8">急救编号：{{ taskInfo.taskNo }}</th>
            </tr>
            <tr>
              <td class="key">姓名：</td>
              <td class="value">{{ taskInfo.patientName }}</td>
              <td class="key">性别：</td>
              <td class="value">{{ taskInfo.sex }}</td>
              <td class="key">年龄：</td>
              <td class="value">{{ taskInfo.age }}</td>
              <td class="key">身份：</td>
              <td class="value">{{ taskInfo.personDesc }}</td>
            </tr>
            <tr>
              <td class="key">联系人：</td>
              <td class="value">{{ taskInfo.contactName }}</td>
              <td class="key">电话：</td>
              <td class="value">{{ taskInfo.contactPhone }}</td>
              <td class="key">地址：</td>
              <td class="value" colspan="3">{{ taskInfo.eventLocation }}</td>
            </tr>
          </table>

          <div class="createTime">{{ taskInfo.eventTime }}</div>
        </div>
      </div>
      <div class="right-part">
        <div class="text-1">车牌号：{{ $route.query.carNo }}</div>
        <div
          class="text-2"
          v-for="item in doctorList"
          :key="item.empNo + 'doctor'"
          >医生：{{ item.empName }}（{{ item.phone }}）</div
        >
        <div
          class="text-3"
          v-for="item in nurseList"
          :key="item.empNo + 'nurse'"
          >护士：{{ item.empName }}（{{ item.phone }}）</div
        >
        <div class="status-label">{{ nodeName }}</div>
      </div>
    </div>

    <div class="time-line-part">
      <div class="time-line-box" v-for="(item, index) in timeList" :key="index">
        <div class="point"></div>
        <div class="label">{{ item.label }}</div>
        <div class="time">{{ item.time }}</div>
        <img
          src="../images/point-已完成.png"
          v-if="item.status == 1"
          alt=""
          class="status-1"
        />
        <img
          src="../images/point-进行中.png"
          v-if="item.status == 2"
          alt=""
          class="status-2"
        />
      </div>
      <div class="line"></div>
    </div>

    <div class="bottom-part">
      <div class="left-part">
        <div class="head-con">
          <div
            class="tab-item"
            :class="{ active: activeTab === 1 }"
            @click="activeTab = 1"
            >地图定位</div
          >
          <!-- <div
            class="tab-item"
            :class="{ active: activeTab === 2 }"
            @click="activeTab = 2"
            >生命体征</div
          > -->
          <div
            class="tab-item"
            :class="{ active: activeTab === 3 }"
            @click="activeTab = 3"
            >院前病历</div
          >
          <!-- <div
            class="tab-item"
            :class="{ active: activeTab === 4 }"
            @click="activeTab = 4"
            >心电数据</div
          > -->
        </div>
        <div class="content">
          <Map v-if="activeTab === 1"></Map>
          <img
            class="content-img"
            src="../../consultation/images/心电动图.gif"
            v-if="activeTab === 2"
          />
          <CarTabRecode
            v-if="activeTab === 3 && taskInfo.taskNo"
            :taskNo="taskInfo.taskNo"
          ></CarTabRecode>
          <XDT v-show="activeTab === 4" />
        </div>
      </div>
      <div class="right-part">
        <div class="head-con">救助对话</div>
        <div class="content right-content">
          <div class="im-con">
            <Im v-if="initEd"></Im>
          </div>
          <div class="video-con">
            <Video v-if="initEd"></Video>
            <div class="null-video"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.car-tab-wrapper {
  height: 100%;
  padding: 12px;
  background: #f5f5f5;
}
.top-part {
  display: flex;
  margin-bottom: 12px;
  .left-part {
    margin-right: 12px;
    flex: 1;
    width: 0;
  }
  .right-part {
    width: 280px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 0px 0px rgba(183, 183, 183, 0.5);
    border-radius: 4px;
    border: 1px solid rgba(206, 206, 206, 1);
    height: 96px;
    padding: 10px;
    position: relative;
    overflow: auto;
    @include scrollBar;
    .text-1 {
      font-size: 14px;
      font-weight: bold;
      margin-top: 2px;
      margin-bottom: 10px;
    }
    .text-2 {
      font-size: 12px;
      margin-bottom: 5px;
    }
    .text-3 {
      font-size: 12px;
    }
    .status-label {
      position: absolute;
      width: 66px;
      height: 20px;
      background: rgba(246, 107, 107, 1);
      border-radius: 12px;
      font-size: 12px;
      color: #fff;
      text-align: center;
      line-height: 20px;
      right: 15px;
      top: 12px;
    }
  }
}
.time-line-part {
  position: relative;
  height: 90px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 0px 0px rgba(183, 183, 183, 0.5);
  border-radius: 4px;
  border: 1px solid rgba(206, 206, 206, 1);
  .line {
    position: absolute;
    height: 4px;
    background: #dddddf;
    left: 42px;
    top: 28px;
    width: 700px;
  }
  .time-line-box {
    float: left;
    height: 100%;
    width: 100px;
    font-size: 12px;
    color: #666666;
    position: relative;
    .point {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #dddddf;
      margin: 20px auto 12px;
    }
    .label {
      text-align: center;
      margin-bottom: 0px;
    }
    .time {
      text-align: center;
    }
    .status-1 {
      position: absolute;
      top: 20px;
      left: 40px;
      z-index: 2;
      width: 20px;
    }
    .status-2 {
      position: absolute;
      top: 13px;
      left: 34px;
      z-index: 2;
      width: 32px;
    }
  }
}

.bottom-part {
  display: flex;
  align-items: stretch;
  margin-top: 10px;
  height: calc(100vh - 280px);
  .content {
    height: calc(100% - 40px);
    background: #fff;
    .content-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #000;
    }
  }
  .left-part {
    width: 0;
    flex: 3;
    .head-con {
      background: rgba(255, 255, 255, 1);
      /* box-shadow: 0px 1px 0px 0px rgba(183, 183, 183, 0.5); */
      border-radius: 4px 0 0 0;
      border: 1px solid rgba(206, 206, 206, 1);
      border-right: 0;
      /* border-bottom: 0; */
      height: 40px;
      display: flex;
      align-items: flex-end;
      background: #f7f7f7;
      .tab-item {
        height: 32px;
        width: 80px;
        background: #e2e2e2;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        color: #333333;
        margin-left: 3px;
        border-radius: 4px 4px 0 0;
        cursor: pointer;
        &.active {
          font-weight: bold;
          border: 1px solid #ccc;
          border-bottom: 0;
          background: #fff;
        }
      }
    }
  }
  .right-part {
    flex: 4;
    .head-con {
      height: 40px;
      border: 1px solid #cecece;
      border-radius: 0 4px 0 0;
      font-size: 14px;
      color: #333;
      line-height: 40px;
      padding-left: 10px;
      font-weight: bold;
    }
    .right-content {
      display: flex;
      align-items: stretch;
      .im-con {
        width: 0;
        flex: 2;
      }
      .video-con {
        width: 0;
        flex: 3;
        position: relative;
        /* background: #000; */
        .null-video {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: url('../../consultation/images/连接中.png');
          background-size: cover;
        }
      }
    }
  }

  /deep/ {
    #video-grid {
      position: fixed !important;
      width: calc((100vw - 300px - 24px) * 4 / 7 * 3 / 5);
      height: calc((100vh - 50px - 24px - 96px - 12px - 90px - 50px) / 2);
      z-index: 112;
      bottom: 12px;
      right: 12px;
      padding: 0 !important;
      background: #000;
      overflow: hidden;
      #main-video,
      .video-box {
        float: left;
        width: 33.33%;
        height: 33.33%;
        position: static !important;
        padding: 0 !important;
        video {
          object-fit: cover !important;
          background: url('../../consultation/images/连接中.png');
        }
      }
    }
    .isCar-video-box {
      position: fixed !important;
      z-index: 2;
      padding: 0 !important;
      right: 12px;
      top: 310px;
      width: calc((100vw - 300px - 24px) * 4 / 7 * 3 / 5);
      height: calc((100vh - 50px - 24px - 96px - 12px - 90px - 50px) / 2);
      padding: 0;
      overflow: hidden;
      video {
        object-fit: cover !important;
        background: url('../../consultation/images/连接中.png');
      }
    }
    .current-conversation-wrapper {
      height: calc(100vh - 312px) !important;
    }
  }
}
</style>
<script>
import Map from './map'
import Im from '../../consultation/components/im/index'
import Video from '../../consultation/components/video/index'
import { getConsultDetailForCarNo } from '@/api/common'
import moment from 'moment'
import CarTabRecode from '../components/carTab-recode'
import XDT from '../components/心电图/index'
export default {
  props: {},
  data() {
    return {
      taskInfo: {},
      initEd: false,
      imgMap: {
        '0': '未受理',
        '1': '受理中',
        '2': '已完成',
        '-1': '不受理',
        '-2': '已取消'
      },
      timeList: [
        {
          label: '收到指令',
          time: '08/09 11:21:32',
          status: 1
        },
        {
          label: '驶向现场',
          time: '08/09 11:21:32',
          status: 2
        },
        {
          label: '到达现场'
        },
        {
          label: '病人上车'
        },
        {
          label: '到达医院'
        },
        {
          label: '移交完成'
        },
        {
          label: '途中待命'
        },
        {
          label: '结束待命'
        }
      ],
      activeTab: 1,
      roomId: '',
      groupId: '',
      nodeName: '',
      doctorList: [],
      nurseList: []
    }
  },
  methods: {
    init() {
      this.initEd = false
      getConsultDetailForCarNo(this.$route.query.carNo).then(res => {
        this.taskInfo = res.data.task
        this.nodeName = res.data.nodeName
        this.doctorList = res.data.doctorList
        this.nurseList = res.data.nurseList
        this.timeList = res.data.nodeList.map(item => {
          return {
            label: item.nodeName,
            time: item.eventTime
              ? moment(item.eventTime).format('MM/DD HH:mm:ss')
              : '',
            status: item.currentNode ? 2 : item.hadCompleted ? 1 : 0
          }
        })
        this.roomId = res.data.consultDetail.roomId
        this.groupId = res.data.consultDetail.groupId

        this.$router.replace({
          path: '/desktop/carTab',
          query: {
            carNo: this.$route.query.carNo,
            roomId: this.roomId,
            groupId: this.groupId
          }
        })
        this.initEd = true
      })
    }
  },
  created() {
    this.init()
  },
  watch: {
    $route() {
      this.init()
    }
  },
  components: { Map, Im, Video, CarTabRecode, XDT }
}
</script>
