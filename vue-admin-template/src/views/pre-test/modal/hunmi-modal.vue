<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" class="record-modal">
    <div class="record-wrapper">
      <div class="left-part">
        <div class="record-form">
          <div class="score-title"
            >得分：<span class="score">{{ evalScore }}</span></div
          >
          <div class="select-wrapper" v-if="form.list.length">
            <div class="left-con">
              <div class="select-con">
                <div class="select-title">
                  <img
                    src="../../../assets/images/pre-test/睁眼反应.png"
                    alt=""
                  />
                  <div>睁眼反应</div>
                </div>
                <el-radio-group
                  class="radio-group"
                  v-model="itemDataMap.I002001"
                >
                  <el-radio
                    v-for="(item, index) in form.list[0].itemValueList"
                    :key="index"
                    :label="item.valueCode"
                    >{{ item.valueName }}</el-radio
                  >
                </el-radio-group>
              </div>
            </div>
            <div class="mid-con">
              <div class="select-con">
                <div class="select-title">
                  <img
                    src="../../../assets/images/pre-test/语言反应.png"
                    alt=""
                  />
                  <div>语言反应</div>
                </div>
                <el-radio-group
                  class="radio-group"
                  v-model="itemDataMap.I002002"
                >
                  <el-radio
                    v-for="(item, index) in form.list[1].itemValueList"
                    :key="index"
                    :label="item.valueCode"
                    >{{ item.valueName }}</el-radio
                  >
                </el-radio-group>
              </div></div
            >
            <div class="right-con">
              <div class="select-con">
                <div class="select-title">
                  <img
                    src="../../../assets/images/pre-test/运动反应.png"
                    alt=""
                  />
                  <div>运动反应</div>
                </div>
                <el-radio-group
                  class="radio-group"
                  v-model="itemDataMap.I002003"
                >
                  <el-radio
                    v-for="(item, index) in form.list[2].itemValueList"
                    :key="index"
                    :label="item.valueCode"
                    >{{ item.valueName }}</el-radio
                  >
                </el-radio-group>
              </div>
            </div>
          </div>

          <div class="aside-title">说明：</div>
          <div class="aside-text">
            ≤8分：昏迷。 <br />9-11分：中度意识障碍。
            <br />12-14分：轻度意识障碍。 <br />
            15分：意识清楚。
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
              <colgroup>
                <col width="100px" />
                <col width="40px" />
                <col width="40px" />
                <col width="40px" />
                <col width="40px" />
              </colgroup>
              <tr>
                <th>时间</th>
                <th>E</th>
                <th>V</th>
                <th>M</th>
                <th>GCS</th>
              </tr>
              <tr v-for="(item, index) in blockList" :key="index">
                <td>{{ item.evalDate }}</td>
                <td>{{ getScore('I002001') }}</td>
                <td>{{ getScore('I002002') }}</td>
                <td>{{ getScore('I002003') }}</td>
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

  .select-wrapper {
    display: flex;
    margin-top: 10px;
    .left-con,
    .mid-con,
    .right-con {
      width: 0;
      flex: 1;
      .select-title {
        display: flex;
        font-size: 15px;
        color: #000;
        display: flex;
        align-items: center;
        img {
          width: 30px;
          margin-right: 10px;
        }
      }
      .radio-group {
        margin-top: 5px;
        margin-left: 15px;
        /deep/ {
          .el-radio {
            line-height: 25px;
            display: block;
            white-space: normal;
            margin-right: 10px;
          }
        }
      }
    }
  }
}

.record-modal {
  /deep/ {
    .el-dialog {
      width: 900px;
    }
    .left-part {
      width: 600px !important;
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
      title: 'Glasgow昏迷评分',
      dialogVisible: false,
      form: {
        form: {
          formCode: 'E0002',
          formName: 'GLASGOW（GCS）昏迷评分表'
        },
        list: []
      },

      itemDataMap: {
        I002001: '',
        I002002: '',
        I002003: ''
      },
      blockList: []
    }
  },
  computed: {
    evalScore() {
      return getScoreList(
        ['I002001', 'I002002', 'I002003'],
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
      getItemValueList('E0002').then(res => {
        this.form = res.data
        this.title = this.form.form.formName
      })

      if (addModel.tieredMaster.conkId) {
        formGetById(addModel.tieredMaster.conkId).then(res => {
          this.itemDataMap.I002001 = res.data.itemDataMap.I002001
          this.itemDataMap.I002002 = res.data.itemDataMap.I002002
          this.itemDataMap.I002003 = res.data.itemDataMap.I002003
        })
      } else {
        this.itemDataMap.I002001 = ''
        this.itemDataMap.I002002 = ''
        this.itemDataMap.I002003 = ''
      }
      getListByBlock('E0002', addModel.tieredRegister.registerId).then(res => {
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
        // id: addModel.tieredMaster.conkId,
        formCode: 'E0002',
        blockId: addModel.tieredRegister.registerId,
        patientId: addModel.tieredRegister.registerId,
        blockType: 'triage',
        patientName: addModel.tieredRegister.name,
        evalScore: this.evalScore,
        itemDataMap: {
          I002001: this.itemDataMap.I002001,
          I002002: this.itemDataMap.I002002,
          I002003: this.itemDataMap.I002003
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
