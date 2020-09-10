<template>
  <div class="check-wrapper">
    <div class="title">健康检测</div>
    <div class="href-con">
      <div
        class="href-item"
        v-for="(item, index) in hrefList"
        :key="index"
        :class="{ active: item.y === activeTop, warn: item.warn }"
        @click="scrollTo(item.y)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="scroll" ref="scroll" @scroll="onScroll">
      <div class="top-part">
        <div class="top-left-part">
          <WhiteBox title="血压/mmHg" :border="false">
            <div slot="header" style="flex: 1">
              <el-button size="mini" style="margin: 0 10px 0 30px"
                >血压补录</el-button
              >
              <el-radio-group value="图表" size="mini">
                <el-radio-button label="图表"></el-radio-button>
                <el-radio-button label="列表"></el-radio-button>
              </el-radio-group>
              <div> </div>
            </div>
            <XYChart></XYChart>
          </WhiteBox>
        </div>
        <div class="top-right-part">
          <div class="top-right-top-part">
            <WhiteBox title="异常概率">
              <img
                src="./images/chart/异常概率.png"
                alt=""
                style="display: block; margin: 0 auto"
              />
            </WhiteBox>
          </div>
          <div class="top-right-bottom-part">
            <WhiteBox title="近30天监测次数">
              <div class="yc-text"
                >21
                <span class="unit">次</span>
              </div>
            </WhiteBox>
          </div>
        </div>
      </div>
      <div class="mid-one-part">
        <WhiteBox title="血糖/mmol/L" :border="false">
          <div slot="header" style="flex: 1">
            <el-button size="mini" style="margin: 0 10px 0 30px"
              >血压补录</el-button
            >
            <el-date-picker
              value="2020-07-25"
              size="mini"
              style="width: 160px;margin-right: 10px"
            ></el-date-picker>
            <span class="label">查询日期：</span>
            <el-radio-group value="图表" size="mini">
              <el-radio-button label="图表"></el-radio-button>
              <el-radio-button label="列表"></el-radio-button>
            </el-radio-group>
            <div> </div>
          </div>
          <div class="content">
            <div class="left-part">
              <div class="grey-box">
                <div class="row">
                  <div class="key1">PPGE</div>
                  <div class="value1">0.34</div>
                </div>
                <div class="row">
                  <div class="key2">餐后血糖波动幅度</div>
                  <div class="value2">正常参考低于2.2 </div>
                </div>
                <div class="row">
                  <div class="key3">查看计算方法</div>
                  <div class="value3">偏高</div>
                </div>
              </div>
              <div class="grey-box">
                <div class="row">
                  <div class="key1">LAGE</div>
                  <div class="value1 green">0.34</div>
                </div>
                <div class="row">
                  <div class="key2">最大血糖波动幅度</div>
                  <div class="value2">正常参考低于2.2 </div>
                </div>
                <div class="row">
                  <div class="key3">查看计算方法</div>
                  <!-- <div class="value3">偏高</div> -->
                </div>
              </div>

              <div class="grey-box">
                <div class="row">
                  <div class="key1">SDBG</div>
                  <div class="value1">0.34</div>
                </div>
                <div class="row">
                  <div class="key2">餐后血糖波动幅度</div>
                  <div class="value2">正常参考低于2.2 </div>
                </div>
                <div class="row">
                  <div class="key3">查看计算方法</div>
                  <div class="value3">偏高</div>
                </div>
              </div>
            </div>

            <div class="mid-part">
              <img src="./images/chart/血糖.png" alt="" />
            </div>
            <div class="right-part">
              <img src="./images/chart/数值.png" alt="" />
            </div>
          </div>
        </WhiteBox>
      </div>
      <div class="mid-two-part">
        <div class="chart-part">
          <WhiteBox title="[血脂] TCHO" :border="false">
            <div class="content">
              <div class="head-con">
                <el-date-picker size="mini" value="2020-07-25"></el-date-picker>
                <el-button size="mini">血脂补录</el-button>
              </div>
              <img src="./images/chart/tcho.png" alt="" />
            </div>
          </WhiteBox>
        </div>
        <div class="chart-part">
          <WhiteBox title="[血脂] HDL-C" :border="false">
            <div class="content">
              <div class="head-con">
                <el-date-picker size="mini" value="2020-07-25"></el-date-picker>
                <el-button size="mini">血脂补录</el-button>
              </div>
              <img src="./images/chart/hdl.png" alt="" />
            </div>
          </WhiteBox>
        </div>
        <div class="chart-part">
          <WhiteBox title="[血脂] LDL-C" :border="false">
            <div class="content">
              <div class="head-con">
                <el-date-picker size="mini" value="2020-07-25"></el-date-picker>
                <el-button size="mini">血脂补录</el-button>
              </div>
              <img src="./images/chart/ldl.png" alt="" />
            </div>
          </WhiteBox>
        </div>
        <div class="chart-part">
          <WhiteBox title="[血脂] TG" :border="false">
            <div class="content">
              <div class="head-con">
                <el-date-picker size="mini" value="2020-07-25"></el-date-picker>
                <el-button size="mini">血脂补录</el-button>
              </div>
              <img src="./images/chart/TG.png" alt="" />
            </div>
          </WhiteBox>
        </div>
      </div>
      <div class="mid-three-part">
        <div class="left-part">
          <WhiteBox title="血氧">
            <div slot="header" class="head-con">
              <el-button size="mini" style="margin: 0 10px 0 30px"
                >血压补录</el-button
              >
              <div class="block"></div>
              <el-date-picker size="mini" value="2020-07-20"></el-date-picker>
              <span class="zhi">至</span>
              <el-date-picker size="mini" value="2020-07-25"></el-date-picker>
            </div>
            <el-table :data="tableData1" style="width: auto" :height="248">
              <el-table-column prop="日期" label="日期" min-width="100">
              </el-table-column>
              <el-table-column prop="血氧" label="血氧" min-width="60">
              </el-table-column>
              <el-table-column prop="脉率" label="脉率" min-width="60">
              </el-table-column>
              <el-table-column prop="提示" label="提示" min-width="60">
              </el-table-column>
              <el-table-column prop="提示" label="数据来源" min-width="60">
              </el-table-column>
            </el-table>
          </WhiteBox>
        </div>
        <div class="right-part">
          <WhiteBox title="尿酸/umol/L">
            <div slot="header" class="head-con">
              <el-button size="mini" style="margin: 0 10px 0 30px"
                >血压补录</el-button
              >
              <div class="block"></div>
              <el-date-picker size="mini" value="2020-07-20"></el-date-picker>
              <span class="zhi">至</span>
              <el-date-picker size="mini" value="2020-07-25"></el-date-picker>
            </div>
            <el-table :data="tableData2" style="width: auto" :height="248">
              <el-table-column prop="日期" label="日期" min-width="120">
              </el-table-column>
              <el-table-column prop="尿酸" label="尿酸" min-width="80">
              </el-table-column>
              <el-table-column prop="提示" label="提示" min-width="80">
              </el-table-column>
              <el-table-column prop="提示" label="数据来源" min-width="80">
              </el-table-column>
            </el-table>
          </WhiteBox>
        </div>
      </div>
      <div class="mid-four-part">
        <div class="left-part">
          <WhiteBox title="体脂" :border="false">
            <div class="head-con" slot="header">
              <el-date-picker size="mini" value="20202-07-25"></el-date-picker>
              <el-button size="mini">历史记录</el-button>
            </div>
            <img src="./images/chart/体脂.png" alt="" />
          </WhiteBox>
        </div>
        <div class="right-part">
          <WhiteBox title="体温" :border="false">
            <div class="head-con" slot="header">
              <el-date-picker size="mini" value="20202-07-25"></el-date-picker>
              <el-button size="mini">历史记录</el-button>
            </div>
            <div class="text">36.5 ℃</div>
          </WhiteBox>
        </div>
        <div class="right-part">
          <WhiteBox title="运动" :border="false">
            <div class="head-con" slot="header">
              <el-date-picker size="mini" value="20202-07-25"></el-date-picker>
              <el-button size="mini">历史记录</el-button>
            </div>
            <div class="text">
              <span>3252步</span>
              <div class="aside">行走步数</div>
            </div>
          </WhiteBox>
        </div>
      </div>

      <div class="bottom-part">
        <WhiteBox title="心电" :border="false">
          <div slot="header" class="head-con">
            <div class="block"></div>
            <el-date-picker size="mini" value="2020-07-20"></el-date-picker>
            <span class="zhi">至</span>
            <el-date-picker size="mini" value="2020-07-25"></el-date-picker>
          </div>
          <div class="content">
            <div class="left-part">
              <XDT></XDT>
            </div>
            <div class="right-part">
              <el-table :data="tableData3" style="width: auto" :height="400">
                <el-table-column prop="日期" label="日期" min-width="120">
                </el-table-column>
                <el-table-column prop="症状" label="症状" min-width="120">
                </el-table-column>
                <el-table-column prop="提示" label="提示" min-width="80">
                </el-table-column>
                <el-table-column prop="提示" label="数据来源" min-width="80">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </WhiteBox>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.check-wrapper {
  padding: 0 12px;
  .title {
    display: flex;
    height: 50px;
    align-items: center;
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
}

.scroll {
  overflow: auto;
  height: calc(100vh - 160px);
}

.href-con {
  height: 46px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 12px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  .href-item {
    height: 28px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #333333;
    margin-right: 15px;
    position: relative;
    cursor: pointer;
    &.active {
      background: rgba(0, 173, 175, 1);
      border-radius: 4px;
      color: #fff;
    }
    &.warn {
      &::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background: #df3242;
        top: 2px;
        right: 5px;
        border-radius: 50%;
      }
    }
  }
}
.top-part {
  display: flex;
  height: 350px;
  align-items: stretch;
  margin-bottom: 12px;
  .top-left-part {
    flex: 5;
    margin-right: 12px;
  }
  .top-right-part {
    flex: 1;
    display: flex;
    flex-direction: column;
    .top-right-top-part {
      margin-bottom: 12px;
      flex: 1;
    }
    .top-right-bottom-part {
      flex: 1;
    }
  }
}
.yc-text {
  text-align: center;
  font-size: 30px;
  color: #333;
  margin-top: 20px;
  .unit {
    font-size: 13px;
    color: #999999;
  }
}
.label {
  font-size: 12px;
  color: #777777;
}
.mid-one-part {
  margin-bottom: 12px;
  height: 330px;
  .content {
    height: 250px;
    display: flex;
    align-items: stretch;
    .left-part {
      margin-right: 12px;
      flex: 1;
      display: flex;
      flex-direction: column;
      .grey-box {
        flex: 1;
        margin-bottom: 6px;
        background: rgba(243, 244, 250, 1);
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 12px 15px;
        &:last-child {
          margin-bottom: 0;
        }
        .row {
          display: flex;
          justify-content: space-between;
          .key1 {
            font-size: 14px;
            color: #333;
          }
          .value1 {
            font-size: 14px;
            color: #f35369;
            &.green {
              color: #3ab57e;
            }
          }
          .key2 {
            font-size: 12px;
            color: #777777;
          }
          .value2 {
            font-size: 12px;
            color: #777777;
          }
          .key3 {
            font-size: 12px;
            color: #2e7cb7;
          }
          .value3 {
            font-size: 12px;
            color: #fff;
            width: 36px;
            height: 16px;
            line-height: 16px;
            background: rgba(243, 83, 105, 1);
            border-radius: 9px;
            text-align: center;
          }
        }
      }
    }
    .mid-part {
      margin-right: 12px;
      flex: 3;
      img {
        height: 250px;
        display: block;
        margin: 0 auto;
      }
    }
    .right-part {
      flex: 1;
      img {
        height: 250px;
        display: block;
        margin: 0 auto;
      }
    }
  }
}

