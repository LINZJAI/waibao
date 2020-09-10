<template>
  <div class="message-con">
    <div class="head-con">消息通知</div>
    <div class="message-info-con">
      <div class="title">急救编号{{ info.taskNo }}</div>
      <div class="text">
        <div>
          <span v-if="info.type !== 'emery_task'"
            >车辆{{ info.carNo || info.senderNo }}</span
          >
          <span class="reject" v-if="info.subType == 'reject'"
            >驳回了急救任务</span
          >
          <span
            v-else-if="info.subType == 'receive' && info.type == 'emery_task'"
            >分配到一个急救任务，请及时查收。</span
          >
          <span class="receive" v-else-if="info.subType == 'receive'"
            >接受了急救任务</span
          >
          <span class="abnormal" v-else-if="info.subType == 'abnormal'"
            >上报了突发状况</span
          >
          <span class="apply" v-else-if="info.subType == 'apply'"
            >发起了远程会诊</span
          >
          <span v-else
            >状态改为 <span class="bold">{{ info.nodeName }}</span></span
          >
        </div>
        <div v-if="info.subType == 'reject'"> 原因：{{ info.reason }} </div>
        <div v-if="info.subType == 'abnormal'"> 详情：{{ info.title }} </div>
        <div v-if="info.subType == 'apply'"> 患者：{{ info.patientName }} </div>
        <div v-if="info.content"> 备注：{{ info.content }} </div>
      </div>

      <div
        class="more"
        :onclick="
          `window.app.$router.push('/consultation/detail?roomId=${
            this.info.roomId
          }'&groupId=${window.encodeURIComponent(this.info.groupId)})`
        "
        v-if="info.subType == 'apply'"
      >
        立即进入 >
      </div>
      <div
        v-else
        class="more"
        :onclick="
          `window.app.$router.push('/desktop/detail?taskNo=${this.info.taskNo}')`
        "
      >
        查看任务 >
      </div>

      <img
        class="type-img"
        src="../../assets/images/驳回任务.png"
        alt=""
        v-if="info.subType == 'reject'"
      />
      <img
        class="type-img"
        src="../../assets/images/120.png"
        alt=""
        v-else-if="info.subType == 'receive' && info.type == 'emery_task'"
      />
      <img
        class="type-img"
        src="../../assets/images/接受任务.png"
        alt=""
        v-else-if="info.subType == 'receive'"
      />
      <img
        class="type-img"
        src="../../assets/images/突发状况 (2).png"
        alt=""
        v-else-if="info.subType == 'abnormal'"
      />
      <img
        class="type-img"
        src="../../assets/images/会诊.png"
        alt=""
        v-else-if="info.subType == 'apply'"
      />
      <img
        class="type-img"
        src="../../assets/images/途中待命.png"
        alt=""
        v-else
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.head-con {
  height: 37px;
  background: rgba(236, 236, 240, 1);
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 13px;
  font-weight: bold;
}
.message-info-con {
  padding: 10px;
  position: relative;
}

.title {
  font-size: 13px;
  color: #333;
  font-weight: bold;
}

.text {
  width: 200px;
  font-size: 12px;
  color: #333;
  line-height: 22px;
  margin-top: 2px;
  .reject {
    margin-left: 5px;
    color: #fa392f;
  }
  .receive {
    margin-left: 5px;
    color: #54b770;
  }
  .abnormal {
    margin-left: 5px;
    color: #cc2323;
  }
  .apply {
    margin-left: 5px;
    color: #cc2323;
  }
}

.type-img {
  width: 78px;
  position: absolute;
  right: 44px;
  top: 17px;
}
.more {
  margin-top: 20px;
  font-size: 12px;
  color: #555555;
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
</style>
<script>
import moment from 'moment'
export default {
  props: {},
  data() {
    return {
      window: window,
      info: {}
    }
  },
  computed: {},
  methods: {
    moment,
    getWaitTime() {
      return moment().diff(moment(this.info.dispatchTime), 'm')
    },
    goDetail() {
      this.$router.push(`/desktop/detail?taskNo=${this.info.taskNo}`)
    }
  },

  mounted() {},
  components: {}
}
</script>
