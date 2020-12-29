<template>
  <div class="document-wrapper">
    <div class="title">健康记录</div>
    <div class="document-content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="病史信息" name="病史信息">
          <div class="main-part">
            <div class="left-part">
              <TimelineBox
                title="既往病史"
                :activities="activities1"
              ></TimelineBox>
              <TimelineBox
                title="既往病史"
                :activities="activities2"
              ></TimelineBox>
              <TimelineBox title="残疾情况"></TimelineBox>
            </div>
            <div class="right-part">
              <TimelineBox
                title="手术史"
                :activities="activities3"
              ></TimelineBox>
              <TimelineBox
                title="家族病史"
                :activities="activities4"
              ></TimelineBox>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="生活方式" name="生活方式">
          <div class="shfs-con">
            <div class="left-part">
              <img src="./images/document/饮食搭配.png" class="left-1" alt="" />
              <img src="./images/document/运动.png" class="left-2" alt="" />
            </div>
            <div class="right-part">
              <img src="./images/document/烟酒.png" class="right-1" alt="" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="病历信息" name="病历信息">
          <Record></Record>
        </el-tab-pane>
        <el-tab-pane label="当前用药" name="当前用药">
          <Now></Now>
        </el-tab-pane>
        <el-tab-pane label="体检记录" name="体检记录">
          <Tj></Tj>
        </el-tab-pane>
        <el-tab-pane label="评估记录" name="评估记录"
          ><Eval></Eval
        ></el-tab-pane>
        <el-tab-pane label="检验报告" name="检验报告">
          <Test></Test>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.document-wrapper {
  padding: 0 12px;
  .title {
    display: flex;
    height: 50px;
    align-items: center;
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
}

.document-content {
  height: calc(100vh - 115px);
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  padding: 5px 20px;
}

.main-part {
  height: calc(100vh - 185px);
  display: flex;
  align-items: stretch;
  overflow: auto;
  .left-part {
    flex: 1;
    margin-right: 40px;
  }
  .right-part {
    flex: 1;
  }
}

.shfs-con {
  display: flex;
  img {
    width: 100%;
    margin-bottom: 16px;
  }
  .left-part {
    width: 0;
    margin-right: 50px;
    flex: 1;
  }
  .right-part {
    width: 0;
    flex: 1;
  }
}
</style>
<script>
import TimelineBox from './timeline-box'
import Record from './components/record'
import Eval from './components/eval'
import Test from './components/test'
import Now from './components/now'
import Tj from './components/tj'
export default {
  props: {},
  data() {
    return {
      activeName: '病史信息',
      activities1: [
        {
          timestamp: '2019/09/11',
          aside: '确诊时间',
          content: '疾病名称：高血压'
        },
        {
          timestamp: '2019/02/22',
          aside: '确诊时间',
          content: '疾病名称：糖尿病'
        }
      ],
      activities2: [
        {
          timestamp: '过敏源：青霉素过敏'
        }
      ],
      activities3: [
        {
          timestamp: '2019/09/11',
          aside: '确诊时间',
          content: '手术名称：阑尾切除术'
        },
        {
          timestamp: '2019/02/22',
          aside: '确诊时间',
          content: '疾病名称：糖尿病'
        }
      ],
      activities4: [
        {
          timestamp: '2019/09/11',
          aside: '确诊时间',
          content: '手术名称：阑尾切除术'
        },
        {
          timestamp: '亲属关系：父亲',
          aside: '确诊时间',
          content: '疾病名称：高血压、糖尿病'
        }
      ]
    }
  },
  methods: {},
  components: {
    TimelineBox,
    Record,
    Eval,
    Test,
    Now,
    Tj
  }
}
</script>
