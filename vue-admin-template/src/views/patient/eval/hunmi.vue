<template>
  <div class="record-form">
    <div class="form-title">{{ form.form.formName }}</div>
    <div class="select-wrapper" v-if="form.list.length">
      <div class="left-con">
        <div class="select-con">
          <div class="select-title">
            <img src="../../../assets/images/pre-test/睁眼反应.png" alt="" />
            <div>睁眼反应</div>
          </div>
          <el-radio-group class="radio-group" v-model="itemDataMap.I002001">
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
            <img src="../../../assets/images/pre-test/语言反应.png" alt="" />
            <div>语言反应</div>
          </div>
          <el-radio-group class="radio-group" v-model="itemDataMap.I002002">
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
            <img src="../../../assets/images/pre-test/运动反应.png" alt="" />
            <div>运动反应</div>
          </div>
          <el-radio-group class="radio-group" v-model="itemDataMap.I002003">
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
      ≤8分：昏迷。 <br />9-11分：中度意识障碍。 <br />12-14分：轻度意识障碍。
      <br />
      15分：意识清楚。
    </div>
    <div class="score-title"
      >得分：<span class="score">{{ evalScore }}</span></div
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
          }
        }
      }
    }
  }
}
</style>
<script>
import { formSave, getListByBlock, getItemValueList } from '@/api/pre-test'
import { getScore, getScoreList } from '../utils/getScore'
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
      id: null,
      form: {
        form: {
          formCode: 'E0002',
          formName: 'GLASGOW（GCS）昏迷评分表'
        },
        list: []
      },
      list1: [
        {
          label: '自发睁眼',
          value: '4'
        },
        {
          label: '呼唤睁眼',
          value: '3'
        },
        {
          label: '疼痛刺激睁眼',
          value: '2'
        },
        {
          label: '不睁眼',
          value: '1'
        }
      ],
      list2: [
        {
          label: '回答切题',
          value: '5'
        },
        {
          label: '回答不切题',
          value: '4'
        },
        {
          label: '答非所问',
          value: '3'
        },
        {
          label: '只能发音',
          value: '2'
        },
        {
          label: '不能言语',
          value: '1'
        }
      ],
      list3: [
        {
          label: '按吩咐动作',
          value: '6'
        },
        {
          label: '刺痛能定位',
          value: '7'
        },
        {
          label: '刺痛能躲避',
          value: '8'
        },
        {
          label: '刺痛肢体屈曲',
          value: '9'
        },
        {
          label: '刺痛肢体伸展',
          value: '10'
        },
        {
          label: '不能运动',
          value: '11'
        }
      ],
      itemDataMap: {
        I002001: '',
        I002002: '',
        I002003: ''
      }
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
    save() {
      return formSave({
        id: this.id,
        formCode: 'E0002',
        blockId: this.infoId,
        patientId: this.infoId,
        blockType: 'ems_patient',
        patientName: this.patientName,
        evalScore: this.evalScore,
        itemDataMap: this.itemDataMap
      })
    }
  },
  created() {
    getItemValueList('E0002').then(res => {
      this.form = res.data
    })

    getListByBlock('E0002', this.infoId, 'ems_patient').then(res => {
      let form = res.data[res.data.length - 1]
      if (form) {
        this.id = form.id
        this.itemDataMap = form.itemDataMap
      }
    })
  }
}
</script>
