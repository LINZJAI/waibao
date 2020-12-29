<template>
  <div class="login-container">
    <div class="login-box">
      <div class="left-con">
        <img src="../../assets/images/logo.png" alt="" class="sys-logo" />
        <img
          src="../../assets/images/院前管理系统.png"
          alt=""
          class="sys-name"
        />
        <div class="sys-aside">
          医生 <br />
          互联互通协作办公工具
        </div>
      </div>
      <div class="right-con">
        <div class="login-form">
          <div class="tab-con">
            <div
              class="tab-item"
              :class="{ active: tabIndex == 0 }"
              @click="tabIndex = 0"
            >
              手机
            </div>
            <div
              class="tab-item"
              :class="{ active: tabIndex == 1 }"
              @click="tabIndex = 1"
            >
              工号
            </div>
          </div>
          <el-input
            class="login-input"
            size="medium"
            placeholder="请输入手机号"
            v-if="tabIndex == 0"
          ></el-input>

          <el-select
            class="login-input"
            size="medium"
            placeholder="请选择医院"
            v-if="tabIndex == 1"
          ></el-select>
          <el-input
            class="login-input"
            size="medium"
            placeholder="请输入工号"
            v-if="tabIndex == 1"
            v-model="empNo"
          ></el-input>
          <el-input
            class="login-input"
            size="medium"
            placeholder="请输入密码"
            type="password"
            v-model="password"
          ></el-input>
          <div class="remind-con">
            <span>
              <el-checkbox></el-checkbox>
              <span>记住我</span>
            </span>
            <span class="forget-password">忘记密码？</span>
          </div>
          <el-button
            class="login-button"
            size="medium"
            type="primary"
            @click="onLogin"
            >登录</el-button
          >
          <el-button class="login-button" size="medium">激活账号</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box {
    display: flex;
    align-items: stretch;
    width: 760px;
    height: 450px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
    border-radius: 7px;
    border: 1px solid rgba(204, 204, 204, 1);
  }
  .left-con {
    flex: 1 1 0;
    background: url('../../assets/images/背景图.png');
    background-size: cover;
    .sys-logo {
      display: block;
      margin: 60px auto 0;
    }
    .sys-name {
      display: block;
      margin: 30px auto 0;
    }
    .sys-aside {
      text-align: center;
      margin: 130px auto 0;
      font-size: 14px;
      color: #fff;
      font-weight: lighter;
      line-height: 25px;
    }
  }
  .right-con {
    flex: 1 1 0;
  }
}

.login-form {
  margin: 50px 60px;
  .tab-con {
    border-bottom: 1px solid #dfdfdf;
    height: 30px;
    display: flex;
    align-items: stretch;
    margin-bottom: 25px;
    .tab-item {
      font-size: 16px;

      color: #555;
      margin-right: 20px;
      padding: 0 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      &.active {
        color: #2eb0b3;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          border-bottom: 2px solid #2eb0b3;
        }
      }
    }
  }
}
.login-input {
  margin-bottom: 15px;
  width: 100%;
}

.remind-con {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #555;
  margin-bottom: 12px;
  .forget-password {
    color: #326ab2;
    cursor: pointer;
  }
}

.login-button {
  width: 100%;
  display: block;
  margin: 0;
  margin-bottom: 10px;
}
</style>
<script>
import { login } from '@/api/user'
export default {
  props: {},
  data() {
    return {
      tabIndex: 1,
      empNo: 'admin',
      password: '123456'
    }
  },
  methods: {
    onLogin() {
      if (this.tabIndex !== 1) {
        this.$message.warning('目前只支持工号登录')
      } else {
        login({
          userType: this.empNo == 'admin' ? 'dispatcher' : 'nurse',
          empNo: this.empNo,
          password: this.password,
          channel: 'pad'
        }).then(res => {
          this.$store.commit('user/SET_USERINFO', res.data)
          this.$router.push('/home')
        })
      }
    }
  },
  components: {}
}
</script>
