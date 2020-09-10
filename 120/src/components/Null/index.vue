<template>
  <div class="null-con">
    <img src="./images/空态.png" alt="" class="null-img" />
    <div class="null-text">{{ text }}</div>
  </div>
</template>
<style lang="scss" scoped>
.null-img {
  display: block;
  margin: 100px auto 16px;
  width: 160px;
}
.null-text {
  font-size: 14px;
  color: #999999;
  text-align: center;
}
</style>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '暂无信息~'
    }
  },
  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>
