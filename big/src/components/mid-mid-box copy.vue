<template>
  <div class="box-content">
    <img src="../assets/images/地图.png" alt="" class="map" />
    <div class="top-con">
      <div class="top-text">
        <span class="text-1">
          截止今日全市<br />
          120呼救总数
        </span>
        <span class="text-2">{{ num }}</span>
        <span class="text-3">起</span>
      </div>
      <div class="mid-text">
        <span class="text-1">同比去年上涨</span>
        <span class="text-2">
          <img src="../assets/images/上升.png" alt="" />
          13%</span
        >
      </div>
      <div class="bottom-text">
        <span class="text-1">环比上月下降</span>
        <span class="text-2">
          <img src="../assets/images/下降.png" alt="" />
          8%</span
        >
      </div>
    </div>
    <div class="bottom-con">
      <div class="info-table">
        <tr>
          <th>各区</th>
          <th>呼叫总数</th>
          <th>派车次数</th>
        </tr>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ item.各区 }}</td>
          <td class="td-2">{{ item.呼叫总数 }}</td>
          <td class="td-3">{{ item.派车次数 }}</td>
        </tr>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box-content {
  height: 100%;
  width: 100%;
  position: relative;
  .map {
    width: 100%;
    height: 100%;
  }
  .top-con {
    position: absolute;
    left: vw(12);
    top: vw(17);
    width: vw(255);
    height: vw(165);
    background: rgba(2, 21, 64, 0.89);
    box-shadow: 0px 0px 15px 0px rgba(63, 124, 209, 0.51);
    border-radius: 8px;
    border: 1px solid rgba(62, 106, 204, 1);
    padding: vw(20) vw(25);
    box-sizing: border-box;
    font-size: vw(13);
    color: #fff;
    img {
      width: vw(11);
    }
    .top-text {
      line-height: vw(8);
      border-bottom: 1px solid #364c7d;
      padding-bottom: vw(14);
      padding-top: vw(5);
      .text-2 {
        font-size: vw(38);
        color: #f2d300;
        margin: 0 vw(2);
      }
    }
    .mid-text {
      height: vw(42);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: vw(13);
      color: #fff;
      border-bottom: 1px solid #364c7d;
      .text-2 {
        font-size: vw(18);
        color: #fa5e73;
      }
    }
    .bottom-text {
      height: vw(42);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: vw(13);
      color: #fff;
      .text-2 {
        font-size: vw(18);
        color: #62e425;
      }
    }
  }

  .bottom-con {
    position: absolute;
    width: vw(225);
    height: vw(120);
    right: vw(13);
    bottom: vw(16);
    padding: vw(15) 0;
    background: rgba(2, 21, 64, 0.89);
    box-shadow: 0px 0px 15px 0px rgba(63, 124, 209, 0.51);
    border-radius: 8px;
    border: 1px solid rgba(62, 106, 204, 1);
    .info-table {
      font-size: vw(13);
      color: #fff;
      width: 100%;
      td,
      th {
        padding: 0 vw(10);
        text-align: center;
        height: vw(25);
      }
      th {
        font-weight: bold;
      }
      .td-2 {
        color: #61caf0;
      }
      .td-3 {
        color: #f2d300;
      }
    }
  }
}
</style>
<script>
export default {
  props: {},
  data() {
    return {
      tableData: [
        {
          各区: '钦南区',
          呼叫总数: '789',
          派车次数: '20'
        },
        {
          各区: '钦北区',
          呼叫总数: '534',
          派车次数: '52'
        },
        {
          各区: '灵山县',
          呼叫总数: '520',
          派车次数: '95'
        },
        {
          各区: '浦北县',
          呼叫总数: '150',
          派车次数: '93'
        }
      ],
      // tableData: [
      //   {
      //     各区: '兴宁',
      //     呼叫总数: '789',
      //     派车次数: '20'
      //   },
      //   {
      //     各区: '江南',
      //     呼叫总数: '534',
      //     派车次数: '52'
      //   },
      //   {
      //     各区: '青秀',
      //     呼叫总数: '520',
      //     派车次数: '95'
      //   },
      //   {
      //     各区: '西乡塘',
      //     呼叫总数: '150',
      //     派车次数: '93'
      //   },
      //   {
      //     各区: '邕宁',
      //     呼叫总数: '343',
      //     派车次数: '56'
      //   },
      //   {
      //     各区: '良庆',
      //     呼叫总数: '796',
      //     派车次数: '86'
      //   },
      //   {
      //     各区: '武宁',
      //     呼叫总数: '626',
      //     派车次数: '91'
      //   },
      //   {
      //     各区: '横县',
      //     呼叫总数: '684',
      //     派车次数: '43'
      //   },
      //   {
      //     各区: '宾阳',
      //     呼叫总数: '180',
      //     派车次数: '56'
      //   },
      //   {
      //     各区: '上林',
      //     呼叫总数: '963',
      //     派车次数: '66'
      //   },
      //   {
      //     各区: '马山',
      //     呼叫总数: '221',
      //     派车次数: '35'
      //   },
      //   {
      //     各区: '隆安',
      //     呼叫总数: '407',
      //     派车次数: '55'
      //   }
      // ],
      num: 3287
    }
  },
  methods: {},
  created() {
    setInterval(() => {
      this.num += parseInt(Math.random() * 10)
    }, 3000)
  },
  components: {}
}
</script>
