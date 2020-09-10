<template>
  <div class="box-content">
    <div class="info-box">
      <div class="text">166<span class="uniq">人</span></div>
      <div class="aside">常规急救</div>
    </div>
    <div class="info-box">
      <div class="text">219<span class="uniq">人</span></div>
      <div class="aside">胸痛急救</div>
    </div>
    <div class="info-box">
      <div class="text">112<span class="uniq">人</span></div>
      <div class="aside">卒中急救</div>
    </div>
    <div class="info-box">
      <div class="text">88<span class="uniq">人</span></div>
      <div class="aside">创伤急救</div>
    </div>
    <div class="info-box">
      <div class="text">78<span class="uniq">人</span></div>
      <div class="aside">慢病急救</div>
    </div>
    <div class="info-box">
      <div class="text">194<span class="uniq">人</span></div>
      <div class="aside">新生儿</div>
    </div>
    <div class="info-box">
      <div class="text">122<span class="uniq">人</span></div>
      <div class="aside">高危妊辰患者</div>
    </div>
    <div class="info-box">
      <div class="text">67<span class="uniq">人</span></div>
      <div class="aside">中毒</div>
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
  color: #fff;
  text-align: center;
  font-weight: bold;
  .uniq {
    font-size: vw(13);
    font-weight: 400;
  }
  .aside {
    margin-top: vw(8);
    font-weight: 400;
    width: vw(90);
    height: vw(24);
    background: url('../assets/images/题背景.png') 100% 100% no-repeat;
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
