<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" class="record-modal ">
    <div class="record-wrapper">
      <div class="left-part">
        <div class="record-form">
          <div class="score-title"
            >得分：<span class="score">{{ evalScore }}</span></div
          >
          <div class="record-form-scroll">
            <table class="record-table">
              <colgroup>
                <col width="30%" />
                <col width="60%" />
                <col width="10%" />
              </colgroup>
              <tr>
                <th>项目</th>
                <th>检测结果</th>
                <th>评分</th>
              </tr>
              <template v-for="(row, rowIndex) in form.list">
                <tr
                  :key="rowIndex + '-' + index"
                  v-for="(item, index) in row.itemValueList"
                >
                  <td v-if="index === 0" :rowspan="row.itemValueList.length">{{
                    row.itemName
                  }}</td>
                  <td>{{ item.valueName }}</td>
                  <td>
                    <el-radio
                      v-model="itemDataMap[item.itemCode]"
                      :label="item.valueCode"
                      >{{ Number(item.score) }}</el-radio
                    >
                  </td>
                </tr>
              </template>
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
                <td>{{ getScore('I002009') }}</td>
                <td>{{ getScore('I002010') }}</td>
                <td>{{ getScore('I002011') }}</td>
                <td>{{ getScore('I002012') }}</td>
                <td>{{ getScore('I002013') }}</td>
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

.record-form-scroll {
  max-height: calc(100vh - 380px);
  overflow: auto;
  @include scrollBar;
}
</style>
<script>
import {
  formSave,
  getListByBlock,
  formGetById,
  getItemValueList
} from '@/api/pre-test'
import addModel from '../add-model'
import { getScore, getScoreList } from '@/views/patient/utils/getScore'
export default {
  data() {
    return {
      title: 'MEWS早期预警评分',
      dialogVisible: false,
      form: {
        form: {
          formCode: 'E0004',
          formName: ''
        },
        list: []
      },
      callback: null,
      blockList: [],
      itemDataMap: {
        I002009: '',
        I002010: '',
        I002011: '',
        I002012: '',
        I002013: ''
      },
      blockList: []
    }
  },
  computed: {
    evalScore() {
      return getScoreList(
        ['I002009', 'I002010', 'I002011', 'I002012', 'I002013'],
        this.itemDataMap,
        this.form.list
      )
    }
  },
  watch: {},
  methods: {
    getScore(itemCode) {
      return getScore(itemCode, this.itemDataMap[itemCode], this.form.list)
    },
    init() {
      getItemValueList('E0004').then(res => {
        this.form = res.data
        this.title = this.form.form.formName
      })
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
