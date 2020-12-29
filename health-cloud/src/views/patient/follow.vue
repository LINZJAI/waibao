<template>
  <div class="follow-wrapper">
    <div class="title">健康检测</div>
    <div class="main-part">
      <div class="left-part">
        <WhiteBox title="相关商品">
          <div class="content">
            <el-input
              suffix-icon="el-icon-search"
              placeholder="输入搜索关键词"
              size="mini"
            ></el-input>
            <div class="list-con">
              <div class="item-box" v-for="(item, index) in list" :key="index">
                <img :src="item.img" alt="" />
                <div class="text-con">
                  <div class="name">{{ item.name }}</div>
                  <div class="price">
                    <span>{{ item.price }}</span>
                    <span class="sent">发送</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WhiteBox>
      </div>
      <div class="right-part">
        <div class="left-con">
          <div class="name-con">唐琦琦</div>
          <div class="message-con">
            <img class="img-1" src="./images/follow/对话1.png" alt="" />
            <img class="img-2" src="./images/follow/对话2.png" alt="" />
          </div>
          <div class="textarea-con">
            <div class="tool-con">
              <img class="tool-1" src="./images/follow/图片文件.png" alt="" />
              <img class="tool-2" src="./images/follow/结束会诊.png" alt="" />
            </div>
            <textarea class="textarea"></textarea>
            <div class="footer-con">
              <el-button type="primary" size="medium">发送</el-button>
            </div>
          </div>
        </div>
        <div class="right-con">
          <el-tabs v-model="activeName">
            <el-tab-pane label="随访信息（34）" name="随访信息"></el-tab-pane>
            <el-tab-pane label="表单信息（11）" name="表单信息"></el-tab-pane>
            <el-tab-pane label="病历信息（11）" name="病历信息"></el-tab-pane>
          </el-tabs>
          <div class="line"></div>
          <div class="collapse-con">
            <el-collapse value="2">
              <el-collapse-item title="唐琦琦(2019-02-08)随访项目" name="1">
              </el-collapse-item>
              <el-collapse-item title="唐琦琦(2019-02-01)随访项目" name="2">
                <el-timeline>
                  <el-timeline-item
                    timestamp="随访计划   第一日   08:00"
                    placement="top"
                  >
                    <div>
                      <div class="time-text">2019-02-01 17:32:52</div>
                      <div class="time-text">
                        <span>高血压治疗后问卷调查卷</span>
                        <span>已完成</span>
                      </div>
                      <div class="time-text">
                        <span>患者生活质量表</span>
                        <span>已完成</span>
                      </div>
                    </div>
                  </el-timeline-item>
                  <el-timeline-item
                    timestamp="随访计划   第4日   08:00"
                    placement="top"
                  >
                    <div>
                      <div class="time-text">2019-02-01 17:32:52</div>
                      <div class="time-text">
                        <span>高血压治疗后问卷调查卷</span>
                        <span>已完成</span>
                      </div>
                      <div class="time-text">
                        <span>患者生活质量表</span>
                        <span class="warn">未填写</span>
                      </div>
                    </div>
                  </el-timeline-item>
                  <el-timeline-item
                    timestamp="随访计划   第4日   08:00"
                    placement="top"
                  >
                    <div>
                      <div class="time-text">2019-02-01 17:32:52</div>
                      <div class="time-text">
                        <span>高血压治疗后问卷调查卷</span>
                        <span>已完成</span>
                      </div>
                    </div>
                  </el-timeline-item>
                </el-timeline>
              </el-collapse-item>
              <el-collapse-item title="唐琦琦(2019-01-26)随访项目" name="3">
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.follow-wrapper {
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

.main-part {
  height: calc(100vh - 115px);
  display: flex;
  align-items: stretch;
}
.left-part {
  width: 200px;
}

.list-con {
  padding-top: 12px;
  .item-box {
    display: flex;
    align-items: stretch;
    margin-bottom: 12px;
    img {
      height: 52px;
      width: 52 px;
    }
    .text-con {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 15px;
      padding-top: 2px;
      padding-right: 10px;
      .name {
        font-size: 12px;
        color: #333333;
      }
      .price {
        font-size: 12px;
        color: #fc604b;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .sent {
          cursor: pointer;
          color: #ec9162;
        }
      }
    }
  }
}

.right-part {
  display: flex;
  align-items: stretch;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  flex: 1;
  margin-left: 12px;
  .left-con {
    width: 0;
    flex: 4;
    display: flex;
    flex-direction: column;
    .name-con {
      height: 50px;
      display: flex;
      align-items: center;
      margin-left: 20px;
      font-size: 14px;
      color: #333333;
      border-bottom: 1px solid #dddddd;
    }
    .message-con {
      position: relative;
      width: 100%;
      flex: 1;
      border-bottom: 1px solid #ddd;
      .img-1 {
        position: absolute;
        top: 25px;
        left: 25px;
        width: 260px;
      }
      .img-2 {
        position: absolute;
        bottom: 25px;
        right: 25px;
        width: 260px;
      }
    }
    .textarea-con {
      padding: 10px;
      .tool-con {
        display: flex;
        align-items: center;
        padding: 0px 10px 5px;
        justify-content: space-between;
        img {
          height: 12px;
        }
      }
      .textarea {
        height: 100px;
        width: 100%;
        border: 0;
        outline: none;
        resize: none;
        font-size: 12px;
        padding: 10px;
      }
      .footer-con {
        text-align: right;
        margin-right: 10px;
      }
    }
  }
  .right-con {
    width: 0;
    flex: 3;
    border-left: 1px solid #ddd;
    /deep/ {
      .el-tabs__item {
        height: 50px;
        line-height: 50px;
      }
      .el-tabs__nav-wrap::after {
        display: none;
      }
      .el-tabs {
        padding: 0 40px;
      }
    }
    .line {
      border-top: 1px solid #ddd;
      margin-top: -14.5px;
    }
    .collapse-con {
      padding: 10px 30px;
      /deep/ {
        .el-collapse-item__header,
        .el-collapse-item__wrap,
        .el-collapse {
          border: 0;
        }
        .el-collapse-item__header {
          font-size: 14px;
          color: #333333;
          /* font-weight: bold; */
        }
      }
      .time-text {
        font-size: 12px;
        color: #777777;
        display: flex;
        justify-content: space-between;
        width: 300px;
      }
      .warn {
        color: #df3242;
      }
    }
  }
}
</style>
<script>
import WhiteBox from '@/components/white-box'
export default {
  props: {},
  data() {
    return {
      activeName: '随访信息',
      list: [
        {
          img: require('./images/随访.png'),
          name: '12个肿瘤驱动基因检测NGSp',
          price: '¥398.0'
        },
        {
          img: require('./images/随访.png'),
          name: '12个肿瘤驱动基因检测NGSp',
          price: '¥398.0'
        },
        {
          img: require('./images/随访.png'),
          name: '12个肿瘤驱动基因检测NGSp',
          price: '¥398.0'
        },
        {
          img: require('./images/随访.png'),
          name: '12个肿瘤驱动基因检测NGSp',
          price: '¥398.0'
        },
        {
          img: require('./images/随访.png'),
          name: '12个肿瘤驱动基因检测NGSp',
          price: '¥398.0'
        }
      ]
    }
  },
  methods: {},
  components: {
    WhiteBox
  }
}
</script>
