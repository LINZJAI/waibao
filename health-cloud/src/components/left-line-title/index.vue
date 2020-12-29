<template>
  <div class="title-wrapper">
    {{ title }}
  </div>
</template>
<style lang="scss" scoped>
.title-wrapper {
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 14px;
  color: #333333;
  padding-left: 10px;
  position: relative;
  font-weight: bold;
  margin-bottom: 10px;
  &::after {
    content: '';
    position: absolute;
    height: 18px;
    width: 2px;
    background: #ec9162;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
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
