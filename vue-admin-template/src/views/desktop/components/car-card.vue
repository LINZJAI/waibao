<template>
  <div class="car-con">
    <div class="car-header">
      <div class="car-title">
        {{ info.carNo }}
      </div>
      <div class="status" v-if="info.nodeName">{{ info.nodeName }}</div>
    </div>
    <div class="line"></div>
    <div class="map-row">
      <span class="key">司机：</span>
      <span class="value">
        {{ info.driverName }}
        {{ info.driverPhone }}
      </span>
    </div>
    <div class="map-row">
      <span class="key">随车：</span>
      <span class="value">
        {{
          [...(info.doctorList || []), ...(info.nurseList || [])]
            .map(item => item.empName)
            .join(',')
        }}
      </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.car-header {
  display: flex;
  align-items: center;
  .car-title {
    font-size: 14px;
    color: #333333;
    font-weight: bold;
    flex: 1;
  }
  .status {
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
    background: rgba(46, 176, 179, 1);
    border-radius: 12px;
    color: #fff;
    font-size: 12px;
  }
}
.line {
  border-top: 1px dashed #d1d1d1;
  margin: 10px 0;
}

.map-row {
  font-size: 12px;
  margin-bottom: 5px;
  .key {
    color: #777777;
  }
  .value {
    color: #333333;
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
