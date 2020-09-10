<template>
  <div class="video-wrapper">
    <!-- 聊天室页面 -->
    <div>
      <div>
        <!-- 视频网格 -->
        <div id="video-grid">
          <!-- 主视频 -->
          <div id="main-video"> </div>
          <!-- 小视频 -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  #video-grid {
    display: block;
  }
}
</style>
<style lang="scss">
/* #main-video {
  position: fixed !important;
  width: calc((100vw - 550px) / 2);
  height: calc((100vh - 50px) / 3);
  z-index: 111;
  bottom: 0;
  right: 300px;
  padding: 0 !important;
}

.video-box {
  position: absolute !important;
  padding: 0 !important;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 0;
  overflow: hidden;
  video {
    background: #000;
    object-fit: cover !important;
  }
} */
</style>
<script>
import Presetting from './js/presetting'
export default {
  props: {},
  data() {
    return {}
  },
  methods: {},
  beforeDestroy() {
    try {
      window.leave && window.leave()
    } catch (error) {}
  },
  mounted() {
    try {
      window.leave && window.leave()
    } catch (error) {}
    window.presetting = new Presetting()

    const roomId = this.$route.query.roomId
    if (!roomId) return
    presetting.init(
      'pc_' +
        this.$store.state.baseUser.userInfo.empNo +
        '_' +
        parseInt(Math.random() * 100),
      roomId
    )

    // check if browser is compatible with TRTC
    TRTC.checkSystemRequirements().then(result => {
      if (!result) {
        alert('您的浏览器不兼容此应用！\n建议下载最新版Chrome浏览器')
        window.location.href = 'http://www.google.cn/chrome/'
      }
    })

    // setup logging stuffs
    TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.DEBUG)
    TRTC.Logger.enableUploadLog()

    TRTC.getDevices()
      .then(devices => {
        devices.forEach(item => {
          console.log(
            'device: ' + item.kind + ' ' + item.label + ' ' + item.deviceId
          )
        })
      })
      .catch(error => console.error('getDevices error observed ' + error))

    // populate camera options
    TRTC.getCameras().then(devices => {
      devices.forEach(device => {
        if (!cameraId) {
          cameraId = device.deviceId
        }
        let div = $('<div></div>')
        div.attr('id', device.deviceId)
        div.html(device.label)
        div.appendTo('#camera-option')
      })
    })

    // populate microphone options
    TRTC.getMicrophones().then(devices => {
      devices.forEach(device => {
        if (!micId) {
          micId = device.deviceId
        }
        let div = $('<div></div>')
        div.attr('id', device.deviceId)
        div.html(device.label)
        div.appendTo('#mic-option')
      })
    })
  },
  components: {}
}
</script>
