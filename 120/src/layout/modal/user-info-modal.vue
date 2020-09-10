<template>
  <div>
    <el-dialog title="个人信息" :visible.sync="dialogVisible" width="400px">
      <div class="form-con">
        <img
          v-if="userInfo.profilePicture"
          :src="userInfo.profilePicture"
          alt=""
          class="head-img"
        />
        <el-form status-icon ref="ruleForm" label-width="85px" size="mini">
          <el-form-item label="工号：">
            <span>{{ userInfo.empNo }}</span>
          </el-form-item>

          <el-form-item label="姓名：" prop="newPassword">
            <span>{{ userInfo.empName }}</span>
          </el-form-item>
          <el-form-item label="职位：" prop="newPassword">
            <span>{{ userInfo.userType }}</span>
          </el-form-item>
          <!-- <el-form-item label="所属单位：" prop="newPassword">
            <span></span>
          </el-form-item> -->
          <el-form-item label="联系方式：" prop="newPassword">
            <span>{{ userInfo.phone }}</span>
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
  padding: 0 10px;
  .el-select {
    width: 100%;
  }
}
.head-img {
  display: block;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: 0px auto 20px;
}
</style>
<script>
import { getInfo } from '@/api/user'
import moment from 'moment'
export default {
  data() {
    return {
      dialogVisible: false,
      userInfo: {}
    }
  },

  methods: {
    init() {
      getInfo().then(res => {
        this.userInfo = res.data
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
      saveAndSendForTask(this.$route.query.taskNo, [this.formData]).then(
        res => {
          this.$message.success('添加医院成功')
          this.$emit('submit')
          this.close()
        }
      )
    }
  },

  components: {}
}
</script>
