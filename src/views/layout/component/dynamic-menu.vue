<template>
  <div class="menu-container">
    <!-- v-if="v.meta && v.meta.requireAuth" 
      v-if="
          v.children &&
          v.children.length > 0 &&
          v.children.some((v) => {
            return v.meta && v.meta.requireAuth;
          })
        "
        :index="v.name"
        :key="v.name"
        -->
    <template v-for="v in menuList">
      <el-submenu>
        <template slot="title">
          <v-title :item="v"></v-title>
        </template>
        <el-menu-item-group>
          <my-nav :menuList="v.children"></my-nav>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :index="v.name" @click.native="gotoRoute">
        <v-title :item="v"></v-title>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts">
import vTitle from "./dynamic-menu-title.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "my-nav",
  data() {
    return {
      enableV2Skin: "0",
    };
  },

  props: {
    menuList: Array,
    twoMenu: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    vTitle,
  },
  // computed: {
  //   ...mapState("permission", ["currentMenu"]),
  // },
  setup() {
    const store = useStore();
    const currentMenu = computed(() => store.state["permission"].currentMenu);
    function gotoRoute() {}
    return {
      currentMenu,
      gotoRoute,
    };
  },
  // methods: {
  //   // _gotoRoute(v) {
  //   //   if ((!this.twoMenu && v.havechildren === undefined) || this.twoMenu) {
  //   //     this.$router.push({
  //   //       name: v.name || v,
  //   //     });
  //   //     this.$store.dispatch("permission/DED_THREEMENU");
  //   //   } else {
  //   //     this.$store.dispatch("permission/SET_THREEMENU", v.name);
  //   //   }
  //   // },
  // },
  // created() {
  //   this.enableV2Skin = sessionStorage.enableV2Skin;
  // },
};
</script>

<style lang="scss" scoped>
.title-img {
  margin-right: 4px;
}
</style>
