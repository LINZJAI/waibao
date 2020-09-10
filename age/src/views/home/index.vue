<template>
  <div class="home-wrapper">
    <div class="left-part">
      <div class="inner">
        <div class="left-top-one-con">
          <div
            class="left-top-one-box"
            v-for="(item, index) in list1"
            :key="index"
          >
            <div class="label"
              >{{ item.label }}
              <i class="el-icon-warning" v-if="item.icon"></i>
            </div>
            <div class="value" :style="item.color && { color: item.color }">{{
              item.value
            }}</div>
          </div>
        </div>
        <div class="left-top-two-con">
          <div class="select-con">
            <div class="label">护理级别：</div>
            <el-select v-model="hl" size="mini" style="width: 142px">
              <el-option
                v-for="(item, index) in hlList"
                :key="index"
                :value="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
            <div class="label">楼层：</div>
            <el-select v-model="lc" size="mini" style="width: 142px">
              <el-option
                v-for="(item, index) in lcList"
                :key="index"
                :value="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
            <el-input
              suffix-icon="el-icon-search"
              placeholder="请输入老人姓名或房号进行检索"
              style="width: 232px;margin-left: 5px;"
              size="mini"
            ></el-input>
            <div class="color-con">
              <div
                class="color-box"
                v-for="(item, index) in colorList"
                :key="index"
              >
                <div
                  class="color"
                  :style="{
                    border: `1px solid ${item.border}`,
                    background: item.color
                  }"
                ></div>
                <div class="text">{{ item.text }}</div>
              </div>
            </div>

            <div class="block"></div>

            <div class="tab-con">
              <div class="tab-item active" style="width: 35px">
                <img src="../../assets/age-images/home/块展示.png" alt="" />
              </div>
              <div class="tab-item" style="width: 42px">
                <img src="../../assets/age-images/home/列表展示.png" alt="" />
              </div>
              <div class="tab-item" style="width: 58px">
                <span>统计</span>
                <i class="el-icon-arrow-down"></i>
              </div>
            </div>
          </div>
          <div class="bed-con">
            <bedCard
              v-for="(item, index) in bedList"
              :key="index"
              :dataSource="item"
            ></bedCard>
          </div>
        </div>
      </div>
    </div>
    <div class="right-part">
      <div class="right-title">
        快捷功能
      </div>
      <div class="right-one-con">
        <div class="right-one-box">
          <img src="../../assets/age-images/home/交接班.png" alt="" />
          <div class="text">交接班</div>
        </div>
        <div class="right-one-box">
          <img src="../../assets/age-images/home/值班信息.png" alt="" />
          <div class="text">值班信息</div>
        </div>
        <div class="right-one-box">
          <img src="../../assets/age-images/home/点餐信息.png" alt="" />
          <div class="text">点餐信息</div>
        </div>
      </div>

      <div class="right-title">
        交接班注意事项
      </div>
      <div class="right-two-box">
        1、交代被护理人员信息<br />
        2、交代被护理人员今天起居、饮食，是否有特殊症状情况；<br />
        3、交代是否有对被护理人员多承诺未完成事项。
      </div>
      <div class="right-title">
        动态信息
      </div>
      <div class="right-two-box">
        1、交代被护理人员信息<br />
        2、交代被护理人员今天起居、饮食，是否有特殊症状情况；<br />
        3、交代是否有对被护理人员多承诺未完成事项。
      </div>
      <div class="right-title">
        制度文件
      </div>
      <div class="right-three-con">
        <div class="right-three-item" v-for="item in 3" :key="item">
          <img src="../../assets/age-images/home/制度信息.png" alt="" />
          <div class="text">护理规划制度</div>
          <div class="block"></div>
          <div class="time">8-09</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-wrapper {
  height: 100%;
  display: flex;
  align-items: stretch;
}
.left-part {
  flex: 1;
  width: 0;
  overflow: auto;
  @include scrollBar;
  .inner {
    padding: 15px 20px;
  }
}
.right-part {
  width: 280px;
  border-left: 1px solid #cfd2dd;
  padding: 0 20px;
}

.left-top-one-con {
  display: flex;
  height: 100px;
  align-items: stretch;
  .left-top-one-box {
    background: #ffffff;
    border-radius: 4px;
    margin-right: 10px;
    width: 0;
    flex: 1;
    padding: 16px 16px;
    box-sizing: border-box;
    &:last-child {
      margin-right: 0;
    }
    .label {
      font-size: 14px;
      color: #999999;
      margin-bottom: 16px;
      .el-icon-warning {
        color: #bbb;
        font-size: 14px;
        margin-left: 10px;
      }
    }
    .value {
      font-size: 22px;
      color: #333333;
    }
  }
}

