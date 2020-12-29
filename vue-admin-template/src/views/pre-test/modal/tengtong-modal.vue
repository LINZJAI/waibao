<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" class="record-modal">
    <div class="record-wrapper">
      <div class="left-part">
        <div class="record-form">
          <div class="score-title"
            >得分：<span class="score">{{
              formatTooltip(evalScore)
            }}</span></div
          >
          <img
            src="../../../assets/images/pre-test/疼痛表情.png"
            alt=""
            class="face"
          />
          <el-slider
            v-model="evalScore"
            :step="10"
            :format-tooltip="formatTooltip"
          ></el-slider>
          <img
            src="../../../assets/images/pre-test/评分数值.png"
            alt=""
            class="rule"
          />
          <div class="aside-title">说明：</div>
          <div class="aside-text">
            0分：无痛 <br />3分以下：有轻微疼痛，能忍受<br />
            4～6分：患者疼痛并影响睡眠，尚能忍受<br />
            7～10分：患者有强烈的疼痛，疼痛难忍，影响食欲，影响睡眠
          </div>
        </div>
      </div>
      <div class="right-part">
        <div class="record-table">
          <div class="record-table-title">
            评分历史
          </div>
          <div class="record-table-scroll">
            <table class="record-table">
              <colgroup>
                <col width="100px" />
                <col width="80px" />
              </colgroup>
              <tr>
                <th>时间</th>
                <th>VAS</th>
              </tr>
              <tr v-for="(item, index) in blockList" :key="index">
                <td>{{ item.evalDate }}</td>
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
  padding: 15px 65px;
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
</style>
<script>
import { formSave, getListByBlock } from '@/api/pre-test'
import addModel from '../add-model'
export default {
  data() {
    return {
      title: 'VAS疼痛评分',
      dialogVisible: false,
      evalScore: 0,
      callback: null,
      blockList: []
    }
  },
  computed: {},
  methods: {
    init() {
      if (addModel.tieredMaster.painId) {
        this.evalScore = Number(addModel.tieredMaster.pain) * 10
      }
      getListByBlock('E0001', addModel.tieredRegister.registerId).then(res => {
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
    formatTooltip(val) {
      return val / 10
    },
    save() {
      formSave({
        // id: addModel.tieredMaster.painId,
        formCode: 'E0001',
        blockId: addModel.tieredRegister.registerId,
        patientId: addModel.tieredRegister.registerId,
        blockType: 'triage',
        patientName: addModel.tieredRegister.name,
        evalScore: this.formatTooltip(this.evalScore),
        itemDataMap: {}
      }).then(res => {
        this.callback && this.callback(res.data)
        this.close()
      })
    }
  },
  components: {}
}
</script>
