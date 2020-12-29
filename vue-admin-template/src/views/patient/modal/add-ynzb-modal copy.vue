<template>
  <div>
    <el-dialog
      title="院内准备"
      :visible.sync="dialogVisible"
      width="425px"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <el-form ref="form" :model="formData" label-width="80px" size="small">
        <el-form-item label="分类">
          <el-select
            v-model="formData.groupName"
            style="width: 100%"
            @change="onGroupNameChange"
          >
            <el-option
              v-for="(item, index) in groupList"
              :key="index"
              :value="item"
              :label="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-select v-model="formData.itemName" style="width: 100%">
            <el-option
              v-for="(item, index) in itemList"
              :key="index"
              :value="item"
              :label="item"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <el-button @click="close" size="small">取消</el-button>
        <el-button @click="save" size="small" type="primary">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped></style>
<script>
import { patient_prepare_typeList, patient_prepare_list } from '@/api/common'
export default {
  data() {
    return {
      dialogVisible: false,
      callback: null,
      formData: {
        groupName: '',
        itemName: ''
      },
      groupList: [],
      itemList: []
    }
  },
  methods: {
    open(callback) {
      this.dialogVisible = true
      this.callback = callback
      this.formData = {
        groupName: this.groupList[0],
        itemName: ''
      }
      this.onGroupNameChange()
    },
    close() {
      this.dialogVisible = false
    },
    save() {
      this.close()
      this.callback && this.callback(this.formData)
    },
    onGroupNameChange() {
      patient_prepare_list(this.formData.groupName).then(res => {
        this.itemList = res.data.list.map(item => item.content)
        this.formData.itemName = ''
      })
    }
  },
  created() {
    patient_prepare_typeList().then(res => {
      this.groupList = res.data.list
    })
  },
  components: {}
}
</script>
