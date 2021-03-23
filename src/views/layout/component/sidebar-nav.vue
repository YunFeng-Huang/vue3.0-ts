<template>
  <el-menu
    :collapse="collapse"
    background-color="#304156"
    text-color="#eee"
    active-text-color="#4dbcff"
  >
    <DynamicMenu :deep="1" :menuList="menuList"></DynamicMenu>
  </el-menu>
</template>

<script lang="ts">
import DynamicMenu from "./dynamic-menu.vue";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    collapse: Boolean,
    menuList: Array,
  },
  components: {
    DynamicMenu,
  },
});
</script>
<style lang="scss" scoped></style>
