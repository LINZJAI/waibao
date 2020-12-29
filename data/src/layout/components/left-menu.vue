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
      <!-- <div
        class="num-con"
        v-if="item.num"
        :style="{ background: item.color }"
        >{{ item.num }}</div
      > -->
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
        color: #2e88b3;
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
        // {
        //   icon: require('../../assets/img/病种及人数统计.png'),
        //   activeIcon: require('../../assets/img/病种及人数统计选中.png'),
        //   name: '病种及人数统计',
        //   num: 7,
        //   color: '#F35369',
        //   path: '/data-1'
        // },
        {
          icon: require('../../assets/img/基于时间统计.png'),
          activeIcon: require('../../assets/img/基于时间统计选中.png'),
          name: '基于时间统计',
          num: 7,
          color: '#F35369',
          path: '/data-2'
        },
        {
          icon: require('../../assets/img/来源方式统计.png'),
          activeIcon: require('../../assets/img/来源方式统计选中.png'),
          name: '来院方式统计',
          num: 7,
          color: '#F35369',
          path: '/data-3'
        },
        {
          icon: require('../../assets/img/D2B延误原因统计.png'),
          activeIcon: require('../../assets/img/D2B延误原因统计选中.png'),
          name: 'D2B延误原因统计',
          num: 7,
          color: '#F35369',
          path: '/data-4'
        },
        {
          icon: require('../../assets/img/介入统计.png'),
          activeIcon: require('../../assets/img/介入统计选中.png'),
          name: '介入统计',
          num: 7,
          color: '#F35369',
          path: '/data-5'
        },
        {
          icon: require('../../assets/img/溶栓再通统计.png'),
          activeIcon: require('../../assets/img/溶栓再通统计选中.png'),
          name: '溶栓再通统计',
          num: 7,
          color: '#F35369',
          path: '/data-6'
        },
        {
          icon: require('../../assets/img/远程心电传输统计.png'),
          activeIcon: require('../../assets/img/远程心电传输统计选中.png'),
          name: '远程心电传输统计',
          num: 7,
          color: '#F35369',
          path: '/data-7'
        },
        {
          icon: require('../../assets/img/GRACE评估统计.png'),
          activeIcon: require('../../assets/img/GRACE评估统计选中.png'),
          name: 'GRACE评估统计',
          num: 7,
          color: '#F35369',
          path: '/data-8'
        },
        {
          icon: require('../../assets/img/卒中评估统计.png'),
          activeIcon: require('../../assets/img/卒中评估统计选中.png'),
          name: '卒中评估统计',
          num: 7,
          color: '#F35369',
          path: '/data-9'
        },
        {
          icon: require('../../assets/img/患者转归统计.png'),
          activeIcon: require('../../assets/img/患者转归统计选中.png'),
          name: '患者转归统计',
          num: 7,
          color: '#F35369',
          path: '/data-10'
        },
        {
          icon: require('../../assets/img/死亡率统计.png'),
          activeIcon: require('../../assets/img/死亡率统计选中.png'),
          name: '死亡率统计',
          num: 7,
          color: '#F35369',
          path: '/data-11'
        },
        {
          icon: require('../../assets/img/急诊分区统计.png'),
          activeIcon: require('../../assets/img/急诊分区统计选中.png'),
          name: '急诊分区统计',
          num: 7,
          color: '#F35369',
          path: '/data-12'
        },
        {
          icon: require('../../assets/img/急诊分诊例数／比率.png'),
          activeIcon: require('../../assets/img/急诊分诊例数／比率选中.png'),
          name: '急诊分诊例数/比率',
          num: 7,
          color: '#F35369',
          path: '/data-13'
        },
        {
          icon: require('../../assets/img/急诊住院病患占全院住院比率.png'),
          activeIcon: require('../../assets/img/急诊住院病患选中.png'),
          name: '急诊住院病患占全院住院比率',
          num: 7,
          color: '#F35369',
          path: '/data-14'
        }
      ]
    }
  },
  methods: {},
  components: {}
}
</script>
