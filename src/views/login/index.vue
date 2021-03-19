<template>
  <div class="login-container">
    <el-row>
      <el-col :xs="0" :md="6" :sm="12" :lg="14" :xl="16"></el-col>
      <el-col :xs="24" :sm="16" :md="12" :lg="10" :xl="6">
        <div class="login-container-form">
          <div class="login-container-hello">hello!</div>
          <div class="login-container-title">欢迎来到 {{ title }}</div>
          <el-form :model="form">
            <el-form-item label="用户名">
              <el-input v-model="form.loginName" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="handleSubmit"> 登录 </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <div class="login-container-tips"></div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  getCurrentInstance,
  inject,
  onMounted,
} from "vue";
import store, { STOREMUTSTIONTYPES } from "@/store";
import router from "@/router";
import axios from "@/api";
import menuList from "@/router/menu";
export default defineComponent({
  name: "login",
  components: {},
  setup(props, ctx) {
    console.log(ctx);
    const title = ref("title");
    // const { proxy }: any = getCurrentInstance();
    const form = reactive({
      loginName: "sxwl01",
      password: "1qaz2wsx3edc",
      merchantCode: "sxwl",
      checkCode: "asdf",
    });
    function handleSubmit() {
      // console.log(proxy.$api, "axios.Login1");
      // const axios = inject("axios");
      axios.Login.login(form)
        .then(async (res) => {
          login(res);
        })
        .catch((res) => {});
    }

    return { title, form, handleSubmit };
  },
});

async function login(res) {
  await store.dispatch("user/" + STOREMUTSTIONTYPES.USER.SETTOKEN, "login");
  await store.commit("permission/" + STOREMUTSTIONTYPES.PERMISSION.SETROUTERS, menuList);
  console.log(222);
  router.push("/");
}
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/login_images/login_background.png");
  background-size: cover;
  &-form {
    width: calc(100% - 80px);
    height: 380px;
    padding: 4vh;
    margin-top: calc((100vh - 380px) / 2);
    margin-right: 20px;
    margin-left: 20px;
    background: url("~@/assets/login_images/login_form.png");
    background-size: 100% 100%;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
  }
  &-hello {
    font-size: 32px;
    color: #fff;
  }
  &-title {
    margin-bottom: 30px;
    font-size: 20px;
    color: #fff;
  }
  &-tips {
    position: fixed;
    width: 100%;
    height: 40px;
    color: rgba(255, 255, 255, 0.856);
    text-align: center;
  }
  .ant-col {
    width: 100%;
    padding: 0 10px 0 10px;
  }
  .ant-input {
    height: 35px;
  }
  .ant-btn {
    width: 100%;
    height: 45px;
    border-radius: 99px;
  }
}
</style>
