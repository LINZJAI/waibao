<template>
  <div>
    <el-dialog
      title="选择患者"
      :visible.sync="dialogVisible"
      width="600px"
      :close-on-click-modal="false"
      class="record-modal"
    >
      <div class="filter-con">
        <el-input
          size="small"
          placeholder="请输入关键字搜索"
          style="width: 200px"
          v-model="keyword"
        ></el-input>
        <el-button size="small" style="margin-left: 10px" @click="getTableData"
          >搜索</el-button
        >
      </div>
      <el-table
        :height="400"
        :data="tableData"
        v-loading="tableLoading"
        border
        style="width: 100%"
      >
        <el-table-column label="选择" width="50" align="center">
          <template slot-scope="scope">
            <el-radio v-model="selectedId" :label="scope.row.infoId"
              ><span></span
            ></el-radio>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="patientName"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          label="性别"
          prop="sex"
          width="50"
          align="center"
        ></el-table-column>
        <el-table-column
          label="出生日期"
          prop="birthday"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          label="身份证号"
          prop="idCard"
          width="250"
          align="center"
        ></el-table-column>
        <el-table-column
          label="联系电话"
          prop="contactPhone"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          label="急诊日期"
          prop="diseaseTime"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          label="来源日期"
          prop=""
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          label="主诉"
          prop="complaints"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          label="住址"
          prop="address"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          label="体温"
          prop=""
          width="50"
          align="center"
        ></el-table-column>
      </el-table>
      <template slot="footer">
        <el-button @click="save" size="small" type="primary">确定</el-button>
        <el-button @click="close" size="small">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.filter-con {
  padding: 10px 20px;
}
</style>
<script>
import { getPatientInfo } from '@/api/pre-test'
export default {
  data() {
    return {
      dialogVisible: false,
      keyword: '',
      tableData: [],
      selectedId: '',
      tableLoading: false,
      callback: null
    }
  },
  computed: {
    selectedPatient() {
      return this.tableData.find(item => this.selectedId === item.infoId)
    }
  },
  methods: {
    open(callback) {
      this.dialogVisible = true
      this.keyword = ''
      this.selectedId = ''
      this.callback = callback
      this.getTableData()
    },
    getTableData() {
      this.tableLoading = true
      getPatientInfo(this.keyword).then(res => {
        this.tableLoading = false
        this.tableData = res.data.records
      })
    },
    close() {
      this.dialogVisible = false
    },
    save() {
      if (this.selectedPatient) {
        this.callback && this.callback(this.selectedPatient)
        this.close()
      } else {
        this.$message.warning('请选择患者')
      }
    }
  },
  components: {}
}
</script>
