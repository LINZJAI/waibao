<template>
  <div class="two-wrapper">
    <div class="row-label">跌倒高风险筛查：</div>

    <el-select
      popper-class="pre-test-popper"
      class="full-width-select"
      v-model="addModel.tieredMaster.fallEval"
    >
      <el-option
        v-for="(item, index) in addModel.dictMap.fall_risk_cause"
        :key="index"
        :label="item.name"
        :value="item.code"
      ></el-option>
    </el-select>

    <div class="row-label" style="margin-top: 8px">采取预防措施：</div>
    <el-select
      popper-class="pre-test-popper"
      class="full-width-select"
      v-model="addModel.tieredMaster.preventMeasure"
    >
      <el-option
        v-for="(item, index) in addModel.dictMap.prevent_measure"
        :key="index"
        :label="item.name"
        :value="item.code"
      ></el-option>
    </el-select>

    <div class="line"></div>

    <div class="yy-label-con">
      <span>营养评估：</span>
    </div>
    <div class="yy-checkbox-con">
      <el-checkbox-group
        v-model="nutritionEval"
        @change="onNutritionEvalChange"
      >
        <el-checkbox
          v-for="(item, index) in yyList"
          :key="index"
          :value="item.value"
          :label="item.label"
        >
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="line"></div>
    <div class="pre-test-form" style="padding-top: 4px">
      <div class="row-label">精神文化评估：</div>
      <el-form ref="form" label-width="90px" size="mini">
        <el-form-item label="宗教信仰：">
          <el-select
            popper-class="pre-test-popper"
            v-model="addModel.tieredMaster.religious"
          >
            <el-option
              v-for="(item, index) in addModel.dictMap.religious"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="精神症状干扰：">
          <el-select
            popper-class="pre-test-popper"
            v-model="addModel.tieredMaster.spirit"
          >
            <el-option
              v-for="(item, index) in addModel.dictMap.spirit"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="认知功能障碍：">
          <el-select
            popper-class="pre-test-popper"
            v-model="addModel.tieredMaster.cognitive"
          >
            <el-option
              v-for="(item, index) in addModel.dictMap.cognitive"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教育程度：">
          <el-select
            popper-class="pre-test-popper"
            v-model="addModel.tieredMaster.eduLevel"
          >
            <el-option
              v-for="(item, index) in addModel.dictMap.edu_degree"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="line"></div>
      <div class="pre-test-form" style="padding-top: 4px">
        <div class="row-label">其他评估：</div>
        <el-form ref="form" label-width="60px" size="mini">
          <el-form-item label="心理评估：">
            <el-select
              popper-class="pre-test-popper"
              v-model="addModel.tieredMaster.psychological"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.psychological"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="社会因素：">
            <el-select
              popper-class="pre-test-popper"
              v-model="addModel.tieredMaster.social"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.social"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经济因素：">
            <el-select
              popper-class="pre-test-popper"
              v-model="addModel.tieredMaster.economic"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.economic"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="教育需求：">
            <el-select
              popper-class="pre-test-popper"
              v-model="addModel.tieredMaster.eduNeed"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.edu_need"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="交通工具：">
            <el-select
              popper-class="pre-test-popper"
              v-model="addModel.tieredMaster.traffic"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.traffic"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="受虐：">
            <el-select
              popper-class="pre-test-popper"
              v-model="addModel.tieredMaster.abuse"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.abuse"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="儿童生长发育评估：" label-width="120px">
            <el-select
              popper-class="pre-test-popper"
              v-model="addModel.tieredMaster.childrenGrowthEval"
            >
              <el-option
                v-for="(item, index) in addModel.dictMap.children_growth_eval"
                :key="index"
                :label="item.name"
                :value="item.code"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.two-wrapper {
  padding: 10px;
  .row-label {
    font-size: 12px;
    color: #333;
    margin-bottom: 4px;
  }

  .line {
    border-bottom: 1px solid #cccccc;
    margin: 8px 0;
  }

  .yy-label-con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
}

.yy-checkbox-con {
  /deep/ {
    .el-checkbox {
      display: block;
      margin-bottom: 10px;
    }
    .el-checkbox__label {
      font-size: 12px;
    }
    .el-checkbox__input {
      vertical-align: top;
      margin-top: 2px;
    }
  }
}

.full-width-select {
  width: 100%;
  height: 19px;
  /deep/ {
    .el-input__inner,
    .el-form-item__content,
    .el-form-item__label,
    .el-input__icon {
      height: 19px;
      line-height: 19px;
      font-size: 12px;
    }
  }
}
</style>
<script>
import addModel from '../../add-model'
export default {
  components: {},
  props: {},
  data() {
    return {
      nutritionEval: [],
      addModel,
      yy: '1',
      yyList: [
        {
          label: '儿童',
          value: ''
        },
        {
          label: '饮食明显减少且体重明显减轻',
          value: ''
        },
        {
          label: '成人',
          value: ''
        },
        {
          label: '1个月内非刻意体重减大雨3公斤',
          value: ''
        }
      ]
    }
  },
  methods: {
    onNutritionEvalChange() {
      addModel.tieredMaster.nutritionEval = JSON.stringify(
        this.nutritionEval || []
      )
    }
  },
  mounted() {
    this.nutritionEval = addModel.tieredMaster.nutritionEval
      ? JSON.parse(addModel.tieredMaster.nutritionEval)
      : []
  }
}
</script>
