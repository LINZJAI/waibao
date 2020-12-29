<template>
  <div class="home-wrapper">
    <div class="top-part">
      <div class="top-item" v-for="(item, index) in topList" :key="index">
        <img :src="item.icon" alt="" class="top-icon" />
        <div class="top-text-con">
          <div class="top-row">
            <span class="key">{{ item.key1 }}：</span>
            <span class="value">{{ item.value1 }}</span>
          </div>
          <div class="top-row" v-if="item.key2">
            <span class="key">{{ item.key2 }}：</span>
            <span class="value">{{ item.value2 }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main-part">
      <div class="left-part">
        <WhiteBox title="我的患者">
          <div slot="header" class="head-con">
            <div style="flex: 1"></div>
            <el-input
              size="mini"
              style="width: 250px"
              placeholder="请输入患者姓名、手机号等关键字搜索"
              suffix-icon="el-icon-search"
            ></el-input>
            <div class="total">共 215 名患者</div>
          </div>
          <div>
            <PatientCard
              v-for="(item, index) in patientList"
              :key="index"
              :dataSource="item"
            ></PatientCard>
          </div>
        </WhiteBox>
      </div>
      <div class="right-part">
        <WhiteBox title="患者健康异常提醒">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="头像" width="60">
              <template slot-scope="scope">
                <img class="table-img" :src="scope.row.img" alt="" />
              </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="80">
            </el-table-column>
            <el-table-column prop="time" label="异常检测时间" min-width="120">
            </el-table-column>
            <el-table-column prop="warn" label="异常" width="100">
              <template slot-scope="scope">
                <div class="warn-label">{{ scope.row.warn }}</div>
              </template>
            </el-table-column>
          </el-table>
        </WhiteBox>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-wrapper {
  padding: 12px;
}
.top-part {
  display: flex;
  margin-bottom: 12px;
  .top-item {
    flex: 1;
    width: 0;
    height: 100px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    margin-right: 12px;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    align-items: center;
    &:last-child {
      margin-right: 0;
    }
    .top-icon {
      width: 48px;
      height: 48px;
      margin-right: 8px;
    }
    .top-text-con {
      width: 0;
      flex: 1;
      height: 40px;
      .top-row {
        margin-bottom: 2px;
        .key {
          font-size: 13px;
          color: #999999;
        }
        .value {
          font-size: 13px;
          color: #333333;
          font-weight: bold;
        }
      }
    }
  }
}

.main-part {
  display: flex;
  align-items: stretch;
  height: calc(100vh - 188px);

  .left-part {
    width: 0;
    flex: 4 1 36px;
    margin-right: 12px;
  }
  .right-part {
    width: 0;
    flex: 2 1 12px;
  }
}

.total {
  font-size: 12px;
  color: #999999;
  margin-left: 30px;
}

.table-img {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}
.warn-label {
  padding: 0 8px;
  height: 20px;
  background: #f35369;
  font-size: 12px;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
<script>
import WhiteBox from '@/components/white-box'
import PatientCard from './components/patient-card'
export default {
  props: {},
  data() {
    return {
      topList: [
        {
          icon: require('./images/咨询.png'),
          key1: '待回复',
          value1: '9832',
          key2: '待接诊',
          value2: '0'
        },
        {
          icon: require('./images/远程.png'),
          key1: '待开方',
          value1: '932',
          key2: '待问诊',
          value2: '0'
        },
        {
          icon: require('./images/门诊.png'),
          key1: '待确认',
          value1: '32',
          key2: '待接诊',
          value2: '1'
        },
        {
          icon: require('./images/随访.png'),
          key1: '待回复',
          value1: '11'
        },
        {
          icon: require('./images/转入.png'),
          key1: '待接收',
          value1: '112',
          key2: '已补充资料',
          value2: '64'
        },
        {
          icon: require('./images/转出.png'),
          key1: '待补充资料',
          value1: '16',
          key2: '待患者同意',
          value2: '83'
        }
      ],
      patientList: [
        {
          img: require('./images/head/头像2.png'),
          name: '孔常业',
          sex: '男',
          age: '29岁',
          time: '2020-03-02 11:32:11',
          phone: '13632626243',
          desc: '指标一些正常，在过半个月需要在进行一次检查。'
        },
        {
          img: require('./images/head/头像3.png'),
          name: '唐琦琦',
          sex: '男',
          age: '29岁',
          time: '2020-03-02 11:32:11',
          phone: '13632626243',
          desc: '指标一些正常，在过半个月需要在进行一次检查。',
          warn: '血氧异常'
        },
        {
          img: require('./images/head/头像4.png'),
          name: '蔡格葭',
          sex: '男',
          age: '29岁',
          time: '2020-03-02 11:32:11',
          phone: '13632626243',
          desc: '指标一些正常，在过半个月需要在进行一次检查。'
        },
        {
          img: require('./images/head/头像6.png'),
          name: '赖旭',
          sex: '男',
          age: '29岁',
          time: '2020-03-02 11:32:11',
          phone: '13632626243',
          desc: '指标一些正常，在过半个月需要在进行一次检查。'
        },
        {
          img: require('./images/head/头像7.png'),
          name: '乔安琪',
          sex: '男',
          age: '29岁',
          time: '2020-03-02 11:32:11',
          phone: '13632626243',
          desc: '指标一些正常，在过半个月需要在进行一次检查。'
        },
        {
          img: require('./images/head/默认女生头像.png'),
          name: '黄丁丁',
          sex: '男',
          age: '29岁',
          time: '2020-03-02 11:32:11',
          phone: '13632626243',
          desc: '指标一些正常，在过半个月需要在进行一次检查。',
          warn: '心率异常'
        },
        {
          img: require('./images/head/默认男生头像.png'),
          name: '任心',
          sex: '男',
          age: '29岁',
          time: '2020-03-02 11:32:11',
          phone: '13632626243',
          desc: '指标一些正常，在过半个月需要在进行一次检查。'
        }
      ],
      tableData: [
        {
          img: require('./images/head/头像2.png'),
          name: '蒋超超',
          time: '2020/02/01 11:32',
          warn: '血压'
        },
        {
          img: require('./images/head/头像3.png'),
          name: '吴濛濛',
          time: '2020/02/01 11:32',
          warn: '血氧'
        },
        {
          img: require('./images/head/头像4.png'),
          name: '蔡般峡',
          time: '2020/02/01 11:32',
          warn: '心率'
        },
        {
          img: require('./images/head/头像6.png'),
          name: '程凯凯',
          time: '2020/02/01 11:32',
          warn: '血压异常'
        },
        {
          img: require('./images/head/头像7.png'),
          name: '邓帮恒',
          time: '2020/02/01 11:32',
          warn: '血压异常'
        },
        {
          img: require('./images/head/默认女生头像.png'),
          name: '谢佩佩',
          time: '2020/02/01 11:32',
          warn: '血压异常'
        },
        {
          img: require('./images/head/默认男生头像.png'),
          name: '韩红轳',
          time: '2020/02/01 11:32',
          warn: '血压异常'
        }
      ]
    }
  },
  methods: {},
  components: {
    WhiteBox,
    PatientCard
  }
}
</script>
