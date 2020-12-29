<template>
  <div class="table-con">
    <div class="head-con">
      <div class="title">分诊记录</div>
      <div class="data-label c1">抢救监护区</div>
      <div class="data-input">{{ num1 }}/{{ total }}</div>
      <div class="data-label c2">观察诊疗区</div>
      <div class="data-input">{{ num2 }}/{{ total }}</div>
      <div class="data-label c3">急诊诊疗区</div>
      <div class="data-input">{{ num3 }}/{{ total }}</div>
    </div>
    <div class="filter-con">
      <div class="filter-label">来院时间：</div>
      <el-date-picker
        size="mini"
        class="date-input"
        v-model="arriveHospBeginTime"
      ></el-date-picker>
      <div class="zhi">至</div>
      <el-date-picker
        size="mini"
        class="date-input"
        v-model="arriveHospEndTime"
      ></el-date-picker>
      <div class="filter-block"></div>
      <div class="filter-label">去向：</div>
      <el-select
        size="mini"
        class="select-input"
        v-model="triageRegion"
        popper-class="pre-test-popper"
        clearable
      >
        <el-option
          v-for="(item, index) in triage_region_list"
          :key="index"
          :value="item.code"
        >
          <div>
            {{ item.name }}
            <div
              class="point option"
              :class="{
                type1: item.name == '抢救监护区',
                type2: item.name == '观察诊疗区',
                type3: item.name == '急诊诊疗区'
              }"
            ></div>
          </div>
        </el-option>
      </el-select>
      <div class="filter-block"></div>
      <div class="filter-label">分级：</div>
      <el-select
        size="mini"
        class="select-input2"
        v-model="classification"
        popper-class="pre-test-popper"
        clearable
      >
        <el-option
          v-for="(item, index) in classification_list"
          :key="index"
          :label="item.name"
          :value="item.code"
        ></el-option>
      </el-select>
      <div class="filter-block"></div>
      <el-input
        size="mini"
        placeholder="请输入关键字"
        style="width: 150px"
        v-model="keyword"
      ></el-input>
      <div class="filter-block"></div>
      <button class="pre-test-btn" style="height: 28px" @click="getData()"
        >查询</button
      >
      <button
        class="pre-test-btn"
        style="height: 28px"
        @click="$router.push('/pre-test/report')"
        >分诊统计</button
      >
      <div class="block"></div>
      <el-button
        type="primary"
        size="mini"
        icon="el-icon-plus"
        @click="$router.push('/pre-test/add')"
        >新增分诊</el-button
      >
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      @row-dblclick="rowDbClick"
      @row-click="rowClick"
      v-loading="tableLoading"
      :height="appModel.wih - 195"
    >
      <el-table-column prop="date" label="去向" width="60">
        <template slot-scope="scope">
          <el-tooltip
            class="item"
            effect="dark"
            :content="scope.row.tieredMaster.triageRegion"
            placement="left"
          >
            <div
              class="point"
              :class="{
                type1: scope.row.tieredMaster.triageRegion == '抢救监护区',
                type2: scope.row.tieredMaster.triageRegion == '观察诊疗区',
                type3: scope.row.tieredMaster.triageRegion == '急诊诊疗区'
              }"
            ></div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="姓名" width="60">
        <template slot-scope="scope">
          <span class="td-link" @click="goDetail(scope.row)">
            {{ scope.row.tieredRegister.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="性别" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.sex }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="年龄" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.age }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="分级" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.classification }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="团队" width="90">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.massIncidentsContent }}
        </template>
      </el-table-column>
      <!-- <el-table-column prop="date" label="欠费" width="45"></el-table-column> -->
      <el-table-column prop="date" label="挂号号码" width="56">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.registerNo }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="编号" width="100">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.registerId }}
        </template>
      </el-table-column>
      <!-- <el-table-column
        prop="date"
        label="就诊卡号"
        width="65"
      ></el-table-column> -->
      <!-- <el-table-column prop="date" label="患者ID" width="54">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.idcard }}
        </template>
      </el-table-column> -->

      <el-table-column prop="date" label="主诉" width="72">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.complaint }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="十大症状" width="68">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.keyDiseases }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="诊室" width="90">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.deptName }}
        </template>
      </el-table-column>

      <el-table-column prop="date" label="来院时间" width="80">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.arriveInHospitalTime }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="来院方式" width="59">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.toHispitalWay }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="工作单位" width="80">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.wordAddress }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="联系方式" width="90">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.phone }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="住址" width="72">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.address }}
        </template>
      </el-table-column>
      <!-- <el-table-column prop="date" label="分诊规则" width="60">

      </el-table-column> -->
      <!-- <el-table-column
        prop="date"
        label="分诊护士"
        width="60"
      ></el-table-column> -->
      <el-table-column prop="date" label="接诊医生" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.receptionEmpName }}
        </template>
      </el-table-column>
      <!-- <el-table-column label="归转" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.receptionEmpNo }}
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="归转时间" width="80"></el-table-column> -->
      <el-table-column prop="date" label="初步诊断" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.diagnosis }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="来源" width="72">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.patientSource }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="去向" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.triageRegion }}
        </template>
      </el-table-column>
      <!-- <el-table-column prop="date" label="处置" width="60"></el-table-column> -->
      <el-table-column prop="date" label="出生日期" width="80">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.birthday }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="急诊日期" width="80">
        <template slot-scope="scope">
          {{ scope.row.tieredRegister.createTime }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="体温" width="36">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.temperature }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="疼痛评分" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.pain }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="创伤评分" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.vulnus }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="MEWS评分" width="70">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.mews }}
        </template>
      </el-table-column>

      <el-table-column prop="date" label="床位" width="50">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.bedLabel }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="挂号类型" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.registerType }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="绿色通道" width="60">
        <template slot-scope="scope">
          {{ scope.row.tieredMaster.greenChannel ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="六大病种"
        width="72"
      ></el-table-column>
    </el-table>
    <div class="pagination-con">
      <el-pagination
        @current-change="getData"
        :current-page="current"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table-con {
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #cecece;
  margin: 15px;
  .head-con {
    height: 30px;
    background: #e1e2e7;
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 15px;
    .title {
      flex: 1;
      font-weight: bold;
      color: #333;
    }
    .data-label {
      font-weight: bold;
      margin-left: 15px;
      &.c1 {
        color: #b41617;
      }
      &.c2 {
        color: #d87800;
      }
      &.c3 {
        color: #507b00;
      }
    }
    .data-input {
      margin-left: 5px;
      width: 60px;
      height: 20px;
      line-height: 19px;
      text-align: center;
      color: #333;
      font-size: 12px;
      background: #ffffff;
      border-radius: 2px;
      border: 1px solid #cecece;
    }
  }

  .filter-con {
    padding: 8px 15px;
    background: #fff;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #333;
    .date-input {
      width: 130px;
    }
    .zhi {
      padding: 5px;
    }
    .select-input {
      width: 110px;
    }
    .select-input2 {
      width: 150px;
    }
    .filter-block {
      width: 10px;
    }
  }

  .pagination-con {
    height: 40px;
    background: #eeeeee;
    display: flex;
    align-items: center;
    padding: 0 15px;
    .el-pagination {
      width: 100%;
      text-align: right;
    }
  }

  /deep/ {
    .el-table {
      font-size: 12px;
      color: #333;
      border-top: 1px solid #ddd;
      /* height: calc(100vh - 248px); */
      .cell {
        padding-left: 5px;
        padding-right: 5px;
      }
    }

    .el-table--border th,
    .el-table--border td {
      border-right: 1px solid #ddd;
    }
    .el-table th.is-leaf,
    .el-table td {
      border-bottom: 1px solid #ddd;
      text-align: center;
      font-size: 12px;
    }

    .el-table__body-wrapper {
    }
    .el-table__header-wrapper {
      th {
        background: #efefef;

        .cell {
          font-size: 12px;
          color: #333;
          font-weight: bold;
          padding: 2px;
          text-align: center;
        }
      }
    }
  }
}

.point {
  /* background: #f65958; */
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 0 auto;
  &.option {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
  }
  &.type1 {
    background: #f65958;
    border: 1px solid #b41617;
  }
  &.type2 {
    background: #f88a15;
    border: 1px solid #d87800;
  }
  &.type3 {
    background: #669902;
    border: 1px solid #507b00;
  }
}

.td-link {
  cursor: pointer;
  color: #0200ff;
  text-decoration: underline;
}
</style>
<script>
import { registerGetPage, multiGetList, countByRegion } from '@/api/pre-test'
import moment from 'moment'
export default {
  props: {},
  data() {
    return {
      arriveHospBeginTime: moment().subtract(1, 'M'),
      arriveHospEndTime: moment().endOf('d'),
      triageRegion: '',
      classification: '',
      total: 1,
      current: 1,
      size: 100,
      triage_region_list: [],
      classification_list: [],
      keyword: '',
      tableData: [],
      num1: 0,
      num2: 0,
      num3: 0,
      tableLoading: false
    }
  },
  methods: {
    goDetail(row) {
      this.$router.push(
        `/pre-test/edit?registerId=${row.tieredRegister.registerId}`
      )
    },
    rowDbClick(row) {
      this.$router.push(
        `/pre-test/edit?registerId=${row.tieredRegister.registerId}`
      )
    },
    rowClick(row) {
      console.log(row, 'rowrow')
      this.$parent.$refs['right-con'].info = row
    },
    getData(current) {
      if (current) this.current = current
      let query = {
        current: this.current,
        size: this.size,
        arriveHospBeginTime: this.arriveHospBeginTime
          ? moment(this.arriveHospBeginTime).format('YYYY-MM-DD HH:mm:ss')
          : '',
        arriveHospEndTime: this.arriveHospEndTime
          ? moment(this.arriveHospEndTime).format('YYYY-MM-DD HH:mm:ss')
          : '',
        triageRegion: this.triageRegion,
        classification: this.classification,
        keyword: this.keyword
      }
      this.tableLoading = true
      registerGetPage(query).then(res => {
        this.current = res.data.current
        this.total = res.data.total
        this.tableData = res.data.records
        this.tableLoading = false
      })

      countByRegion(query).then(res => {
        this.num1 = res.data.抢救监护区 || 0
        this.num2 = res.data.观察诊疗区 || 0
        this.num3 = res.data.急诊诊疗区 || 0
      })
    }
  },
  created() {
    this.getData()
    multiGetList(['triage_region', 'classification']).then(res => {
      this.triage_region_list = res.data.triage_region
      this.classification_list = res.data.classification
    })
  },
  components: {}
}
</script>
