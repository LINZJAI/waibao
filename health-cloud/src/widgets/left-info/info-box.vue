<template>
  <div class="box">
    <div class="title-con">
      <div class="title center">{{ dataSource.title }}</div>
      <div
        class="right"
        v-if="dataSource.rightText"
        @click="dataSource.onRightClick"
        >{{ dataSource.rightText }}</div
      >
    </div>
    <div class="list-con">
      <div
        class="item"
        v-for="(item, index) in dataSource.list"
        :key="index"
        :class="{ hasClick: item.onItemClick }"
        @click="item.onItemClick && item.onItemClick()"
      >
        <div class="key">{{ item.key }}</div>
        <div class="value" v-if="item.value !== undefined">{{
          item.value
        }}</div>
        <div
          class="status center"
          :class="[item.statusName, { cupo: item.onClick }]"
          v-else
          @click="item.onClick && item.onClick()"
        >
          {{ item.statusName }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin-bottom: 20px;
  width: 100%;
  flex: 1;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  height: 0;

  .title-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      width: 100px;
      height: 26px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 18px;
      font-size: 12px;
      color: #fff;
    }
    .right {
      font-size: 12px;
      color: #8d9299;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
  }
  .list-con {
    flex: 1;
    overflow: auto;
    @include scrollBar;
    margin-right: -10px;
    padding-right: 10px;
    .item {
      display: flex;
      justify-content: space-between;
      min-height: 35px;
      padding: 10px 0;
      font-size: 13px;
      color: #d5d5d5;
      border-bottom: 1px dashed #efefef;
      &.hasClick {
        cursor: pointer;
      }
    }
    .value {
      color: #efefef;
    }
    .status {
      width: 60px;
      height: 18px;
      background: rgba(246, 107, 107, 1);
      border-radius: 2px;
      font-size: 12px;
      color: #fff;
      &.途中待命 {
        background: #34a598;
      }
      &.出诊中 {
        background: #f66b6b;
      }
      &.站内待命 {
        background: #2891d9;
      }
      &.检修中 {
        background: #939393;
      }
      &.cupo {
        cursor: pointer;
      }
    }
  }
}
</style>
<script>
export default {
  props: {
    dataSource: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>
