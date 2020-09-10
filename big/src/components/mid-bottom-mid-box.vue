<template>
  <div class="box-content">
    <div class="row active">
      <div class="time">14:32</div>
      <div class="text">尾号5378患者发起一键呼救</div>
    </div>
    <div class="row">
      <div class="time">14:15</div>
      <div class="text">尾号0872患者发起一键呼救</div>
    </div>
    <div class="row">
      <div class="time">14:09</div>
      <div class="text">尾号8274患者发起一键呼救</div>
    </div>
    <div class="row">
      <div class="time">13:56</div>
      <div class="text">尾号2398患者发起一键呼救</div>
    </div>
    <div class="row">
      <div class="time">12:12</div>
      <div class="text">尾号5378患者发起一键呼救</div>
    </div>
    <div class="row">
      <div class="time">11:02</div>
      <div class="text">尾号5378患者发起一键呼救</div>
    </div>
    <div class="row">
      <div class="time">11:02</div>
      <div class="text">尾号5378患者发起一键呼救</div>
    </div>
    <div class="row">
      <div class="time">11:02</div>
      <div class="text">尾号5378患者发起一键呼救</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-content {
  height: 100%;
  padding: 0 vw(10);
  .row {
    font-size: vw(13);
    color: #fff;
    display: flex;
    margin-top: vw(10);
    &.active {
      font-size: vw(14);
      font-weight: bold;
      color: #f2d300;
    }
    .time {
      width: vw(55);
    }
    .text {
      flex: 1;
    }
  }
}
</style>
<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>
