<template>
  <div>
    <dataTable :columns="columns" :tableData="tableData"></dataTable>
  </div>
</template>
<style lang="scss" scoped></style>
<script>
import dataTable from './components/data-table'
export default {
  components: {
    dataTable
  },
  props: {},
  data() {
    return {
      columns: [
        {
          label: '日期',
          prop: '日期'
        },

        {
          label: '急诊总人数',
          prop: '急诊总人数'
        },

        {
          label: '一级（濒危）',
          prop: '一级（濒危）'
        },

        {
          label: '一级占比',
          prop: '一级占比'
        },
        {
          label: '二级（危重）',
          prop: '二级（危重）'
        },
        {
          label: '二级占比',
          prop: '二级占比'
        },
        {
          label: '三级（急症）',
          prop: '三级（急症）'
        },
        {
          label: '三级占比',
          prop: '三级占比'
        },
        {
          label: '四级（非急症）',
          prop: '四级（非急症）'
        },
        {
          label: '四级占比',
          prop: '四级占比'
        }
      ],
      tableData: [
        {
          日期: '2020-11-20',
          急诊总人数: '32',
          '一级（濒危）': '3',
          一级占比: '9.38%',
          '二级（危重）': '5',
          二级占比: '15.63%',
          '三级（急症）': '8',
          三级占比: '25.00%',
          '四级（非急症）': '16',
          四级占比: '50.00%'
        },
        {
          日期: '2020/11/19',
          急诊总人数: '112',
          '一级（濒危）': '11',
          一级占比: '9.82%',
          '二级（危重）': '44',
          二级占比: '39.29%',
          '三级（急症）': '5',
          三级占比: '4.46%',
          '四级（非急症）': '52',
          四级占比: '46.43%'
        },
        {
          日期: '2020/11/18',
          急诊总人数: '32',
          '一级（濒危）': '0',
          一级占比: '0.00%',
          '二级（危重）': '15',
          二级占比: '46.88%',
          '三级（急症）': '9',
          三级占比: '28.13%',
          '四级（非急症）': '8',
          四级占比: '25.00%'
        },
        {
          日期: '2020/11/17',
          急诊总人数: '53',
          '一级（濒危）': '0',
          一级占比: '0.00%',
          '二级（危重）': '22',
          二级占比: '41.51%',
          '三级（急症）': '6',
          三级占比: '11.32%',
          '四级（非急症）': '25',
          四级占比: '47.17%'
        },
        {
          日期: '2020/11/16',
          急诊总人数: '26',
          '一级（濒危）': '4',
          一级占比: '15.38%',
          '二级（危重）': '6',
          二级占比: '23.08%',
          '三级（急症）': '5',
          三级占比: '19.23%',
          '四级（非急症）': '11',
          四级占比: '42.31%'
        },
        {
          日期: '2020/11/15',
          急诊总人数: '46',
          '一级（濒危）': '3',
          一级占比: '6.52%',
          '二级（危重）': '7',
          二级占比: '15.22%',
          '三级（急症）': '7',
          三级占比: '15.22%',
          '四级（非急症）': '29',
          四级占比: '63.04%'
        },
        {
          日期: '2020/11/14',
          急诊总人数: '33',
          '一级（濒危）': '4',
          一级占比: '12.12%',
          '二级（危重）': '9',
          二级占比: '27.27%',
          '三级（急症）': '8',
          三级占比: '24.24%',
          '四级（非急症）': '12',
          四级占比: '36.36%'
        },
        {
          日期: '2020/11/13',
          急诊总人数: '75',
          '一级（濒危）': '0',
          一级占比: '0.00%',
          '二级（危重）': '17',
          二级占比: '22.67%',
          '三级（急症）': '0',
          三级占比: '0.00%',
          '四级（非急症）': '58',
          四级占比: '77.33%'
        },
        {
          日期: '2020/11/12',
          急诊总人数: '32',
          '一级（濒危）': '11',
          一级占比: '34.38%',
          '二级（危重）': '11',
          二级占比: '34.38%',
          '三级（急症）': '7',
          三级占比: '21.88%',
          '四级（非急症）': '3',
          四级占比: '9.38%'
        },
        {
          日期: '2020/11/11',
          急诊总人数: '26',
          '一级（濒危）': '0',
          一级占比: '0.00%',
          '二级（危重）': '14',
          二级占比: '53.85%',
          '三级（急症）': '6',
          三级占比: '23.08%',
          '四级（非急症）': '6',
          四级占比: '23.08%'
        },
        {
          日期: '2020/11/10',
          急诊总人数: '46',
          '一级（濒危）': '0',
          一级占比: '0.00%',
          '二级（危重）': '2',
          二级占比: '4.35%',
          '三级（急症）': '9',
          三级占比: '19.57%',
          '四级（非急症）': '35',
          四级占比: '76.09%'
        },
        {
          日期: '2020/11/9',
          急诊总人数: '33',
          '一级（濒危）': '3',
          一级占比: '9.09%',
          '二级（危重）': '4',
          二级占比: '12.12%',
          '三级（急症）': '7',
          三级占比: '21.21%',
          '四级（非急症）': '19',
          四级占比: '57.58%'
        },
        {
          日期: '2020/11/8',
          急诊总人数: '75',
          '一级（濒危）': '22',
          一级占比: '29.33%',
          '二级（危重）': '21',
          二级占比: '28.00%',
          '三级（急症）': '6',
          三级占比: '8.00%',
          '四级（非急症）': '26',
          四级占比: '34.67%'
        },
        {
          日期: '2020/11/7',
          急诊总人数: '33',
          '一级（濒危）': '11',
          一级占比: '33.33%',
          '二级（危重）': '7',
          二级占比: '21.21%',
          '三级（急症）': '9',
          三级占比: '27.27%',
          '四级（非急症）': '6',
          四级占比: '18.18%'
        }
      ]
    }
  },
  methods: {}
}
</script>
