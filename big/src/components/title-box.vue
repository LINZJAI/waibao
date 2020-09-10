<template>
  <div class="title-box">
    <div class="title" v-if="title">{{ title }}</div>
    <img
      v-if="title"
      src="../assets/images/标题背景.png"
      class="title-bg"
      alt=""
    />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(2, 21, 64, 0.5);
  box-shadow: 0px 0px 15px 0px rgba(63, 124, 209, 0.51);
  border-radius: 10px;
  border: 1px solid rgba(62, 106, 204, 1);
  position: relative;
  .title {
    height: vw(30);
    font-size: vw(15);
    color: #fff;
    line-height: vw(30);
    text-align: center;
    position: relative;
    z-index: 2;
  }
  .content {
    flex: 1;
    padding: vw(15);
    height: 0;
    overflow: hidden;
    &::-webkit-scrollbar-track-piece {
      background: #d3dce6;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #99a9bf;
      border-radius: 20px;
    }
  }
  .title-bg {
    position: absolute;
    width: vw(186);
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -1px;
  }
}
</style>
<script>
export default {
  props: ['title'],
  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>
