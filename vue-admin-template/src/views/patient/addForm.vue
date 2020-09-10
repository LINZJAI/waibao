<template>
  <el-form ref="form" :model="form" label-width="150px" class="form-wrapper">
    <el-form-item label="病人姓名">
      <el-input v-model="form.name" size="small"></el-input>
    </el-form-item>
    <el-form-item label="身份">
      <el-select
        v-model="form.region"
        size="small"
        placeholder="请选择活动区域"
      >
        <el-option label="普通" value="shanghai"></el-option>
        <el-option label="三无病人" value="beijing"></el-option>
        <el-option label="其他" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="身份证">
      <el-input v-model="form.name" size="small"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group size="small" v-model="form.resource">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input size="small" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input size="small" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="现居地">
      <el-input size="small" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="详细地址">
      <el-input size="small" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="婚姻">
      <el-select
        size="small"
        v-model="form.region"
        placeholder="请选择活动区域"
      >
        <el-option label="已婚" value="shanghai"></el-option>
        <el-option label="未婚" value="beijing"></el-option>
        <el-option label="离异" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="籍贯">
      <el-input size="small" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="紧急联系人">
      <el-input size="small" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="关系">
      <el-input size="small" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="联系人电话">
      <el-input size="small" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="过敏史">
      <el-input size="small" v-model="form.name" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="既往史">
      <el-input size="small" v-model="form.name" type="textarea"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  width: 800px;
  margin: 50px auto;
  .el-input,
  .el-select {
    width: 260px;
  }

  .el-textarea {
    width: 380px;
  }
}
</style>
