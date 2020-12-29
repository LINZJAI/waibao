<template>
  <div class="nav-con">
    <div class="top-part">
      <img
        v-if="env === 'staging'"
        class="logo"
        src="../../assets/img/logo-staging.png"
        alt=""
      />
      <img v-else class="logo" src="../../assets/img/logo.png" alt="" />

      <div class="block"></div>
      <div class="search-con">
        <input type="text" class="search-input" placeholder="搜索" />
        <img src="../../assets/img/搜索1.png" alt="" class="search-icon" />
      </div>

      <div class="tool-icon">
        <el-badge
          :value="messageTotal"
          :hidden="!messageTotal"
          class="badge green"
        >
          <router-link to="/message"
            ><img src="../../assets/images/消息.png"
          /></router-link>
        </el-badge>
      </div>
      <div class="tool-icon">
        <el-badge
          :value="messageTotal"
          :hidden="!messageTotal"
          class="badge red"
        >
          <router-link to="/message"
            ><img src="../../assets/img/邮件.png"
          /></router-link>
        </el-badge>
      </div>

      <div class="user-con">
        <img src="../../assets/img/头像.png" alt="" class="user-head" />
        <div class="user-name">刘昊嵋</div>
        <img src="../../assets/img/下拉.png" alt="" />
      </div>

      <!-- <div class="tool-con">
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

        <div class="tool-icon"
          ><img src="../../assets/images/退出.png" @click="logout"
        /></div>
      </div> -->
      <ResetPasswordModal ref="ResetPasswordModal"></ResetPasswordModal>
      <UserInfoModal ref="UserInfoModal"></UserInfoModal>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top-part {
  height: 50px;
  background: #ec9162;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.logo {
  height: 30px;
}

.search-con {
  position: relative;
  margin-right: 50px;
  .search-input {
    width: 180px;
    height: 30px;
    background: rgba(255, 255, 255, 0.29);
    border-radius: 17px;
    padding: 5px 30px 5px 15px;
    color: #fff;
    outline: 0;
    border: 0;
    font-size: 12px;
    &::-webkit-input-placeholder {
      color: #fff;
    }
  }
  .search-icon {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
}

.tool-icon {
  margin-top: 3px;
  margin-right: 30px;
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
    color: #fff;
    margin-right: 5px;
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
      messageTotal: 1
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
