<template>
  <div class="mid-wrapper">
    <div class="mid-part-wrapper" v-show="selectedTab == 1">
      <div class="left-part">
        <div class="left-head-con">
          <div class="title">检索：</div>
          <el-input
            class="search-input"
            suffix-icon="el-icon-search"
            v-model="searchWord"
            @input="searchWordChange"
          ></el-input>
        </div>
        <div class="left-scroll-con">
          <el-tree
            ref="tree"
            :data="addModel.diagNodeList"
            :props="defaultProps"
            :filter-node-method="filterNodeMethod"
          >
            <template slot-scope="{ node, data }">
              <div class="tree-item-con" @click="onClickNode(node)">
                <img
                  src="../../../assets/images/pre-test/文件夹.png"
                  v-if="!node.isLeaf"
                  alt=""
                  class="node-wjj-icon"
                />
                <img
                  src="../../../assets/images/pre-test/常见主诉.png"
                  v-if="data.isMain"
                  alt=""
                  class="node-zs-icon"
                />
                <div class="tree-item-label">
                  {{ data.itemName }}
                </div>
                <!-- <img
                src="../../../assets/images/pre-test/已收藏.png"
                v-if="data.isMain && node.isLeaf"
                alt=""
                class="node-sc-icon"
              />
              <img
                src="../../../assets/images/pre-test/未收藏.png"
                v-if="!data.isMain && node.isLeaf"
                alt=""
                class="node-sc-icon"
              /> -->
              </div>
            </template>
          </el-tree>
        </div>
      </div>
      <div class="right-part">
        <div class="right-head-con">
          <div class="title">分诊依据（三区四级）</div>
          <div class="aside" v-if="level"
            >建议分级：{{ level }}级 去向：{{ triageRegion }}</div
          >
        </div>
        <div class="right-scroll-con" v-loading="levelLoading">
          <div class="right-level-con level-1" v-if="levelOneList.length">
            <el-checkbox-group v-model="checkList" size="mini">
              <el-checkbox
                v-for="(item, index) in levelOneList"
                :key="index"
                :label="item.itemCode"
              >
                {{ item.itemName }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div class="right-level-con level-2" v-if="levelTwoList.length">
            <el-checkbox-group v-model="checkList" size="mini">
              <el-checkbox
                v-for="(item, index) in levelTwoList"
                :key="index"
                :label="item.itemCode"
              >
                {{ item.itemName }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div class="right-level-con level-3" v-if="levelThreeList.length">
            <el-checkbox-group v-model="checkList" size="mini">
              <el-checkbox
                v-for="(item, index) in levelThreeList"
                :key="index"
                :label="item.itemCode"
              >
                {{ item.itemName }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div class="right-level-con level-4" v-if="levelFourList.length">
            <el-checkbox-group v-model="checkList" size="mini">
              <el-checkbox
                v-for="(item, index) in levelFourList"
                :key="index"
                :label="item.itemCode"
              >
                {{ item.itemName }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </div>
    <div class="lc-content" v-show="selectedTab == 2">
      <div class="inner">
        <img
          src="../../../assets/images/pre-test/急诊预检四级分诊流程图.png"
          alt=""
          class="lc-img"
        />
      </div>
    </div>
    <div class="head-con">
      <div
        class="tab-item"
        :class="{ active: selectedTab === 1 }"
        @click="selectedTab = 1"
        >知识库</div
      >
      <div
        class="tab-item"
        :class="{ active: selectedTab === 2 }"
        @click="selectedTab = 2"
        >流程图</div
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mid-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .head-con {
    height: 34px;
    background: #e1e2e7;
    display: flex;
    align-items: flex-end;
    padding: 0 6px;
    .tab-item {
      width: 71px;
      height: 29px;
      background: #cfd0d9;
      margin-right: 2px;
      border-radius: 4px 4px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      &.active {
        background: #fff;
      }
    }
  }
}
.lc-content {
  padding: 15px;
  width: 100%;
  background: #eeeeee;
  .inner {
    height: calc(100vh - 142px - 30px);
    background: #ffffff;
    border: 1px solid #979797;
    padding: 30px 50px;
    box-sizing: border-box;
    .lc-img {
      width: 100%;
    }
  }
}
.mid-part-wrapper {
  display: flex;
  width: 100%;
  flex: 1;
  .left-part {
    width: 0;
    flex: 3;
    border-right: 1px solid #cecece;
    .left-head-con {
      display: flex;
      align-items: center;
      padding: 0 14px;
      height: 34px;
      background: #e1e2e7;
      .title {
        font-size: 13px;
        color: #333;
      }
      .search-input {
        width: 0;
        flex: 1;
        /deep/ {
          .el-input__inner {
            height: 23px;
            line-height: 23px;
            font-size: 12px;
            background: #ffffff;
            border-radius: 2px;
            border: 1px solid #cccccc;
          }
          .el-input__icon {
            line-height: 23px;
          }
        }
      }
    }
    .left-scroll-con {
      padding: 8px 0;
      overflow: auto;
      height: calc(100vh - 142px - 34px);
      @include scrollBar;
      .tree-item-con {
        font-size: 12px;
        color: #333;
        display: flex;
        align-items: center;
        width: 100%;
        &:hover {
          .node-sc-icon {
            display: inline-block;
          }
        }
        .node-sc-icon {
          display: none;
          width: 12px;
          margin-left: 10px;
          margin-right: 14px;
        }
        .tree-item-label {
          width: 0;
          flex: 1;
        }
        .node-wjj-icon {
          width: 14px;
          margin-right: 3px;
        }
        .node-zs-icon {
          width: 12px;
          margin-right: 3px;
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
      }
    }
  }
  .right-part {
    width: 0;
    flex: 5;
    border-right: 1px solid #cecece;
    .right-head-con {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 14px;
      height: 34px;
      background: #e1e2e7;
      .title {
        font-size: 13px;
        color: #333;
      }
      .aside {
        font-size: 12px;
        color: #333;
      }
    }

    .right-scroll-con {
      padding: 8px 0;
      overflow: auto;
      height: calc(100vh - 142px - 34px);
      @include scrollBar;

      .right-level-con {
        padding: 10px 12px 0;
        border-bottom: 1px solid #eeeeee;
        /deep/ {
          .el-checkbox {
            display: block;
            margin-bottom: 10px;
          }
          .el-checkbox__label {
            font-size: 12px;
          }
        }
        &.level-1 {
          /deep/ {
            .el-checkbox__label {
              font-size: 12px;
              color: #cc0f00;
            }
          }
        }
        &.level-2 {
          /deep/ {
            .el-checkbox__label {
              font-size: 12px;
              color: #cc1c58;
            }
          }
        }
        &.level-3 {
          /deep/ {
            .el-checkbox__label {
              font-size: 12px;
              color: #d3730c;
            }
          }
        }
        &.level-4 {
          /deep/ {
            .el-checkbox__label {
              font-size: 12px;
              color: #557c09;
            }
          }
        }
      }
    }
  }
}
</style>
<script>
import addModel from '../add-model'
import { getDiagNodeDetail } from '@/api/pre-test'
import axios from 'axios'
let source
let CancelToken = axios.CancelToken
export default {
  components: {},
  props: {},
  data() {
    return {
      addModel,
      selectedTab: 1,
      defaultProps: {
        children: 'children',
        label: 'itemName'
      },
      checkList: [],
      levelOneList: [],
      levelTwoList: [],
      levelThreeList: [],
      levelFourList: [],
      level: '',
      triageRegion: '',
      searchWord: '',
      levelLoading: false
    }
  },
  computed: {
    isFirst() {
      return !this.$route.query.registerId
    }
  },
  methods: {
    onClickNode(node) {
      if (!node.isLeaf) return
      this.levelLoading = true
      source && source.cancel()
      source = CancelToken.source()
      getDiagNodeDetail(node.data.itemCode, source.token)
        .then(res => {
          this.levelLoading = false
          this.checkList = []
          let basicList = res.data.basicList
          this.levelOneList = basicList.filter(item => item.level === 1)
          this.levelTwoList = basicList.filter(item => item.level === 2)
          this.levelThreeList = basicList.filter(item => item.level === 3)
          this.levelFourList = basicList.filter(item => item.level === 4)
        })
        .catch(e => {
          this.levelLoading = false
          let basicList = []
        })
    },
    autoSetLevel() {
      if (addModel.basicDataList.find(item => item.level === 1)) {
        this.level = 'Ⅰ'
        this.triageRegion = '抢救监护区'
        addModel.tieredMaster.triageRegion = '抢救监护区'
        if (this.isFirst) {
          addModel.tieredMaster.classification = '1'
        } else {
          addModel.tieredMaster.reclassification = '1'
        }
      } else if (addModel.basicDataList.find(item => item.level === 2)) {
        this.level = 'Ⅱ'
        this.triageRegion = '抢救监护区'
        addModel.tieredMaster.triageRegion = '抢救监护区'
        if (this.isFirst) {
          addModel.tieredMaster.classification = '2'
        } else {
          addModel.tieredMaster.reclassification = '2'
        }
      } else if (addModel.basicDataList.find(item => item.level === 3)) {
        this.level = 'Ⅲ'
        this.triageRegion = '急诊诊疗区'
        addModel.tieredMaster.triageRegion = '急诊诊疗区'
        if (this.isFirst) {
          addModel.tieredMaster.classification = '3'
        } else {
          addModel.tieredMaster.reclassification = '3'
        }
      } else if (addModel.basicDataList.find(item => item.level === 4)) {
        this.level = 'Ⅳ'
        this.triageRegion = '急诊诊疗区'
        addModel.tieredMaster.triageRegion = '急诊诊疗区'
        if (this.isFirst) {
          addModel.tieredMaster.classification = '4'
        } else {
          addModel.tieredMaster.reclassification = '4'
        }
      }
    },
    searchWordChange() {
      this.$refs.tree.filter(this.searchWord)
    },
    filterNodeMethod(value, data, node) {
      if (!value) return true
      if (data.itemName.indexOf(value) > -1) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    checkList() {
      addModel.basicDataList = this.checkList.map(item =>
        [
          ...this.levelOneList,
          ...this.levelTwoList,
          ...this.levelThreeList,
          ...this.levelFourList
        ].find(o => o.itemCode == item)
      )
      this.autoSetLevel()
    }
  }
}
</script>
