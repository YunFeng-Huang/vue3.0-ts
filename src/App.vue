<template>
  <div class="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script lang="ts">
export default {
  provide() {
    return {
      reload: this.reload,
    };
  },

  data() {
    return {
      isRouterAlive: true,
    };
  },

  methods: {
    //重载
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>
<style lang="scss">
@import "./styles/index.scss";
</style>
