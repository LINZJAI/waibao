<template>
  <div class="home-wrapper">
    <div class="home-box">
      <div class="head-con">
        <img
          v-if="$route.path === '/home3-1'"
          src="../assets/images/home/logo1.png"
          alt=""
          height="60"
        />
        <img v-else src="../assets/images/home/logo.png" alt="" />
      </div>
      <div class="top-con">
        <div class="top-one">
          <img
            src="../assets/images/home2-1/患者app.png"
            alt=""
            class="img-1"
          />
          <img
            src="../assets/images/home2-1/患者app二维码.png"
            alt=""
            class="img-2"
          />
        </div>
        <div class="top-two">
          <img
            src="../assets/images/home2-1/医生app.png"
            alt=""
            class="img-1"
          />
          <img
            src="../assets/images/home2-1/医生app二维码下载.png"
            alt=""
            class="img-2"
          />
        </div>
        <div class="top-three">
          <img
            src="../assets/images/home2-1/健康管理.png"
            alt=""
            class=""
            @click="
              openUrl(
                $route.path === '/home3-1'
                  ? 'http://120.76.246.62:8080/health1/#/home'
                  : 'http://120.76.246.62:8080/health/#/home'
              )
            "
          />
        </div>
        <div class="top-four">
          <div class="top-four-top">
            <img
              src="../assets/images/home2-1/集成视图.png"
              alt=""
              class=""
              @click="openUrl('http://120.76.246.62:8080/#/PatientList')"
            />
          </div>
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
      .top-one,
      .top-two {
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
