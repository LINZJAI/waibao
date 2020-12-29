<template>
  <div class="record-form">
    <div class="form-title">{{ form.form.formName }}</div>
    <div class="select-wrapper">
      <div class="left-con">
        <div class="select-con" v-if="form.list.length">
          <el-radio-group class="radio-group" v-model="itemDataMap.I002029">
            <el-radio
              v-for="(item, index) in form.list[0].itemValueList"
              :key="index"
              :label="item.valueCode"
              >{{ item.valueName }}</el-radio
            >
          </el-radio-group>
        </div>
      </div>
    </div>
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
          formCode: 'E0006',
          formName: ''
        },
        list: []
      },
      list1: [
        {
          label: '完全无症状',
          value: '完全无症状'
        },
        {
          label: '尽管有症状，但无明显功能障碍，能完成所有日常工作和生活',
          value: '尽管有症状，但无明显功能障碍，能完成所有日常工作和生活'
        },
        {
          label:
            '轻度残疾，不能完成病前所有活动，但不需帮助能照料自己的日常事务',
          value:
            '轻度残疾，不能完成病前所有活动，但不需帮助能照料自己的日常事务'
        },
        {
          label: '中度残疾，需部分帮助，但能独立行走',
          value: '中度残疾，需部分帮助，但能独立行走'
        },
        {
          label: '中重度残疾，不能独立行走，日常生活需别人帮助',
          value: '中重度残疾，不能独立行走，日常生活需别人帮助'
        },
        {
          label: '重度残疾，卧床，二便失禁，日常生活完全依赖他人',
          value: '重度残疾，卧床，二便失禁，日常生活完全依赖他人'
        }
      ],

      itemDataMap: {
        I002029: ''
      }
    }
  },
  computed: {
    evalScore() {
      return getScoreList(['I002029'], this.itemDataMap, this.form.list)
    }
  },
  methods: {
    save() {
      return formSave({
        id: this.id,
        formCode: 'E0006',
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
    getItemValueList('E0006').then(res => {
      this.form = res.data
    })
    getListByBlock('E0006', this.infoId, 'ems_patient').then(res => {
      let form = res.data[res.data.length - 1]
      if (form) {
        this.id = form.id
        this.itemDataMap = form.itemDataMap
      }
    })
  }
}
</script>
