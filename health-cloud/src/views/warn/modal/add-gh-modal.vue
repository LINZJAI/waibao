<template>
  <div>
    <el-dialog title="预约挂号" :visible.sync="dialogVisible" width="30%">
      <div class="form-con">
        <el-form
          :model="formData"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="90px"
        >
          <el-form-item label="挂号科室：" prop="password">
            <el-input size="medium"></el-input>
          </el-form-item>
          <el-form-item label="挂号医生：" prop="newPassword">
            <el-input size="medium"></el-input>
          </el-form-item>
          <el-form-item label="挂号日期：" prop="newPassword">
            <el-input size="medium"> </el-input>
          </el-form-item>
          <el-form-item label="挂号时间：" prop="newPassword">
            <el-input size="medium"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.form-con {
  padding: 0 20px;
}
</style>
<script>
import { updatePasswor } from '@/api/user'
export default {
  props: {
    type: {
      type: String,
      default: 'password' //electron
    }
  },
  data() {
    return {
      callback: null,
      dialogVisible: false,
      formData: {
        password: '',
        newPassword: '',
        newPasswordAgain: ''
      },
      rules: {
        // newPasswordAgain: [
        //   {
        //     validator: (rule, value, callback) => {
        //       console.log(this.formData.newPassword, value)
        //       if (value === '') {
        //         callback(new Error('请再次输入密码'))
        //       } else if (value !== this.formData.newPassword) {
        //         callback(new Error('两次输入密码不一致!'))
        //       } else {
        //         callback()
        //       }
        //     },
        //     trigger: 'blur'
        //   }
        // ]
      }
    }
  },
  computed: {
    obj() {
      let password = {
        title: '修改登录密码',
        name: '登录密码'
      }
      let electron = {
        title: '修改电子签名密码',
        name: '签名密码'
      }
      return this.type == 'password' ? password : electron
    }
  },
  methods: {
    init() {
      this.formData = {
        password: '',
        newPassword: '',
        newPasswordAgain: ''
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate()
      })
    },
    open(callback) {
      this.dialogVisible = true
      this.callback = callback
      this.init()
    },
    close() {
      this.dialogVisible = false
    },
    submit() {
      this.close()
      this.callback && this.callback()
      // updatePasswor(this.formData).then(res => {
      //   this.$message.success('修改密码成功')
      //   this.close()
      // })
    }
  },
  components: {}
}
</script>
