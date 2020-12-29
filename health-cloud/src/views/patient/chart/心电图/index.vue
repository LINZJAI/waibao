<template>
  <div class="xdt-wrapper">
    <div id="LogContainer"> </div>
    <div class="boack">
      <canvas id="background" :width="width" height="380"> </canvas>
    </div>
    <div class="boack">
      <canvas id="line" :width="width" height="380"> </canvas>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.boack {
  position: absolute;
  width: 100%;
  height: 400px;
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
      width: 500
    }
  },
  methods: {},
  mounted() {
    this.width = (window.innerWidth - 200 - 24 - 24 - 12 - 30) / 2
    setTimeout(() => {
      require('./ecgcanvas.js')
    }, 2000)
  },
  components: {}
}
</script>
