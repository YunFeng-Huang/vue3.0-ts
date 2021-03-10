<template>
  <el-menu
    :collapse="isSidebarNavCollapse"
    background-color="#304156"
    text-color="#eee"
    active-text-color="#4dbcff"
  >
    <DynamicMenu :twoMenu="twoMenu" :menuList="twosidebarMenu"></DynamicMenu>
  </el-menu>
</template>

<script lang="ts">
import DynamicMenu from "./dynamic-menu.vue";

export default {
  props: {
    isSidebarNavCollapse: Boolean,
    twoMenu: Boolean,
    twosidebarMenu: Array,
  },
  components: {
    DynamicMenu,
  },
};
</script>
<style lang="scss" scoped></style>
