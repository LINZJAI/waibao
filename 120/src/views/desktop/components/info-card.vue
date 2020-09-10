<template>
  <div class="card-wrapper">
    <div class="content">
      <div class="name-row">
        <div class="name">何楚玟</div>
        <div class="label">群体</div>
      </div>
      <div class="text-row">
        <div class="key">车牌号：</div>
        <div class="value">粤A-883E3</div>
      </div>
      <div class="line"></div>
      <div class="text-row">
        <div class="key">事件类型：</div>
        <div class="value">火灾爆炸</div>
      </div>
      <div class="text-row">
        <div class="key">事件描述：</div>
        <div class="value">
          火灾现场，受困人数众多。需紧急处理
          <span class="red">【特大危重事件】</span>
        </div>
      </div>
      <img src="../../../assets/404_images/404.png" alt="" class="status-img" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-wrapper {
  float: left;
  padding: 5px;
  width: 25%;
  min-width: 290px;
  height: 184px;
  .content {
    height: 100%;
    padding: 12px 17px;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    border: 1px solid rgba(203, 213, 221, 1);
    position: relative;
    .status-img {
      width: 60px;
      height: 60px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}

.name-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .name {
    font-size: 15px;
    color: #333;
    font-weight: bold;
    margin-right: 5px;
  }
  .label {
    width: 34px;
    height: 20px;
    line-height: 20px;
    background: rgba(136, 111, 176, 1);
    border-radius: 4px;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
}
.text-row {
  margin-top: 6px;
  display: flex;
  font-size: 13px;
  color: #687179;
  .key {
  }
  .value {
    width: 0;
    flex: 1;
    line-height: 18px;
  }
  .red {
    color: #cc2323;
  }
}

.line {
  border-top: 1px dashed #e3e7ea;
  margin: 15px 0 10px;
}
</style>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>
