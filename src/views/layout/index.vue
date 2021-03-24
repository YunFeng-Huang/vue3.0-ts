<template>
  <v-header></v-header>
  <div class="container">
    <div :class="{ navCollapsed: collapse }">
      <sidebarNav  :collapse="collapse" class="sidebar left-slide" />
      <mainContent />
    </div>
  </div>
</template>

<script lang="ts">
import sidebarNav from "./component/sidebar-nav.vue";
import vHeader from "./header.vue";
import mainContent from "./component/main-content/index.vue";
import { computed, defineComponent } from "vue";
import store from "@/store";
export default defineComponent({
  setup() {
    const collapse = computed(() => store.getters["setting/collapse"]);
   
    return {
      collapse,
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
  // margin-left: 200px;
}
.left-slide {
  position: absolute;
  left: 0;
  transition: left 0.3s linear;
}
</style>
