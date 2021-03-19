<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
// v-if="isRouterAlive"
// import "vue-transition.css";
export default {
  // provide() {
  //   return {
  //     reload: this.reload,
  //   };
  // },

  data() {
    return {
      isRouterAlive: true,
    };
  },

  methods: {
    //重载
    // reload() {
    //   this.isRouterAlive = false;
    //   this.$nextTick(function () {
    //     this.isRouterAlive = true;
    //   });
    // },
  },
};
</script>
<style lang="scss">
@import "./styles/index.scss";
// .app .app-router-view {
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   overflow: hidden;
//   backface-visibility: hidden;
//   transform: translate3d(0, 0, 0);
//   transform-style: preserve-3d;
//   visibility: visible;
// }
</style>
