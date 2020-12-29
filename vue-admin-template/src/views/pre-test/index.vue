<template>
  <div class="pre-test-wrapper">
    <div class="left-part">
      <table-con></table-con>
    </div>
    <div class="right-part">
      <right-con ref="right-con"></right-con>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pre-test-wrapper {
  display: flex;
  background: #f5f5f5;
  .left-part {
    flex: 1;
    width: 0;
    background: #fff;
  }
  .right-part {
    width: 262px;
    background: #fff;
  }
}
</style>
<script>
import TableCon from './components/table-con'
import RightCon from './components/right-con'

export default {
  components: { TableCon, RightCon },
  props: {},
  data() {
    return {}
  },
  methods: {}
}
</script>