.left-top-two-con {
  margin-top: 20px;
  .select-con {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .label {
      font-size: 12px;
      color: #555555;
      margin-left: 10px;
      &:first-child {
        margin-left: 0;
      }
    }
    .color-con {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 273px;
      height: 30px;
      background: #ffffff;
      border-radius: 3px;
      border: 1px solid #cfd2dd;
      padding: 0 10px;
      box-sizing: border-box;
      margin-left: 7px;
      .color-box {
        display: flex;
        align-items: center;
        .color {
          width: 13px;
          height: 12px;
          margin-right: 4px;
        }
        .text {
          font-size: 12px;
          color: #666;
        }
      }
    }
    .tab-con {
      width: 122px;
      height: 30px;
      background: #ffffff;
      border-radius: 3px;
      border: 1px solid #cfd2dd;
      display: flex;
      align-items: stretch;
      background: #f4f5fb;
      .tab-item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #666666;
        border-right: 1px solid #cfd2dd;
        i {
          font-size: 12px;
          margin-left: 2px;
        }
        &.active {
          background: #fff;
        }
        &:last-child {
          border: 0;
        }
      }
    }
  }
  .bed-con {
    height: calc(100vh - 250px);
    overflow: auto;
    @include scrollBar;
  }
}

.right-title {
  font-size: 14px;
  color: #555555;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 12px;
}
.right-one-con {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 74px;
  background: #ffffff;
  .right-one-box {
    text-align: center;
    img {
      width: 30px;
    }
    .text {
      font-size: 12px;
      color: #555;
    }
  }
}

.right-two-box {
  font-size: 12px;
  color: #555555;
  height: 135px;
  background: #ffffff;
  padding: 18px 20px;
  line-height: 20px;
  box-sizing: border-box;
}

.right-three-con {
  height: calc(100vh - 610px);
  background: #ffffff;
  overflow: auto;
  @include scrollBar;
  padding: 20px;
  box-sizing: border-box;
  .right-three-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      margin-right: 10px;
    }
    .text {
      font-size: 12px;
      color: #555;
    }
    .time {
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>
<script>
import bedCard from './components/bed-card'
export default {
  props: {},
  data() {
    return {
      list1: [
        {
          label: '待入住办理',
          value: '72',
          color: '',
          icon: true
        },
        {
          label: '未执行医嘱数',
          value: '9',
          color: '#007AFF',
          icon: ''
        },
        {
          label: '未执行护理',
          value: '2',
          color: '#E27A20',
          icon: ''
        },
        {
          label: '未执行康复',
          value: '7',
          color: '#1A989F',
          icon: ''
        },
        {
          label: '药品提醒',
          value: '3',
          color: '#CB4160',
          icon: ''
        },
        {
          label: '请假提醒',
          value: '18',
          color: '#DE2FAE',
          icon: ''
        },
        {
          label: '值班医生',
          value: '苏琰',
          color: '',
          icon: ''
        },
        {
          label: '值班护士',
          value: '田钢颢',
          color: '',
          icon: ''
        }
      ],
      hl: '一级护理',
      hlList: [
        {
          label: '一级护理',
          value: '一级护理'
        }
      ],
      lc: '幸福喽/2栋/8层',
      lcList: [
        {
          label: '幸福喽/2栋/8层',
          value: '幸福喽/2栋/8层'
        }
      ],
      colorList: [
        {
          color: '#F4F5FB',
          border: '#98A0A1',
          text: '空房'
        },
        {
          color: '#F6DFD3',
          border: '#EC9162',
          text: '已住满'
        },
        {
          color: '#C9E7E4',
          border: '#51BE9F',
          text: '未住满'
        },
        {
          color: '#C9E7CB',
          border: '#41C046',
          text: '预定'
        }
      ],
      bedList: [
        {
          roomNo: '206',
          type: '1',
          bed1: {
            bedNo: '1',
            sex: '0',
            name: '冯鑫鑫',
            info: '男/64岁'
          },
          bed2: {
            bedNo: '2',
            sex: '1',
            name: '秦佛洳',
            info: '女/48岁'
          }
        },
        {
          roomNo: '207',
          type: '2',
          bed1: {
            bedNo: '1',
            sex: '0',
            name: '康笑笑',
            info: '男/72岁'
          },
          bed2: {
            bedNo: '2',
            sex: '1',
            name: '尹依依',
            info: '女/53岁'
          }
        },
        {
          roomNo: '208',
          type: '3',
          bed1: {
            bedNo: '1',
            sex: '0',
            name: '方仲',
            info: '男/74岁'
          },
          bed2: {
            bedNo: '2',
            sex: '0',
            name: '郭涛',
            info: '男/33岁'
          }
        },
        {
          roomNo: '209',
          type: '4',
          bed1: {
            bedNo: '1',
            sex: '1',
            name: '郑红红',
            info: '女/23岁'
          },
          bed2: {
            bedNo: '2',
            sex: '1',
            name: '顾滨滨',
            info: '女/26岁'
          }
        },
        {
          roomNo: '210',
          type: '1',
          bed1: null,
          bed2: {
            bedNo: '2',
            sex: '1',
            name: '袁蓉',
            info: '女/37岁'
          }
        },
        {
          roomNo: '211',
          type: '1',
          bed1: {
            bedNo: '2',
            sex: '0',
            name: '韩安夙',
            info: '男/56岁'
          },
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        },
        {
          roomNo: '212',
          type: '1',
          bed1: null,
          bed2: null
        }
      ]
    }
  },
  methods: {},
  components: {
    bedCard
  }
}
</script>
