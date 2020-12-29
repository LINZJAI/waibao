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
          label: '',
          prop: ''
        }
      ],
      tableData: [{}]
    }
  },
  methods: {}
}
</script>
