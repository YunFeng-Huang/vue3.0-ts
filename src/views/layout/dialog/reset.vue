<template>
  <el-dialog
    title="修改密码"
    width="30%"
    :visible.sync="password"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form
      :model="passwordForm"
      status-icon
      :rules="formRules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="旧密码：" prop="oldPassWord">
        <el-input
          type="password"
          v-model="passwordForm.oldPassWord"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newPassWord">
        <el-input
          type="password"
          v-model="passwordForm.newPassWord"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkNewPass">
        <el-input
          v-model="passwordForm.checkNewPass"
          placeholder="请再次输入新密码"
          id="newkey1"
          type="password"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="dialog-footer">
      <el-button type="primary" @click="saveBtn()">保存</el-button>
      <el-button @click="password = false">返回</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, getCurrentInstance } from "vue";
import store from "@/store";
import router from "@/router";
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const { proxy }: any = getCurrentInstance();
    let password = reactive({
      password: false,
      passwordForm: {
        oldPassWord: "",
        newPassWord: "",
        checkNewPass: "",
      },
      formRules: {
        oldPassWord: [
          {
            required: true,
            message: "请输入原始密码",
            trigger: ["blur", "change"],
          },
        ],
        newPassWord: [
          {
            required: true,
            message: "请输入新密码",
            trigger: ["blur", "change"],
          },
          {
            min: 6,
            max: 16,
            message: "密码的长度范围为6-16位",
            trigger: ["blur", "change"],
          },
        ],
        checkNewPass: [
          {
            required: true,
            message: "请再次输入新密码",
            trigger: ["blur", "change"],
          },
          {
            min: 6,
            max: 16,
            message: "密码的长度范围为6-16位",
            trigger: ["blur", "change"],
          },
        ],
      },
    });
    const saveBtn = () => {
      // proxy.$refs["ruleForm"].validate((valid) => {
      //   console.log(valid, "valid");
      //   if (valid) {
      //   }
      // });
    };
    return { ...toRefs(password), saveBtn };
  },
});
</script>
<style lang="scss" scoped></style>
