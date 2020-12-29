<template>
  <div class="player-container">
    <template v-if="videoMonitorCode">
      <div id="video-content">
        <video
          :id="'rtmp_video_' + videoId"
          class="video-js vjs-default-skin"
          preload="auto"
          autoplay="autoplay"
          poster
        >
          <!-- <source :src="hlsurl" type="application/x-mpegURL" /> -->

          <source v-if="isHttps" :src="videoUrl2" type="rtmp/flv" />
          <source v-else :src="videoUrl" type="rtmp/flv" />
        </video>
      </div>
    </template>
    <template v-if="!videoMonitorCode">
      <!-- <img src="/public/images/warning.png" /><span>该设备暂无数据</span> -->
    </template>
  </div>
</template>
<style lang="scss">
.vjs-modal-dialog,
.vjs-loading-spinner {
  display: none;
}
.vjs-fullscreen {
  #rtmp_video_A_html5_api {
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    top: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
}
.rtmp_video_A,
.player-container {
  width: 0;
  height: 0;
}
</style>
<script>
import videojs from 'video.js'
// import 'videojs-contrib-hls'

export default {
  props: {
    videoMonitorCode: {
      type: String,
      default: ''
    },

    isChangeType: false
  },
  data() {
    return {
      // videoUrl: '',
      videoId: 'A',
      videoType: '',
      videoPlayer: null,
      isVideoTypeChange: 0
    }
  },
  computed: {
    isHttps() {
      return (
        window.location.protocol === 'https:' ||
        window.location.hostname === 'localhost'
      )
    },
    videoUrl() {
      // return `rtmp://172.0.52.131:1935/domain=45070200002008000002&resource=45070200001328000004-0&quality=2&src=0`
      // return `rtmp://218.21.78.153:1935/domain=45070200002008000002&resource=45070200001328000001-0&quality=2&src=0`
      // return `rtmp://${
      //   process.env.NODE_ENV === 'development'
      //     ? '218.21.78.153:1935'
      //     : '172.0.52.131:1935'
      // }/domain=45070200002008000002&resource=${
      //   this.videoMonitorCode
      // }-0&quality=2&src=0`
      // return `rtmp://172.0.52.131:1935/domain=45070200002008000002&resource=45070200001328000001-0&quality=2&src=0`
      return `rtmp://172.0.52.131:1935/domain=45070200002008000002&resource=${
        this.videoMonitorCode
      }-0&quality=2&src=${
        this.videoMonitorCode === '45070200001328000004' ? 1 : 0
      }`
    },
    videoUrl2() {
      // return `rtmp://172.0.52.131:1935/domain=45070200002008000002&resource=45070200001328000004-0&quality=2&src=0`
      // return `rtmp://218.21.78.153:1935/domain=45070200002008000002&resource=45070200001328000001-0&quality=2&src=0`
      return `rtmp://218.21.78.153:1935/domain=45070200002008000002&resource=${
        this.videoMonitorCode
      }-0&quality=2&src=${
        this.videoMonitorCode === '45070200001328000004' ? 1 : 0
      }`
    }
  },
  watch: {},
  mounted() {
    var id = 'rtmp_video_' + this.videoId
    this.getVideo(id)
  },
  methods: {
    getVideo(id) {
      videojs.options.flash.swf =
        process.env.NODE_ENV === 'development'
          ? '/static/video-js.swf'
          : '/ems/static/video-js.swf'
      this.videoPlayer = videojs(
        id,
        {
          bigPlayButton: false,
          textTrackDisplay: false,
          posterImage: false,
          errorDisplay: false,
          controlBar: false,
          autoplay: true,
          preload: 'auto'
        },
        function() {
          this.play()
          this.on('click', function(event) {
            event.preventDefault()
            this.play()
          })
        }
      )

      window.videoPlayer = this.videoPlayer
    }
  },
  beforeDestroy: function() {
    this.videoPlayer.dispose()
  }
}
</script>
