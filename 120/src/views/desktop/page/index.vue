<template>
  <div class="h-100 desktop-wrapper">
    <div class="select-con">
      <div class="label">任务时间</div>
      <el-date-picker
        v-model="date"
        type="daterange"
        size="small"
        style="width: 250px"
      ></el-date-picker>

      <div class="label">类型</div>
      <el-select size="small" v-model="type">
        <el-option
          v-for="(item, index) in typeDict"
          :key="index"
          :value="item.value"
          :label="item.label"
        ></el-option>
      </el-select>
      <div class="label">急救编号</div>

      <el-input
        v-model="keyword"
        style="width: 200px"
        placeholder="请输入急救编号关键字"
        size="small"
        clearable
      ></el-input>

      <!-- <div class="label">状态</div>
      <el-select size="small" v-model="status">
        <el-option
          v-for="(item, index) in statusDict"
          :key="index"
          :value="item.value"
          :label="item.label"
        ></el-option>
      </el-select> -->

      <el-button
        size="small"
        type="primary"
        icon="el-icon-search"
        style="margin-left: 30px"
        @click="getData"
        >查询</el-button
      >
      <div class="block"></div>
      <div class="num">共 {{ filterList(status).length }} 条记录</div>
    </div>
    <el-tabs v-model="status" class="tab-con">
      <el-tab-pane
        v-for="tab in tabList"
        :key="tab.filterKey"
        :label="tab.name + `(${filterList(tab.filterKey).length})`"
        :name="tab.filterKey"
      >
        <div class="card-con">
          <div
            v-for="(item, index) in filterList(tab.filterKey)"
            :key="tab.filterKey + '-' + index"
          >
            <InfoTablePersonal
              v-if="item.taskInfo.eventType == '个人求救'"
              :dataSource="item"
              @click.native="goDetail(item)"
            ></InfoTablePersonal>
            <InfoTableGroup
              v-if="item.taskInfo.eventType == '群体事件'"
              :dataSource="item"
              @click.native="goDetail(item)"
            ></InfoTableGroup>
          </div>
          <Null v-if="filterList(tab.filterKey).length == 0"></Null>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import LeftInfo from '@/widgets/left-info'
// import InfoCard from "./components/info-card";

import InfoTablePersonal from '../components/info-table-personal'
import InfoTableGroup from '../components/info-table-group'
import { getList } from '@/api/common'
import moment from 'moment'
import Null from '@/components/Null'
export default {
  name: 'Dashboard',
  components: {
    LeftInfo,
    InfoTablePersonal,
    InfoTableGroup,
    Null
    // InfoCard
  },
  data() {
    return {
      status: '全部',
      keyword: '',
      tabList: [
        {
          name: '全部',
          filterKey: '全部'
        },
        {
          name: '未受理',
          filterKey: '0'
        },
        {
          name: '受理中',
          filterKey: '1'
        },
        {
          name: '已完成',
          filterKey: '2'
        },
        {
          name: '不受理',
          filterKey: '-1'
        },
        {
          name: '已取消',
          filterKey: '-2'
        }
      ],
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
      taskList: []
    }
  },
  watch: {
    $route() {
      this.init()
    }
  },
  methods: {
    filterList(filterKey) {
      if (filterKey == '全部') return this.taskList
      return this.taskList.filter(item => {
        return item.taskInfo.status === filterKey
      })
    },
    init() {
      if (this.$route.query.status !== undefined) {
        this.status = this.$route.query.status || ''
        this.date = [moment(), moment()]
        this.getData()
      } else {
        this.getData()
      }
    },
    getData() {
      let query = {
        beginDate: moment(this.date[0]).format('YYYY-MM-DD'),
        endDate: moment(this.date[1]).format('YYYY-MM-DD'),
        eventType: this.type,
        status: '',
        keyword: this.keyword
      }
      getList(query).then(res => {
        this.taskList = res.data
      })
    },
    goDetail(item) {
      this.$router.push(`/desktop/detail?taskNo=${item.taskInfo.taskNo}`)
    }
  },
  created() {
    this.init()
  }
}
</script>

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
  .num {
    font-size: 13px;
    color: #555555;
  }
}

.card-con {
  /* flex: 1; */
  background: rgba(245, 245, 245, 1);
  overflow: auto;

  height: calc(100vh - 180px);
}

.desktop-wrapper {
  display: flex;
  flex-direction: column;
}

/deep/ .info-table-wrapper {
  cursor: pointer;
}
.tab-con {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
}
</style>
