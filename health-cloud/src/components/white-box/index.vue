<template>
  <div class="white-box">
    <div class="title-header" v-if="title" :class="{ border: border }">
      <img :src="icon" class="icon" v-if="icon" />
      <div class="title">{{ title }}</div>
      <slot name="header" class="head-con"></slot>
    </div>
    <div class="padding-top" v-else></div>
    <div class="scroll">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.white-box {
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  width: 100%;
  height: 100%;
  padding: 0 12px 12px;
  display: flex;
  flex-direction: column;
}
.padding-top {
  padding-top: 12px;
}
.title-header {
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &.border {
    border-bottom: 1px solid #e5e5e5;
  }
  .title {
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }
  .head-con {
    flex: 1;
    display: flex;
    align-items: center;
  }
}
.scroll {
  overflow: auto;
  flex: 1;
  @include scrollBar;
}
</style>
<script>
export default {
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>
