<template>
  <div class="dispatch-detail-wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/dispatch-manage' }"
        >调度管理</el-breadcrumb-item
      >
      <el-breadcrumb-item>派单详情</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="content">
      <div class="title">派单详情</div>
      <div class="inner">
        <div class="dispatch-no">急救编号：{{ info.taskNo }}</div>

        <el-form
          status-icon
          ref="ruleForm"
          label-width="120px"
          size="mini"
          style="margin-top: 20px"
          label-position="left"
        >
          <el-form-item label="报案人:" prop="pass">
            <div>{{ info.contactName }}</div>
          </el-form-item>
          <el-form-item label="联系电话:" prop="pass">
            <div>{{ info.contactName }}</div>
          </el-form-item>
          <el-form-item label="事故类型:" prop="pass">
            <div>
              {{ info.eventType }}
              {{ info.dangerLevel ? `（${info.dangerLevel}）` : '' }}</div
            >
          </el-form-item>
          <el-form-item label="事故地址:" prop="pass">
            <div>{{ info.eventLocation }}</div>
          </el-form-item>
          <el-form-item label="报案人待诉:" prop="pass">
            <div> {{ info.complaints }}</div>
          </el-form-item>
          <el-form-item label="患者状况:" prop="pass">
            <div>{{ info.patientCondition }}</div>
          </el-form-item>
          <el-form-item
            label="病人信息:"
            prop="pass"
            v-if="info.eventType == '个人求救'"
          >
            <div class="info-table-wrapper">
              <table class="info-table" style="width: 400px;">
                <colgroup>
                  <!-- <col width="120px" /> -->
                </colgroup>
                <tr>
                  <th>病人姓名</th>
                  <th>性别</th>
                  <th>年龄</th>
                  <th>身份</th>
                  <th>操作</th>
                </tr>
                <tr>
                  <td>{{ info.patientName }}</td>
                  <td>{{ info.sex }}</td>
                  <td>{{ info.age }}岁</td>
                  <td>{{ info.personDesc }}</td>
                  <td>
                    <el-button type="text" size="mini" @click="openUrl"
                      >查看档案</el-button
                    >
                  </td>
                </tr>
              </table>
            </div>
          </el-form-item>
        </el-form>

        <div class="line"></div>

        <div class="his-con">
          <span class="label">指派医院</span>
          <el-button type="primary" size="mini" @click="openAddHisModal"
            >添加医院</el-button
          >
        </div>

        <div class="info-table-wrapper">
          <table class="info-table" style="width: 800px; margin-top: 20px">
            <colgroup>
              <col width="50px" />
              <col width="100px" />
              <col width="70px" />
              <col width="140px" />
              <col width="100px" />
              <col width="120px" />
              <col width="80px" />
            </colgroup>
            <tr>
              <th>序号</th>
              <th>指派医院</th>
              <th>建议车辆</th>
              <th>调度时间</th>
              <th>状态</th>
              <th>备注</th>
              <th>操作</th>
            </tr>
            <tr v-for="(item, index) in info.taskSendList" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.departureHospital }}</td>
              <td>{{ item.proposeCarNumber }}</td>
              <td>{{ item.dispatchTime }}</td>
              <td>{{ statusMap[item.status] }}</td>
              <td>{{ item.remake }}</td>
              <td>
                <el-button
                  @click="cancel(item)"
                  type="text"
                  size="small"
                  v-if="item.status !== '-2'"
                  >取消</el-button
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <AddHisModal ref="AddHisModal" @submit="init"></AddHisModal>
  </div>
</template>
<style lang="scss" scoped>
.dispatch-detail-wrapper {
  padding: 15px;
  .content {
    min-height: 500px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(206, 206, 206, 1);
    margin: 15px 0;
    .title {
      height: 36px;
      background: #dfdfdf;
      line-height: 36px;
      font-size: 12px;
      color: #555555;
      padding: 0 12px;
    }
    .inner {
      padding: 20px 30px;
      .dispatch-no {
        font-size: 20 px;
        color: #333333;
      }
      .info-table {
        td {
          text-align: center;
        }
      }
    }
  }
}

.line {
  margin: 20px 0;
  border-top: 1px #cccccc dashed;
}

.his-con {
  display: flex;
  align-items: center;
  .label {
    margin-right: 15px;
  }
}
</style>
<script>
import { getDetail, cancelEmergTask } from '@/api/api'
import AddHisModal from './modal/add-his-modal'
export default {
  props: {},
  data() {
    return {
      info: {},
      statusMap: {
        '0': '未受理',
        '1': '受理中',
        '2': '已完成',
        '-1': '不受理',
        '-2': '已取消'
      }
    }
  },
  methods: {
    cancel(item) {
      this.$prompt('请输入取消原因', '确定是否取消该急救任务？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        cancelEmergTask({
          subTaskNo: item.subTaskNo,
          reason: value
        }).then(res => {
          this.$message.success('取消成功')
          this.init()
        })
      })
    },
    openAddHisModal() {
      this.$refs.AddHisModal.open()
    },
    init() {
      getDetail(this.$route.query.taskNo).then(res => {
        this.info = res.data
      })
    },
    openUrl() {
      window.open('http://120.76.246.62:8080/health/#/patient/check')
    }
  },

  created() {
    this.init()
  },
  components: {
    AddHisModal
  }
}
</script>
