<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" class="record-modal">
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
              <tr>
                <td colspan="3">
                  说明：≤3分 危重；4--6分 重伤；7--10分 轻伤
                </td>
              </tr>
            </table>
          </div>

          <div class="aside-text">
            将上述5项参数级别所得分值相加:评分
            0-3分为轻伤员，评分4-5分为中度伤员，评分6分以上为重伤员<br />
            评估：0-3分者死亡率为0，手术死亡率小于2%;4-10分者死亡率为27%，手术死亡率高达40.5%
          </div>
        </div>
      </div>
      <div class="right-part">
        <div class="record-table">
          <div class="record-table-title">
            评分历史
          </div>
          <div class="record-table-scroll">
            <table class="record-table" v-if="selectedTab === 4">
              <tr>
                <th>时间</th>
                <th>循环</th>
                <th>呼吸</th>
                <th>胸腹部</th>
                <th>运动</th>
                <th>语言</th>
                <th>CRAMS</th>
              </tr>
              <tr v-for="(item, index) in blockList" :key="index">
                <td>{{ item.evalDate }}</td>
                <td>{{ getScore('I002004') }}</td>
                <td>{{ getScore('I002005') }}</td>
                <td>{{ getScore('I002006') }}</td>
                <td>{{ getScore('I002007') }}</td>
                <td>{{ getScore('I002008') }}</td>
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
  padding: 15px 30px;
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

  .aside-text {
    margin-top: 20px;
    font-size: 12px;
    color: #333;
    white-space: nowrap;
  }
}
.record-form-scroll {
  max-height: calc(100vh - 380px);
  overflow: auto;
  @include scrollBar;
}

.tab-con {
  height: 30px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #cccccc;
  margin-top: 5px;
  margin-bottom: 10px;
  .tab-item {
    width: 71px;
    height: 29px;
    background: #e6e6e6;
    margin-right: 2px;
    border-radius: 4px 4px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -1px;
    font-size: 12px;
    cursor: pointer;
    &.active {
      background: #fff;
      border-top: 1px solid #cccccc;
      border-left: 1px solid #cccccc;
      border-right: 1px solid #cccccc;
    }
  }
}

.record-modal {
  /deep/ {
    .el-dialog {
      width: 1060px;
    }
    .left-part {
      width: 700px;
    }
    .record-form {
      .record-table {
        th,
        td {
          border: 1px solid #cccccc !important;
        }
        td {
          text-align: left;
          padding: 0 10px;
          &[rowspan='2'],
          &[rowspan='3'],
          &[rowspan='4'],
          &[rowspan='5'] {
            text-align: center;
          }
        }
      }
    }
  }
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
      title: '创伤评分',
      form: {
        form: {
          formCode: 'E0003',
          formName: ''
        },
        list: []
      },
      dialogVisible: false,
      selectedTab: 4,
      itemDataMap: {
        I002004: '',
        I002005: '',
        I002006: '',
        I002007: '',
        I002008: ''
      },
      blockList: []
    }
  },
  computed: {
    evalScore() {
      return getScoreList(
        ['I002004', 'I002005', 'I002006', 'I002007', 'I002008'],
        this.itemDataMap,
        this.form.list
      )
    }
  },
  methods: {
    getScore(itemCode) {
      return getScore(itemCode, this.itemDataMap[itemCode], this.form.list)
    },
    init() {
      getItemValueList('E0003').then(res => {
        this.form = res.data
        this.title = this.form.form.formName
      })

      if (addModel.tieredMaster.vulnusId) {
        formGetById(addModel.tieredMaster.vulnusId).then(res => {
          this.itemDataMap.I002004 = res.data.itemDataMap.I002004
          this.itemDataMap.I002005 = res.data.itemDataMap.I002005
          this.itemDataMap.I002006 = res.data.itemDataMap.I002006
          this.itemDataMap.I002007 = res.data.itemDataMap.I002007
          this.itemDataMap.I002008 = res.data.itemDataMap.I002008
        })
      } else {
        this.itemDataMap.I002004 = ''
        this.itemDataMap.I002005 = ''
        this.itemDataMap.I002006 = ''
        this.itemDataMap.I002007 = ''
        this.itemDataMap.I002008 = ''
      }
      getListByBlock('E0003', addModel.tieredRegister.registerId).then(res => {
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
        // id: addModel.tieredMaster.vulnusId,
        formCode: 'E0003',
        blockId: addModel.tieredRegister.registerId,
        patientId: addModel.tieredRegister.registerId,
        blockType: 'triage',
        patientName: addModel.tieredRegister.name,
        evalScore: this.evalScore,
        itemDataMap: {
          I002004: this.itemDataMap.I002004,
          I002005: this.itemDataMap.I002005,
          I002006: this.itemDataMap.I002006,
          I002007: this.itemDataMap.I002007,
          I002008: this.itemDataMap.I002008
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
