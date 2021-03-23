<template>
  <div class="main-content-wrap">
    <v-top-aside />
    <div class="main-content">
      <v-content />
    </div>
  </div>
</template>
<script>
import VTopAside from "./top-aside";
import VContent from "./content";
export default {
  components: {
    VTopAside,
    VContent,
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  position: fixed;
  left: 200px;
  top: 100px;
  width: 100%;
  height: 100%;
}
</style>
