<template>
  <div>
    <el-dialog :title="obj.title" :visible.sync="dialogVisible" width="30%">
      <div class="form-con">
        <el-form
          :model="formData"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="90px"
        >
          <el-form-item :label="'原' + obj.name" prop="password">
            <el-input
              type="password"
              v-model="formData.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input
              type="password"
              v-model="formData.newPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认新密码" prop="newPasswordAgain">
            <el-input
              type="password"
              v-model="formData.newPasswordAgain"
            ></el-input>
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
      dialogVisible: false,
      formData: {
        password: '',
        newPassword: '',
        newPasswordAgain: ''
      },
      rules: {
        newPasswordAgain: [
          {
            validator: (rule, value, callback) => {
              console.log(this.formData.newPassword, value)
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.formData.newPassword) {
                callback(new Error('两次输入密码不一致!'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
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
    open() {
      this.dialogVisible = true
      this.init()
    },
    close() {
      this.dialogVisible = false
    },
    submit() {
      updatePasswor(this.formData).then(res => {
        this.$message.success('修改密码成功')
        this.close()
      })
    }
  },
  components: {}
}
</script>
