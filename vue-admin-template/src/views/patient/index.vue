<template>
  <div class="patient-wrapper">
    <div class="select-con">
      <div class="label">时间</div>
      <el-date-picker
        v-model="date"
        type="daterange"
        size="small"
        style="width: 250px"
        @change="getTableData"
      ></el-date-picker>

      <div class="label">求救类型</div>
      <el-select
        size="small"
        class="reset-select"
        v-model="type"
        @change="getTableData"
      >
        <el-option
          v-for="(item, index) in typeDict"
          :key="index"
          :value="item.value"
          :label="item.label"
        ></el-option>
      </el-select>

      <div class="label">危重等级</div>
      <el-select
        size="small"
        class="reset-select"
        v-model="dangerLevel"
        @change="getTableData"
      >
        <el-option
          v-for="(item, index) in dangerLevelDict"
          :key="index"
          :value="item.value"
          :label="item.label"
        ></el-option>
      </el-select>
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
      <el-input
        placeholder="请输入病人姓名/急救编号关键字搜索"
        v-model="keyword"
        style="width: 250px"
        size="small"
      ></el-input>
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
        <el-table-column prop="eventTime" label="发单时间" min-width="150">
        </el-table-column>
        <el-table-column prop="taskNo" label="急救编号" min-width="120">
        </el-table-column>
        <el-table-column prop="eventType" label="求救类型" min-width="100">
        </el-table-column>
        <el-table-column
          prop="dangerLevel"
          label="事件等级"
          min-width="100"
          align="center"
        >
          <template slot-scope="scope">
            <span
              :class="{
                danger:
                  scope.row.dangerLevel == '危重' ||
                  scope.row.dangerLevel == '重大事件'
              }"
              >{{ scope.row.dangerLevel }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="patientSize"
          label="病人数量"
          min-width="100"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="patientNames" label="病人" min-width="200">
        </el-table-column>
        <el-table-column prop="" label="急救状态" min-width="100">
          <template slot-scope="scope">
            {{ statusMap[scope.row.status] }}
          </template>
        </el-table-column>
        <el-table-column prop="操作" label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button
              @click="goDetails(scope.row)"
              type="text"
              size="small"
              v-if="scope.row.patientSize >= 1"
              >查看</el-button
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
import { getPatientList } from '@/api/common'
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
      keyword: '',
      statusMap: {
        '0': '未受理',
        '1': '受理中',
        '2': '已完成',
        '-1': '不受理',
        '-2': '已取消'
      },
      date: [moment().subtract(1, 'M'), moment()],
      type: '',
      typeDict: [
        {
          label: '全部求救类型',
          value: ''
        },
        {
          label: '个人求救',
          value: '个人求救'
        },
        {
          label: '群体事件',
          value: '群体事件'
        }
      ],
      status: '',
      statusDict: [
        {
          label: '全部受理状态',
          value: ''
        },
        {
          label: '未受理',
          value: '0'
        },
        {
          label: '受理中',
          value: '1'
        },
        {
          label: '已完成',
          value: '2'
        },
        {
          label: '不受理',
          value: '-1'
        },
        {
          label: '已取消',
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
        beginDate: moment(this.date[0]).format('YYYY-MM-DD'),
        endDate: moment(this.date[1]).format('YYYY-MM-DD'),
        eventType: this.type,
        status: this.status,
        dangerLevel: this.dangerLevel,
        keyword: this.keyword
      }

      this.tableLoading = true
      getPatientList(query).then(res => {
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
      this.$router.push(`/patient/record?taskNo=${item.taskNo}`)
    }
  },
  created() {
    this.getTableData()
  },
  computed: {},
  components: {}
}
</script>
