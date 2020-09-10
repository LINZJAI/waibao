<template>
  <div class="box-content">
    <div class="info-box">
      <div class="text">12<span class="uniq">人</span></div>
      <div class="aside">今日出诊</div>
    </div>
    <div class="info-box">
      <div class="text">8<span class="uniq">辆</span></div>
      <div class="aside">已派车辆</div>
    </div>
    <div class="info-box">
      <div class="text">3<span class="uniq">辆</span></div>
      <div class="aside">待命车辆</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.info-box {
  font-size: vw(25);
  color: #f2d300;
  text-align: center;
  font-weight: bold;
  .uniq {
    font-size: vw(13);
    font-weight: 400;
  }
  .aside {
    margin-top: vw(8);
    font-weight: 400;
    width: vw(77);
    height: vw(24);
    background: url('../assets/images/题背景.png');
    background-size: cover;
    color: #fff;
    font-size: vw(12);
    text-align: center;
    line-height: vw(24);
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
