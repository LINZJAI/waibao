<template>
  <div class="bed-card">
    <div class="inner">
      <div class="top-part" :style="{ background: color }"
        >{{ dataSource.roomNo }}房</div
      >
      <div class="main-part">
        <div class="bed-box" v-for="(item, index) in bedList" :key="index">
          <div class="bed-no">{{ item ? item.bedNo : index + 1 }}床</div>
          <img
            class="empty-bed"
            src="../../../assets/age-images/home/空床.png"
            alt=""
            v-if="!item"
          />
          <template v-else>
            <img
              src="../../../assets/age-images/home/爷爷.png"
              alt=""
              class="head-img"
              v-if="item.sex === '0'"
            />
            <img
              src="../../../assets/age-images/home/奶奶.png"
              alt=""
              class="head-img"
              v-else
            />
            <div class="name">{{ item.name }}</div>
            <div class="info">{{ item.info }}</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bed-card {
  width: 20%;
  height: 180px;
  box-sizing: border-box;
  padding-right: 10px;
  padding-bottom: 10px;
  float: left;
  .inner {
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #cccccc;
    .top-part {
      height: 45px;
      background: #f4f5fb;
      line-height: 45px;
      padding-left: 16px;
      font-size: 18px;
      color: #555555;
    }
    .main-part {
      height: 125px;
      display: flex;
      align-items: stretch;
      justify-content: center;
      padding: 12px 12px 18px;
      .bed-box {
        background: #f7f7f7;
        border-radius: 4px;
        margin-right: 12px;
        flex: 1;
        padding: 10px 14px;
        position: relative;
        &:last-child {
          margin-right: 0;
        }
        .bed-no {
          font-size: 12px;
          color: #666666;
        }
        .empty-bed {
          display: block;
          margin: 12px auto;
        }
        .head-img {
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .name {
          margin-top: 20px;
          font-size: 13px;
          color: #333;
          font-weight: bold;
        }
        .info {
          margin-top: 5px;
          font-size: 12px;
          color: #555;
        }
      }
    }
  }
}
</style>
<script>
export default {
  props: ['dataSource'],
  data() {
    return {}
  },
  computed: {
    color() {
      let color = ['#F4F5FB', '#F6DFD3', '#C9E7E4', '#C9E7CB']
      return color[this.dataSource.type - 1]
    },
    bedList() {
      return [this.dataSource.bed1, this.dataSource.bed2]
    }
  },
  methods: {},
  components: {}
}
</script>
