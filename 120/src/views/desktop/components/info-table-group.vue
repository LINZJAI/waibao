<template>
  <div class="info-table-wrapper">
    <table class="info-table">
      <colgroup>
        <col width="120px" />
        <col width="20%" />
        <col width="120px" />
        <col width="15%" />
        <col width="120px" />
        <col width="10%" />
        <col width="120px" />
        <col width="15%" />
      </colgroup>
      <tr>
        <th colspan="8">{{ taskInfo.taskNo }}</th>
      </tr>
      <tr>
        <td class="key">姓名：</td>
        <td class="value">{{ taskInfo.contactName }}</td>
        <td class="key">电话</td>
        <td class="value">{{ taskInfo.contactPhone }}</td>
        <td class="key">地址：</td>
        <td class="value" colspan="3">{{ taskInfo.eventLocation }}</td>
      </tr>

      <tr>
        <td class="key">事件描述：</td>
        <td class="value" colspan="7">
          <span class="red">{{ taskInfo.dangerLevel }}</span>
          {{ taskInfo.complaints }}
        </td>
      </tr>

      <template v-for="(item, index) in dispatchRecordList">
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
                src="../../../assets/images/突发状况.png"
                alt=""
                class="warning-icon"
                slot="reference"
              />
            </el-popover>
          </td>
          <td class="value">{{ item.carNo }}</td>
          <td class="key">预计到院时间：</td>
          <td class="value">{{ item.arrivedHospitalTime }}</td>
          <td class="key">状态时刻：</td>
          <td class="value" colspan="3">{{ item.eventCommitTime }}</td>
        </tr>

        <tr :key="index + 'two'">
          <td class="key">出诊医生：</td>
          <td class="value">
            <span v-for="o in item.doctorList" :key="o.id"
              >{{ o.empName }}
              &nbsp;
            </span>
          </td>
          <td class="key">发单时间：</td>
          <td class="value">{{ item.dispatchTime }}</td>
          <td class="key">受理状态：</td>
          <td class="value" colspan="3">{{ item.nodeName }}</td>
        </tr>
      </template>
    </table>

    <img
      class="status-img"
      :src="require(`../images/${imgMap[taskInfo.status]}.png`)"
      alt=""
    />
    <div class="triangle"></div>
    <div class="type-text">
      群
    </div>

    <!-- <div class="taskNo">
      {{ taskInfo.taskNo }}
    </div> -->
    <div class="createTime">{{ taskInfo.eventTime }}</div>
  </div>
</template>
<style lang="scss" scoped>
.triangle {
  width: 0;
  height: 0;
  border-top: 32px solid #886fb0;
  border-right: 32px solid transparent;
  position: absolute;
  top: 0;
  left: 0;
}
.type-text {
  position: absolute;
  top: 3px;
  left: 3px;
  color: #fff;
  font-size: 12px;
}
</style>
<script>
export default {
  props: {
    dataSource: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      imgMap: {
        '0': '未受理',
        '1': '受理中',
        '2': '已完成',
        '-1': '不受理',
        '-2': '已取消'
      }
    }
  },
  computed: {
    taskInfo() {
      return this.dataSource.taskInfo || {}
    },
    dispatchRecordList() {
      return this.dataSource.dispatchRecordList || []
    }
  },
  methods: {},
  components: {}
}
</script>
