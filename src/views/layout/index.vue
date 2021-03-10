<template>
  <div>
    <div :class="{ navCollapsed: isSidebarNavCollapse }">
      <sidebarNav
        :twosidebarMenu="twosidebarMenu"
        :isSidebarNavCollapse="isSidebarNavCollapse"
        class="sidebar left-slide"
      />
      <mainContent />
    </div>
    <div
      class="menu-two"
      @mouseleave="_mouseleave"
      :class="{ q: isSidebarNavCollapse, show: true }"
    >
      <sidebarNav
        :twosidebarMenu="threeSidebarMenu"
        :isSidebarNavCollapse="false"
        :twoMenu="true"
        class="sidebar"
      />
    </div>
  </div>
</template>

<script lang="ts">
import sidebarNav from "./component/sidebar-nav.vue";
import mainContent from "./component/main-content/index.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const sidebarMenu = computed(() => store.state["permission"].sidebarMenu);
    const currentMenu = computed(() => store.state["permission"].currentMenu);
    const isSidebarNavCollapse = computed(
      () => store.state["permission"].isSidebarNavCollapse
    );
    const twosidebarMenu = computed(() => store.state["permission"].twosidebarMenu);
    const threeSidebarMenu = computed(() => store.state["permission"].threeSidebarMenu);
    // const show = computed(() =>
    //   store.state["permission"].threeSidebarMenu.some((v) => {
    //     return v.meta;
    //   })
    // );
    function _mouseleave() {
      store.dispatch("permission/DED_THREEMENU");
    }
    return {
      sidebarMenu,
      _mouseleave,
      isSidebarNavCollapse,
      currentMenu,
      twosidebarMenu,
      threeSidebarMenu,
      // show,
    };
  },
  components: {
    sidebarNav,
    mainContent,
  },
};
</script>

<style lang="scss" scoped>
.left-slide {
  position: absolute;
  left: 0;
  transition: left 0.3s linear;
}
</style>
