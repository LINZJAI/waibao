<template>
  <div class="detail-wrapper">
    <div class="left-part">
      <div class="title">个人概况</div>
      <div class="top-part">
        <div class="top-left-part">
          <WhiteBox title="姓名：唐琦琦">
            <div slot="header" style="flex: 1; text-align: right">
              <el-button type="primary" size="mini">发消息</el-button>
              <el-button size="mini">转诊</el-button>
              <el-button size="mini">已关注</el-button>
            </div>

            <table class="text-table">
              <colgroup>
                <col width="20px" />
                <col width="300px" />
                <col width="20px" />
                <col width="300px" />
              </colgroup>
              <tr>
                <td class="key">
                  <span>性</span>
                  <span>别：</span>
                </td>
                <td class="value">男</td>
                <td class="key">
                  <span>年</span>
                  <span>龄：</span>
                </td>
                <td class="value">57岁</td>
              </tr>
              <tr>
                <td class="key">
                  <span>婚</span>
                  <span>史：</span>
                </td>
                <td class="value">已婚</td>
                <td class="key">
                  <span>手</span>
                  <span>机</span>
                  <span>号</span>
                  <span>码：</span>
                </td>
                <td class="value">17835327746</td>
              </tr>
              <tr>
                <td class="key">
                  <span>ID</span>
                  <span>号：</span>
                </td>
                <td class="value">10008826</td>
                <td class="key">
                  <span>职</span>
                  <span>业：</span>
                </td>
                <td class="value">自由职业者</td>
              </tr>
              <tr>
                <td class="key">
                  <span>国</span>
                  <span>籍：</span>
                </td>
                <td class="value">中国</td>
                <td class="key">
                  <span>籍</span>
                  <span>贯：</span>
                </td>
                <td class="value">广西</td>
              </tr>
              <tr>
                <td class="key">
                  <span>身</span>
                  <span>份</span>
                  <span>证</span>
                  <span>号：</span>
                </td>
                <td class="value" colspan="1">445221199203281210</td>
                <td class="key">
                  <span>现</span>
                  <span>住</span>
                  <span>址：</span>
                </td>
                <td class="value" colspan="1">广西省南宁市通州区长寿街926号</td>
              </tr>
              <tr>
                <td class="key">
                  <span>诊</span>
                  <span>断：</span>
                </td>
                <td class="value" colspan="3"
                  >（1） 心律失常 心功能III级 （2） 2型糖尿病</td
                >
              </tr>
            </table>
          </WhiteBox>
        </div>
      </div>

      <div class="left-top-five-part">
        <WhiteBox title="诊断记录" :border="false">
          <div class="left-top-five-content">
            <div class="time-line-part">
              <div
                class="time-line-box"
                v-for="(item, index) in timeList"
                :key="index"
              >
                <div class="time">{{ item.time }}</div>
                <!-- <div class="point"></div> -->
                <div class="label" v-html="item.label"></div>
                <img
                  src="./images/历史诊断.png"
                  v-if="item.status == 1"
                  alt=""
                  class="status-1"
                />
                <img
                  src="./images/最近诊断.png"
                  v-if="item.status == 2"
                  alt=""
                  class="status-2"
                />
              </div>
              <div class="line"></div>
              <img src="./images/左边.png" alt="" class="left-btn" />
              <img src="./images/右边.png" alt="" class="right-btn" />
            </div>
          </div> </WhiteBox
      ></div>
      <!--
      <div class="left-top-two-part">
        <WhiteBox>
          <div class="content">
            <el-tabs v-model="activeTab1">
              <el-tab-pane label="初步诊断" name="1">
                <div class="text-con">
                  1.冠心病<br />
                  &nbsp;&nbsp;1.1 急性冠脉综合征<br />
                  &nbsp;&nbsp;1.2 陈旧性广泛前壁心肌梗死<br />
                  &nbsp;&nbsp;1.3 PCI术后<br />
                  &nbsp;&nbsp;1.4 心功能Ⅱ级 2.高血压2级极高危组
                  3.甲状腺大部分切除术后 4.颈椎间盘射频消融术后
                  5.颈动脉硬化伴斑块形成<br />
                </div>
              </el-tab-pane>
              <el-tab-pane label="现病史" name="2">
                <div class="text-con"
                  >患者于2016年4月因突发胸闷痛入住我科，急诊行冠脉造影，术中见前降支近段在分出D1后完全闭塞，狭窄约85%左右，于前降支病变处置入两枚支架，出院后长期服用“阿司匹林、波立维、可定、培多普利、倍他乐克缓释片”，症状时有反复。患者后因症状反复多次于我科住院治疗，考虑不稳定性心绞痛，予以药物治疗后好转。2小时前患者无明显诱因出现胸闷、胸痛，不伴气促、大汗，无头痛、头晕，持续不能缓解，服用“速效救心丸”后症状缓解不明显，由家属呼120送至我院，拟“冠心病
                  不稳定性心绞痛”收入我科。
                  发病以来精神状态较差，食欲一般，睡眠良好，大便正常，小便正常，体力情况如常，体重无明显变化。近期无发热、乏力、干咳，无鼻塞、流涕、咽痛和腹泻等症状。</div
                >
              </el-tab-pane>
              <el-tab-pane label="既往史" name="3">
                <div class="text-con">
                  既往10年前有甲状腺大部分切除术史，现规律口服“优甲乐”；有高血压病史，最高血压180/100mmHg。否认糖尿病等慢性疾病病史；否认肝炎、结核等传染病史；3月前于我院行经皮颈椎间盘低温等离子射频消融术，无输血史；未发现明显药物过敏病史；预防接种史不详。
                </div>
              </el-tab-pane>
              <el-tab-pane label="个人史" name="4">
                <div class="text-con">
                  生于广西省南宁市，否认血吸虫疫水接触史，否认到过地方病高发及传染病流行地区否认嗜酒史、吸烟史。无常用药品及麻醉毒品嗜好。否认工业毒物、粉尘、放射性物质接触史。否认冶游史。否认疫区接触史。否认有湖北地区或其他有新型冠状病毒病例报告社区的旅行史或居住史；否认有与新型冠状病毒感染者接触史；否认曾接触过来自湖北地区或有病例报告社区的发热或有呼吸道症状的患者；否认存在聚集性发病情况。
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </WhiteBox>
      </div> -->

      <div class="left-top-three-part">
        <WhiteBox title="专科检查" :border="false">
          <img
            src="./images/专科检查.png"
            alt=""
            class="content-img"
          /> </WhiteBox
      ></div>
      <div class="left-top-four-part">
        <WhiteBox title="心电图" :border="false">
          <img
            src="./images/异常心电图.png"
            alt=""
            class="content-img"
          /> </WhiteBox
      ></div>

      <!-- <div class="mid-two-part">
        <WhiteBox title="最新监测警示">
          <div slot="header" class="mid-two-header">
            <div class="barge">2</div>
            <el-button size="mini">历史记录</el-button>
          </div>
          <div class="mid-two-content">
            <div class="grey-box">
              <div class="row">
                <div class="key1">腰围超标</div>
                <div class="value1">86cm</div>
              </div>
              <div class="row">
                <div class="key2">异常数据</div>
                <div class="value2">2020/02/12</div>
              </div>
              <div class="row">
                <div class="key3">查看历史记录</div>
                <div class="value3">偏高</div>
              </div>
            </div>
            <div class="grey-box">
              <div class="row">
                <div class="key1">血压偏高</div>
                <div class="value1">152/96 mmHg</div>
              </div>
              <div class="row">
                <div class="key2">异常数据</div>
                <div class="value2">2020/02/12</div>
              </div>
              <div class="row">
                <div class="key3">查看历史记录</div>
                <div class="value3">偏高</div>
              </div>
            </div>
            <div class="grey-box">
              <div class="row">
                <div class="key1">血糖偏高</div>
                <div class="value1">10.8mol/L</div>
              </div>
              <div class="row">
                <div class="key2">异常数据</div>
                <div class="value2">2020/02/12</div>
              </div>
              <div class="row">
                <div class="key3">查看历史记录</div>
                <div class="value3">偏高</div>
              </div>
            </div>
          </div>
        </WhiteBox>
      </div> -->

      <div class="bottom-part">
        <WhiteBox title="心率/血压标">
          <div class="content">
            <XLChart></XLChart>
          </div>
        </WhiteBox>
      </div>
    </div>
    <div class="right-part">
      <div class="right-one-part">
        <div class="right-one-box">
          <img src="./images/检查天数.png" alt="" />
          <div class="text-1">连续检查天数</div>
          <div class="text-2">153天</div>
        </div>
        <div class="right-one-box">
          <img src="./images/平均心率.png" alt="" />
          <div class="text-1">检车平均心率</div>
          <div class="text-2">78</div>
        </div>
        <div class="right-one-box">
          <img src="./images/检测平均血压.png" alt="" />
          <div class="text-1">检测平均血压</div>
          <div class="text-2">78/119</div>
        </div>
      </div>

      <div class="right-five-part">
        <WhiteBox title="初步诊断" :border="false">
          <div class="right-five-content">
            1.冠心病<br />
            &nbsp;&nbsp;1.1 急性冠脉综合征<br />
            &nbsp;&nbsp;1.2 陈旧性广泛前壁心肌梗死<br />
            &nbsp;&nbsp;1.3 PCI术后<br />
            &nbsp;&nbsp;1.4 心功能Ⅱ级<br />
            2.高血压2级极高危组<br />
            3.甲状腺大部分切除术后<br />
            4.颈椎间盘射频消融术后<br />
            5.颈动脉硬化伴斑块形成
          </div>
        </WhiteBox>
      </div>

      <div class="right-two-part">
        <WhiteBox>
          <el-tabs v-model="activeTab2">
            <el-tab-pane label="当前诊断" name="1">
              <div class="content">
                <div class="grey-label">脂肪肝</div>
                <div class="grey-label">胆内管结石</div>
                <div class="grey-label">屈光不正</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="健康史" name="2">
              <div class="content">
                <table class="text-table">
                  <colgroup>
                    <col width="20px" />
                    <col width="260px" />
                  </colgroup>
                  <tr>
                    <td class="key">
                      <span>家</span>
                      <span>族</span>
                      <span>病</span>
                      <span>史：</span>
                    </td>
                    <td><div class="grey-label">高血压（父）</div></td>
                  </tr>
                  <tr>
                    <td class="key">
                      <span>手</span>
                      <span>术</span>
                      <span>历</span>
                      <span>史：</span>
                    </td>
                    <td><div class="grey-label">2019/7/11 阑尾切除</div></td>
                  </tr>
                  <tr>
                    <td class="key">
                      <span>既</span>
                      <span>往</span>
                      <span>病</span>
                      <span>史：</span>
                    </td>
                    <td><div class="grey-label">阑尾炎</div></td>
                  </tr>
                  <tr>
                    <td class="key">
                      <span>过</span>
                      <span>敏</span>
                      <span>史：</span>
                    </td>
                    <td><div class="grey-label">青霉素过敏</div></td>
                  </tr>
                </table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="体检情况" name="3">
              <div class="content">
                <div class="grey-label">体重指数过重</div>
                <div class="grey-label">血压升高</div>
                <div class="grey-label">空腹血糖升高</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="评估情况" name="4">
              <div class="content">
                <div class="grey-label">高血压（高危）</div>
                <div class="grey-label">代谢综合征（高危）</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="生活方式" name="5">
              <div class="content">
                <div class="grey-label">荤素均匀</div>
                <div class="grey-label">体力活动不足</div>
                <div class="grey-label">从不吸烟</div>
                <div class="grey-label">适量饮酒</div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </WhiteBox>
      </div>

      <div class="right-three-part">
        <WhiteBox title="身体状况">
          <div class="right-three-content">
            <table class="text-table">
              <colgroup>
                <col width="20px" />
                <col width="120px" />
                <col width="20px" />
                <col width="90px" />
              </colgroup>
              <tr>
                <td class="key">
                  <span>用</span>
                  <span>药</span>
                  <span>情</span>
                  <span>况：</span>
                </td>
                <td>阿司匹林一日三次</td>
                <td class="key">
                  <span>设</span>
                  <span>备</span>
                  <span>号：</span>
                </td>
                <td>37200002824</td>
              </tr>
              <tr>
                <td class="key">
                  <span>并</span>
                  <span>发</span>
                  <span>症：</span>
                </td>
                <td>脑血管疾病，足溃疡</td>
                <td class="key">
                  <span>型</span>
                  <span>号：</span>
                </td>
                <td>4451</td>
              </tr>
            </table>

            <div class="grey-con">
              <div class="grey-padding"
                ><div class="grey-box">
                  <div class="grey-name">2型</div>
                  <div class="info-con">
                    <div class="desc">糖尿病类型</div>
                    <div class="aside"></div>
                  </div> </div
              ></div>
              <div class="grey-padding">
                <div class="grey-box">
                  <div class="grey-name">8个月</div>
                  <div class="info-con">
                    <div class="desc">糖龄</div>
                    <div class="aside"></div>
                  </div> </div
              ></div>
              <div class="grey-padding"
                ><div class="grey-box" style="background: #DCF3E5">
                  <div class="grey-name">5.5</div>
                  <div class="info-con">
                    <div class="desc">最近血糖值（mmol/L）</div>
                    <div class="aside">2020.02.12</div>
                  </div>
                </div></div
              >
              <div class="grey-padding"
                ><div class="grey-box" style="background: #F9E9E4">
                  <div class="grey-name red"
                    >5.5 <img src="./images/上升.png" alt=""
                  /></div>
                  <div class="info-con">
                    <div class="desc">BMI指数</div>
                    <div class="aside">身高172cm 体重80kg</div>
                  </div>
                </div></div
              >
            </div>
          </div>
        </WhiteBox>
      </div>

      <div class="right-four-part">
        <WhiteBox title="NN间期分布图" :border="false">
          <img
            src="./images/分布图.png"
            alt=""
            class="content-img"
          /> </WhiteBox
      ></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.detail-wrapper {
  padding: 0 12px;
  display: flex;
  align-items: stretch;
  .left-part {
    width: 0;
    flex: 9;
    .title {
      display: flex;
      height: 50px;
      align-items: center;
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }
    .left-top-two-part {
      height: 250px;
      margin-bottom: 12px;
      .text-con {
        padding: 0 12px;
        font-size: 12px;
        line-height: 22px;
        color: #333;
      }
    }
    .left-top-three-part {
      margin-bottom: 12px;
      height: 350px;
      .content-img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
    .left-top-four-part {
      margin-bottom: 12px;
      height: 620px;
      .content-img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
  }
  .right-part {
    width: 0;
    flex: 4;
    margin-left: 12px;

    .right-one-part {
      margin-bottom: 12px;
      margin-top: 50px;
      display: flex;
      padding: 20px 0;
      background: rgba(255, 255, 255, 1);
      .right-one-box {
        height: 120px;
        box-sizing: border-box;
        flex: 1;
        border-radius: 6px;
        border-right: 1px solid #eaeaea;
        &:last-child {
          border-right: 0;
        }
        img {
          height: 60px;
          display: block;
          margin: 0 auto;
        }
        .text-1 {
          font-size: 12px;
          color: #999999;
          margin-top: 8px;
          text-align: center;
        }
        .text-2 {
          font-size: 20px;
          color: #333333;
          margin-top: 6px;
          text-align: center;
        }
      }
    }

    .right-two-part {
      height: 240px;
      display: flex;
      align-items: stretch;
      margin-bottom: 12px;
      /deep/ .el-tabs__item {
        padding-right: 15px;
      }
    }

    .right-three-part {
      margin-bottom: 12px;
      .right-three-content {
        display: flex;
        flex-direction: column;
        .text-table {
          width: 100%;
        }
        .grey-con {
          display: flex;
          flex-wrap: wrap;
        }
        .grey-padding {
          padding: 5px;
          width: 50%;
        }
        .grey-box {
          height: 100px;
          background: rgba(243, 244, 250, 1);
          border-radius: 6px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          .grey-name {
            font-size: 26px;
            color: #333;
            text-align: center;
            &.red {
              color: #df3242;
            }
          }
          .info-con {
            height: 30px;
            margin-top: 10px;
            .desc {
              font-size: 12px;
              color: #333;
              text-align: center;
            }
            .aside {
              margin-top: 5px;
              font-size: 12px;
              color: #777;
              text-align: center;
            }
          }
        }
      }
    }
    .right-five-part {
      margin-bottom: 12px;
      .right-five-content {
        font-size: 12px;
        line-height: 20px;
        padding: 0 10px 10px;
        margin: 0;
      }
    }

    .right-four-part {
      margin-bottom: 12px;
      height: 350px;
      .content-img {
        max-width: 90%;
        max-height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
  }
}

.top-part {
  height: 230px;
  display: flex;
  align-items: stretch;
  margin-bottom: 12px;
  .top-left-part {
    flex: 1;
  }
}

.grey-label {
  height: 25px;
  line-height: 25px;
  background: rgba(243, 244, 250, 1);
  border-radius: 3px;
  border: 1px solid rgba(214, 214, 214, 1);
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 0 10px;
  font-size: 12px;
  color: #333;
  float: left;
}

.mid-two-part {
  margin-bottom: 12px;
  height: 180px;
  .mid-two-header {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .barge {
      width: 20px;
      height: 16px;
      background: rgba(243, 83, 105, 1);
      border-radius: 9px;
      font-size: 12px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 12px;
    }
  }
  .mid-two-content {
    display: flex;
    height: 100px;
    .grey-box {
      flex: 1;
      margin-right: 12px;
      background: rgba(243, 244, 250, 1);
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 15px 18px;
      &:last-child {
        margin-right: 0;
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
}

.bottom-part {
  margin-bottom: 12px;
  height: 510px;
}

.left-top-five-part {
  margin-bottom: 12px;
  .left-top-five-content {
  }
}

.time-line-part {
  position: relative;
  height: 140px;
  /* background: rgba(255, 255, 255, 1); */
  /* box-shadow: 0px 1px 0px 0px rgba(183, 183, 183, 0.5); */
  border-radius: 4px;
  /* border: 1px solid rgba(206, 206, 206, 1);1111 */
  padding: 0 30px;
  .left-btn {
    position: absolute;
    left: 0;
    top: 17px;
    width: 30px;
    cursor: pointer;
  }
  .right-btn {
    position: absolute;
    right: 0;
    top: 17px;
    width: 30px;
    cursor: pointer;
  }
  .line {
    position: absolute;
    /* height: 4px; */
    /* background: #dddddf; */
    border-top: 1px dashed #979797;
    left: 42px;
    top: 32px;
    width: calc(100% - 100px);
  }
  .time-line-box {
    float: left;
    height: 100%;
    width: 20%;
    font-size: 12px;
    color: #666666;
    position: relative;
    .point {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #dddddf;
      margin: 20px auto 12px;
    }
    .label {
      text-align: center;
      margin-bottom: 0px;
      margin-top: 20px;
      line-height: 18px;
    }
    .time {
      text-align: center;
      height: 30px;
    }
    .status-1 {
      position: absolute;
      top: 25px;
      left: 0px;
      right: 0px;
      z-index: 2;
      width: 15px;
      margin: 0 auto;
    }
    .status-2 {
      position: absolute;
      top: 23px;
      left: 0px;
      right: 0px;
      z-index: 2;
      width: 20px;
      margin: 0 auto;
    }
  }
}
</style>
<script>
import WhiteBox from '@/components/white-box'
import XLChart from './chart/心律'
export default {
  props: {},
  data() {
    return {
      activeTab1: '1',
      activeTab2: '1',
      timeList: [
        {
          label: `
          心律失常 心功能III级<br>2型糖尿病<br>急性冠脉综合征<br>高血压2级
          `,
          time: '2020/08/11',
          status: 2
        },
        {
          label: '心律失常 心功能III级<br>2型糖尿病<br>高血压2级',
          time: '2020/07/08',
          status: 1
        },
        {
          label: '心律失常 心功能III级<br>2型糖尿病<br>高血压2级',
          time: '2020/04/08',
          status: 1
        },
        {
          label: '心律失常 心功能III级<br>2型糖尿病<br>高血压2级',
          time: '2020/03/24',
          status: 1
        },
        {
          label: '心律失常 心功能III级<br>2型糖尿病<br>高血压1级',
          time: '2020/01/25',
          status: 1
        }
      ]
    }
  },
  methods: {},
  components: {
    WhiteBox,
    XLChart
  }
}
</script>
