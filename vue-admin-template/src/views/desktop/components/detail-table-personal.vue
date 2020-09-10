<template>
  <div class="info-table-wrapper">
    <table class="info-table">
      <colgroup>
        <col width="120px" />
        <col width="20%" />
        <col width="120px" />
        <col width="15%" />
        <col width="120px" />
        <col width="10%" />
        <col width="120px" />
        <col width="15%" />
      </colgroup>
      <tr>
        <th colspan="8">求救信息</th>
      </tr>
      <tr>
        <td class="key">急救编号：</td>
        <td class="value">{{ taskInfo.taskNo }}</td>
        <td class="key">求救类型：</td>
        <td class="value">{{ taskInfo.eventType }}</td>
        <td class="key">危重等级：</td>
        <td class="value">{{ taskInfo.dangerLevel }}</td>
        <td class="key">发单时间：</td>
        <td class="value">{{ taskInfo.dispatchTime }}</td>
      </tr>
      <tr>
        <td class="key">病人姓名：</td>
        <td class="value">{{ taskInfo.patientName }}</td>
        <td class="key">性别</td>
        <td class="value">{{ taskInfo.sex }}</td>
        <td class="key">年龄：</td>
        <td class="value">{{ taskInfo.age }}</td>
        <td class="key">身份：</td>
        <td class="value">{{ taskInfo.personDesc }}</td>
      </tr>
      <tr>
        <td class="key">联系人：</td>
        <td class="value">{{ taskInfo.contactName }}</td>
        <td class="key">电话：</td>
        <td class="value">{{ taskInfo.contactPhone }}</td>
        <td class="key">地址：</td>
        <td class="value" colspan="3">{{ taskInfo.eventLocation }}</td>
      </tr>

      <tr>
        <td class="key">主诉：</td>
        <td class="value" colspan="3">
          <!-- <span class="red">死亡</span> -->
          {{ taskInfo.complaints }}
        </td>
        <td class="key">求救方式：</td>
        <td class="value">{{ taskInfo.askHelpType }}</td>
        <td class="key">建议派车数量：</td>
        <td class="value">{{ taskInfo.proposeCarNumber }}</td>
      </tr>
    </table>

    <img
      class="status-img"
      :src="require(`../images/${imgMap[taskInfo.status]}.png`)"
      alt=""
    />
  </div>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  props: {
    dataSource: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      imgMap: {
        '0': '未受理',
        '1': '受理中',
        '2': '已完成',
        '-1': '不受理',
        '-2': '已取消'
      }
    }
  },
  computed: {
    taskInfo() {
      return this.dataSource.taskInfo || {}
    },
    dispatchRecordList() {
      return this.dataSource.dispatchRecordList || []
    }
  },
  methods: {},
  components: {}
}
</script>
