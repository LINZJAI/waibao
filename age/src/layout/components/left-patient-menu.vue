<template>
  <div class="left-menu-con">
    <div class="back-con">
      <img src="../images/返回.png" alt="" @click="$router.push('/home')" />
      <div class="back-text" @click="$router.push('/home')">返回</div>
    </div>
    <div class="info-con">
      <div class="top-item">
        <img src="../images/默认男生头像.png" alt="" class="top-icon" />
        <div class="top-text-con">
          <div class="top-row">
            <span class="name">唐琦琦</span>
          </div>
          <div class="top-row">
            <span class="key">ID:10008826</span>
          </div>
        </div>
      </div>
      <div class="text-row">
        <div class="value">男 ｜ 57岁</div>
      </div>

      <div class="text-row">
        <div class="key">
          <img src="../images/手机号.png" alt="" />
        </div>
        <div class="value">17835327746</div>
      </div>
      <div class="text-row">
        <div class="key">
          <img src="../images/现住址.png" alt="" />
        </div>
        <div class="value">广西省南宁市通州区长寿街926号</div>
      </div>
    </div>
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
    </div>
  </div>
</template>
<style lang="scss" scoped>
.left-menu-con {
  width: 200px;
  background: #fff;
  height: 100%;
  .menu-item {
    padding: 0 15px;
    display: flex;
    align-items: center;
    height: 40px;
    cursor: pointer;
    &.active {
      background: #eaf7f7;
      border-right: 3px solid #00adaf;
      color: #00adaf;
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

.back-con {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
  img {
    width: 15px;
    margin-right: 5px;
    cursor: pointer;
  }
  .back-text {
    font-size: 13px;
    color: #00adaf;
    cursor: pointer;
  }
}

.info-con {
  padding: 25px 15px 35px;
  .top-item {
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .top-icon {
      width: 42px;
      height: 42px;
      margin-right: 12px;
    }
    .top-text-con {
      width: 0;
      flex: 1;
      height: 40px;
      .top-row {
        margin-bottom: 2px;
        .name {
          font-size: 16px;
          color: #333333;
          font-weight: bold;
        }
        .key {
          font-size: 13px;
          color: #777777;
        }
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
      margin-right: 5px;
      margin-left: -2px;
    }
    .value {
      width: 0;
      flex: 1;
      line-height: 17px;
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
          icon: require('../images/个人概括.png'),
          activeIcon: require('../images/个人概括.png'),
          name: '个人概括',
          path: '/patient/detail'
        },
        {
          icon: require('../images/健康预警.png'),
          activeIcon: require('../images/健康预警.png'),
          name: '健康预警',
          path: '/patient/warn'
        },
        {
          icon: require('../images/健康档案.png'),
          activeIcon: require('../images/健康档案-active.png'),
          name: '健康档案',
          path: '/patient/document'
        },
        {
          icon: require('../images/健康检测.png'),
          activeIcon: require('../images/健康检测-active.png'),
          name: '健康检测',
          path: '/patient/check'
        },
        {
          icon: require('../images/健康评估.png'),
          name: '健康评估'
        },
        {
          icon: require('../images/健康管理.png'),
          name: '健康管理'
        },
        {
          icon: require('../images/随访问诊.png'),
          activeIcon: require('../images/随访问诊-active.png'),
          name: '随访问诊',
          path: '/patient/follow'
        }
      ]
    }
  },
  methods: {},
  components: {}
}
</script>
