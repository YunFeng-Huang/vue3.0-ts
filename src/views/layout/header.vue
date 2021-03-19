<template>
  <header class="header-app">
    <div>这里是文案</div>
    <div class="header-right">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">黄金糕</el-dropdown-item>
            <el-dropdown-item command="b">狮子头</el-dropdown-item>
            <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script lang="ts">
import sidebarNav from "./component/sidebar-nav.vue";
// import mainContent from "./component/main-content/index.vue";
import { useStore } from "vuex";
import { computed, defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  setup(props, ctx) {
    // const { proxy }: any = getCurrentInstance();
    // proxy.$message("mesage");
    const handleCommand = (command) => {
      const { proxy }: any = getCurrentInstance();
      proxy.$message("mesage");
    };
    // const store = useStore();
    // // const sidebarMenu = computed(() => store.state["permission"].sidebarMenu);
    // // const currentMenu = computed(() => store.state["permission"].currentMenu);
    // const isSidebarNavCollapse = computed(
    //   () => store.state["permission"].isSidebarNavCollapse
    // );
    // console.log(isSidebarNavCollapse.value, "isSidebarNavCollapse");
    // const twosidebarMenu = computed(() => store.state["permission"].twosidebarMenu);
    // // const routes = computed(() => {
    // //   console.log(store.state["permission"].routes, 1111);
    // //   return store.state["permission"].routes;
    // // });
    // console.log(twosidebarMenu.value, "twosidebarMenu");
    // const threeSidebarMenu = computed(() => store.state["permission"].threeSidebarMenu);
    // const show = computed(
    //   store.state["permission"].threeSidebarMenu.some((v) => {
    //     return v.meta;
    //   })
    // );
    // function mouseleave() {
    //   // store.dispatch("permission/DED_THREEMENU");
    // }
    return {
      handleCommand,
    };
  },
  components: {
    sidebarNav,
  },
});
</script>

<style lang="scss" scoped>
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

.header-app {
  background: #212844;
  color: #fff;
  position: relative;
  z-index: 100000;
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
