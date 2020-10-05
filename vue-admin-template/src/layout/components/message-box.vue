<template>
  <div class="message-con">
    <div class="head-con">{{ info.title }}</div>
    <div class="message-table-con">
      <table class="message-table">
        <tr class="message-row">
          <td class="left">姓名：{{ info.task.patientName }}</td>
          <td class="right">性别：姓名：{{ info.task.sex }}</td>
        </tr>
        <tr class="message-row">
          <td class="left">年龄：{{ info.task.age }}</td>
          <td class="right">身份：{{ info.task.personDesc }}</td>
        </tr>
        <tr class="message-row">
          <td class="left">联系人：{{ info.task.contactName }}</td>
          <td class="right">电话：{{ info.task.contactPhone }}</td>
        </tr>
        <tr class="message-row">
          <td colspan="2">地址：{{ info.task.eventLocation }}</td>
        </tr>
        <tr class="message-row">
          <td colspan="2">主诉：{{ info.task.complaints }}</td>
        </tr>
        <tr>
          <td class="left" colspan="2">发单时间：{{ info.dispatchTime }}</td>
          <!-- <td class="right">等待时间：{{ waitTime }}分</td> -->
        </tr>
      </table>
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
.message-table-con {
  padding: 10px;
}
.message-table {
  width: 100%;
  border-collapse: collapse;
  border: 0;
  table-layout: fixed;
  td {
    height: 28px;
    padding: 5px 12px;
  }
  .left {
    border-right: 1px dashed #ddd;
  }
  .message-row {
    border-bottom: 1px dashed #ddd;
  }
}
</style>
<script>
import moment from 'moment'
export default {
  props: {},
  data() {
    return {
      info: {}
    }
  },
  computed: {},
  methods: {
    moment,
    getWaitTime() {
      return moment().diff(moment(this.info.dispatchTime), 'm')
    }
  },

  mounted() {},
  components: {}
}
</script>
