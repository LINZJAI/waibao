<template>
  <div class="box-content">
    <div class="info-box" v-for="item in list" :key="item" @click="openUrl">
      <div class="arrow one"></div>
      <div class="arrow two"></div>
      <div class="arrow three"></div>
      <div class="arrow four"></div>

      <div class="top-text">
        <img src="../assets/images/急救车.png" class="jjc" alt="" />
        <span>{{ item.text1 }}</span>
      </div>
      <div class="mid-text">
        <span>{{ item.text2 }}</span>
      </div>

      <div class="bottom-con">
        <div class="row-1">{{ item.text3 }}</div>
        <div class="row-2">
          <span class="car">{{ item.text4 }} </span>
          <span>{{ item.text5 }}</span>
          <img src="../assets/images/定位和状态.png" alt="" class="img-1" />
        </div>
      </div>

      <div class="label-con">
        <div class="text-1">{{ item.text6 }}</div>
        <div class="text-2">{{ item.text7 }}</div>
        <div class="text-3">{{ item.text8 }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.info-box {
  cursor: pointer;
  position: relative;
  flex: 1;
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
export default {
  props: {},
  data() {
    return {
      list: [
        {
          text1: '桂A9837',
          text2: '陈小民 男 28岁，心律不齐',
          text3: '南宁市西乡塘区大学东路73号',
          text4: '正在派车',
          text5: '2020-08-26 11:21:23',
          text6: '到达13:32',
          text7: '36分',
          text8: '8.7公里'
        },
        {
          text1: '桂A4382',
          text2: '刘星云 男 24岁，右头部疼痛',
          text3: '南宁市镇江市丹徒区幸福胡同422号',
          text4: '正在派车',
          text5: '2020-08-26 14:31:12',
          text6: '到达15:12',
          text7: '31分',
          text8: '6.3公里'
        },
        {
          text1: '桂A7273',
          text2: '林小远 男 25岁，血压偏高',
          text3: '南宁市青秀区凤岭南路6-6号',
          text4: '正在派车',
          text5: '2020-08-26 11:21:36',
          text6: '到达13:33',
          text7: '34分',
          text8: '5.7公里'
        },
        {
          text1: '桂A7363',
          text2: '徐大博 男 32岁，肾结石',
          text3: '南宁市邕宁区龙亭路8号',
          text4: '正在派车',
          text5: '2020-08-26 16:42:43',
          text6: '到达17:14',
          text7: '43分',
          text8: '9.7公里'
        }
      ]
    }
  },
  methods: {
    openUrl() {
      window.open(
        'https://llgx.xyz/ems/#/desktop/detail?taskNo=EMS200802172746001'
      )
    }
  },
  components: {}
}
</script>
