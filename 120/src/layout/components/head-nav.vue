<template>
  <div class="nav-con">
    <div class="top-part">
      <img class="logo" src="../../assets/images/120急救中心logo.png" alt="" />
      <img class="sys-name" src="../../assets/images/120指挥中心.png" alt="" />
      <div class="nav-item">调度管理</div>
      <!-- <div class="nav-item">远程会诊</div>
    <div class="nav-item">培训教育</div> -->
      <div class="block"></div>
      <!-- <div class="sys-name-btn center">管理后台</div> -->
      <div class="tool-con">
        <!-- <div class="tool-icon">
        <img src="../../assets/images/下载.png"/>
        </div> -->
        <div class="tool-icon">
          <i class="icon el-icon-user" @click="$refs.UserInfoModal.open()"></i>
        </div>
        <div class="tool-icon">
          <el-badge :value="messageTotal" :hidden="!messageTotal" class="badge">
            <router-link to="/message"
              ><img src="../../assets/images/消息.png"
            /></router-link>
          </el-badge>
        </div>
        <!-- <div class="tool-icon">
          <el-dropdown trigger="click" @command="handleCommand">
            <span>
              <img src="../../assets/images/系统设置.png" />
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="password"
                >修改登录密码</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div> -->
        <div class="tool-icon"
          ><img src="../../assets/images/退出.png" @click="logout"
        /></div>
      </div>
      <ResetPasswordModal ref="ResetPasswordModal"></ResetPasswordModal>
      <UserInfoModal ref="UserInfoModal"></UserInfoModal>
    </div>
    <div class="bottom-part">
      <router-link to="/call-manage" class="sub-item">呼叫管理</router-link>
      <router-link to="/dispatch-manage" class="sub-item">调度管理</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top-part {
  height: 50px;
  background: #223255;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.logo {
  height: 26px;
}
.welcome {
  font-size: 13px;
  color: #aeb3be;
  margin-left: 40px;
  margin-right: 20px;
}
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 100%;
  font-size: 15px;
  color: #ffffff;
  &:hover {
    color: #2aa4a7;
  }
  &.router-link-active {
    color: #2aa4a7;
  }
}
.sub-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  height: 100%;
  font-size: 12px;
  color: #666666;
  margin-right: 60px;
  &:hover {
    color: #333333;
  }
  &.router-link-active {
    color: #333333;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      background: #2aa4a7;
    }
  }
}

.sys-name {
  height: 18px;
  margin-left: 16px;
  margin-right: 80px;
}

.sys-name-btn {
  width: 79px;
  height: 24px;
  background: rgba(46, 176, 179, 1);
  border-radius: 17px;
  font-size: 12px;
  color: #ffffff;
}

.tool-con {
  width: 140px;
  display: flex;
  justify-content: space-between;
  margin-left: 22px;
  cursor: pointer;
  .tool-icon {
    img {
      width: 20px;
    }
    .icon {
      width: 20px;
      color: #fff;
      font-size: 20px;
    }
    .el-icon--right {
      color: #fff;
      position: relative;
      top: -3px;
      left: -2px;
    }
    /deep/ .el-badge__content {
      height: 14px;
      line-height: 14px;
      border-radius: 8px;
      border: 0;
      padding: 0 4px;
    }
  }
}

.bottom-part {
  background: #fff;
  height: 36px;
  padding-left: 280px;
  display: flex;
  align-items: center;
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
      messageTotal: 0
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
    this.getMessageTotal()
    clearInterval(timer)
    timer = setInterval(() => {
      this.getMessageTotal()
    }, 20000)
  },
  components: {
    ResetPasswordModal,
    UserInfoModal
  }
}
</script>
