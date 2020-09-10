<template>
  <div>
    <div class="select-con">
      <el-button size="small" v-if="type == '未读'" @click="toReadAll"
        >标记为已读</el-button
      >
      <el-button size="small" @click="toDelAll">删除</el-button>
      <div class="block"></div>

      <div class="label">消息标题</div>
      <el-input size="small" style="width: 130px" v-model="title"></el-input>
      <div class="label">类型</div>
      <el-select size="small" v-model="messageType">
        <el-option
          v-for="(item, index) in messageDict"
          :key="index"
          v-bind="item"
        ></el-option>
      </el-select>
      <!-- <div class="label">状态</div>
      <el-select size="small"></el-select> -->

      <el-button
        size="small"
        type="primary"
        icon="el-icon-search"
        style="margin-left: 10px"
        @click="getTableData"
        >查询</el-button
      >
    </div>
    <el-table
      :height="appModel.wih - 230"
      :data="tableData"
      class="patient-table"
      border=""
      v-loading="tableLoading"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column type="index" label="序号" width="50"> </el-table-column>
      <el-table-column prop="title" label="消息标题" min-width="300">
      </el-table-column>
      <el-table-column prop="sendTime" label="接收时间" width="170">
      </el-table-column>
      <el-table-column prop="" label="类型" width="100">
        <template slot-scope="scope">
          {{ getType(scope.row.type) }}
        </template>
      </el-table-column>
      <el-table-column prop="" label="状态" width="100">
        <template slot-scope="scope">
          {{ scope.row.hadRead ? '已读' : '未读' }}
        </template>
      </el-table-column>
      <el-table-column prop="操作" label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button @click="goDetails(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button @click="toDel(scope.row)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>
<style lang="scss" scoped>
.select-con {
  background: rgba(255, 255, 255, 1);

  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  .label {
    font-size: 13px;
    color: #555555;
    margin-left: 30px;
    margin-right: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
  .num {
    font-size: 13px;
    color: #555555;
  }
}
</style>
<script>
import {
  getReceiverMessage,
  readAll,
  deleteAll,
  getMessageDetail
} from '@/api/common'
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tableLoading: false,
      size: 10,
      current: 1,
      total: 0,
      title: '',
      messageType: '',
      messageDict: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '调度任务',
          value: 'dispatch'
        },
        {
          label: '车辆事件',
          value: 'car_event_node'
        },
        {
          label: '急救出诊',
          value: '急救出诊'
        },
        {
          label: '远程会诊',
          value: '远程会诊'
        },
        {
          label: '线下培训',
          value: '线下培训'
        }
      ],
      tableData: [],
      selection: []
    }
  },
  methods: {
    getType(code) {
      return (this.messageDict.find(item => item.value === code) || {}).label
    },
    getTableData() {
      let query = {
        current: this.current,
        size: this.size,
        title: this.title,
        type: this.messageType
      }
      if (this.type == '未读') {
        query.hadRead = false
      } else if (this.type == '已读') {
        query.hadRead = true
      }
      this.tableLoading = true
      getReceiverMessage(query).then(res => {
        this.tableLoading = false
        this.total = res.data.total
        this.tableData = res.data.records
      })
    },
    currentChange(current) {
      this.current = current
      this.getTableData()
    },
    handleSelectionChange(selection) {
      this.selection = selection
    },
    toReadAll() {
      if (this.selection.length === 0) {
        return this.$message.warning('请先选择')
      }
      readAll(this.selection.map(item => item.messageId)).then(res => {
        this.$message.success('设置已读成功')
        this.getTableData()
      })
    },
    toDelAll() {
      if (this.selection.length === 0) {
        return this.$message.warning('请先选择')
      }
      this.$confirm('是否删除选中的消息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteAll(this.selection.map(item => item.messageId)).then(res => {
          this.$message.success('删除成功')
          this.getTableData()
        })
      })
    },
    toDel(item) {
      this.$confirm('是否删除此消息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteAll([item.messageId]).then(res => {
          this.$message.success('删除成功')
          this.getTableData()
        })
      })
    },
    goDetails(item) {
      getMessageDetail(item.messageId).then(res => {
        this.$router.push(`/desktop/detail?taskNo=${res.data.taskNo}`)
      })
    }
  },
  created() {
    this.getTableData()
  },
  components: {}
}
</script>
s
