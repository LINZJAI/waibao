<template>
  <div class="record-wrapper">
    <div class="left-part">
      <div class="title">评估记录</div>
      <BaseTree
        :configList="configList"
        :currentNodeKey="currentNodeKey"
      ></BaseTree>
    </div>
    <div class="right-part">
      <img
        class="right-img"
        src="../../images/document/跌倒评估表.png"
        alt=""
      />
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
</style>
<script>
import BaseTree from '../baseTree'
export default {
  props: {},
  data() {
    return {
      configList: [
        {
          label: '跌倒评估表',

          children: [
            {
              label: '2020-08-23 07:57 刘明'
            },
            {
              label: '2020-08-20 08:17 刘明'
            },
            {
              label: '2020-08-13 10:50 刘明'
            }
          ]
        }
      ],
      currentNodeKey: '2020-08-23 07:57 刘明'
    }
  },
  methods: {},
  components: {
    BaseTree
  }
}
</script>
