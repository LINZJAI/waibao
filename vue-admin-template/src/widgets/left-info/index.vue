<template>
  <div class="left-info-wrapper">
    <InfoBox :dataSource="obj1"></InfoBox>
    <InfoBox :dataSource="obj2"></InfoBox>
    <InfoBox :dataSource="obj3"></InfoBox>
  </div>
</template>
<style lang="scss" scoped>
.left-info-wrapper {
  padding: 20px;
  padding-bottom: 0;
  height: 100%;
  width: 300px;
  background: linear-gradient(
    180deg,
    rgba(43, 64, 107, 1) 0%,
    rgba(153, 159, 166, 1) 100%
  );
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.26);
  display: flex;
  flex-direction: column;
}
</style>
<script>
import InfoBox from './info-box'
import { listCarStatus, countTask, getListUserStatus } from '@/api/common'
import { getConsultList } from '@/api/common'
export default {
  props: {},
  data() {
    return {
      consultList: [],
      obj1: {
        title: '今日任务情况',
        rightText: '',
        list: [
          {
            key: '未受理',
            value: 0,
            onItemClick: () => {
              this.$router.push('/desktop/index?status=0')
            }
          },
          {
            key: '受理中',
            value: 0,
            onItemClick: () => {
              this.$router.push('/desktop/index?status=1')
            }
          },
          {
            key: '已完成',
            value: 0,
            onItemClick: () => {
              this.$router.push('/desktop/index?status=2')
            }
          },
          {
            key: '不受理',
            value: 0,
            onItemClick: () => {
              this.$router.push('/desktop/index?status=-1')
            }
          },
          {
            key: '已取消',
            value: 0,
            onItemClick: () => {
              this.$router.push('/desktop/index?status=-2')
            }
          },
          {
            key: '受理总量',
            value: 0,
            onItemClick: () => {
              this.$router.push('/desktop/index?status=全部')
            }
          }
        ]
      },
      obj2: {
        title: '车辆信息',
        rightText: '地图视图',
        onRightClick: () => {
          this.$router.push('/desktop/map')
        },
        list: []
      },
      obj3: {
        title: '当班人员',
        list: []
      }
    }
  },
  methods: {
    init() {
      listCarStatus().then(res => {
        let actionStatusDict = {
          repair: '检修中',
          breakdown: '故障'
        }
        this.obj2.list = res.data.map(item => ({
          ...item,
          key: item.carNo,
          statusName:
            item.actionStatus == 'normal'
              ? item.inTask
                ? '出诊中'
                : '站内待命'
              : actionStatusDict[item.actionStatus],
          onClick: item => {
            if (item.inTask) {
              this.$router.push(`/desktop/carTab?carNo=${item.carNo}`)
            } else {
              this.$router.push(`/desktop/map?carNo=${item.carNo}`)
            }
          }
        }))
      })

      countTask().then(res => {
        this.obj1.list[0].value = res.data.notHandledNum
        this.obj1.list[1].value = res.data.handlingNum
        this.obj1.list[2].value = res.data.finishNum
        this.obj1.list[3].value = res.data.rejectNum
        this.obj1.list[4].value = res.data.cancelNum
        this.obj1.list[5].value =
          res.data.notHandledNum +
          res.data.handlingNum +
          res.data.finishNum +
          res.data.rejectNum +
          res.data.cancelNum
      })

      getListUserStatus({}).then(res => {
        this.obj3.list = res.data.map(item => ({
          ...item,
          key: item.empName,
          statusName: item.inTask ? '出诊中' : '站内待命'
        }))
      })
      getConsultList({}).then(res => {
        this.consultList = res.data.records
      })
    }
  },
  created() {
    this.init()
  },
  components: {
    InfoBox
  }
}
</script>
