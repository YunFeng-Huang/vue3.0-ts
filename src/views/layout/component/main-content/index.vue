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
  right: 0;
  top: 100px;
  bottom: 0;
  overflow: auto;
  padding: 20px;
}
</style>
