<template>
  <div class="card-wrapper">
    <div class="content" :class="{ warn: !!dataSource.warn }" @click="goDetail">
      <div class="top-item">
        <img :src="dataSource.img" alt="" class="top-icon" />
        <div class="top-text-con">
          <div class="top-row">
            <span class="name">{{ dataSource.name }}</span>
          </div>
          <div class="top-row">
            <span class="key">{{ dataSource.sex }} {{ dataSource.age }}</span>
          </div>
        </div>
      </div>

      <div class="line"></div>
      <div class="text-row">
        <div class="key">最近检查</div>
        <div class="value">{{ dataSource.time }}</div>
      </div>
      <div class="text-row">
        <div class="key">手机号码</div>
        <div class="value">{{ dataSource.phone }}</div>
      </div>
      <div class="text-row">
        <div class="key">健康描述</div>
        <div class="value">
          {{ dataSource.desc }}
        </div>
      </div>
      <div class="warn" v-if="dataSource.warn">{{ dataSource.warn }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-wrapper {
  float: left;
  padding: 6px;
  width: 33%;
  height: 184px;
  .content {
    height: 100%;
    padding: 12px 17px;
    background: rgba(243, 244, 250, 1);
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    &.warn {
      background: rgba(255, 240, 242, 1);
    }
    .warn {
      width: 56px;
      height: 20px;
      position: absolute;
      right: 21px;
      top: 19px;
      background: #f35369;
      font-size: 12px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.text-row {
  margin-top: 6px;
  display: flex;
  font-size: 12px;
  color: #687179;
  .key {
    color: #999999;
    margin-right: 10px;
  }
  .value {
    width: 0;
    flex: 1;
    line-height: 17px;
  }
  .red {
    color: #cc2323;
  }
}

.line {
  border-top: 1px dashed #e3e7ea;
  margin: 10px 0 6px;
}
.top-item {
  height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  .top-icon {
    width: 46px;
    height: 46px;
    margin-right: 12px;
  }
  .top-text-con {
    width: 0;
    flex: 1;
    height: 40px;
    .top-row {
      margin-bottom: 2px;
      .name {
        font-size: 13px;
        color: #333333;
        font-weight: bold;
      }
      .key {
        font-size: 13px;
        color: #999999;
      }
    }
  }
}
</style>
<script>
export default {
  props: {
    dataSource: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  methods: {
    goDetail() {
      this.$router.push('/patient/detail')
    }
  },
  components: {}
}
</script>
