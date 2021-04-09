<template>
  <el-dialog title="返回值" v-model="dialogVisible" width="50%">
    <span>{{ message }}</span>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import store from "@/store";
import router from "@/router";

export interface dialog {
  dialogVisible: boolean;
  message?: string;
}

export default defineComponent({
  name: "",
  components: {},
  props: {
    message: String,
  },
  setup(props) {
    let dialogVisible = ref(false);
    return { dialogVisible };
  },
});
</script>
<style lang="scss" scoped></style>
