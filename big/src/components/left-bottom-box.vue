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
      <tr v-for="(item, index) in tableData" :key="index">
        <td>{{ item.车牌号 }}</td>
        <td>{{ item.姓名 }}</td>
        <td>{{ item.性别 }}</td>
        <td>{{ item.年龄 }}</td>
        <td>{{ item.年龄 }}</td>
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
  props: {},
  data() {
    return {
      tableData: [
        {
          车牌号: '桂A0001',
          姓名: '邹驳帝',
          性别: '男',
          年龄: '20',
          状态: '出诊中'
        },
        {
          车牌号: '桂A0002',
          姓名: '易晓莉',
          性别: '女',
          年龄: '15',
          状态: '等待派车'
        },
        {
          车牌号: '桂A0003',
          姓名: '夏山',
          性别: '男',
          年龄: '55',
          状态: '出诊中'
        },
        {
          车牌号: '桂A0004',
          姓名: '郑涛涛',
          性别: '男',
          年龄: '37',
          状态: '出诊中'
        },
        {
          车牌号: '桂A0005',
          姓名: '李晓东',
          性别: '男',
          年龄: '37',
          状态: '出诊中'
        }
      ]
    }
  },
  methods: {},
  components: {}
}
</script>