.mid-two-part {
  display: flex;
  align-items: stretch;
  height: 320px;
  margin-bottom: 12px;
  .chart-part {
    margin-right: 12px;
    flex: 1;
    &:last-child {
      margin-right: 0;
    }
    .head-con {
      display: flex;
      justify-content: space-between;
      .el-date-editor {
        width: 160px;
      }
    }
    img {
      height: 205px;
      display: block;
      margin: 15px auto 0;
    }
  }
}

.mid-three-part {
  display: flex;
  height: 320px;
  align-items: stretch;
  margin-bottom: 12px;
  .left-part {
    margin-right: 12px;
    flex: 1;
    width: 0;
  }
  .right-part {
    flex: 1;
    width: 0;
  }
  .head-con {
    flex: 1;
    display: flex;
    align-items: center;
    .block {
      flex: 1;
    }
    .el-input {
      width: 160px;
    }
  }
}

.zhi {
  font-size: 12px;
  color: #333333;
  margin: 0 10px;
}

.mid-four-part {
  display: flex;
  align-items: stretch;
  height: 280px;
  margin-bottom: 12px;
  .left-part {
    flex: 2 1 12px;
    img {
      width: 80%;
      margin: 20px auto 0;
      display: block;
    }
  }
  .right-part {
    flex: 1;
    margin-left: 12px;
    .text {
      font-size: 40px;
      color: #333333;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .aside {
        font-size: 18px;
        margin-top: 5px;
        margin-bottom: -23px;
      }
    }
  }
  .head-con {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .el-input {
      width: 160px;
      margin-left: 20px;
    }
  }
}

