<template>
  <div class="info-table">
    <div class="info-title">院前急救病例</div>
    <table class="line-table">
      <colgroup>
        <col width="130" />
        <col width="120" />
        <col width="120" />
        <col width="120" />
        <col width="120" />
        <col width="130" />
      </colgroup>
      <tr>
        <td class="label">医疗机构</td>
        <td colspan="5"
          ><trInput
            :isEdit="isEdit"
            v-model="dataSource.measure.toHospital"
          ></trInput
        ></td>
        <!-- <td class="label">科室</td>
        <td>急诊科</td> -->
      </tr>
      <tr>
        <td class="label">姓名</td>
        <td>
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.info.patientName"
          ></trInput>
        </td>
        <td class="label">性别</td>
        <td>
          <trInput :isEdit="isEdit" v-model="dataSource.info.sex"></trInput>
        </td>
        <td class="label">年龄</td>
        <td>
          <trInput :isEdit="isEdit" v-model="dataSource.info.age"></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">住址</td>
        <td colspan="3">
          <trInput :isEdit="isEdit" v-model="dataSource.info.address"></trInput>
        </td>
        <td class="label">联系电话</td>
        <td>
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.info.contactPhone"
          ></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">发病现场</td>
        <td colspan="3">
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.info.eventLocation"
          ></trInput>
        </td>
        <td class="label">求救方式</td>
        <td>
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.info.askHelpType"
          ></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">求救时间</td>
        <td colspan="2">
          <trInput
            :isEdit="false"
            v-model="dataSource.dispatchRecord.eventTime"
          ></trInput>
        </td>
        <td class="label">出诊时间</td>
        <td colspan="2">
          <trInput
            :isEdit="false"
            v-model="dataSource.dispatchRecord.carStartTime"
          ></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">抵达现场时间</td>
        <td colspan="2">
          <trInput
            :isEdit="false"
            v-model="dataSource.dispatchRecord.arrivedPlaceTime"
          ></trInput>
        </td>
        <td class="label">离开现场时间</td>
        <td colspan="2">
          <trInput
            :isEdit="false"
            v-model="dataSource.dispatchRecord.backTime"
          ></trInput
        ></td>
      </tr>
      <tr>
        <td class="label">送达地点</td>
        <td colspan="2">
          <trInput
            :isEdit="false"
            v-model="dataSource.dispatchRecord.departureHospital"
          ></trInput>
        </td>
        <td class="label">送达时间</td>
        <td colspan="2">
          <trInput
            :isEdit="false"
            v-model="dataSource.dispatchRecord.arrivedHospitalTime"
          ></trInput
        ></td>
      </tr>
      <tr>
        <td class="label">主诉</td>
        <td colspan="5">
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.eval.complaints"
          ></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">病史提供</td>
        <td colspan="5">
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.eval.medicalHistoryProvider"
            tag="select"
            :dataSource="[
              { value: '患者' },
              { value: '亲友' },
              { value: '他人' }
            ]"
          ></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">既往史</td>
        <td colspan="5">
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.eval.medicalHistory"
            tag="select"
            :dataSource="[
              { value: '无' },
              { value: '高血压' },
              { value: '糖尿病' },
              { value: '陈旧性脑梗死' },
              { value: '心瓣膜疾病' },
              { value: '非风湿性心房纤颤' },
              { value: '冠心病' }
            ]"
          ></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">过敏史</td>
        <td colspan="5">
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.eval.allergyHistory"
            tag="autocomplete"
            :dataSource="[
              { value: '无' },
              { value: '青霉素' },
              { value: '头孢' },
              { value: '其他' }
            ]"
          ></trInput>
        </td>
      </tr>

      <tr>
        <td class="label">体温</td>
        <td>
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.eval.temperature"
            unit="°c"
          ></trInput>
        </td>
        <td class="label">脉搏</td>
        <td>
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.eval.pulse"
            unit="次/分"
          ></trInput>
        </td>

        <td class="label">呼吸</td>
        <td>
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.eval.breathe"
            unit="次/分"
          ></trInput>
        </td>
      </tr>

      <tr>
        <td class="label">血压</td>
        <td>
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.eval.bp"
            unit="mmHg"
          ></trInput>
        </td>
        <td class="label">意识</td>
        <td>
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.eval.consciousness"
          ></trInput>
        </td>

        <td class="label">瞳孔</td>
        <td>
          <trInput :isEdit="isEdit" v-model="dataSource.eval.pupil"></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">对光反射</td>
        <td colspan="2">
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.eval.lightReflex"
          ></trInput>
        </td>
        <td class="label">辅助检查</td>
        <td colspan="2">
          <trInput :isEdit="isEdit" v-model="dataSource.eval.exam"></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">初步诊断</td>
        <td colspan="5">
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.measure.diagnosis"
          ></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">处理措施</td>
        <td colspan="5">
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.measure.adoptMeasure"
          ></trInput>
        </td>
      </tr>

      <tr>
        <td class="label">类别</td>
        <td class="label">项目</td>
        <td class="label">单价</td>
        <td class="label">数量</td>
        <td class="label">费用</td>
        <td class="label">合计</td>
      </tr>

      <template
        v-for="(feeTypeList, typeIndex) in [
          chefeiList,
          yiliaofeiList,
          yaofeiList
        ]"
      >
        <tr v-if="feeTypeList.length" class="fee-tr" :key="typeIndex">
          <td :rowspan="feeTypeList.length">
            {{ feeTypeList[0].feeType }}
          </td>
          <td>
            {{ feeTypeList[0].feeItem }}
          </td>
          <td>
            <trInput
              type="number"
              :isEdit="isEdit"
              v-model="feeTypeList[0].price"
            ></trInput>
          </td>
          <td>
            <trInput
              type="number"
              :isEdit="isEdit"
              v-model="feeTypeList[0].quantity"
            ></trInput>
          </td>
          <td>
            {{
              Number(feeTypeList[0].price || 0) *
                Number(feeTypeList[0].quantity || 0)
            }}
            <i
              class="el-icon-close"
              @click="delYaoRow(feeTypeList[0])"
              v-if="isEdit"
            ></i>
          </td>
          <td :rowspan="feeTypeList.length">
            {{ countByList(feeTypeList) }}
          </td>
        </tr>
        <tr
          v-for="(item, index) in feeTypeList"
          :key="typeIndex + '-' + index"
          v-show="index != 0"
          class="fee-tr"
        >
          <td>
            {{ item.feeItem }}
          </td>
          <td>
            <trInput
              type="number"
              :isEdit="isEdit"
              v-model="item.price"
            ></trInput>
          </td>
          <td>
            <trInput
              type="number"
              :isEdit="isEdit"
              v-model="item.quantity"
            ></trInput>
          </td>
          <td>
            {{ Number(item.price || 0) * Number(item.quantity || 0) }}

            <i class="el-icon-close" @click="delYaoRow(item)" v-if="isEdit"></i>
          </td>
        </tr>
      </template>

      <tr>
        <td colspan="4">
          <el-button
            type="primary"
            size="small"
            @click="addYaoPing"
            v-if="isEdit"
          >
            添加药品
          </el-button>
        </td>
        <td class="label">总计</td>
        <td>{{ allFeeCount }}</td>
      </tr>
      <tr>
        <td colspan="6" class="label">院内准备</td>
      </tr>
      <tr>
        <td class="label" colspan="2">分类</td>
        <td class="label" colspan="2">项目名称</td>
        <td class="label">数量</td>
        <td class="label">单位</td>
      </tr>
      <tr
        v-for="(item, index) in dataSource.prepareList"
        :key="index"
        class="fee-tr"
      >
        <td colspan="2">{{ item.groupName }}</td>
        <td colspan="2">{{ item.itemName }}</td>
        <td class="">
          <trInput
            type="number"
            :isEdit="isEdit"
            v-model="item.quantity"
          ></trInput>
        </td>
        <td
          >次
          <i class="el-icon-close" @click="delYnzb(item)" v-if="isEdit"></i>
        </td>
      </tr>
      <tr v-if="isEdit">
        <td colspan="6">
          <el-button type="primary" size="small" @click="addYnzb">
            添加院内准备
          </el-button>
        </td>
      </tr>

      <tr>
        <td class="label">处理措施</td>
        <td colspan="2">
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.measure.adoptMeasure"
          ></trInput>
        </td>
        <td class="label">救护</td>
        <td colspan="2">小救护，担架</td>
      </tr>
      <tr>
        <td class="label">院前病情归转</td>
        <td colspan="2">
          <span style="line-height: 32px;display: inline-block;">
            {{ dataSource.transfer && dataSource.transfer.type }}
          </span>

          <!-- <trInput
            :isEdit="isEdit"
            v-model="dataSource.measure.diseaseOutcome"
          ></trInput> -->
          <el-button
            type="primary"
            size="small"
            @click="openAddGuizhuangModal"
            style="float: right"
            v-if="isEdit"
          >
            修改
          </el-button>
        </td>
        <td class="label">出诊结果</td>
        <td colspan="2">
          <trInput
            :isEdit="isEdit"
            v-model="dataSource.measure.result"
          ></trInput>
        </td>
      </tr>
      <tr>
        <td class="label">出诊医生</td>
        <td>
          {{ dataSource.doctorList.map(item => item.empName).join('，') }}
        </td>
        <td class="label">出诊护士</td>
        <td>
          {{ dataSource.nurseList.map(item => item.empName).join('，') }}
        </td>
        <td class="label">出诊司机</td>
        <td>{{ dataSource.dispatchRecord.driverName }}</td>
      </tr>
    </table>

    <addYnzbModal ref="addYnzbModal"></addYnzbModal>
    <addGuizhuangModal ref="addGuizhuangModal"></addGuizhuangModal>
  </div>
