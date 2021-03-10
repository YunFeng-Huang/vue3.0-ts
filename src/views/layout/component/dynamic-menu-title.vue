<template>
  <div class="collapse-title">
    <img width="18" class="title-img" :src="_img(item)" alt="" />
    <span class="title-name">{{ item.meta.name }}</span>
    <i class="el-icon-arrow-right"></i>
    <!-- v-if="item.havechildren" -->
  </div>
</template>

<script lang="ts">
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
  methods: {
    _img(v: any) {
      if (v.meta.imgId) {
        // let str = "default_";
        // if (v.path === this.currentMenu) {
        //   str = "active_";
        // }${str}${v.meta.imgId}
        return `https://kybcrm-files.oss-cn-hangzhou.aliyuncs.com/prod/tesla/smart-scenic-v2-web/images/icon-menu/1.png`;
      }
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.title-img {
  margin-right: 4px;
}
</style>
