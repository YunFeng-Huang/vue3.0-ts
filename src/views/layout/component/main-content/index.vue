<template>
  <div class="main-container">
    <TopAside />
    <Content />
  </div>
</template>

<script lang="ts">
import TopAside from "./top-aside.vue";
import Content from "./content.vue";

export default {
  components: {
    TopAside,
    Content,
  },
};
</script>
