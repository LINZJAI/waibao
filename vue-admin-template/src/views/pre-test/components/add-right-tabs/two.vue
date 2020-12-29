<template>
  <div class="two-wrapper">
    <div class="row-label">到院情况：</div>
    <el-input
      type="textarea"
      :rows="5"
      v-model="addModel.tieredRegister.stateDesc"
    ></el-input>

    <div class="pre-test-form" style="padding-top: 4px">
      <el-form ref="form" label-width="60px" size="mini">
        <el-form-item label="过敏史：">
          <el-select
            popper-class="pre-test-popper"
            class="full-width"
            v-model="addModel.tieredMaster.allergicHistory"
          >
            <el-option
              v-for="(item, index) in addModel.dictMap.allergic_history"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="传染病史：">
          <el-input
            v-model="addModel.tieredRegister.infectionHistory"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div class="line"></div>

    <div class="lxb-label-con">
      <span>流行病学史：</span>
      <!-- <el-checkbox v-model="addModel.tieredMaster.epidemiologyHistory"
        >无</el-checkbox
      > -->
    </div>
    <div class="lxb-checkbox-con">
      <el-checkbox-group
        v-model="epidemiologyHistory"
        @change="onEpidemiologyHistoryChange"
      >
        <el-checkbox
          v-for="(item, index) in lxbList"
          :key="index"
          :label="item.value"
        >
          <div>{{ item.label }}</div>
          <!-- <el-select v-if="index === 2" class="lxb-select"></el-select> -->
        </el-checkbox>
      </el-checkbox-group>
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

  .lxb-label-con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
}

.lxb-checkbox-con {
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

  .lxb-select {
    width: 100%;
    height: 19px;
    margin-top: 4px;
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
}
</style>
<script>
import addModel from '../../add-model'
export default {
  components: {},
  props: {},
  data() {
    return {
      addModel,
      lxb: '1',
      lxbList: [
        {
          label: '过去的两周里，体温>37.5°C',
          value: '1'
        },
        {
          label: '过去的两周里，出现过皮疹',
          value: '2'
        },
        {
          label: '最近两周出国旅行或密切接触过出国旅行的人（重点疫区）',
          value: '3'
        },
        {
          label: '过去两周，出现过咳嗽/气短/呼吸困难',
          value: '4'
        },
        {
          label: '入院前3天有发热病学史',
          value: '5'
        },
        {
          label: '死亡或患者动物接触史',
          value: '6'
        },
        {
          label: '周围和你密切接触的人有类似症状',
          value: '7'
        }
      ],
      epidemiologyHistory: []
    }
  },
  methods: {
    onEpidemiologyHistoryChange() {
      addModel.tieredMaster.epidemiologyHistory = JSON.stringify(
        this.epidemiologyHistory || []
      )
    }
  },
  mounted() {
    this.epidemiologyHistory = addModel.tieredMaster.epidemiologyHistory
      ? JSON.parse(addModel.tieredMaster.epidemiologyHistory)
      : []
  }
}
</script>
