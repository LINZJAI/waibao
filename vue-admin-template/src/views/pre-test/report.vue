<template>
  <div class="report-wrapper">
    <div class="left-part">
      <div class="left-head-con">
        <button
          class="pre-test-btn"
          style="height: 26px"
          @click="$router.push('/pre-test')"
          >返回</button
        >
      </div>
      <div class="tree-con">
        <el-tree
          :data="treeData"
          :props="defaultProps"
          ref="tree"
          node-key="label"
          :default-expand-all="true"
          :highlight-current="true"
          current-node-key="科室分诊人数统计"
        >
          <template slot-scope="{ node, data }">
            <div class="tree-item-con" @click="onClickNode(data)">
              <img
                src="../../assets/images/pre-test/文件夹.png"
                v-if="!node.isLeaf"
                alt=""
                class="node-wjj-icon"
              />
              <img
                src="../../assets/images/pre-test/文件.png"
                v-else
                alt=""
                class="node-wj-icon"
              />
              <div class="tree-item-label">
                {{ data.label }}
              </div>
            </div>
          </template>
        </el-tree>
      </div>
    </div>
    <div class="right-part">
      <div class="right-head-con">{{ title }}</div>
      <div class="filter-con">
        <div class="filter-label">来院时间：</div>
        <el-date-picker
          size="mini"
          class="date-input"
          v-model="arriveHospBeginTime"
        ></el-date-picker>
        <div class="zhi">至</div>
        <el-date-picker
          size="mini"
          class="date-input"
          v-model="arriveHospEndTime"
        ></el-date-picker>
        <div class="filter-block"></div>
        <div class="filter-label">去向：</div>

        <div class="filter-block"></div>

        <el-input
          size="mini"
          placeholder="请输入姓名、性别、年龄、住址、联系方式等关键字搜索"
          style="width: 252px"
          v-model="keyword"
        ></el-input>
        <div class="filter-block"></div>
        <button class="pre-test-btn" style="height: 28px" @click="getData()"
          >查询</button
        >
        <button class="pre-test-btn" style="height: 28px">导出</button>
        <div class="block"></div>
      </div>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column
          v-for="(item, index) in columns"
          :key="index"
          :prop="item.key"
          :label="item.label"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.report-wrapper {
  display: flex;
  align-items: stretch;
  background: #ffffff;
  box-shadow: 0px 1px 0px 0px rgba(183, 183, 183, 0.5);
  border-radius: 3px;
  border: 1px solid #cecece;
  margin: 14px;
  .left-part {
    width: 252px;
    border-right: 1px solid #cecece;
    .left-head-con {
      height: 34px;
      background: #e1e2e7;
      display: flex;
      align-items: center;
      padding-left: 2px;
    }
    .tree-con {
      height: calc(100vh - 114px);
      overflow: auto;
      padding: 14px 0px;
      @include scrollBar;
      .tree-item-con {
        font-size: 12px;
        color: #333;
        display: flex;
        align-items: center;
        width: 100%;

        .tree-item-label {
          width: 0;
          flex: 1;
        }
        .node-wjj-icon {
          height: 14px;
          margin-right: 6px;
        }
        .node-wj-icon {
          height: 14px;
          margin-right: 6px;
          margin-left: 5px;
        }
      }
      /deep/ {
        .el-tree {
          .el-tree-node__label {
          }

          .el-tree-node:focus > .el-tree-node__content {
            background: #d7eaeb;
          }
        }
        .el-tree--highlight-current
          .el-tree-node.is-current
          > .el-tree-node__content {
          background: #d7eaeb;
        }
      }
    }
  }
  .right-part {
    flex: 1;
    .right-head-con {
      height: 34px;
      background: #e1e2e7;
      display: flex;
      align-items: center;
      padding-left: 15px;
      font-size: 13px;
      color: #333;
      font-weight: bold;
    }
    .filter-con {
      padding: 8px 15px;
      background: #fff;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #333;
      .date-input {
        width: 140px;
      }
      .zhi {
        padding: 5px;
      }
      .select-input {
        width: 102px;
      }
      .filter-block {
        width: 10px;
      }
    }
    /deep/ {
      .el-table {
        font-size: 13px;
        color: #333;
        border-top: 1px solid #ddd;
        height: calc(100vh - 158px);
      }

      .el-table--border th,
      .el-table--border td {
        border-right: 1px solid #ddd;
        font-size: 13px;
      }
      .el-table th.is-leaf,
      .el-table td {
        border-bottom: 1px solid #ddd;
        text-align: center;
        font-size: 13px;
      }
      .el-table th,
      .el-table td {
        padding: 5px !important;
        font-size: 14px;
      }
      .el-table__body-wrapper {
        height: calc(100vh - 300px);
      }
      .el-table__header-wrapper {
        th {
          background: #efefef;

          .cell {
            font-size: 14px;
            color: #333;
            font-weight: bold;
            /* padding: 5px; */
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
<script>
import request from '@/utils/request'
import moment from 'moment'
export default {
  components: {},
  props: {},
  data() {
    return {
      arriveHospBeginTime: moment().subtract(1, 'M'),
      arriveHospEndTime: moment().endOf('d'),
      keyword: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      columns: [],
      tableData: [],
      title: '',
      treeData: [
        {
          label: '人数统计',
          children: [
            {
              label: '科室分诊人数统计',
              api: '/triage/count/deptPatient',
              method: 'get',
              columns: [
                {
                  label: '科室',
                  key: 'deptName'
                },
                {
                  label: '患者数量',
                  key: 'patientSize'
                },
                {
                  label: '完成数量',
                  key: 'finishSize'
                },
                {
                  label: '未完成数量',
                  key: 'notFinishSize'
                },
                {
                  label: '平均等待时间',
                  key: 'avgWaitTimeInMinute'
                }
              ]
            },
            {
              label: '四级患者统计',
              api: '/triage/count/fourLevel',
              method: 'post',
              columns: [
                {
                  label: '患者数量',
                  key: 'patientSize'
                },
                {
                  label: '一级数量',
                  key: 'firstLevel'
                },
                {
                  label: '二级数量',
                  key: 'secondLevel'
                },
                {
                  label: '三级数量',
                  key: 'thirdLevel'
                },
                {
                  label: '四级数量',
                  key: 'fourLevel'
                }
              ]
            },
            {
              label: '三无患者统计',
              api: '/triage/count/lossIdentity',
              method: 'post',
              columns: [
                {
                  label: '患者数量',
                  key: 'patientSize'
                },
                {
                  label: '三无患者数量',
                  key: 'lossIdentitySize'
                },
                {
                  label: '比例',
                  key: 'percent'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    onClickNode(data) {
      if (!data.api) return
      return request({
        url: data.api,
        method: data.method,
        data: {
          arriveHospBeginTime: moment(this.arriveHospBeginTime).format(
            'YYYY-MM-DD HH:mm:ss'
          ),
          arriveHospEndTime: moment(this.arriveHospEndTime).format(
            'YYYY-MM-DD HH:mm:ss'
          ),
          triageRegion: '',
          classification: '',
          keyword: ''
        }
      }).then(res => {
        this.tableData = res.data
        this.columns = data.columns
        this.title = data.label
      })
    }
  },
  mounted() {
    this.$refs.tree.setCurrentKey('科室分诊人数统计')

    this.onClickNode(this.treeData[0].children[0])
  }
}
</script>
