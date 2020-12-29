<template>
  <div class="left-menu-con">
    <div
      class="menu-item"
      v-for="(item, index) in menuList"
      :key="index"
      :class="{ active: item.path === $route.path }"
      @click="$router.push(item.path)"
    >
      <img
        :src="item.path === $route.path ? item.activeIcon : item.icon"
        alt=""
        class="menu-icon"
      />
      <div class="menu-name">{{ item.name }}</div>
      <div class="block"></div>
      <div
        class="num-con"
        v-if="item.num"
        :style="{ background: item.color }"
        >{{ item.num }}</div
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.left-menu-con {
  width: 200px;
  background: #fff;
  height: 100%;
  padding: 20px 15px;
  .menu-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    &.active {
      .menu-name {
        color: #ec9162;
      }
    }
    .block {
      flex: 1;
    }
    .menu-icon {
      margin-right: 6px;
      width: 18px;
    }
    .menu-name {
      font-size: 12px;
      color: #333333;
    }
    .num-con {
      min-width: 22px;
      height: 16px;
      background: rgba(243, 83, 105, 1);
      border-radius: 8px;
      font-size: 12px;
      color: #fff;
      padding: 2px;
      text-align: center;
      line-height: 14px;
    }
  }
}
</style>
<script>
export default {
  props: {},
  data() {
    return {
      menuList: [
        {
          icon: require('../../assets/img/首页.png'),
          activeIcon: require('../../assets/img/首页-active.png'),
          name: '首页',
          num: 7,
          color: '#F35369',
          path: '/home'
        },
        {
          icon: require('../../assets/img/预警.png'),
          activeIcon: require('../../assets/img/预警-active.png'),
          num: 7,
          color: '#F35369',
          name: '预警',
          path: '/warn'
        },

        {
          icon: require('../../assets/img/资讯.png'),
          name: '资讯'
        },
        {
          icon: require('../../assets/img/远程.png'),
          name: '远程'
        },
        {
          icon: require('../../assets/img/门诊.png'),
          name: '门诊'
        },
        {
          icon: require('../../assets/img/转诊.png'),
          name: '转诊'
        },
        {
          icon: require('../../assets/img/记录.png'),
          name: '记录'
        },
        {
          icon: require('../../assets/img/患者.png'),
          name: '患者'
        },
        {
          icon: require('../../assets/img/患者.png'),
          name: '随访'
        }
      ]
    }
  },
  methods: {},
  components: {}
}
</script>
