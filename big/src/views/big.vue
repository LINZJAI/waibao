<template>
  <div class="big-wrapper">
    <div class="head-con">
      <div class="time">{{ time }}</div>
      <img src="../assets/images/左侧顶部.png" alt="" class="img-1" />
      <img src="../assets/images/背景.png" alt="" class="img-2" />
      <img src="../assets/images/右侧顶部.png" alt="" class="img-3" />
      <img src="../assets/images/120急救车运行监测.png" alt="" class="title" />
    </div>
    <div class="main-con">
      <div class="left-part">
        <div class="left-top-box">
          <TitleBox title="120今日数据监测"><LeftTopBox></LeftTopBox></TitleBox>
        </div>
        <div class="left-mid-box">
          <TitleBox title="今日急救任务（4）">
            <LeftMidBox></LeftMidBox
          ></TitleBox>
        </div>
        <div class="left-bottom-box">
          <TitleBox title="今日急救列表（14）">
            <LeftBottomBox></LeftBottomBox
          ></TitleBox>
        </div>
      </div>
      <div class="mid-part">
        <div class="mid-top-box">
          <TitleBox title="120病种统计">
            <MidTopBox></MidTopBox>
          </TitleBox>
        </div>
        <div class="mid-mid-box">
          <TitleBox title="">
            <MidMidBox></MidMidBox>
          </TitleBox>
        </div>
        <div class="mid-bottom-box">
          <div class="mid-bottom-left-box">
            <TitleBox title="出诊时间趋势图">
              <MidBottomLeftBox></MidBottomLeftBox>
            </TitleBox>
          </div>
          <div class="mid-bottom-mid-box">
            <TitleBox title="一键呼救统计">
              <MidBottomMidBox></MidBottomMidBox>
            </TitleBox>
          </div>
          <div class="mid-bottom-right-box">
            <TitleBox title="急救各年龄段比例">
              <MidBottomRightBox></MidBottomRightBox>
            </TitleBox>
          </div>
        </div>
      </div>
      <div class="right-part">
        <div class="right-top-box">
          <TitleBox title="120人数统计">
            <RightTopBox></RightTopBox>
          </TitleBox>
        </div>
        <div class="right-mid-box">
          <TitleBox title="各病种男女人数">
            <RightMidBox></RightMidBox>
          </TitleBox>
        </div>
        <div class="right-bottom-box">
          <TitleBox title="急救人员统计">
            <RightBottomBox></RightBottomBox>
          </TitleBox>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.big-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.head-con {
  height: vw(60);
  text-align: center;
  position: relative;
  .time {
    font-size: vw(13);
    color: #fff;
    position: absolute;
    margin-right: vw(34);
    right: 0;
    top: vw(15);
  }
  .img-1 {
    position: absolute;
    left: 0;
    height: vw(60);
    top: 0;
    z-index: 2;
  }
  .img-2 {
    position: absolute;
    width: vw(1000);
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
  }
  .img-3 {
    position: absolute;
    right: 0;
    height: vw(60);
    top: 0;
    z-index: 2;
  }
  .title {
    position: absolute;
    right: 0;
    height: vw(42);
    top: 0;
    left: 0;
    right: 0;
    margin: vw(9) auto;
    z-index: 2;
  }
}

.main-con {
  flex: 1;
  display: flex;
  align-items: stretch;
  padding: vw(20) vw(30) vw(30);
  .left-part {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .mid-part {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 vw(22);
  }
  .right-part {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .left-top-box,
  .mid-top-box,
  .right-top-box {
    flex: 1;
  }
  .left-mid-box,
  .mid-mid-box {
    flex: 4;
    margin: vw(13) 0;
  }
  .right-mid-box {
    flex: 3;
    margin: vw(12) 0;
  }
  .left-bottom-box {
    flex: 2;
  }
  .right-bottom-box {
    flex: 3;
  }

  .mid-bottom-box {
    flex: 2;
    display: flex;
    align-items: stretch;
    .mid-bottom-left-box,
    .mid-bottom-mid-box,
    .mid-bottom-right-box {
      flex: 1;
    }
    .mid-bottom-mid-box {
      margin: 0 vw(10);
    }
  }
}
</style>
<script>
import moment from 'moment'
moment.locale('zh-cn')
import TitleBox from '../components/title-box'
import LeftTopBox from '../components/left-top-box'
import LeftMidBox from '../components/left-mid-box'
import LeftBottomBox from '../components/left-bottom-box'
import MidTopBox from '../components/mid-top-box'
import MidMidBox from '../components/mid-mid-box'
import MidBottomLeftBox from '../components/mid-bottom-left-box'
import MidBottomMidBox from '../components/mid-bottom-mid-box'
import MidBottomRightBox from '../components/mid-bottom-right-box'
import RightTopBox from '../components/right-top-box'
import RightMidBox from '../components/right-mid-box'
import RightBottomBox from '../components/right-bottom-box'
export default {
  components: {
    TitleBox,
    LeftTopBox,
    LeftMidBox,
    LeftBottomBox,
    MidTopBox,
    MidMidBox,
    MidBottomLeftBox,
    MidBottomMidBox,
    MidBottomRightBox,
    RightTopBox,
    RightMidBox,
    RightBottomBox
  },
  props: {},
  data() {
    return {
      time: ''
    }
  },
  methods: {
    init() {
      this.time = moment().format('YYYY-MM-DD dddd HH:mm')
    }
  },
  created() {
    this.init()
    setInterval(this.init, 1000 * 60)
  }
}
</script>
