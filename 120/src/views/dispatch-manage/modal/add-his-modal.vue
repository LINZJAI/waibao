<template>
  <div>
    <el-dialog title="添加医院" :visible.sync="dialogVisible" width="400px">
      <div class="form-con">
        <el-form
          :model="formData"
          status-icon
          ref="ruleForm"
          label-width="85px"
          size="mini"
        >
          <el-form-item label="指派医院：">
            <el-select v-model="formData.departureHospitalCode" size="mini">
              <el-option
                v-for="(item, index) in hospitalDict"
                :key="index"
                :value="item.code"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="建议车辆：" prop="newPassword">
            <el-input-number
              v-model="formData.proposeCarNumber"
              size="mini"
              :min="0"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="时间：" prop="newPassword">
            <el-input :value="moment" disabled size="mini"></el-input>
          </el-form-item>

          <el-form-item label="备注" prop="newPasswordAgain">
            <el-input
              type="textarea"
              v-model="formData.remake"
              size="mini"
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
  padding: 0 10px;
  .el-select {
    width: 100%;
  }
}
</style>
<script>
import { saveAndSendForTask, getHospitalList } from '@/api/api'
import moment from 'moment'
export default {
  data() {
    return {
      dialogVisible: false,
      moment: '',
      formData: {
        departureHospitalCode: '',
        proposeCarNumber: '',
        remake: ''
      },
      hospitalDict: []
    }
  },

  methods: {
    init() {
      this.formData = {
        departureHospitalCode: '',
        proposeCarNumber: '',
        remake: ''
      }
      this.moment = moment().format('YYYY-MM-DD HH:mm:ss')
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
  created() {
    getHospitalList().then(res => {
      this.hospitalDict = res.data
    })
  },
  components: {}
}
</script>
