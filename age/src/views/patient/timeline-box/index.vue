<template>
  <div class="timeline-box">
    <div class="title">
      <span>{{ title }}</span>
      <img class="edit-icon" src="../images/编 辑.png" alt="" />
    </div>
    <el-timeline v-if="activities">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.content"
        type="success"
      >
        {{ activity.timestamp }}
      </el-timeline-item>
    </el-timeline>
    <div class="empty" v-else>无</div>
  </div>
</template>
<style lang="scss" scoped>
.timeline-box {
  background: rgba(243, 244, 250, 1);
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  .title {
    font-size: 14px;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .edit-icon {
      width: 14px;
    }
  }
  .el-timeline {
    padding-left: 0;
  }
  .empty {
    font-size: 14px;
    color: #777777;
  }
}
</style>
<script>
export default {
  props: ['title', 'activities'],
  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>
