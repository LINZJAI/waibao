<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" class="record-modal ">
    <div class="record-wrapper">
      <div class="left-part">
        <div class="record-form">
          <div class="score-title"
            >得分：<span class="score">{{ evalScore }}</span></div
          >
          <table class="record-table">
            <colgroup>
              <col width="28%" />
              <col width="9%" />
              <col width="9%" />
              <col width="9%" />
              <col width="9%" />
              <col width="9%" />
              <col width="9%" />
              <col width="9%" />
            </colgroup>
            <tr>
              <th rowspan="2">项目</th>
              <th colspan="7">评分</th>
            </tr>
            <tr>
              <th>3</th>
              <th>2</th>
              <th>1</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
            </tr>
            <tr>
              <td>
                <span class="table-label">心率（次/min）： </span>
                <el-input
                  class="table-input"
                  size="mini"
                  v-model="input1"
                ></el-input>
              </td>
              <td></td>
              <td :class="{ itemActive: itemDataMap.I002009 === '-2' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input1 }}</div>
                <div class="grey"> &lt;=40</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002009 === '-1' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input1 }}</div>
                <div class="grey"> 41-50</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002009 === '0' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input1 }}</div>
                <div class="grey">51-100</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002009 === '1' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="grey">101-110</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002009 === '2' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input1 }}</div>
                <div class="grey">111-129</div></td
              >
              <td :class="{ itemActive: itemDataMap.I002009 === '3' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input1 }}</div>
                <div class="grey"> >=130</div>
              </td>
            </tr>
            <tr>
              <td>
                <span class="table-label">收缩压（mmHg）： </span>
                <el-input
                  class="table-input"
                  size="mini"
                  v-model="input2"
                ></el-input>
              </td>
              <td :class="{ itemActive: itemDataMap.I002010 === '-3' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input2 }}</div>
                <div class="grey">&lt;=70</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002010 === '-2' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input2 }}</div>
                <div class="grey">71-80</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002010 === '-1' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input2 }}</div>
                <div class="grey">81-100</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002010 === '0' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input2 }}</div>
                <div class="grey">101-199</div>
              </td>
              <td></td>
              <td :class="{ itemActive: itemDataMap.I002010 === '2' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input2 }}</div>
                <div class="grey">>200</div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span class="table-label">呼吸频率（次/min）： </span>
                <el-input
                  class="table-input"
                  size="mini"
                  v-model="input3"
                ></el-input>
              </td>
              <td> </td>
              <td :class="{ itemActive: itemDataMap.I002011 === '-2' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input3 }}</div>
                <div class="grey">&lt;9</div>
              </td>
              <td></td>
              <td :class="{ itemActive: itemDataMap.I002011 === '0' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input3 }}</div>
                <div class="grey">9-14</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002011 === '1' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input3 }}</div>
                <div class="grey">15-20</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002011 === '2' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input3 }}</div>
                <div class="grey">21-29</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002011 === '3' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input3 }}</div>
                <div class="grey">>=30</div>
              </td>
            </tr>
            <tr>
              <td :class="{ itemActive: itemDataMap.I002012 === '-2' }">
                <span class="table-label">体温（°C）： </span>
                <el-input
                  class="table-input"
                  size="mini"
                  v-model="input4"
                ></el-input>
              </td>
              <td></td>
              <td :class="{ itemActive: itemDataMap.I002012 === '-2' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input4 }}</div>
                <div class="grey">&lt;=35</div>
              </td>
              <td></td>
              <td :class="{ itemActive: itemDataMap.I002012 === '0' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input4 }}</div>
                <div class="grey">35.0-38.4</div>
              </td>
              <td></td>
              <td :class="{ itemActive: itemDataMap.I002012 === '2' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">{{ input4 }}</div>
                <div class="grey">&lt;>=38.5</div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <span class="table-label">意识：</span>
                <el-select class="table-input" size="mini" v-model="input5">
                  <el-option value="0" label="清楚"></el-option>
                  <el-option value="1" label="有声音有反应"></el-option>
                  <el-option value="2" label="有疼痛反应"></el-option>
                  <el-option value="3" label="无反应"></el-option>
                </el-select>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td :class="{ itemActive: itemDataMap.I002013 === '0' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">清楚</div>
                <div class="grey">清楚</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002013 === '1' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">有声音<br />有反应</div>
                <div class="grey">有声音<br />有反应</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002013 === '2' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">有疼痛<br />有反应</div>
                <div class="grey">有疼痛<br />有反应</div>
              </td>
              <td :class="{ itemActive: itemDataMap.I002013 === '3' }">
                <img
                  class="gou"
                  src="../../../assets/images/pre-test/勾选.png"
                  alt=""
                />
                <div class="input-value">无反应</div>
                <div class="grey">无反应</div>
              </td>
            </tr>
          </table>

          <div class="aside-title">转运前评估</div>
          <div class="aside-text">
            MEWS分值越高，提醒该病人潜在病情越重，需要及时给与相应的护理措施：<br />
            0分——3分 病情较稳定，是较安全的转运病人护工护送<br />
            4分——7分
            要密切观察病人病情，携带抢救物品和仪器有资质的急救护士和护工护送<br />
            >=8分
            死亡危险性大，应立即抢救，病情允许后方可转运，携抢救物品高年资护士，医生和护工护送
          </div>
        </div>
      </div>
      <div class="right-part">
        <div class="record-table-wrapper">
          <div class="record-table-title">
            评分历史
          </div>
          <div class="record-table-scroll">
            <table class="record-table">
              <tr>
                <th>时间</th>
                <th>心率</th>
                <th>收缩压</th>
                <th>呼吸</th>
                <th>体温</th>
                <th>意识</th>
                <th>MEWS</th>
              </tr>
              <tr v-for="(item, index) in blockList" :key="index">
                <td>{{ item.evalDate }}</td>
                <td>{{ Math.abs(item.itemDataMap.I002009 || 0) }}</td>
                <td>{{ Math.abs(item.itemDataMap.I002010) || 0 }}</td>
                <td>{{ Math.abs(item.itemDataMap.I002011) || 0 }}</td>
                <td>{{ Math.abs(item.itemDataMap.I002012) || 0 }}</td>
                <td>{{ Math.abs(item.itemDataMap.I002013) || 0 }}</td>
                <td>{{ item.evalScore }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <template slot="footer">
      <el-button @click="dialogVisible = false" size="small">取 消</el-button>
      <el-button type="primary" @click="save" size="small">确 定</el-button>
    </template>
  </el-dialog>
</template>
<style lang="scss">
@import './record-modal.scss';
</style>
<style lang="scss" scoped>
.record-form {
  padding: 15px 20px;
  .score-title {
    font-size: 20px;
    color: #333;
    .score {
      color: #f40e01;
    }
  }
  .face {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  .rule {
    width: calc(100% + 10px);
    margin-left: -4px;
    margin-bottom: 15px;
  }
  .aside-title {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 13px;
    color: #333;
    font-weight: bold;
  }
  .aside-text {
    margin-left: 10px;
    font-size: 12px;
    color: #333;
    white-space: nowrap;
  }
}
.record-modal {
  /deep/ {
    .el-dialog {
      width: 1060px;
    }
    .left-part {
      width: 700px !important;
    }
    .record-form {
      .record-table {
        th,
        td {
          border: 1px solid #cccccc !important;
        }
        th {
          height: 32px;
        }
        td {
          height: 40px;
        }
      }
    }
  }
}

.table-label {
  display: inline-block;
  width: 125px;
  text-align: right;
}
.table-input {
  width: 60px;
}

.gou {
  width: 15px;
  vertical-align: middle;
  display: none;
}
.input-value {
  display: none;
  vertical-align: middle;
  color: #333;
}
.grey {
  display: inline-block;
  vertical-align: middle;
  color: #999;
}

.itemActive {
  .gou {
    display: inline-block;
  }
  .grey {
    display: none;
  }
  .input-value {
    display: inline-block;
  }
}
</style>
<script>
import { formSave, getListByBlock, formGetById } from '@/api/pre-test'
import addModel from '../add-model'
export default {
  data() {
    return {
      title: 'MEWS早期预警评分',
      dialogVisible: false,

      callback: null,
      blockList: [],
      itemDataMap: {
        I002009: '',
        I002010: '',
        I002011: '',
        I002012: '',
        I002013: ''
      },
      blockList: [],
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: ''
    }
  },
  computed: {
    evalScore() {
      return (
        Math.abs(Number(this.itemDataMap.I002009 || 0)) +
        Math.abs(Number(this.itemDataMap.I002010 || 0)) +
        Math.abs(Number(this.itemDataMap.I002011 || 0)) +
        Math.abs(Number(this.itemDataMap.I002012 || 0)) +
        Math.abs(Number(this.itemDataMap.I002013 || 0))
      )
    }
  },
  watch: {
    input1() {
      this.syncData()
    },
    input2() {
      this.syncData()
    },
    input3() {
      this.syncData()
    },
    input4() {
      this.syncData()
    },
    input5() {
      this.syncData()
    }
  },
  methods: {
    syncData() {
      if (this.input1 === '') {
        this.itemDataMap.I002009 = ''
      } else if (this.input1 <= 40) {
        this.itemDataMap.I002009 = '-2'
      } else if (this.input1 >= 41 && this.input1 <= 50) {
        this.itemDataMap.I002009 = '-1'
      } else if (this.input1 >= 51 && this.input1 <= 100) {
        this.itemDataMap.I002009 = '0'
      } else if (this.input1 >= 101 && this.input1 <= 110) {
        this.itemDataMap.I002009 = '1'
      } else if (this.input1 >= 111 && this.input1 <= 129) {
        this.itemDataMap.I002009 = '2'
      } else if (this.input1 >= 130) {
        this.itemDataMap.I002009 = '3'
      }
      if (this.input2 === '') {
        this.itemDataMap.I002010 = ''
      } else if (this.input2 <= 70) {
        this.itemDataMap.I002010 = '-3'
      } else if (this.input2 >= 71 && this.input2 <= 80) {
        this.itemDataMap.I002010 = '-2'
      } else if (this.input2 >= 81 && this.input2 <= 100) {
        this.itemDataMap.I002010 = '-1'
      } else if (this.input2 >= 101 && this.input2 <= 199) {
        this.itemDataMap.I002010 = '0'
      } else if (this.input2 >= 200) {
        this.itemDataMap.I002010 = '2'
      }
      if (this.input3 === '') {
        this.itemDataMap.I002011 = ''
      } else if (this.input3 < 9) {
        this.itemDataMap.I002011 = '-2'
      } else if (this.input3 >= 9 && this.input3 <= 14) {
        this.itemDataMap.I002011 = '0'
      } else if (this.input3 >= 15 && this.input3 <= 20) {
        this.itemDataMap.I002011 = '1'
      } else if (this.input3 >= 21 && this.input3 <= 29) {
        this.itemDataMap.I002011 = '2'
      } else if (this.input3 >= 29) {
        this.itemDataMap.I002011 = '3'
      }
      if (this.input4 === '') {
        this.itemDataMap.I002012 = ''
      } else if (this.input4 < 35) {
        this.itemDataMap.I002012 = '-2'
      } else if (this.input4 >= 35 && this.input3 <= 38.4) {
        this.itemDataMap.I002012 = '0'
      } else if (this.input4 >= 38.5) {
        this.itemDataMap.I002012 = '2'
      }
      if (this.input5 === '') {
        this.itemDataMap.I002013 = ''
      } else {
        this.itemDataMap.I002013 = this.input5
      }
    },
    init() {
      if (addModel.tieredMaster.mewsId) {
        formGetById(addModel.tieredMaster.mewsId).then(res => {
          this.itemDataMap.I002009 = res.data.itemDataMap.I002009
          this.itemDataMap.I002010 = res.data.itemDataMap.I002010
          this.itemDataMap.I002011 = res.data.itemDataMap.I002011
          this.itemDataMap.I002012 = res.data.itemDataMap.I002012
          this.itemDataMap.I002013 = res.data.itemDataMap.I002013
        })
      } else {
        this.itemDataMap.I002009 = ''
        this.itemDataMap.I002010 = ''
        this.itemDataMap.I002011 = ''
        this.itemDataMap.I002012 = ''
        this.itemDataMap.I002013 = ''

        //自动录入

        this.input1 = addModel.tieredMaster.heartRate
        this.input2 = addModel.tieredMaster.systolicPressure
        this.input3 = addModel.tieredMaster.breath
        this.input4 = addModel.tieredMaster.temperature
        this.syncData()
      }
      getListByBlock('E0004', addModel.tieredRegister.registerId).then(res => {
        this.blockList = res.data
      })
    },
    open(callback) {
      this.dialogVisible = true
      this.callback = callback
      this.init()
    },
    close() {
      this.dialogVisible = false
    },
    save() {
      formSave({
        // id: addModel.tieredMaster.mewsId,
        formCode: 'E0004',
        blockId: addModel.tieredRegister.registerId,
        patientId: addModel.tieredRegister.registerId,
        blockType: 'triage',
        patientName: addModel.tieredRegister.name,
        evalScore: this.evalScore,
        itemDataMap: {
          I002009: this.itemDataMap.I002009,
          I002010: this.itemDataMap.I002010,
          I002011: this.itemDataMap.I002011,
          I002012: this.itemDataMap.I002012,
          I002013: this.itemDataMap.I002013
        }
      }).then(res => {
        this.callback && this.callback(res.data)
        this.close()
      })
    }
  },
  components: {}
}
</script>
