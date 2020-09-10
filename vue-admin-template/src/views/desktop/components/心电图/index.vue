<template>
  <div class="xdt-wrapper">
    <div id="LogContainer"> </div>
    <div class="boack">
      <canvas id="background" :width="width" :height="height"> </canvas>
    </div>
    <div class="boack">
      <canvas id="line" :width="width" :height="height"> </canvas>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.boack {
  position: absolute;
  width: 100%;
  height: 100%;
}

.xdt-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  props: {},
  data() {
    return {
      width: 500,
      height: 400
    }
  },
  methods: {},
  mounted() {
    this.width = ((window.innerWidth - 300 - 24) * 3) / 7
    this.height = window.innerHeight - 322
    setTimeout(() => {
      require('./ecgcanvas.js')
    }, 2000)
  },
  components: {}
}
</script>
