<template>
  <div class="map-wrapper">
    <div id="map"></div>
  </div>
</template>
<style lang="scss" scoped>
.map-wrapper {
  width: 100%;
  height: 100%;
  #map {
    width: 100%;
    height: 100%;
  }
  /deep/ {
    .anchorBL {
      display: none !important;
    }
  }
}
</style>
<script>
import { getListCarLocation } from '@/api/big'
import carCard from './car-card'
import Vue from 'vue'
const defaultZoom = 13
let timer = null
export default {
  props: {},
  data() {
    return {
      carList: [],
      map: null
    }
  },
  watch: {},
  methods: {
    getListCarLocation() {
      getListCarLocation().then(res => {
        try {
          this.map.clearOverlays()
          this.carList = res.data

          for (let i = 0; i < this.carList.length; i++) {
            let opts = {
              width: 250, // 信息窗口宽度
              height: 80, // 信息窗口高度
              // title: this.carList[i].carNo + ' ' + this.carList[i].nodeName, // 信息窗口标题
              enableMessage: true //设置允许信息窗发送短息
            }

            let carCardVue = Vue.extend(carCard)

            let carCardCom = new carCardVue({
              data: {
                info: this.carList[i]
              }
            })
            carCardCom.$mount()
            let content = carCardCom.$el

            const addClickHandler = (content, marker) => {
              marker.addEventListener('click', function(e) {
                openInfo(content, e)
              })
            }
            const openInfo = (content, e) => {
              let p = e.target
              let point = new BMap.Point(
                p.getPosition().lng,
                p.getPosition().lat
              )
              let infoWindow = new BMap.InfoWindow(content, opts) // 创建信息窗口对象
              this.map.openInfoWindow(infoWindow, point) //开启信息窗口
            }

            let carStatus =
              this.carList[i].actionStatus == 'normal'
                ? this.carList[i].inTask
                  ? '出诊中'
                  : '站内待命'
                : this.carList[i].actionStatus

            let marker = new BMap.Marker(
              new BMap.Point(
                this.carList[i].longitude,
                this.carList[i].latitude
              ),
              {
                icon: new BMap.Icon(
                  require(`../assets/images/map/${carStatus}.png`),
                  new BMap.Size(62, 62)
                )
              }
            ) // 创建标注
            // this.carList[i].nodeName
            this.map.addOverlay(marker) // 将标注添加到地图中
            addClickHandler(content, marker)
          }
        } catch (error) {
          console.log(error, 'error')
        }
      })
    }
  },
  mounted() {
    // 百度地图API功能
    this.map = new BMap.Map('map') // 创建Map实例
    this.map.centerAndZoom(new BMap.Point(108.624507, 21.961256), defaultZoom) // 初始化地图,设置中心点坐标和地图级别
    // this.map.setCurrentCity('广州') // 设置地图显示的城市 此项是必须设置的
    this.map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放

    this.getListCarLocation()

    clearInterval(timer)
    timer = setInterval(() => {
      this.getListCarLocation()
    }, 5000)
  },
  components: {
    carCard
  }
}
</script>
