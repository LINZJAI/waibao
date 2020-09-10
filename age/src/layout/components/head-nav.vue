<template>
  <div class="nav-con">
    <div class="top-part">
      <div class="logon-con">
        <img src="../../assets/age-images/home/logo.png" alt="" class="img" />
        <div class="text">智慧养老院系统</div>
      </div>
      <div
        class="nav-item"
        :class="{ active: index === 1 }"
        v-for="(item, index) in list"
        :key="index"
        >{{ item.name }}</div
      >

      <div class="block"></div>

      <div class="tool-icon">
        <el-badge
          :value="messageTotal"
          :hidden="!messageTotal"
          class="badge red"
        >
          <router-link to="/message"
            ><img src="../../assets/age-images/home/通知.png"
          /></router-link>
        </el-badge>
      </div>

      <div class="user-con">
        <img src="../../assets/img/头像.png" alt="" class="user-head" />
        <div class="user-name">刘昊嵋</div>
        <img src="../../assets/img/下拉.png" alt="" />
      </div>

      <ResetPasswordModal ref="ResetPasswordModal"></ResetPasswordModal>
      <UserInfoModal ref="UserInfoModal"></UserInfoModal>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.nav-con {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);
  position: relative;
  z-index: 2;
}
.top-part {
  height: 60px;
  background: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  /* padding-right: 20px; */
}
.logo {
  height: 30px;
}

.tool-icon {
  margin-top: 3px;
  margin-right: 30px;
  img {
    width: 18px;
  }
  .icon {
    width: 16px;
    color: #555555;
    font-size: 20px;
  }
  .el-icon--right {
    color: #555555;
    position: relative;
    top: -3px;
    left: -2px;
  }
  /deep/ .el-badge__content {
    height: 16px;
    line-height: 16px;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 0 4px;
  }
  .green {
    /deep/ .el-badge__content {
      background: #1ca843;
    }
  }
  .red {
    /deep/ .el-badge__content {
      background: #df3242;
    }
  }
}

.user-con {
  display: flex;
  align-items: center;
  margin-right: 20px;
  .user-head {
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .user-name {
    font-size: 12px;
    color: #555;
    margin-right: 5px;
  }
}

.logon-con {
  background: #ec9162;
  width: 220px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 20px;
  .img {
    margin-left: 20px;
    margin-right: 14px;
    /* height: 26px; */
  }
  .text {
    font-size: 16px;
    color: #fff;
  }
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 16px;
  color: #595959;
  height: 100%;
  cursor: pointer;
  &.active,
  &:hover {
    background: #eceef9;
  }
  &.active {
    position: relative;
    &::after {
      content: '';
      height: 2px;
      background: #ec9162;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
<script>
import ResetPasswordModal from '../../views/modal/reset-password-modal'
import { getReceiverMessage } from '@/api/common'
import UserInfoModal from '../modal/user-info-modal'
let timer
export default {
  props: {},
  data() {
    return {
      messageTotal: 1,
      list: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '接待管理',
          path: ''
        },
        {
          name: '评估管理',
          path: ''
        },
        {
          name: '居住管理',
          path: ''
        },
        {
          name: '费用管理',
          path: ''
        },
        {
          name: '护理管理',
          path: ''
        },
        {
          name: '健康管理',
          path: ''
        },
        {
          name: '床位管理',
          path: ''
        }
      ]
    }
  },
  computed: {
    empName() {
      try {
        return this.$store.state.user.userInfo.empName
      } catch (error) {
        return '未登录'
      }
    }
  },
  methods: {
    handleCommand(command) {
      // if (command == "resetPassword") {
      this.$refs.ResetPasswordModal.open(command)
      // }
    },
    logout() {
      this.$store.commit('user/REMOVE_USERINFO')
      this.$router.push('/login')
    },
    getMessageTotal() {
      getReceiverMessage({ hadRead: false }).then(res => {
        this.messageTotal = res.data.total
      })
    }
  },
  created() {
    // this.getMessageTotal()
    // clearInterval(timer)
    // timer = setInterval(() => {
    //   this.getMessageTotal()
    // }, 20000)
  },
  components: {
    ResetPasswordModal,
    UserInfoModal
  }
}
</script>
