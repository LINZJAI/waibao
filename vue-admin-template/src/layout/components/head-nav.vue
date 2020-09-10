<template>
  <div class="wrapper">
    <img class="logo" src="../../assets/images/logo.png" alt="" />
    <div class="welcome">欢迎您，{{ empName }}</div>
    <router-link class="nav-item" to="/desktop/index">工作台</router-link>
    <router-link class="nav-item" to="/patient">急救记录</router-link>
    <router-link class="nav-item" to="/consultation">远程会诊</router-link>
    <!-- <div class="nav-item">远程会诊</div>
    <div class="nav-item">培训教育</div> -->
    <div class="block"></div>
    <!-- <div class="sys-name-btn center">管理后台</div> -->
    <div class="tool-con">
      <!-- <div class="tool-icon">
        <img src="../../assets/images/下载.png"/>
        </div> -->
      <div class="tool-icon">
        <el-badge :value="messageTotal" :hidden="!messageTotal" class="badge">
          <router-link to="/message"
            ><img src="../../assets/images/消息.png"
          /></router-link>
        </el-badge>
      </div>
      <div class="tool-icon">
        <el-dropdown trigger="click" @command="handleCommand">
          <span>
            <img src="../../assets/images/系统设置.png" />
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="password">修改登录密码</el-dropdown-item>
            <!-- <el-dropdown-item command="electron"
              >修改电子签名密码</el-dropdown-item
            > -->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="tool-icon"
        ><img src="../../assets/images/退出.png" @click="logout"
      /></div>
    </div>
    <ResetPasswordModal ref="ResetPasswordModal"></ResetPasswordModal>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  height: 50px;
  background: #223355;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.logo {
  height: 30px;
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
  color: #aeb3be;
  &:hover {
    color: #aeb3be;
  }
  &.router-link-active {
    background: #1c283f;
    color: #ffffff;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 2px;
      background: #2eb0b3;
    }
  }
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
</style>
<script>
import ResetPasswordModal from '../../views/modal/reset-password-modal'
import { getReceiverMessage } from '@/api/common'
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
        return this.$store.state.baseUser.userInfo.empName
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
      this.$store.commit('baseUser/REMOVE_USERINFO')
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
    ResetPasswordModal
  }
}
</script>
