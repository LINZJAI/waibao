<template>
  <div class="message-con">
    <el-tabs type="border-card" @tab-click="tabClick">
      <el-tab-pane label="未读">
        <MessageTable type="未读"></MessageTable>
      </el-tab-pane>
      <el-tab-pane label="已读" type="已读"
        ><MessageTable type="已读"></MessageTable
      ></el-tab-pane>
      <!-- <el-tab-pane label="全部" type="全部"
        ><MessageTable></MessageTable
      ></el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<style lang="scss" scoped>
.message-con {
  padding: 15px;
  background: #f5f5f5;
}
</style>
<script>
import MessageTable from './message-table'
export default {
  props: {},
  data() {
    return {}
  },
  methods: {
    tabClick(tab) {
      tab.$children[0].getTableData()
    }
  },
  components: {
    MessageTable
  }
}
</script>
