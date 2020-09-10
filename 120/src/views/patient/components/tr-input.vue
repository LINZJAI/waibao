<template>
  <div class="tr-input">
    <el-input
      class="reset-input"
      v-if="isEdit"
      :value="value"
      @input="onChange"
      size="small"
      :type="type"
    ></el-input>
    <span v-else>{{ value }}</span>
    <span v-if="value && !isEdit" :class="{ unit: isEdit }">{{ unit }}</span>
  </div>
</template>
<style lang="scss" scoped>
.reset-input {
  /* margin: 0 -10px; */
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
