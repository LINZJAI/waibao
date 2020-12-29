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

        <!-- <tr>
          <td rowspan="5">意识水平</td>
          <td>清醒，反应敏捷</td>
          <td>
            <el-radio v-model="itemDataMap.I002014" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>不清醒，轻微刺激能唤醒</td>
          <td>
            <el-radio v-model="itemDataMap.I002014" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>不清醒，需要反复刺激才有注意</td>
          <td>
            <el-radio v-model="itemDataMap.I002014" label="-2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>不清醒/反应迟钝，需要疼痛的刺激才有活动</td>
          <td>
            <el-radio v-model="itemDataMap.I002014" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>植物效应或对疼痛无反应</td>
          <td>
            <el-radio v-model="itemDataMap.I002014" label="3">3</el-radio>
          </td>
        </tr>

        <tr>
          <td rowspan="5">询问患者当前月份和年龄</td>
          <td>两个问题回答均正确</td>
          <td>
            <el-radio v-model="itemDataMap.I002015" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>一个问题回答正确</td>
          <td>
            <el-radio v-model="itemDataMap.I002015" label="-1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>两个问题回答均不正确</td>
          <td>
            <el-radio v-model="itemDataMap.I002015" label="-2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>构音障碍，气管插管，口腔气管创伤，语言障碍</td>
          <td>
            <el-radio v-model="itemDataMap.I002015" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>患失语症的</td>
          <td>
            <el-radio v-model="itemDataMap.I002015" label="2">2</el-radio>
          </td>
        </tr>

        <tr>
          <td rowspan="3">让患者睁眼闭眼，然后紧紧握拳</td>
          <td>都正确</td>
          <td>
            <el-radio v-model="itemDataMap.I002016" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>正确完成一个</td>
          <td>
            <el-radio v-model="itemDataMap.I002016" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>都不正确</td>
          <td>
            <el-radio v-model="itemDataMap.I002016" label="2">2</el-radio>
          </td>
        </tr>

        <tr>
          <td rowspan="4">测试水平眼球运动</td>
          <td>正常眼球运动</td>
          <td>
            <el-radio v-model="itemDataMap.I002017" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>部分性凝视麻痹:可以克服</td>
          <td>
            <el-radio v-model="itemDataMap.I002017" label="-1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>部分性凝视麻痹:能被眼脑反射克服</td>
          <td>
            <el-radio v-model="itemDataMap.I002017" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>部分性凝视麻痹:不可以克服</td>
          <td>
            <el-radio v-model="itemDataMap.I002017" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="5">视野检测</td>
          <td>无视野缺损</td>
          <td>
            <el-radio v-model="itemDataMap.I002018" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>部分偏盲</td>
          <td>
            <el-radio v-model="itemDataMap.I002018" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>完全偏盲</td>
          <td>
            <el-radio v-model="itemDataMap.I002018" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>患者全盲</td>
          <td>
            <el-radio v-model="itemDataMap.I002018" label="-3">3</el-radio>
          </td>
        </tr>
        <tr>
          <td>双侧偏盲</td>
          <td>
            <el-radio v-model="itemDataMap.I002018" label="3">3</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="5">面瘫检测</td>
          <td>正常对称运动</td>
          <td>
            <el-radio v-model="itemDataMap.I002019" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>轻微瘫痪（鼻唇沟变平，微笑时不对称)</td>
          <td>
            <el-radio v-model="itemDataMap.I002019" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>部分瘫痪（下面部完全或几乎完全瘫痪）</td>
          <td>
            <el-radio v-model="itemDataMap.I002019" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>—侧完全瘫痪（上下面部运动消失）</td>
          <td>
            <el-radio v-model="itemDataMap.I002019" label="-3">3</el-radio>
          </td>
        </tr>
        <tr>
          <td>双侧完全瘫痪（上下面部运动消失）</td>
          <td>
            <el-radio v-model="itemDataMap.I002019" label="3">3</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="7">左臂运动</td>
          <td>坚持10秒钟无漂移</td>
          <td>
            <el-radio v-model="itemDataMap.I002020" label="-0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>漂移，不碰到床或其他支撑物</td>
          <td>
            <el-radio v-model="itemDataMap.I002020" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>漂移，碰到床或其他支撑</td>
          <td>
            <el-radio v-model="itemDataMap.I002020" label="-2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>部分抵抗重力</td>
          <td>
            <el-radio v-model="itemDataMap.I002020" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>不能抵抗重力</td>
          <td>
            <el-radio v-model="itemDataMap.I002020" label="3">3</el-radio>
          </td>
        </tr>
        <tr>
          <td>无运动</td>
          <td>
            <el-radio v-model="itemDataMap.I002020" label="4">4</el-radio>
          </td>
        </tr>
        <tr>
          <td>截肢/关节融合无</td>
          <td>
            <el-radio v-model="itemDataMap.I002020" label="0">无</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="7">右臂运动</td>
          <td>坚持10秒钟无漂移</td>
          <td>
            <el-radio v-model="itemDataMap.I002021" label="-0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>漂移，不碰到床或其他支撑物</td>
          <td>
            <el-radio v-model="itemDataMap.I002021" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>漂移，碰到床或其他支撑</td>
          <td>
            <el-radio v-model="itemDataMap.I002021" label="-2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>部分抵抗重力</td>
          <td>
            <el-radio v-model="itemDataMap.I002021" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>不能抵抗重力</td>
          <td>
            <el-radio v-model="itemDataMap.I002021" label="3">3</el-radio>
          </td>
        </tr>
        <tr>
          <td>无运动</td>
          <td>
            <el-radio v-model="itemDataMap.I002021" label="4">4</el-radio>
          </td>
        </tr>
        <tr>
          <td>截肢/关节融合无</td>
          <td>
            <el-radio v-model="itemDataMap.I002021" label="0">无</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="7">左腿运动</td>
          <td>坚持5秒钟无漂移</td>
          <td>
            <el-radio v-model="itemDataMap.I002022" label="-0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>漂移，不碰到床</td>
          <td>
            <el-radio v-model="itemDataMap.I002022" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>漂移，碰到床或其他支撑</td>
          <td>
            <el-radio v-model="itemDataMap.I002022" label="-2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>部分抵抗重力</td>
          <td>
            <el-radio v-model="itemDataMap.I002022" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>不能抵抗重力</td>
          <td>
            <el-radio v-model="itemDataMap.I002022" label="3">3</el-radio>
          </td>
        </tr>
        <tr>
          <td>无运动</td>
          <td>
            <el-radio v-model="itemDataMap.I002022" label="4">4</el-radio>
          </td>
        </tr>
        <tr>
          <td>截肢/关节融合无</td>
          <td>
            <el-radio v-model="itemDataMap.I002022" label="0">无</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="7">右腿运动</td>
          <td>坚持5秒钟无漂移</td>
          <td>
            <el-radio v-model="itemDataMap.I002023" label="-0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>漂移，不碰到床</td>
          <td>
            <el-radio v-model="itemDataMap.I002023" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>漂移，碰到床或其他支撑</td>
          <td>
            <el-radio v-model="itemDataMap.I002023" label="-2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>部分抵抗重力</td>
          <td>
            <el-radio v-model="itemDataMap.I002023" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>不能抵抗重力</td>
          <td>
            <el-radio v-model="itemDataMap.I002023" label="3">3</el-radio>
          </td>
        </tr>
        <tr>
          <td>无运动</td>
          <td>
            <el-radio v-model="itemDataMap.I002023" label="4">4</el-radio>
          </td>
        </tr>
        <tr>
          <td>截肢/关节融合无</td>
          <td>
            <el-radio v-model="itemDataMap.I002023" label="0">无</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="6">肢体共济失调</td>
          <td>无共济失调</td>
          <td>
            <el-radio v-model="itemDataMap.I002024" label="-0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>一个肢体有</td>
          <td>
            <el-radio v-model="itemDataMap.I002024" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>两个肢体有</td>
          <td>
            <el-radio v-model="itemDataMap.I002024" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>不理解</td>
          <td>
            <el-radio v-model="itemDataMap.I002024" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>瘫痪</td>
          <td>
            <el-radio v-model="itemDataMap.I002024" label="+0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>截肢/无关节融合无</td>
          <td>
            <el-radio v-model="itemDataMap.I002024" label="-+0">无</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="6">感觉</td>
          <td>正常，无感觉缺失</td>
          <td>
            <el-radio v-model="itemDataMap.I002025" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>轻到中度感觉缺失：不尖锐/钝</td>
          <td>
            <el-radio v-model="itemDataMap.I002025" label="-1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>轻到中度感觉缺失：可以感觉到被触碰</td>
          <td>
            <el-radio v-model="itemDataMap.I002025" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>完全感觉缺失：根本无法感觉到被触碰</td>
          <td>
            <el-radio v-model="itemDataMap.I002025" label="-2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>无反应和四肢瘫痪</td>
          <td>
            <el-radio v-model="itemDataMap.I002025" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>昏迷/无反应</td>
          <td>
            <el-radio v-model="itemDataMap.I002025" label="+2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="5">最佳语言/失语</td>
          <td>无失语，正常</td>
          <td>
            <el-radio v-model="itemDataMap.I002026" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>轻到中度失语：一些明显变化，无明显受限</td>
          <td>
            <el-radio v-model="itemDataMap.I002026" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>重度失语：破碎的语言表达，听者需要推理，无法识读材料</td>
          <td>
            <el-radio v-model="itemDataMap.I002026" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>不能说话或完全失语：无言语或听理解能力</td>
          <td>
            <el-radio v-model="itemDataMap.I002026" label="-3">3</el-radio>
          </td>
        </tr>
        <tr>
          <td>昏迷/无反应</td>
          <td>
            <el-radio v-model="itemDataMap.I002026" label="3">3</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="5">构音障碍</td>
          <td>正常</td>
          <td>
            <el-radio v-model="itemDataMap.I002027" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>轻到中度：患者至少能含糊得念一些词，虽稍有困难但至少能被理解</td>
          <td>
            <el-radio v-model="itemDataMap.I002027" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td
            >重度构音障碍：患者言语含糊以至无法理解，但无失语或与失语不成比例</td
          >
          <td>
            <el-radio v-model="itemDataMap.I002027" label="-2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>不能说话或构音不全</td>
          <td>
            <el-radio v-model="itemDataMap.I002027" label="2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>气管插管或其他物理障碍</td>
          <td>
            <el-radio v-model="itemDataMap.I002027" label="0">无</el-radio>
          </td>
        </tr>
        <tr>
          <td rowspan="5">消退和不注意</td>
          <td>无异常</td>
          <td>
            <el-radio v-model="itemDataMap.I002028" label="0">0</el-radio>
          </td>
        </tr>
        <tr>
          <td>视觉/触觉/听觉/空间觉或自身的不注意</td>
          <td>
            <el-radio v-model="itemDataMap.I002028" label="-1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>双侧同步刺激时一种感觉形式的消退</td>
          <td>
            <el-radio v-model="itemDataMap.I002028" label="1">1</el-radio>
          </td>
        </tr>
        <tr>
          <td>严重的偏侧不注意（如不认识自己的手）</td>
          <td>
            <el-radio v-model="itemDataMap.I002028" label="-2">2</el-radio>
          </td>
        </tr>
        <tr>
          <td>一种以上感觉形式的消退</td>
          <td>
            <el-radio v-model="itemDataMap.I002028" label="2">2</el-radio>
          </td>
        </tr> -->
      </table>
    </div>

    <div class="aside-text">
      注意：NIH卒中量表得分为0不一定意味着患者没有卒中疾病！（谨防后循环卒中的风险）
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
    margin-top: 20px;
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
      &[rowspan='6'],
      &[rowspan='7'] {
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
          formCode: 'E0005',
          formName: ''
        },
        list: []
      },
      itemDataMap: {
        I002014: '',
        I002015: '',
        I002016: '',
        I002017: '',
        I002018: '',
        I002019: '',
        I002020: '',
        I002021: '',
        I002022: '',
        I002023: '',
        I002024: '',
        I002025: '',
        I002026: '',
        I002027: '',
        I002028: ''
      },
      id: null
    }
  },
  computed: {
    evalScore() {
      return getScoreList(
        [
          'I002014',
          'I002015',
          'I002016',
          'I002017',
          'I002018',
          'I002019',
          'I002020',
          'I002021',
          'I002022',
          'I002023',
          'I002024',
          'I002025',
          'I002026',
          'I002027',
          'I002028'
        ],
        this.itemDataMap,
        this.form.list
      )
    }
  },
  methods: {
    save() {
      return formSave({
        id: this.id,
        formCode: 'E0005',
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
    getItemValueList('E0005').then(res => {
      this.form = res.data
    })
    getListByBlock('E0005', this.infoId, 'ems_patient').then(res => {
      let form = res.data[res.data.length - 1]
      if (form) {
        this.id = form.id
        this.itemDataMap = form.itemDataMap
      }
    })
  }
}
</script>
