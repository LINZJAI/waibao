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
          <el-select
            v-model="formData.itemCode"
            v-loadmore="loadMore"
            style="width: 100%"
            :remote-method="remoteMethod"
            remote
            filterable
            @change="onItemNameChange"
          >
            <el-option
              v-for="(item, index) in itemList"
              :key="index"
              :value="item.title"
              :label="item.content"
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
import {
  patient_prepare_typeList,
  patient_prepare_list,
  getDescPage
} from '@/api/common'
export default {
  data() {
    return {
      dialogVisible: false,
      callback: null,
      formData: {
        groupName: '',
        itemName: '',
        itemCode: ''
      },
      groupList: [],
      itemList: [
        {
          id: 29483,
          dictCode: 'patient_prepare',
          groupName: '检查',
          title: '100424',
          content: '床旁B超检查',
          indexNo: 666
        },
        {
          id: 29483,
          dictCode: 'patient_prepare',
          groupName: '检查',
          title: '100424',
          content: '床旁B超检查',
          indexNo: 666
        },
        {
          id: 29483,
          dictCode: 'patient_prepare',
          groupName: '检查',
          title: '100424',
          content: '床旁B超检查',
          indexNo: 666
        },
        {
          id: 29483,
          dictCode: 'patient_prepare',
          groupName: '检查',
          title: '100424',
          content: '床旁B超检查',
          indexNo: 666
        },
        {
          id: 29483,
          dictCode: 'patient_prepare',
          groupName: '检查',
          title: '100424',
          content: '床旁B超检查',
          indexNo: 666
        },
        {
          id: 29483,
          dictCode: 'patient_prepare',
          groupName: '检查',
          title: '100424',
          content: '床旁B超检查',
          indexNo: 666
        },
        {
          id: 29483,
          dictCode: 'patient_prepare',
          groupName: '检查',
          title: '100424',
          content: '床旁B超检查',
          indexNo: 666
        },
        {
          id: 29483,
          dictCode: 'patient_prepare',
          groupName: '检查',
          title: '100424',
          content: '床旁B超检查',
          indexNo: 666
        },
        {
          id: 29483,
          dictCode: 'patient_prepare',
          groupName: '检查',
          title: '100424',
          content: '床旁B超检查',
          indexNo: 666
        }
      ],
      descPage: 1,
      descKeyWord: ''
    }
  },
  methods: {
    open(callback) {
      this.dialogVisible = true
      this.callback = callback
      this.descPage = 1
      this.itemList = []
      this.descKeyWord = ''
      this.formData = {
        groupName: this.groupList[0],
        itemName: '',
        itemCode: ''
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
    loadMore() {
      getDescPage(
        'patient_prepare',
        this.formData.groupName,
        this.descPage,
        this.descKeyWord
      ).then(res => {
        this.itemList.push(...res.data.records)
      })
      this.descPage++
    },
    remoteMethod(query) {
      this.descKeyWord = query
      this.descPage = 1
      this.itemList = []
      this.loadMore()
    },
    onGroupNameChange() {
      this.remoteMethod('')
    },
    onItemNameChange() {
      this.formData.itemName = this.itemList.find(
        item => item.title === this.formData.itemCode
      ).content
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
