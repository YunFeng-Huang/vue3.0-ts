<template>
  <div class="collapse-title" @click.native="gotoRoute(item)">
    <!-- <img
      width="18"
      class="title-img"
      src="https://kybcrm-files.oss-cn-hangzhou.aliyuncs.com/prod/tesla/smart-scenic-v2-web/images/icon-menu/1.png"
      alt=""
    /> -->
    <i class="el-icon-message"></i>
    <span class="title-name">{{ item.title }}</span>
    <!-- <i class="el-icon-arrow-right" v-if="item.children && item.children.length > 0"></i> -->
    <!-- v-if="item.havechildren" -->
  </div>
</template>

<script lang="ts">
import { RouteRecordRaw } from "vue-router";
import routers from "@/router/index";
import { mapState, mapGetters } from "vuex";
// import mixins from "./_mixin.js";
export default {
  //   mixins: [mixins],
  data() {
    return {
      imgstr: "",
    };
  },

  props: {
    item: Object,
  },
  setup(props) {
    const item = props.item;
    function gotoRoute(v: RouteRecordRaw) {
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
  // methods: {
  //   _img(v: any) {
  //     // if (v.meta.imgId) {
  //     //   // let str = "default_";
  //     //   // if (v.path === this.currentMenu) {
  //     //   //   str = "active_";
  //     //   // }${str}${v.meta.imgId}
  //     //   return `https://kybcrm-files.oss-cn-hangzhou.aliyuncs.com/prod/tesla/smart-scenic-v2-web/images/icon-menu/1.png`;
  //     // }
  //     return `https://kybcrm-files.oss-cn-hangzhou.aliyuncs.com/prod/tesla/smart-scenic-v2-web/images/icon-menu/1.png`;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.title-img {
  margin-right: 4px;
}
</style>
