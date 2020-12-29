<template>
  <div>
    <v-chart
      :forceFit="true"
      :height="height"
      :data="data"
      :scale="scale"
      :padding="[50, 50]"
    >
      <v-tooltip />
      <v-axis />
      <v-legend position="top-left" />
      <v-line position="日期*value" :size="2" color="体征" adjust="stack" />
      <v-stack-area position="日期*value" color="体征" />
    </v-chart>
  </div>
</template>

<script>
const data = [
  { 体征: '血压', 日期: '2020-07-01', value: 70 },
  { 体征: '血压', 日期: '2020-07-02', value: 81 },
  { 体征: '血压', 日期: '2020-07-03', value: 92 },
  { 体征: '血压', 日期: '2020-07-04', value: 78 },
  { 体征: '血压', 日期: '2020-07-05', value: 80 },
  { 体征: '血压', 日期: '2020-07-06', value: 91 },
  { 体征: '血压', 日期: '2020-07-07', value: 88 },
  { 体征: '心率', 日期: '2020-07-01', value: 66 },
  { 体征: '心率', 日期: '2020-07-02', value: 57 },
  { 体征: '心率', 日期: '2020-07-03', value: 78 },
  { 体征: '心率', 日期: '2020-07-04', value: 56 },
  { 体征: '心率', 日期: '2020-07-05', value: 76 },
  { 体征: '心率', 日期: '2020-07-06', value: 67 },
  { 体征: '心率', 日期: '2020-07-07', value: 73 }
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
      height: 400
    }
  }
}
</script>
