<template>
  <div class="search-wrapper">
    <div class="search-input-con">
      <input type="text" placeholder="请输入地址搜索" id="suggestId" />
      <div
        id="searchResultPanel"
        style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"
      ></div>
      <div class="text" @click="thisLocal">用这个地址</div>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="medium"
        @click="search"
      ></el-button>
    </div>
    <div class="search-content">
      <div class="tab-con">
        <div
          class="tab-item"
          :class="{ active: activeIndex === 0 }"
          @click="activeIndex = 0"
        >
          普通急救
        </div>
        <div
          class="tab-item"
          :class="{ active: activeIndex === 1 }"
          @click="activeIndex = 1"
        >
          群体事件
        </div>
      </div>
      <div class="form-con">
        <PersonalForm
          v-if="activeIndex === 0"
          :hospitalDict="hospitalDict"
        ></PersonalForm>
        <GroupForm
          v-if="activeIndex === 1"
          :hospitalDict="hospitalDict"
        ></GroupForm>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search-wrapper {
  position: fixed;
  left: 20px;
  top: 92px;
  z-index: 2;
}
.search-input-con {
  width: 380px;
  height: 36px;
  background: #fff;
  display: flex;
  align-items: center;

  input {
    border: 0;
    outline: 0;
    height: 100%;
    flex: 1;
    width: 0;
    padding-left: 15px;
  }
  .text {
    font-size: 15px;
    color: #2aa4a7;
    border-left: 1px solid #dddddd;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
  }
  .el-button {
    border-radius: 0;
    margin-right: -56px;
  }
}

.search-content {
  width: 380px;
  margin-top: 5px;
  min-height: 400px;
  background: #fff;

  .tab-con {
    height: 36px;
    border-bottom: 1px solid #dddddd;
    display: flex;
    align-items: stretch;
    .tab-item {
      width: 0;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      color: #333333;
      cursor: pointer;
      &:first-child {
        border-right: 1px solid #ddd;
      }
      &.active {
        color: #2aa4a7;
      }
    }
  }

  .form-con {
    /deep/ {
      .tab-textarea .el-textarea__inner {
        height: 40px;
      }
      .el-radio__label {
        font-size: 12px;
      }
    }
  }
}
</style>
<style lang="scss">
.tangram-suggestion-main {
  z-index: 10000;
}
</style>
<script>
import PersonalForm from './components/personal-form'
import GroupForm from './components/group-form'
import { getHospitalList } from '@/api/api'

export default {
  props: {},
  data() {
    return {
      activeIndex: 0,
      hospitalDict: [],
      local: ''
    }
  },
  methods: {
    search() {
      let local = document.querySelector('#suggestId').value
      if (!local) {
        return this.$message.warning('请输入地址')
      }
      this.setPlace(local)
    },
    thisLocal() {
      // window.setLocal(this.local)
      let local = document.querySelector('#suggestId').value
      window.setLocal(local)
      // this.setPlace(local)
    },
    dw(local) {
      var myGeo = new BMap.Geocoder()
      myGeo.getPoint(local, function(point) {
        if (point) {
          window.map.centerAndZoom(point, 16)
          window.map.addOverlay(new BMap.Marker(point))

          window.map.clearOverlays()
          var marker = new BMap.Marker(point) // 创建标注
          window.map.addOverlay(marker) // 将标注添加到地图中
          window.map.panTo(point)
        } else {
          return this.$message.warning('您选择地址没有解析到结果!')
        }
      })
    },
    setPlace(myValue) {
      window.map.clearOverlays() //清除地图上所有覆盖物
      function myFun() {
        var pp = local.getResults().getPoi(0).point //获取第一个智能搜索的结果
        window.map.centerAndZoom(pp, 18)
        window.map.addOverlay(new BMap.Marker(pp)) //添加标注
      }
      var local = new BMap.LocalSearch(window.map, {
        //智能搜索
        onSearchComplete: myFun
      })
      local.search(myValue)
    }
  },
  created() {
    getHospitalList().then(res => {
      this.hospitalDict = res.data
    })
  },
  mounted() {
    // 百度地图API功能
    function G(id) {
      return document.getElementById(id)
    }

    var ac = new BMap.Autocomplete({ input: 'suggestId', location: map }) //建立一个自动完成的对象

    ac.addEventListener('onhighlight', function(e) {
      //鼠标放在下拉列表上的事件
      var str = ''
      var _value = e.fromitem.value
      var value = ''
      if (e.fromitem.index > -1) {
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business
      }
      str =
        'FromItem<br />index = ' + e.fromitem.index + '<br />value = ' + value

      value = ''
      if (e.toitem.index > -1) {
        _value = e.toitem.value
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business
      }
      str +=
        '<br />ToItem<br />index = ' + e.toitem.index + '<br />value = ' + value
      G('searchResultPanel').innerHTML = str
    })

    var myValue
    ac.addEventListener('onconfirm', function(e) {
      //鼠标点击下拉列表后的事件
      var _value = e.item.value

      myValue =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business
      G('searchResultPanel').innerHTML =
        'onconfirm<br />index = ' + e.item.index + '<br />myValue = ' + myValue

      setPlace()
    })

    function setPlace() {
      window.map.clearOverlays() //清除地图上所有覆盖物
      function myFun() {
        var pp = local.getResults().getPoi(0).point //获取第一个智能搜索的结果
        window.map.centerAndZoom(pp, 18)
        window.map.addOverlay(new BMap.Marker(pp)) //添加标注
      }
      var local = new BMap.LocalSearch(window.map, {
        //智能搜索
        onSearchComplete: myFun
      })
      local.search(myValue)
    }
  },
  components: {
    PersonalForm,
    GroupForm
  }
}
</script>
