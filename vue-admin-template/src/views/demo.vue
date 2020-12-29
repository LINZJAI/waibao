<template>
  <div class="demo-wrapper">
    <div class="title">已完成的静态页面</div>
    <div class="card-con">
      <el-card
        shadow="always"
        class="float-card"
        v-for="item in list"
        :key="item.name"
        @click.native="$router.push(item.path)"
      >
        {{ item.name }}
      </el-card>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.demo-wrapper {
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding: 50px 0 20px;
  }
}
.float-card {
  float: left;
  width: 230px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
}
.card-con {
  width: 1024px;
  margin: 50px auto;
}
</style>
<script>
export default {
  props: {},
  data() {
    return {
      list: [
        {
          name: '登录页',
          path: '/login'
        },
        {
          name: '工作站任务列表',
          path: '/desktop'
        },
        {
          name: '工作站任务详情',
          path: '/desktop/detail'
        },
        {
          name: '地图视图',
          path: '/desktop/map'
        },
        {
          name: '患者列表',
          path: '/patient'
        },
        {
          name: '创建患者档案',
          path: '/patient/addForm'
        },
        {
          name: '患者档案',
          path: '/patient/record'
        },
        {
          name: '消息中心',
          path: '/message'
        }
      ]
    }
  },
  methods: {},
  components: {}
}
</script>
