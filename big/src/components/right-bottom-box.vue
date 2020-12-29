<template>
  <div class="box-content">
    <div class="top-con">
      <div class="top-box">
        <div class="text-1 color-1"
          >{{ dataSource.doctor }} <span class="uniq">人</span></div
        >
        <div class="text-2">医生</div>
      </div>
      <div class="top-box">
        <div class="text-1 color-2"
          >{{ dataSource.nurse }}<span class="uniq">人</span></div
        >
        <div class="text-2">护士</div>
      </div>
      <div class="top-box">
        <div class="text-1 color-3"
          >{{ dataSource.driver }} <span class="uniq">人</span></div
        >
        <div class="text-2">司机</div>
      </div>
      <div class="top-box">
        <div class="text-1 color-4">
          {{ dataSource.dispatcher }} <span class="uniq">人</span></div
        >
        <div class="text-2">调度员</div>
      </div>
    </div>
    <div class="bottom-con">
      <table class="info-table">
        <tr>
          <th>岗位</th>
          <th>姓名</th>
          <th>车辆</th>
          <th>状态</th>
        </tr>
        <tr v-for="(item, index) in userDetails" :key="index">
          <td>{{ userTypeMap[item.userType] }}</td>
          <td>{{ item.empName }}</td>
          <td>{{ item.carNo }}</td>
          <td :class="{ red: item.taskStatusName == '出诊中' }">{{
            item.taskStatusName
          }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-content {
  height: 100%;

  .top-con {
    margin: vw(10) 0;
    color: #fff;
    display: flex;
    justify-content: space-around;
    .text-1 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: vw(25);
      width: vw(62);
      height: vw(62);
      border-radius: 50%;
      vertical-align: baseline;
      &.color-1 {
        background: #2e2a5f;
      }
      &.color-2 {
        background: #033e76;
      }
      &.color-3 {
        background: #164051;
      }
      &.color-4 {
        background: #303a4d;
      }
      .uniq {
        font-size: vw(13);
        vertical-align: baseline;
      }
    }
    .text-2 {
      font-size: vw(13);
      margin-top: vw(5);
      text-align: center;
    }
  }

  .bottom-con {
    .info-table {
      width: 100%;
      font-size: vw(13);
      color: #fff;
      border-collapse: collapse;
      td,
      th {
        text-align: left;
        padding: 0 vw(15);
        height: vw(34);
        border-bottom: 1px solid #2a3b61;
      }
      tr {
        &:nth-of-type(2n) {
          background: rgba(38, 57, 140, 0.24);
        }
      }
      th {
        color: #8cbbff;
      }
      .red {
        color: #ff576c;
      }
    }
  }
}
</style>
<script>
export default {
  props: {
    dataSource: {
      type: Object,
      default: () => ({})
    },
    userDetails: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      userTypeMap: {
        doctor: '医生',
        nurse: '护士',
        driver: '司机',
        dispatcher: '调度员'
      },
      tableData: [
        {
          岗位: '医生',
          姓名: '吴武信',
          车辆: '桂N93180',
          状态: '出诊中'
        },
        {
          岗位: '医生',
          姓名: '赖天福',
          车辆: '',
          状态: '站内待命'
        },
        {
          岗位: '护士',
          姓名: '苏全瑞',
          车辆: '桂N93181',
          状态: '出诊中'
        },
        {
          岗位: '护士',
          姓名: '潘科',
          车辆: '桂NJS172',
          状态: '出诊中'
        },
        {
          岗位: '司机',
          姓名: '钟秀青',
          车辆: '桂NA8688',
          状态: '出诊中'
        },
        {
          岗位: '医生',
          姓名: '黄文瑞',
          车辆: '桂NA8693',
          状态: '出诊中'
        }
        // {
        //   岗位: '医生',
        //   姓名: '白策策',
        //   车辆: '粤A0006',
        //   状态: '出诊中'
        // }
      ]
    }
  },
  methods: {},
  components: {}
}
</script>
