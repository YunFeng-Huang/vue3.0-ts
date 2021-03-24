<template>
  <div class="collapse-title" @click.native="gotoRoute(item)">
    <!-- <i class="el-icon-message"></i> -->
    <span class="title-name">{{ item.title }}</span>
  </div>
</template>

<script lang="ts">
import { RouteRecordRaw } from "vue-router";
import routers from "@/router/index";
import { mapState, mapGetters } from "vuex";
export default {
  props: {
    item: Object,
  },
  setup(props: { item }) {
    const item = props.item;
    function gotoRoute(v) {
      console.log(v);
      if (v.children && v.children.length > 0) return;
      try {
        routers.push({ name: v.path });
      } catch (error) {
        console.log(error, "error");
        routers.push({ path: "/404" });
      }
      console.log("jump");
    }
    return { item, gotoRoute };
  },
};
</script>

<style lang="scss" scoped>
.title-img {
  margin-right: 4px;
}
</style>
