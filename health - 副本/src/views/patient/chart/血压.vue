<template>
  <div>
    <v-chart
      :forceFit="true"
      :height="height"
      :data="data"
      :scale="scale"
      :padding="[50, 50, 28]"
    >
      <v-tooltip />
      <v-axis />
      <v-legend position="top-left" />
      <v-line position="日期*value" :size="2" color="血压" adjust="stack" />
      <v-stack-area position="日期*value" color="血压" />
    </v-chart>
  </div>
</template>

<script>
const data = [
  { 血压: '收缩压', 日期: '2020-07-01', value: 70 },
  { 血压: '收缩压', 日期: '2020-07-02', value: 81 },
  { 血压: '收缩压', 日期: '2020-07-03', value: 92 },
  { 血压: '收缩压', 日期: '2020-07-04', value: 78 },
  { 血压: '收缩压', 日期: '2020-07-05', value: 80 },
  { 血压: '收缩压', 日期: '2020-07-06', value: 91 },
  { 血压: '收缩压', 日期: '2020-07-07', value: 88 },
  { 血压: '舒张压', 日期: '2020-07-01', value: 66 },
  { 血压: '舒张压', 日期: '2020-07-02', value: 57 },
  { 血压: '舒张压', 日期: '2020-07-03', value: 78 },
  { 血压: '舒张压', 日期: '2020-07-04', value: 56 },
  { 血压: '舒张压', 日期: '2020-07-05', value: 76 },
  { 血压: '舒张压', 日期: '2020-07-06', value: 67 },
  { 血压: '舒张压', 日期: '2020-07-07', value: 73 }
]

const scale = [
  {
    dataKey: '日期',
    type: 'timeCat'
  }
]

export default {
  data() {
    return {
      data,
      scale,
      height: 245
    }
  }
}
</script>
