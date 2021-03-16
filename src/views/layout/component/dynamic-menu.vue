<template>
  <el-submenu
    v-for="(item, index) in menuList"
    :index="deep + Math.random().toString()"
    :class="item.children == null || item.children.length == 0 ? 'no-children' : ''"
  >
    <template #title><v-title :item="item"></v-title></template>
    <el-menu-item-group>
      <my-nav :menuList="item.children" :deep="deep + 1"></my-nav>
    </el-menu-item-group>
  </el-submenu>
</template>

<script lang="ts">
import vTitle from "./dynamic-menu-title.vue";
import { RouteRecordRaw } from "vue-router";
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "my-nav",
  props: {
    menuList: Array,
    deep: Number,
  },
  components: {
    vTitle,
  },

  setup(props) {
    const menuList = props.menuList as RouteRecordRaw[];
    return {
      menuList,
    };
  },
});
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-menu-item,
.el-submenu {
  color: #b3c0d1;
}
/deep/ .el-submenu__title {
  color: #b3c0d1;
}
</style>
