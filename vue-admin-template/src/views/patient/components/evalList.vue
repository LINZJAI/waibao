<template>
  <div class="eval-list">
    <div
      class="eval-item"
      v-for="(item, index) in configList"
      :key="index"
      @click="item.onClick"
      :class="{ active: item.infoId === infoId && $parent.currentPatient }"
    >
      <img src="../images/record/文件夹.png" alt="" class="folder-icon" />
      <div>{{ item.label }}</div>
    </div>

    <el-tree
      :data="treeData"
      :props="defaultProps"
      ref="tree"
      node-key="label"
      :default-expand-all="true"
      :highlight-current="true"
    >
      <template slot-scope="{ node, data }">
        <div class="tree-item-con" @click="onClickNode(data)">
          <img
            src="../images/record/文件夹.png"
            v-if="!node.isLeaf"
            alt=""
            class="node-wjj-icon"
          />
          <img
            src="../../../assets/images/pre-test/文件.png"
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

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="800px"
      :show-close="true"
      :close-on-click-modal="true"
    >
      <div class="right-con">
        <div class="content" style="pointer-events: none;">
          <component
            v-if="dialogComponent"
            :is="dialogComponent"
            ref="evalForm"
            :infoId="infoId"
          ></component>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small" type="primary"
          >关闭</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.eval-list {
  /* padding: 15px; */
  .eval-item {
    height: 29px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    color: #333;
    font-size: 13px;
    cursor: pointer;
    &:hover {
      background: #f5f7fa;
    }
    &.active {
      background: rgb(228, 241, 240);
    }
    .folder-icon {
      height: 24px;
      padding-right: 5px;
      position: relative;
      top: -2px;
    }
  }
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
      height: 24px;
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
      background: transparent;
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
</style>
<script>
import tengtong from '../eval/tengtong'
import hunmi from '../eval/hunmi'
import chuangshang from '../eval/chuangshang'
import mews from '../eval/mews'
import zuzhong from '../eval/cuzhong'
import rankin from '../eval/rankin'
export default {
  props: {
    configList: Array,
    infoId: String | null,
    isModal: Boolean
  },
  data() {
    return {
      dialogVisible: false,
      dialogTitle: '',
      dialogComponent: null,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeData: [
        {
          label: '院前评估单',
          children: [
            {
              label: '疼痛评估单',
              component: tengtong
            },
            {
              label: '昏迷评估单',
              component: hunmi
            },
            {
              label: '创伤评估单',
              component: chuangshang
            },
            {
              label: '早起预警评估单',
              component: mews
            },
            {
              label: '卒中量表',
              component: zuzhong
            },
            {
              label: '改良Rankin量表',
              component: rankin
            }
          ]
        }
      ]
    }
  },
  methods: {
    onClickNode(data) {
      if (data.component) {
        if (this.isModal) {
          this.dialogVisible = true
          this.dialogTitle = data.label
          this.dialogComponent = data.component
        } else {
          this.$parent.currentPatient = null
          // this.$parent.infoId = null
          this.$parent.currentEval = data
        }
      }
    }
  },
  components: {}
}
</script>
