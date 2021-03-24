<template>
  <aside class="aside__top">
    <!-- <span
      class="icon iconfont iconshousuocaidan toggleNavCollapse"
      :class="{ active: collapse }"
      @click="toggleNavCollapse"
    >
    </span> -->
    <div style="width: 30px; display: inline-block; height: 1px"></div>
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item
          v-for="(name, i) in breadcrumb"
          :key="name"
          :class="{ 'is-last-link': i == breadcrumb.length - 1 }"
        >
          {{ name }}
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </aside>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance } from "vue";
import store, { STOREMUTATIONTYPES } from "@/store";
// import { getMenuLevel } from "@/utils/routers";
export default defineComponent({
  setup() {
    const breadcrumb = computed(() => store.getters["permission/crumbList"]);
    console.log(breadcrumb.value, "breadcrumbbreadcrumb");
    const collapse = computed(() => store.getters["setting/collapse"]);
    const toggleNavCollapse = () => {
      // store.commit(
      //   "setting/" + STOREMUTATIONTYPES.SETTING.TOGGLECOLLAPSE,
      //   !collapse.value
      // );
    };
    return {
      collapse,
      breadcrumb,
      toggleNavCollapse,
    };
  },
});
</script>

<style lang="scss" scoped>
.aside__top {
  border-bottom: 1px solid #e5e5e5;
  height: 50px;
  line-height: 50px;
  position: fixed;
  left: 200px;
  top: 50px;
  right: 0;
  background: #fff;
  z-index: 1000;
  transition: left 0.25s;
  .toggleNavCollapse {
    display: inline-block;
    margin-left: 8px;
    padding: 0 10px;
    font-size: 20px;
    vertical-align: middle;
    color: #333;
    cursor: pointer;
    transition: all 0.5s;
    &.active {
      transform: rotate(180deg);
    }
  }
}
.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.6s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
