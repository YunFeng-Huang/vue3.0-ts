<template>
  <div class="login-container">
    <el-row class="login-container-row">
      <el-col :xs="0" :md="6" :sm="12" :lg="14" :xl="16"></el-col>
      <el-col :xs="24" :sm="16" :md="12" :lg="10" :xl="6">
        <div class="login-container-form">
          <div class="login-container-hello">hello!</div>
          <div class="login-container-title">欢迎登录售后运营平台</div>
          <el-form :model="form" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="form.loginName" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                type="password"
                v-model="form.password"
                placeholder="密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="企业号">
              <el-input v-model="form.merchantCode" placeholder="企业号"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-col :span="16">
                <el-input v-model="form.checkCode" placeholder="验证码"></el-input>
              </el-col>
              <el-col :span="8">
                <div class="login-container-imgw">
                  <img :src="img" @click.native="changeImg" />
                </div>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button :loading="loading" @click="handleSubmit"> 登录 </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <div class="login-container-tips"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, getCurrentInstance, nextTick } from "vue";
import store, { STOREMUTATIONTYPES } from "@/store";
import router from "@/router";

import { LOGINTYPES } from "@/type/login";
export default defineComponent({
  name: "login",
  components: {},
  setup() {
    let img = ref("");
    let loading = ref(false);
    const { proxy }: any = getCurrentInstance();
    let form: LOGINTYPES = reactive({
      loginName: "sxwl01",
      password: "1qaz2wsx3edc",
      merchantCode: "sxwl",
      checkCode: "aszz",
    });

    const handleSubmit = async () => {
      loading.value = true;
      var data = await proxy.$api.Login.login(form);
      await store.dispatch(
        "permission/" + STOREMUTATIONTYPES.PERMISSION.LOGIN,
        data.permission
      );
      loading.value = false;
    };
    const changeImg = () => {
      const date = new Date();
      const baseUrl = process.env.VUE_APP_BASE_URL + process.env.VUE_APP_SERVICE;
      img.value = `${baseUrl}/api/zhihuijingqu/login/checkcode?date=${date}`;
      console.log(img.value, "img.value");
    };
    changeImg();
    return { form, handleSubmit, changeImg, img, loading };
  },
});
</script>
<style lang="scss" scoped>
/deep/ .el-form-item__label {
  color: #fff;
}
.login-container {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/login_images/login_background.png");
  background-size: cover;
  &-row {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  &-form {
    // width: calc(100% - 80px);
    // // height: 380px;
    // padding: 2vh;
    // // margin-top: calc((100vh - 380px) / 2);
    // margin-right: 20px;
    // margin-left: 20px;
    padding: 4vh;
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
  &-imgw {
    height: 40px;
    display: flex;
    margin-left: 10px;
    img {
      cursor: pointer;
    }
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
