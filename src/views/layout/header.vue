<template>
  <header class="header-app">
    <!-- <div>这里是文案</div> -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="系统选择">
        <el-select
          v-model="formInline.user"
          placeholder="系统选择"
          size="small"
          @change="change"
        >
          <el-option label="智慧景区系统" value="0"></el-option>
          <el-option label="智慧收银系统" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商户选择">
        <el-select v-model="formInline.region" placeholder="商户选择" size="small">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="header-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          用户名，欢迎回来<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
            <!-- <el-dropdown-item @click="resetPass">忘记密码</el-dropdown-item> -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
  <!-- <v-reset ref="reset"></v-reset> -->
</template>

<script lang="ts">
import VReset from "./dialog/reset.vue";
import store, { STOREMUTATIONTYPES } from "@/store";
import { computed, defineComponent, getCurrentInstance, reactive } from "vue";
import menuList from "@/router/menu";
export default defineComponent({
  setup(props, ctx) {
    const { proxy }: any = getCurrentInstance();
    let formInline = reactive({
      user: "",
      region: "",
    });
    const loginOut = async (val: string) => {
      await store.dispatch("permission/" + STOREMUTATIONTYPES.PERMISSION.LOGOUT);
    };
    const resetPass = async (val: string) => {
      // proxy.$refs.reset.password = true;
    };
    const change = async () => {
      store.commit("permission/" + STOREMUTATIONTYPES.PERMISSION.SETROUTERS, menuList);
      store.dispatch("permission/" + STOREMUTATIONTYPES.PERMISSION.SETROUTERS);
      // proxy.$refs.reset.password = true;
    };
    return {
      loginOut,
      resetPass,
      formInline,
      change,
    };
  },
  components: { VReset },
});
</script>

<style lang="scss" scoped>
.demo-form-inline {
  padding-top: 5px;
  margin-left: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;

  .userImg {
    vertical-align: middle;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    margin-right: 6px;
  }
}

.el-icon-arrow-down {
  font-size: 12px;
}
/deep/ .el-form-item__label {
  color: #fff;
}
.header-app {
  background: #212844;
  color: #fff;
  position: relative;
  z-index: 100;
  height: 50px;
  p {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;

    img.header-img,
    span {
      vertical-align: middle;
      margin-right: 10px;
      height: 40px;
    }
    img.header-img {
      max-height: 30px;
    }
  }
}

.header-right {
  position: absolute;
  right: 30px;
  top: 0px;
  display: flex;
  align-items: center;
  height: 50px;
}

.password {
  .dialog-footer {
    text-align: center;
  }
}
</style>
