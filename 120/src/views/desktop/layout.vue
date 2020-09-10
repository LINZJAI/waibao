<template>
  <div class="wrapper">
    <LeftInfo></LeftInfo>
    <div class="content-con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftInfo from '../../widgets/left-info'
// import InfoCard from "./components/info-card";

export default {
  name: 'Dashboard',
  components: {
    LeftInfo

    // InfoCard
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  .content-con {
    width: 0;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
