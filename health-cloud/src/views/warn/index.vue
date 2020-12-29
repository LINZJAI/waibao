<template>
  <div class="warn-wrapper">
    <div class="top-con">
      <div class="left-part">
        <LeftLineTitle
          title="今日一键呼救"
          @click.native="openWarnTip"
        ></LeftLineTitle>
        <div class="top-left-box">
          <WhiteBox>
            <div class="top-left-head">
              <i class="el-icon-message-solid"></i>
              呼救人员
            </div>
            <div class="top-left-content">
              <span>1</span>
              <el-button
                type="primary"
                size="mini"
                @click="$router.push('/patient/warn')"
                >查看</el-button
              >
            </div>
          </WhiteBox>
        </div>
      </div>
      <div class="right-part">
        <LeftLineTitle title="预警状态"></LeftLineTitle>
        <div class="top-right-con">
          <WhiteBox>
            <div class="top-right-content">
              <div class="top-right-box">
                <div class="text-1">6</div>
                <div class="text-2">今日预警</div>
              </div>
              <div class="top-right-box">
                <div class="text-1">12</div>
                <div class="text-2">本周预警</div>
              </div>
              <div class="top-right-box">
                <div class="text-1">32</div>
                <div class="text-2">本月预警</div>
              </div>
              <div class="top-right-box">
                <div class="text-1">12</div>
                <div class="text-2">重危患者</div>
              </div>
              <div class="top-right-box">
                <div class="text-1">325</div>
                <div class="text-2">患者总数</div>
              </div>
            </div>
          </WhiteBox>
        </div>
      </div>
    </div>
    <div class="bottom-con">
      <LeftLineTitle title="预警患者"></LeftLineTitle>
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
            :height="appModel.wih - 380"
            :data="tableData"
            style="width: 100%;margin-top: 12px"
          >
            <el-table-column
              prop="ID号"
              label="ID号"
              min-width="100px"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="患者姓名"
              label="患者姓名"
              min-width="100px"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="性别"
              label="性别"
              min-width="50px"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="年龄"
              label="年龄"
              min-width="50px"
              align="center"
            >
            </el-table-column>

            <el-table-column
              prop="预警时间"
              label="预警时间"
              min-width="100px"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="手机号码"
              label="手机号码"
              min-width="100px"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="预警"
              label="预警"
              min-width="150px"
              align="center"
            >
              <template slot-scope="scope">
                <span class="red">{{ scope.row.预警 }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="重危"
              label="重危"
              min-width="100px"
              align="center"
            >
              <template slot="header" slot-scope="scope">
                <span>重危</span>
                <img
                  src="./images/疑问.png"
                  alt=""
                  class="head-icon"
                  @click="openHeadTip"
                />
              </template>
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.重危"
                  active-color="#F35369"
                  inactive-color="#D8D8D8"
                >
                </el-switch
              ></template>
            </el-table-column>
            <el-table-column label="操作" min-width="180px" align="center">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="mini"
                  @click="openNewWeb"
                  class="reset-btn"
                  >查看</el-button
                >
                <el-button
                  type="text"
                  size="mini"
                  class="reset-btn"
                  @click="$router.push('/patient/warn')"
                  >详情</el-button
                >
                <el-button
                  type="text"
                  size="mini"
                  class="reset-btn"
                  @click="openYYGHTip"
                  >预约挂号</el-button
                >
                <el-button
                  type="text"
                  size="mini"
                  class="reset-btn"
                  @click="$router.push('/patient/follow')"
                  >会诊</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            style="text-align: right; margin-top: 10px"
            background
            layout="total, sizes, prev, pager, next, jumper, ->"
            :total="150"
            :page-sizes="[20, 50, 100, 200]"
          >
          </el-pagination>
        </div>
      </WhiteBox>
    </div>
    <AddGhModal ref="AddGhModal"></AddGhModal>
  </div>
</template>
<style lang="scss" scoped>
.warn-wrapper {
  padding: 12px;
}
.top-con {
  display: flex;
  height: 140px;
  align-items: stretch;
  margin-bottom: 20px;
  .left-part {
    width: 280px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    .top-left-box {
      flex: 1;
      .top-left-head {
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
        font-size: 12px;
        color: #444;
        i {
          color: #ccc;
          font-size: 16px;
          margin-right: 4px;
          position: relative;
          top: 2px;
        }
      }
      .top-left-content {
        height: 40px;
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 25px;
        color: #333333;
        font-weight: bold;
      }
    }
  }
  .right-part {
    flex: 1;
    .top-right-con {
      height: 100px;
    }
    .top-right-content {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .top-right-box {
        height: 60px;
        margin-top: 8px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-right: 1px solid #ededed;
        &:last-child {
          border: 0;
        }
        .text-1 {
          font-size: 25px;
          color: #333;
          text-align: center;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .text-2 {
          font-size: 13px;
          color: #444444;
          text-align: center;
        }
      }
    }
  }
}

.bottom-con {
  height: calc(100vh - 274px);
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

.red {
  color: #e20a0a;
}

.head-icon {
  cursor: pointer;
  position: relative;
  top: 1px;
  width: 13px;
  margin-left: 2px;
}

.reset-btn {
  margin: 0;
}
</style>
<script>
import LeftLineTitle from '@/components/left-line-title'
import WhiteBox from '@/components/white-box'
import moment from 'moment'
import AddGhModal from './modal/add-gh-modal'
export default {
  props: {},
  data() {
    return {
      date1: moment()
        .startOf('month')
        .format('YYYY-MM-DD'),
      date2: moment().format('YYYY-MM-DD'),
      tableData: [
        {
          ID号: '10008826',
          患者姓名: '唐琦琦',
          性别: '女',
          年龄: '42岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '13211940187',
          预警: '窦性心律，室上心博',
          重危: true
        },
        {
          ID号: '10008832',
          患者姓名: '高铂报',
          性别: '男',
          年龄: '31岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '18372822612',
          预警: '血压偏高',
          重危: false
        },
        {
          ID号: '10008853',
          患者姓名: '邱铱',
          性别: '女',
          年龄: '22岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '13367137092',
          预警: '血氧偏高',
          重危: false
        },
        {
          ID号: '10008839',
          患者姓名: '廖瑾',
          性别: '女',
          年龄: '43岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '18592570568',
          预警: '尿酸偏高',
          重危: true
        },
        {
          ID号: '10008899',
          患者姓名: '杜鬼湘',
          性别: '女',
          年龄: '21岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '13497041522',
          预警: '体重偏高',
          重危: false
        },
        {
          ID号: '10008814',
          患者姓名: '戴大升',
          性别: '男',
          年龄: '31岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '13285697814',
          预警: '体重偏高',
          重危: false
        },
        {
          ID号: '10008839',
          患者姓名: '乔翰',
          性别: '女',
          年龄: '43岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '18592570568',
          预警: '尿酸偏高',
          重危: true
        },
        {
          ID号: '10008899',
          患者姓名: '郑帛澈',
          性别: '女',
          年龄: '21岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '13497041522',
          预警: '体重偏高',
          重危: false
        },
        {
          ID号: '10008814',
          患者姓名: '阎艳艳',
          性别: '女',
          年龄: '31岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '13285697814',
          预警: '体重偏高',
          重危: false
        },
        {
          ID号: '10008839',
          患者姓名: '崔楠楠',
          性别: '女',
          年龄: '43岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '18592570568',
          预警: '体重偏高',
          重危: false
        },
        {
          ID号: '10008899',
          患者姓名: '蒋昊',
          性别: '女',
          年龄: '21岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '13497041522',
          预警: '尿酸偏高',
          重危: true
        },
        {
          ID号: '10008814',
          患者姓名: '锺汲世',
          性别: '男',
          年龄: '31岁 ',
          预警时间: '2019/10/02 10:04',
          手机号码: '13285697814',
          预警: '体重偏高',
          重危: false
        }
      ]
    }
  },
  methods: {
    openHeadTip() {
      this.$alert(
        '患者被标注为危重后，患者的档案，病史，病历，异常数据等会实时同步到120急救中心。',
        '重危说明',
        {
          confirmButtonText: '确定',
          callback: action => {}
        }
      )
    },
    openWarnTip() {
      let icon = require('./images/警告.png')
      this.$message({
        dangerouslyUseHTMLString: true,
        message: `
        <img class="icon" src="${icon}">
        <span class="text">患者唐琦琦（ID：10008826）发起呼救（ <span class="read"  onclick="window.app.$router.push('/patient/warn')">查看</span> ）</span>
        `,
        duration: 5000,
        iconClass: '123',
        showClose: true,
        customClass: 'warn-tip'
      })
    },
    openYYGHTip() {
      this.$refs.AddGhModal.open(() => {
        let icon = require('./images/成功.png')
        this.$message({
          dangerouslyUseHTMLString: true,
          message: `
        <img class="icon" src="${icon}" style="position: relative; top: 1px">
        <span class="text">患者唐琦琦（ID：10008826）挂号成功，请及时提醒患者就诊</span>
        `,
          duration: 5000,
          iconClass: '123',
          showClose: true,
          customClass: 'warn-tip'
        })
      })
    },
    openNewWeb() {
      window.open('http://120.76.246.62:8080/120/#/PatientInfo')
    }
  },
  components: {
    LeftLineTitle,
    WhiteBox,
    AddGhModal
  }
}
</script>
