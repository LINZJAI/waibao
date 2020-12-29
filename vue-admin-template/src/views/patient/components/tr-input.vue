<template>
  <div class="tr-input">
    <template v-if="isEdit">
      <el-input
        class="reset-input"
        :value="value"
        @input="onChange"
        size="small"
        :type="type"
        v-if="tag === 'input'"
      ></el-input>
      <el-select
        class="reset-input"
        :value="value"
        @change="onChange"
        size="small"
        v-if="tag === 'select'"
      >
        <el-option
          v-for="(item, index) in dataSource"
          :key="index"
          :value="item.value"
          :label="item.label || item.value"
        ></el-option>
      </el-select>
      <el-autocomplete
        class="reset-input"
        :value="value"
        @input="onChange"
        size="small"
        v-if="tag === 'autocomplete'"
        :fetch-suggestions="(s, cb) => cb(this.dataSource)"
      ></el-autocomplete>
    </template>

    <span v-else>{{ value }}</span>
    <span v-if="value && !isEdit" :class="{ unit: isEdit }">{{ unit }}</span>
  </div>
</template>
<style lang="scss" scoped>
.reset-input {
  /* margin: 0 -10px; */
  width: 100%;
}
.tr-input {
  position: relative;
}
.unit {
  position: absolute;
  top: 10px;
}
</style>
<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    isEdit: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String | Number,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'input'
    },
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    onChange(val) {
      this.$emit('change', val)
    }
  },
  components: {}
}
</script>
