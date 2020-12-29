<template>
  <div class="warn-wrapper">
    <div class="bottom-con">
      <LeftLineTitle :title="title"></LeftLineTitle>
      <WhiteBox>
        <div class="table-head">
          <el-date-picker
            size="mini"
            style="width: 140px;"
            v-model="date1"
          ></el-date-picker>
          <span class="zhi">至</span>
          <el-date-picker
            size="mini"
            style="width: 140px;"
            v-model="date2"
          ></el-date-picker>
          <el-input
            size="mini"
            suffix-icon="el-icon-search"
            placeholder="输入患者ID、姓名或手机号关键字搜索"
            style="width: 250px;margin-left: 20px"
          ></el-input>
        </div>
        <div class="table-content">
          <el-table
            :height="appModel.wih - 190"
            :data="tableData"
            style="width: 100%;margin-top: 12px"
          >
            <el-table-column
              type="index"
              label="排序"
              width="50px"
              align="center"
            >
            </el-table-column>
            <el-table-column
              v-for="(item, index) in columns"
              :key="index"
              :prop="item.prop"
              :label="item.label"
              :min-width="item.label.minWidth || '100px'"
              align="center"
            >
            </el-table-column>
          </el-table>
          <!-- <el-pagination
            style="text-align: right; margin-top: 10px"
            background
            layout="total, sizes, prev, pager, next, jumper, ->"
            :total="150"
            :page-sizes="[20, 50, 100, 200]"
          >
          </el-pagination> -->
        </div>
      </WhiteBox>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.warn-wrapper {
  padding: 12px;
}

.bottom-con {
  height: calc(100vh - 120px);
  .table-head {
    display: flex;
    align-items: center;
    .zhi {
      font-size: 12px;
      color: #333;
      margin: 0 10px;
    }
  }
}
</style>
<script>
import WhiteBox from '@/components/white-box'
import moment from 'moment'
import LeftLineTitle from '@/components/left-line-title'
export default {
  props: ['columns', 'tableData'],
  data() {
    return {
      date1: moment()
        .startOf('year')
        .format('YYYY-MM-DD'),
      date2: moment().format('YYYY-MM-DD'),
      title: ''
    }
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.title = document.querySelector(
        '.menu-item.active .menu-name'
      ).innerHTML
    })
  },
  components: {
    WhiteBox,
    LeftLineTitle
  }
}
</script>
