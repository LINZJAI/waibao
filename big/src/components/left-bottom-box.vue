<template>
  <div class="box-content">
    <table class="info-table">
      <tr>
        <th>车牌号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>状态</th>
      </tr>
      <tr v-for="(item, index) in dataSource" :key="index">
        <td>{{ item.carNo }}</td>
        <td>{{ item.patientName }}</td>
        <td>{{ item.sex }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.nodeName }}</td>
      </tr>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.box-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.info-table {
  width: 100%;
  font-size: vw(13);
  color: #fff;
  border-collapse: collapse;
  td,
  th {
    text-align: left;
    padding: 0 vw(10);
    height: vw(34);
    border-bottom: 1px solid #2a3b61;
  }
  tr {
    &:nth-of-type(2n) {
      background: rgba(38, 57, 140, 0.24);
    }
  }
  th {
    color: #5182e1;
  }
}
</style>
<script>
export default {
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tableData: [
        {
          车牌号: '桂NHH799',
          姓名: '邹驳帝',
          性别: '男',
          年龄: '20',
          状态: '出诊'
        },
        {
          车牌号: '桂NJS172',
          姓名: '易晓莉',
          性别: '女',
          年龄: '15',
          状态: '等待派车'
        },
        {
          车牌号: '桂NNK3953',
          姓名: '夏山',
          性别: '男',
          年龄: '55',
          状态: '出诊'
        },
        {
          车牌号: '桂NU9573',
          姓名: '郑涛涛',
          性别: '男',
          年龄: '37',
          状态: '出诊'
        },
        {
          车牌号: '桂N93181',
          姓名: '李晓东',
          性别: '男',
          年龄: '37',
          状态: '出诊'
        }
      ]
    }
  },
  methods: {},
  components: {}
}
</script>
