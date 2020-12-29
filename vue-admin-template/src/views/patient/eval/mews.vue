<template>
  <div class="record-form">
    <div class="form-title">{{ form.form.formName }}</div>
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

  .record-table {
    width: 100%;

    th,
    td {
      border: 1px solid #cccccc !important;
      text-align: center;
      font-size: 12px;
      padding: 4px 10px;
    }
    th {
      font-size: 13px;
    }
    td {
      text-align: left;
      &[rowspan='2'],
      &[rowspan='3'],
      &[rowspan='4'],
      &[rowspan='5'],
      &[rowspan='6'] {
        text-align: center;
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
      form: {
        form: {
          formCode: 'E0004',
          formName: ''
        },
        list: []
      },
      itemDataMap: {
        I002009: '',
        I002010: '',
        I002011: '',
        I002012: '',
        I002013: ''
      },
      id: null
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
  methods: {
    save() {
      return formSave({
        id: this.id,
        formCode: 'E0004',
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
    getItemValueList('E0004').then(res => {
      this.form = res.data
    })

    getListByBlock('E0004', this.infoId, 'ems_patient').then(res => {
      let form = res.data[res.data.length - 1]
      if (form) {
        this.id = form.id
        this.itemDataMap = form.itemDataMap
      }
    })
  }
}
</script>
