<template>
  <div
    class="collapse-title"
    @click.native="gotoRoute(item)"
    :class="item.deep == deep ? 'collapse-title-active' : ''"
  >
    <i
      class="el-icon-message"
      :class="item.deep.split('-').length == 2 ? '' : 'hidden'"
    ></i>
    <span class="title-name">{{ item.title }}</span>
  </div>
</template>

<script lang="ts">
import { RouteRecordRaw } from "vue-router";
import routers from "@/router/index";
import { mapState, mapGetters } from "vuex";
import { ref, computed, getCurrentInstance } from "vue";
import store, { STOREMUTATIONTYPES } from "@/store";
export default {
  props: {
    item: Object,
  },
  setup(props: { item: any }) {
    const { proxy }: any = getCurrentInstance();
    const deep = computed(() => store.getters["permission/deepActive"]);
    const item = props.item;
    function gotoRoute(v: any) {
      if (v.children && v.children.length > 0) return;
      if (v.path.includes("http")) {
        proxy
          .$confirm(
            "  该功能会使用一个新的标签页打开对应系统的后台页面，默认会使用对应系统的对应商户管理员账号进行静默登录。使用该功能的管理人员请注意：请谨慎操作客户的后台数据，以免发生不可预计的数据错误，望周知！！！",
            "提示",
            {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning",
              customClass: "collapse-title-align",
            }
          )
          .then(() => {
            window.open(v.path);
          });
        return;
      }
      store.commit("permission/" + STOREMUTATIONTYPES.PERMISSION.SETVALUE, {
        key: "deepActive",
        value: v.deep,
      });
      try {
        routers.push({ name: v.path });
      } catch (error) {
        routers.push({ path: "/404" });
      }
    }
    return { item, gotoRoute, deep };
  },
};
</script>
<style>
.collapse-title-align .el-message-box__status {
  top: 0;
  transform: none;
}
</style>
<style lang="scss" scoped>
.title-img {
  margin-right: 4px;
}
.el-icon-message.hidden {
  visibility: hidden;
}
.collapse-title-active {
  span,
  i {
    color: #409eff;
  }
}
</style>
