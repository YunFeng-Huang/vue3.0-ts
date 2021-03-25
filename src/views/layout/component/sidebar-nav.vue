<template>
  <el-menu
    :collapse="collapse"
    background-color="#304156"
    text-color="#eee"
    active-text-color="#4dbcff"
  >
    <DynamicMenu :menuList="menuList" :key="a"></DynamicMenu>
  </el-menu>
</template>

<script lang="ts">
import DynamicMenu from "./dynamic-menu.vue";
import { computed, defineComponent, ref } from "vue";
import store from "@/store";
export default defineComponent({
  props: {
    collapse: Boolean,
  },
  components: {
    DynamicMenu,
  },
  setup() {
    let a = ref(0);
    const menuList = computed(() => {
      a.value++;
      return store.getters["permission/menuList"];
    });
    console.log(menuList.value, "menuList");
    return { menuList, a };
  },
});
</script>
<style lang="scss" scoped></style>