.bottom-part {
  display: flex;
  align-items: stretch;
  height: 500px;
  margin-bottom: 12px;
  .head-con {
    flex: 1;
    display: flex;
    .el-input {
      width: 160px;
    }
    .block {
      flex: 1;
    }
  }
  .content {
    display: flex;
    align-items: stretch;
    .left-part {
      flex: 1;
      margin-right: 12px;
      width: 0;
    }
    .right-part {
      flex: 1;
      width: 0;
    }
  }
}
</style>
<script>
import WhiteBox from '@/components/white-box'
import XYChart from './chart/血压'
import XDT from './chart/心电图/index.vue'
export default {
  props: {},
  data() {
    return {
      activeTop: 0,
      hrefList: [
        {
          name: '血压',
          href: '',
          warn: false,
          y: 0
        },
        {
          name: '血糖',
          href: '',
          warn: false,
          y: 366
        },
        {
          name: '血脂',
          href: '',
          warn: true,
          y: 700
        },
        {
          name: '血氧',
          href: '',
          warn: false,
          y: 1039
        },
        {
          name: '尿酸',
          href: '',
          warn: false,
          y: 1041
        },
        {
          name: '体脂',
          href: '',
          warn: false,
          y: 1363
        },
        {
          name: '体温',
          href: '',
          warn: false,
          y: 1365
        },
        {
          name: '运动',
          href: '',
          warn: false,
          y: 1367
        },
        {
          name: '心电',
          href: '',
          warn: false,
          y: 1663
        }
      ],
      tableData1: [
        {
          日期: '2019/10/02 10:04',
          血氧: '96%',
          脉率: '86',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          血氧: '96%',
          脉率: '86',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          血氧: '96%',
          脉率: '86',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          血氧: '96%',
          脉率: '86',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          血氧: '96%',
          脉率: '86',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          血氧: '96%',
          脉率: '86',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          血氧: '96%',
          脉率: '86',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          血氧: '96%',
          脉率: '86',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          血氧: '96%',
          脉率: '86',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          血氧: '96%',
          脉率: '86',
          提示: '正常',
          数据来源: '检测设备'
        }
      ],
      tableData2: [
        {
          日期: '2019/10/02 10:04',
          尿酸: '321.0',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          尿酸: '315.0',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          尿酸: '315.0',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          尿酸: '315.0',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          尿酸: '315.0',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          尿酸: '315.0',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          尿酸: '315.0',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          尿酸: '315.0',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          尿酸: '315.0',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          尿酸: '315.0',
          提示: '正常',
          数据来源: '检测设备'
        }
      ],
      tableData3: [
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        },
        {
          日期: '2019/10/02 10:04',
          症状: '窦性心律，室上性早搏',
          提示: '正常',
          数据来源: '检测设备'
        }
      ]
    }
  },
  methods: {
    scrollTo(y) {
      this.$refs.scroll.scrollTop = y
      this.activeTop = y
    },
    onScroll(e) {
      let scrollTop = e.target.scrollTop
      for (let i = 0; i < this.hrefList.length; i++) {
        if (this.hrefList[i].y > scrollTop + 1) {
          if (this.hrefList[i - 1]) {
            this.activeTop = this.hrefList[i - 1].y
          } else {
            this.activeTop = 0
          }
          return
        } else if (i === this.hrefList.length - 1) {
          this.activeTop = this.hrefList[this.hrefList.length - 1].y
        }
      }
    }
  },
  components: {
    WhiteBox,
    XYChart,
    XDT
  }
}
</script>
