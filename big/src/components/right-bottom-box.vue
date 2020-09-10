<template>
  <div class="box-content">
    <div class="top-con">
      <div class="top-box">
        <div class="text-1 color-1">15 <span class="uniq">人</span></div>
        <div class="text-2">医生</div>
      </div>
      <div class="top-box">
        <div class="text-1 color-2">35<span class="uniq">人</span></div>
        <div class="text-2">护士</div>
      </div>
      <div class="top-box">
        <div class="text-1 color-3">8<span class="uniq">人</span></div>
        <div class="text-2">司机</div>
      </div>
      <div class="top-box">
        <div class="text-1 color-4">12<span class="uniq">人</span></div>
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
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ item.岗位 }}</td>
          <td>{{ item.姓名 }}</td>
          <td>{{ item.车辆 }}</td>
          <td :class="{ red: item.状态 == '出诊中' }">{{ item.状态 }}</td>
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
  props: {},
  data() {
    return {
      tableData: [
        {
          岗位: '医生',
          姓名: '萧惑勉（神内科）',
          车辆: '粤A0001',
          状态: '出诊中'
        },
        {
          岗位: '医生',
          姓名: '刘皓（心内科）',
          车辆: '',
          状态: '站内待命'
        },
        {
          岗位: '护士',
          姓名: '汤代修',
          车辆: '粤A0002',
          状态: '出诊中'
        },
        {
          岗位: '护士',
          姓名: '武小双',
          车辆: '粤A0003',
          状态: '出诊中'
        },
        {
          岗位: '司机',
          姓名: '汤蕾',
          车辆: '粤A0004',
          状态: '出诊中'
        },
        {
          岗位: '医生',
          姓名: '朱小双（全科）',
          车辆: '粤A0005',
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
