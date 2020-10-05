<template>
  <div class="home-wrapper">
    <div class="home-box">
      <div class="head-con">
        <img
          v-if="$route.path === '/home3-2'"
          src="../assets/images/home/logo1.png"
          alt=""
          height="60"
        />
        <img v-else src="../assets/images/home2-2/logo.png" alt="" />
      </div>
      <div class="top-con">
        <div class="top-one">
          <img
            src="../assets/images/home2-2/120调度中心.png"
            alt=""
            class=""
            @click="openUrl('http://120.76.246.62:8080/emsDpct/#/')"
          />
        </div>
        <div class="top-two">
          <img
            src="../assets/images/home2-2/院前管理平台.png"
            alt=""
            class=""
            @click="openUrl('https://llgx.xyz/ems/#/')"
          />
        </div>
        <div class="top-three">
          <img
            class="img-1"
            src="../assets/images/home2-2/急救平板端.png"
            alt=""
          />
          <img
            class="img-2"
            src="../assets/images/home2-2/急救平板端下载二维码.png"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-con">
        <div class="bottom-one">
          <img
            src="../assets/images/home2-2/急救数据大屏.png"
            alt=""
            @click="openUrl('http://120.76.246.62:8080/big/#/big')"
          />
        </div>
        <div class="bottom-two">
          <img
            src="../assets/images/home2-2/集成视图.png"
            alt=""
            @click="openUrl('http://120.76.246.62:8080/#/PatientList')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$wid: 29px;
.home-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url('../assets/images/home/背景图.png');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .home-box {
    transform: scale(0.8);
    img {
      cursor: pointer;
    }
    .head-con {
      margin-bottom: 50px;
      text-align: center;
    }
    .top-con {
      display: flex;
      margin-bottom: $wid;
      .top-one,
      .top-two,
      .top-three {
        margin-right: $wid;
      }
      .top-four-top {
        margin-bottom: $wid - 2px;
      }
      .top-three,
      .top-four-top,
      .top-four-bottom {
        .img-1 {
          display: block;
        }
        .img-2 {
          display: none;
        }
        &:hover {
          .img-1 {
            display: none;
          }
          .img-2 {
            display: block;
          }
        }
      }
    }
    .bottom-con {
      display: flex;
      .bottom-one,
      .bottom-two {
        margin-right: $wid;
      }
    }
  }
}
</style>
<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {
    openUrl(url) {
      window.open(url)
    }
  },
  components: {}
}
</script>
