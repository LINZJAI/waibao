<template>
  <div class="eval-list">
    <div
      class="eval-item"
      v-for="(item, index) in configList"
      :key="index"
      @click="item.onClick"
      :class="{ active: item.infoId === infoId }"
    >
      <img src="../images/record/文件夹.png" alt="" class="folder-icon" />
      <div>{{ item.label }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.eval-list {
  /* padding: 15px; */
  .eval-item {
    height: 29px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    color: #333;
    font-size: 13px;
    cursor: pointer;
    &:hover {
      background: #f5f7fa;
    }
    &.active {
      background: rgb(228, 241, 240);
    }
    .folder-icon {
      height: 24px;
      padding-right: 5px;
      position: relative;
      top: -2px;
    }
  }
}
</style>
<script>
export default {
  props: {
    configList: Array,
    infoId: String | null
  },
  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>
