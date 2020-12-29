<template>
  <div class="record-wrapper">
    <div class="left-part">
      <div class="title">病历</div>
      <BaseTree
        :configList="configList"
        :currentNodeKey="currentNodeKey"
      ></BaseTree>
    </div>
    <div class="right-part">
      <img class="right-img" src="../../images/document/病历.png" alt="" />
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
          label: '住院记录',

          children: [
            {
              label: '入院记录'
            },
            {
              label: '首次病程记录'
            },
            {
              label: '住院记录'
            }
          ]
        }
      ],
      currentNodeKey: '入院记录'
    }
  },
  methods: {},
  components: {
    BaseTree
  }
}
</script>