</template>
<style lang="scss" scoped>
.info-table {
  width: 740px;
  min-height: 313px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(151, 151, 151, 1);
  margin: 20px auto;
  padding: 30px;
  table-layout: fixed;
  .info-title {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  td {
    vertical-align: middle;
  }
}
.label {
  font-weight: bold;
  text-align: center;
}
.fee-tr {
  td {
    text-align: center;
    position: relative;
  }
}
.el-icon-close {
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 15px;
}
</style>
<script>
import trInput from './tr-input'
import addYnzbModal from '../modal/add-ynzb-modal'
import addGuizhuangModal from '../modal/add-guizhuang-modal'
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    dataSource: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      test: ''
    }
  },
  computed: {
    chefeiList() {
      return this.dataSource.fee.feeList.filter(item => {
        return item.feeType == '车费'
      })
    },
    yiliaofeiList() {
      return this.dataSource.fee.feeList.filter(item => {
        return item.feeType == '医疗费'
      })
    },
    yaofeiList() {
      return this.dataSource.fee.feeList.filter(item => {
        return item.feeType == '药费'
      })
    },
    allFeeCount() {
      return this.countByList(this.dataSource.fee.feeList)
    }
  },
  methods: {
    countByList(list) {
      return list.reduce((total, current) => {
        return (total +=
          Number(current.price || 0) * Number(current.quantity || 0))
      }, 0)
    },
    delYaoRow(item) {
      let index = this.dataSource.fee.feeList.findIndex(o => o == item)
      this.dataSource.fee.feeList.splice(index, 1)
    },
    delYnzb(item) {
      let index = this.dataSource.prepareList.findIndex(o => o == item)
      this.dataSource.prepareList.splice(index, 1)
    },
    addYaoPing() {
      this.$prompt('药品名称', '添加药品', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        if (value) {
          this.dataSource.fee.feeList.push({
            dispatchId: null,
            feeItem: value,
            feeType: '药费',
            indexNo: null,
            infoId: 0,
            price: 0,
            quantity: 0,
            status: '0'
          })
        }
      })
    },
    addYnzb() {
      this.$refs.addYnzbModal.open(formData => {
        this.dataSource.prepareList.push({
          groupName: formData.groupName,
          itemName: formData.itemName,
          itemCode: formData.itemCode,
          quantity: '',
          unit: '次'
        })
      })
    },
    openAddGuizhuangModal() {
      this.$refs.addGuizhuangModal.open(
        this.dataSource.transfer || {},
        formData => {
          Object.assign(this.dataSource.transfer, formData)
        }
      )
    }
  },

  components: {
    trInput,
    addYnzbModal,
    addGuizhuangModal
  }
}
</script>
