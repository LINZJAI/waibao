<template>
  <div class="record-form">
    <div class="form-title">疼痛评估表</div>
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

    <div class="score-title"
      >得分：<span class="score">{{ formatTooltip(evalScore) }}</span></div
    >
  </div>
</template>
<style lang="scss" scoped>
.record-form {
  width: 740px;
  min-height: 313px;
  background: #fff;
  border: 1px solid #979797;
  margin: 20px auto;
  padding: 30px;
  .form-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .score-title {
    font-size: 20px;
    color: #333;
    margin-top: 20px;
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
export default {
  components: {},
  props: {
    infoId: {
      type: Number | String,
      default: ''
    },
    patientName: {
      type: Number | String,
      default: ''
    }
  },
  data() {
    return {
      evalScore: 0,
      blockList: [],
      id: null
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 10
    },
    save() {
      return formSave({
        id: this.id,
        formCode: 'E0001',
        blockId: this.infoId,
        patientId: this.infoId,
        blockType: 'ems_patient',
        patientName: this.patientName,
        evalScore: this.formatTooltip(this.evalScore),
        itemDataMap: {}
      })
    }
  },
  created() {
    getListByBlock('E0001', this.infoId, 'ems_patient').then(res => {
      let form = res.data[res.data.length - 1]
      if (form) {
        this.id = form.id
        this.evalScore = form.evalScore * 10
      }
    })
  }
}
</script>
