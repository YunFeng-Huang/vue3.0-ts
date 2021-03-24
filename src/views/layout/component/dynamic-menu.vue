<template>
  <el-submenu
    v-for="(item, index) in menuList"
    :index="item.deep"
    :class="item.children == null || item.children.length == 0 ? 'no-children' : ''"
  >
    <template #title><v-title :item="item"></v-title></template>
    <my-nav
      v-if="item.children && item.children.length > 0"
      :menuList="item.children"
    ></my-nav>
  </el-submenu>
</template>

<script lang="ts">
import vTitle from "./dynamic-menu-title.vue";
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "my-nav",
  props: {
    menuList: Array,
  },
  components: {
    vTitle,
  },

  setup(props) {
    const menuList = props.menuList as any;
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
