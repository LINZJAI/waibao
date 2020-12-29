<template>
  <div class="record-wrapper">
    <div class="left-part">
      <div class="title">检验报告</div>
      <div class="list-con">
        <div class="item-box" v-for="(item, index) in list" :key="index">
          <div class="text">{{ item.text }}</div>
          <div class="time">{{ item.time }}</div>
        </div>
      </div>
    </div>
    <div class="right-part">
      <img class="right-img" src="../../images/document/检验报告.png" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.record-wrapper {
  display: flex;
  height: calc(100vh - 192px);
  align-items: stretch;
  .left-part {
    padding: 12px;
    width: 280px;
    margin-right: 20px;
    background: #f3f4fa;
    .title {
      font-size: 14px;
      color: #333333;
      margin-bottom: 12px;
    }
  }
  .right-part {
    background: #606060;
    flex: 1;
    overflow: auto;
    @include scrollBar;
    .right-img {
      width: 700px;
      display: block;
      margin: 50px auto;
    }
  }
}

.item-box {
  height: 60px;
  background: #fff;
  padding: 14px 15px;
  margin-bottom: 5px;
  .text {
    font-size: 13px;
    color: #333;
  }
  .time {
    font-size: 12px;
    color: #777777;
    margin-top: 7px;
  }
}
</style>
<script>
import BaseTree from '../baseTree'
export default {
  props: {},
  data() {
    return {
      list: [
        {
          text: '血常规+C反应蛋白+淀粉样蛋白A',
          time: '2019-10-01 12:31:43'
        },
        {
          text: '血气分析+电解质+代谢物',
          time: '2019-10-01 12:31:43'
        },
        {
          text: '新型冠状病毒核酸检测',
          time: '2019-10-01 12:31:43'
        },
        {
          text: '凝血五项',
          time: '2019-10-01 12:31:43'
        },
        {
          text: '红细胞沉降率测定仪器法(ESR)',
          time: '2019-10-01 12:31:43'
        }
      ]
    }
  },
  methods: {},
  components: {
    BaseTree
  }
}
</script>
