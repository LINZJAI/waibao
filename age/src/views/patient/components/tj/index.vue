<template>
  <div class="record-wrapper">
    <div class="left-part">
      <div class="title">体检记录</div>
      <img class="img-1" src="../../images/document/体检1.png" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.record-wrapper {
  display: flex;
  height: calc(100vh - 192px);
  align-items: stretch;
  background: #f3f4fa;
  .left-part {
    padding: 12px;
    width: 330px;
    margin-right: 20px;
    background: #f3f4fa;
    .title {
      font-size: 14px;
      color: #333333;
      margin-bottom: 12px;
    }
    .img-1 {
      width: 100%;
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
    display: flex;
    justify-content: space-between;
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
          time: '2019-10-01 12:31:43',
          name: ''
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
