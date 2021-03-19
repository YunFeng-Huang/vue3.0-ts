<template>
  <v-header></v-header>
  <div class="container">
    <div :class="{ navCollapsed: isSidebarNavCollapse }">
      <sidebarNav
        :menuList="menuList"
        :isSidebarNavCollapse="isSidebarNavCollapse"
        class="sidebar left-slide"
      />
      <mainContent class="container-main" />
    </div>
  </div>
</template>

<script lang="ts">
import sidebarNav from "./component/sidebar-nav.vue";
import vHeader from "./header.vue";
import mainContent from "./component/main-content/index.vue";
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const store = useStore();
    // const sidebarMenu = computed(() => store.state["permission"].sidebarMenu);
    // const currentMenu = computed(() => store.state["permission"].currentMenu);
    const isSidebarNavCollapse = computed(
      () => store.state["permission"].isSidebarNavCollapse
    );
    // console.log(isSidebarNavCollapse.value, "isSidebarNavCollapse");
    const menuList = computed(() => store.state["permission"].menuList);
    // const routes = computed(() => {
    //   console.log(store.state["permission"].routes, 1111);
    //   return store.state["permission"].routes;
    // });
    // const threeSidebarMenu = computed(() => store.state["permission"].threeSidebarMenu);
    // const show = computed(
    //   store.state["permission"].threeSidebarMenu.some((v) => {
    //     return v.meta;
    //   })
    // );
    function mouseleave() {
      // store.dispatch("permission/DED_THREEMENU");
    }
    return {
      // sidebarMenu,
      mouseleave,
      isSidebarNavCollapse,
      // currentMenu,
      menuList,
      // threeSidebarMenu,
      // show,
    };
  },
  components: {
    sidebarNav,
    mainContent,
    vHeader,
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin-left: 200px;
}
.left-slide {
  position: absolute;
  left: 0;
  transition: left 0.3s linear;
}
</style>
