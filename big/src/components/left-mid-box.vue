<template>
  <div class="box-content" :class="{ inScroll: dataSource.length > 3 }">
    <div
      class="info-box"
      v-for="item in dataSource"
      :key="item"
      @click="openUrl(item)"
    >
      <div class="arrow one"></div>
      <div class="arrow two"></div>
      <div class="arrow three"></div>
      <div class="arrow four"></div>

      <div class="top-text">
        <img src="../assets/images/急救车.png" class="jjc" alt="" />
        <span>{{ item.carNo }}</span>
      </div>
      <div class="mid-text">
        <span
          >{{ item.patientName }} {{ item.task.sex }} {{ item.task.age }}岁
          {{ item.task.complaints }}</span
        >
      </div>

      <div class="bottom-con">
        <div class="row-1">{{ item.task.eventLocation }}</div>
        <div class="row-2">
          <span class="car">{{ item.nodeName }} </span>
          <span>{{ item.dispatchTime }}</span>
          <img src="../assets/images/定位和状态.png" alt="" class="img-1" />
        </div>
      </div>

      <div class="label-con">
        <div class="text-1">{{ moment(item.eventTime).format('HH:mm') }}</div>
        <div class="text-2"> 到达{{ item.text7 }}</div>
        <!-- <div class="text-3"> 7.7公里{{ item.text8 }}</div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  @include scrollBar;
  &.inScroll {
    margin-right: vw(-18);
    padding-right: vw(5);
  }
}

.info-box {
  cursor: pointer;
  position: relative;
  /* flex: 1; */
  height: 21%;
  margin-bottom: vw(5);
  background: linear-gradient(
    180deg,
    rgba(43, 65, 109, 1) 0%,
    rgba(5, 21, 68, 1) 100%
  );
  padding: vw(10);
  .arrow {
    width: vw(15);
    height: vw(2);
    background: #2eb1d8;
    position: absolute;
    &.one {
      top: 0;
      left: 0;
    }
    &.two {
      top: 0;
      right: 0;
    }
    &.three {
      bottom: 0;
      left: 0;
    }
    &.four {
      bottom: 0;
      right: 0;
    }
  }
}

.top-text {
  font-size: vw(16);
  color: #fff;
  .jjc {
    width: vw(22);
    margin-right: vw(8);
  }
}

.mid-text {
  font-size: vw(13);
  color: #8ebcff;
}

.bottom-con {
  font-size: vw(13);
  color: #8ebcff;
  position: relative;
  .row-1 {
    border-bottom: 1px solid #0d316b;
    padding: vw(7) 0;
    padding-left: vw(15);
    margin-left: vw(5);
  }
  .row-2 {
    margin-left: vw(20);
    margin-top: vw(7);
    background: rgba(11, 18, 48, 0.7);
    padding: vw(2) vw(9);
    .car {
      color: #fff;
    }
  }
  .img-1 {
    position: absolute;
    left: 0;
    top: vw(8);
    width: vw(13);
  }
}

.label-con {
  background: rgba(11, 18, 48, 0.7);
  border-radius: 8px;
  height: vw(65);
  width: vw(98);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: vw(13);
  color: #8ab9ff;
  position: absolute;
  top: vw(10);
  right: vw(13);
  .text-2 {
    color: #f2d300;
    margin: vw(1) 0;
  }
}
</style>
<script>
import moment from 'moment'
export default {
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    moment,
    openUrl(item) {
      window.open(
        `https://llgx.xyz:8083/ems/#/desktop/detail?taskNo=${item.taskNo}`
      )
    }
  },
  components: {}
}
</script>
