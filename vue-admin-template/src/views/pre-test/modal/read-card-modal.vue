<template>
  <el-dialog
    title="快速登记"
    :visible.sync="dialogVisible"
    class="record-modal"
    @close="onClose"
    :close-on-click-modal="false"
  >
    <div class="read-card-con">
      <img
        src="../../../assets/images/pre-test/读卡图.png"
        class="read-img"
        alt=""
      />
      <div class="read-text">请把证件放置到读卡器上，等待数据读取完毕…</div>
    </div>
    <template slot="footer">
      <el-button @click="dialogVisible = false" size="small">关闭</el-button>
    </template>
  </el-dialog>
</template>
<style lang="scss">
@import './record-modal.scss';
</style>
<style lang="scss" scoped>
.record-modal {
  /deep/ {
    .el-dialog {
      width: 420px;
    }
    .el-dialog__footer {
      justify-content: flex-end;
      padding-right: 23px;
    }
  }
}
.read-card-con {
  height: 193px;
  background: #f5f5f5;
  border-radius: 3px;
  border: 1px solid #cccccc;
  margin: 15px 23px;
  .read-img {
    height: 133px;
    display: block;
    margin: 20px auto 10px;
  }
  .read-text {
    text-align: center;
    font-size: 12px;
    color: #2b377d;
  }
}
</style>
<script>
import { formSave, getListByBlock } from '@/api/pre-test'
import addModel from '../add-model'
import { connect, readCert, disconnect } from './read-card-utils'
import { Alert } from 'element-ui'
let timer = null
export default {
  data() {
    return {
      dialogVisible: false,
      callback: null
    }
  },
  computed: {},
  methods: {
    init() {
      connect(data => {
        if (JSON.parse(data).errorMsg === '打开成功') {
          let readCard = () => {
            readCert(data => {
              let info = JSON.parse(data)
              if (info.errorMsg === '读卡成功') {
                this.callback(info)
                this.close()
              }
            })
          }
          readCard()
          timer = setInterval(readCard, 2000)
        }
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

    onClose() {
      disconnect()
      clearInterval(timer)
    }
  },
  components: {}
}
</script>
