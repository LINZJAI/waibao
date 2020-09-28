<template>
  <div class="patient-wrapper">
    <div class="select-con">
      <div class="label">病人姓名</div>
      <el-input
        placeholder="请输入病人姓名关键字搜索"
        v-model="patientName"
        style="width: 200px"
        size="small"
      ></el-input>

      <div class="label">病人性别</div>
      <el-select
        size="small"
        class="reset-select"
        v-model="sex"
        @change="getTableData"
      >
        <el-option
          v-for="(item, index) in sexDict"
          :key="index"
          :value="item.value"
          :label="item.label"
        ></el-option>
      </el-select>
      <div class="label">申请车辆</div>
      <el-input
        placeholder="请输入申请车辆关键字搜索"
        v-model="applyName"
        style="width: 200px"
        size="small"
      ></el-input>

      <div class="label">状态</div>
      <el-select
        size="small"
        class="reset-select"
        v-model="status"
        @change="getTableData"
      >
        <el-option
          v-for="(item, index) in statusDict"
          :key="index"
          :value="item.value"
          :label="item.label"
        ></el-option>
      </el-select>
      <div class="block"></div>

      <el-button
        size="small"
        type="primary"
        icon="el-icon-search"
        style="margin-left: 10px"
        @click="getTableData"
        >查询</el-button
      >
    </div>
    <div class="content">
      <el-table
        :height="appModel.wih - 180"
        :data="tableData"
        class="patient-table"
        v-loading="tableLoading"
      >
        <el-table-column type="index" label="序号" width="50" align="center">
        </el-table-column>
        <el-table-column prop="title" label="会诊标题" min-width="300">
        </el-table-column>
        <el-table-column prop="patientName" label="病人姓名" min-width="100">
        </el-table-column>
        <el-table-column prop="sex" label="性别" min-width="100" align="center">
        </el-table-column>
        <el-table-column
          prop="applyTime"
          label="申请时间"
          min-width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="applyName"
          label="申请车辆"
          min-width="100"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="doctorName"
          label="申请医生"
          min-width="100"
          align="center"
        >
        </el-table-column>

        <el-table-column prop="" label="状态" min-width="100" align="center">
          <template slot-scope="scope">
            {{ statusMap[scope.row.status] }}
          </template>
        </el-table-column>
        <el-table-column prop="操作" label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button @click="goDetails(scope.row)" type="text" size="small"
              >进入</el-button
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
  </div>
</template>
<style lang="scss" scoped>
.select-con {
  height: 50px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.11);
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 16px;
  .label {
    font-size: 13px;
    color: #555555;
    margin-left: 30px;
    margin-right: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
}
.content {
  padding: 20px 10px 10px 20px;
  background: #f5f5f5;
}
.pagination {
  background: #fff;
  margin: 0;
  padding: 10px;
}
.reset-select {
  width: 150px;
}
.danger {
  color: red;
}
</style>
<script>
import { getConsultList } from '@/api/common'
import moment from 'moment'
export default {
  props: {},
  data() {
    return {
      tableLoading: false,
      size: 10,
      current: 1,
      total: 0,
      tableData: [],
      patientName: '',
      sex: '',
      applyName: '',

      date: [moment().subtract(1, 'M'), moment()],
      type: '',
      sexDict: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '男',
          value: '男'
        },
        {
          label: '女',
          value: '女'
        }
      ],
      status: '',
      statusMap: {
        '0': '审核中',
        '1': '待开始',
        '2': '进行中',
        '3': '已结束',
        '-1': '拒绝申请',
        '-2': '取消申请'
      },
      statusDict: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '审核中',
          value: '0'
        },
        {
          label: '待开始',
          value: '1'
        },
        {
          label: '进行中',
          value: '2'
        },
        {
          label: '已结束',
          value: '3'
        },
        {
          label: '拒绝申请',
          value: '-1'
        },
        {
          label: '取消申请',
          value: '-2'
        }
      ],
      dangerLevel: '',
      dangerLevelDict: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '普通',
          value: '普通'
        },
        {
          label: '危重',
          value: '危重'
        },
        {
          label: '重大事件',
          value: '重大事件'
        }
      ]
    }
  },
  methods: {
    getTableData() {
      let query = {
        current: this.current,
        size: this.size,
        status: this.status,
        patientName: this.patientName,
        sex: this.sex,
        applyName: this.applyName
      }

      this.tableLoading = true
      getConsultList(query).then(res => {
        this.tableLoading = false
        this.total = res.data.total
        this.tableData = res.data.records
      })
    },
    currentChange(current) {
      this.current = current
      this.getTableData()
    },
    goDetails(item) {
      this.$router.push(
        `/consultation/detail?roomId=${
          item.roomId
        }&groupId=${window.encodeURIComponent(item.groupId)}&id=${item.id}`
      )
    }
  },
  created() {
    this.getTableData()
  },
  computed: {},
  components: {}
}
</script>
