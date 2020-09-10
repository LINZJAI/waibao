<template>
  <div class="box-content">
    <div class="info-box">
      <img src="../assets/images/总数.png" alt="" />
      <div class="text-con">
        <div class="text-1">274 <span class="uniq">人</span></div>
        <div class="text-2">总数</div>
      </div>
    </div>
    <div class="info-box">
      <img src="../assets/images/女性.png" alt="" />
      <div class="text-con">
        <div class="text-1">67 <span class="uniq">人</span></div>
        <div class="text-2">女性</div>
      </div>
    </div>
    <div class="info-box">
      <img src="../assets/images/男性.png" alt="" />
      <div class="text-con">
        <div class="text-1">207 <span class="uniq">人</span></div>
        <div class="text-2">男性</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .info-box {
    display: flex;
    align-items: center;
    font-size: vw(13);
    line-height: vw(15);
    color: #fff;
    img {
      width: vw(41);
      height: vw(41);
      margin-right: vw(16);
    }
    .text-1 {
      font-size: vw(20);

      .uniq {
        font-size: vw(13);
      }
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
