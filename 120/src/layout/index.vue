<template>
  <div class="app-wrapper">
    <head-nav></head-nav>
    <div class="main-container">
      <AppMain />
    </div>
  </div>
</template>

<script>
import { AppMain, HeadNav } from './components'
import MessageBox from './components/message-box'
import InfoMessageBox from './components/info-message-box'
import {
  getReceiverMessage,
  ackAll,
  getMessageDetail,
  getTaskDispatchDetail
} from '@/api/common'
import Vue from 'vue'

let timer
export default {
  name: 'Layout',
  components: {
    AppMain,
    HeadNav
  },
  methods: {
    initMessage() {
      getReceiverMessage({ ack: false })
        .then(res => {
          return ackAll(res.data.records.map(item => item.messageId))
        })
        .then(res => {
          timer = setInterval(() => {
            getReceiverMessage({ ack: false }).then(messageRes => {
              messageRes.data.records.length &&
                ackAll(messageRes.data.records.map(item => item.messageId))
              for (let i = 0; i < messageRes.data.records.length; i++) {
                setTimeout(() => {
                  if (
                    messageRes.data.records[i].subType == 'receive' ||
                    messageRes.data.records[i].subType == 'abnormal' ||
                    messageRes.data.records[i].subType == 'reject'
                  ) {
                    getMessageDetail(messageRes.data.records[i].messageId).then(
                      res => {
                        this.postInfoMessage({
                          ...messageRes.data.records[i],
                          taskNo: res.data.taskNo,
                          reason: res.data.reason
                        })
                      }
                    )
                  }
                }, i * 200)
              }
            })
          }, 5000)
        })
    },
    postTableMessage(info) {
      let MessageBoxVue = Vue.extend(MessageBox)
      let instance = new MessageBoxVue({
        data: {
          info
        }
      })
      instance.$mount()
      function HTMLDOMtoString(HTMLDOM) {
        const div = document.createElement('div')
        div.appendChild(HTMLDOM)
        return div.innerHTML
      }
      this.$notify({
        title: '',
        dangerouslyUseHTMLString: true,
        message: HTMLDOMtoString(instance.$el),
        duration: 0
      })
    },
    postInfoMessage(info) {
      let MessageBoxVue = Vue.extend(InfoMessageBox)
      let instance = new MessageBoxVue({
        data: {
          info
        }
      })
      instance.$mount()
      function HTMLDOMtoString(HTMLDOM) {
        const div = document.createElement('div')
        div.appendChild(HTMLDOM)
        return div.innerHTML
      }
      this.$notify({
        title: '',
        dangerouslyUseHTMLString: true,
        message: HTMLDOMtoString(instance.$el),
        duration: 0
      })
    }
  },
  created() {
    // this.postMessage()
    this.initMessage()
    // this.postInfoMessage({
    //   messageId: 3,
    //   title: '车辆突发状况：车辆抛锚',
    //   content: null,
    //   createTime: '2020-06-14 20:52:18',
    //   senderNo: '粤A_0001',
    //   senderName: '东风日产',
    //   sendTime: '2020-06-14 20:52:18',
    //   type: 'dispatch',
    //   subType: 'reject',
    //   deleted: false,
    //   status: '1',
    //   hadRead: false
    // })
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.main-container {
  flex: 1;
  width: 100%;
  overflow: hidden;
}
</style>
