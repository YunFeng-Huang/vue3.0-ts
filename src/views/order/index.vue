<template>
  <el-form :inline="true" :model="formInline">
    <el-form-item label="订单号">
      <el-input v-model="formInline.user" placeholder="订单号"></el-input>
    </el-form-item>
    <el-form-item label="订单号类型">
      <el-select v-model="formInline.region" placeholder="订单号类型">
        <el-option label="业务订单号" value="shanghai"></el-option>
        <el-option label="支付宝订单号" value="beijing"></el-option>
        <el-option label="微信订单号" value="beijing1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <p>对应支付系统返回值：该结果是进行转化后的展示，如要查看原始返回，请点击此处。</p>
  <el-table :data="tableData" border style="width: 40%">
    <el-table-column prop="date" label="参数名"> </el-table-column>
    <el-table-column prop="name" label="返回值"> </el-table-column>
  </el-table>
  <p>支付系统的参数含义，请结合左表的返回值一起使用。</p>
  <el-table :data="tableData" border style="width: 40%">
    <el-table-column prop="date" label="参数名"> </el-table-column>
    <el-table-column prop="name" label="参数含义"> </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import store from "@/store";
import router from "@/router";
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const formInline = reactive({
      user: "",
      region: "",
    });
    const tableData = ref([
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
      },
    ]);
    const onSubmit = () => {};
    return { formInline, onSubmit, tableData };
  },
});
</script>
<style lang="scss" scoped></style>
