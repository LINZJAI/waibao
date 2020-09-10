<template>
  <div>
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="425px"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <img src="../images/成功.png" alt="" class="success-img" />
      <div class="text">{{ title || '已派单成功，等待车辆确认任务～' }}</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="goList" size="small">返回列表</el-button>
        <el-button type="primary" @click="refresh" size="small"
          >查看详情</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.success-img {
  display: block;
  width: 68px;
  margin: 15px auto;
}
.text {
  font-size: 14px;
  color: #333333;
  font-weight: bold;
  text-align: center;
}
</style>
<script>
export default {
  props: {
    init: {
      type: Function
    }
  },
  data() {
    return {
      dialogVisible: false,
      title: ''
    }
  },
  methods: {
    open(title = '') {
      this.title = title
      this.dialogVisible = true
    },
    close() {
      this.dialogVisible = false
    },
    goList() {
      this.close()
      this.$router.push('/desktop/index')
    },
    refresh() {
      this.close()
      this.init && this.init()
    }
  },
  components: {}
}
</script>
