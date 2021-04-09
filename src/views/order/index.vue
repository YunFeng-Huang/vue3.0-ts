<template>
  <el-form :inline="true" :model="formInline" class="top-search">
    <el-form-item label="订单号">
      <el-input v-model="formInline.orderNum" placeholder="订单号"></el-input>
    </el-form-item>
    <el-form-item label="订单号类型">
      <el-select v-model="formInline.region" placeholder="订单号类型">
        <el-option label="支付宝订单号" value="1"></el-option>
        <el-option label="微信订单号" value="2"></el-option>
        <el-option label="业务订单号" value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <div class="top-search-main">
    <p>
      对应支付系统返回值：该结果是进行转化后的展示，如要查看原始返回，请<a @click="open"
        >点击此处</a
      >。
    </p>
    <template v-if="aliOrderQueryResult.length > 0">
      <el-table
        :data="aliOrderQueryResult"
        border
        row-key="key"
        row-class-name="item"
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="key" label="参数名"></el-table-column>
        <el-table-column prop="value" label="返回值"></el-table-column>
      </el-table>
    </template>
    <v-dialog ref="dialog" :message="oldaliOrderQueryResult"></v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, getCurrentInstance, toRefs } from "vue";
import store from "@/store";
import router from "@/router";
import VDialog, { dialog } from "./dialog/index.vue";
export interface tableEle {
  id: string;
  key: string;
  value: any;
  children?: tableEle[];
}

export default defineComponent({
  name: "",
  components: { VDialog },
  setup() {
    const { proxy }: any = getCurrentInstance();
    let orderData = reactive({
      oldaliOrderQueryResult: "", //string接口返回
      aliOrderQueryResult: [], //数据处理
    });
    const formInline = reactive({
      orderNum: "",
      region: "",
    });
    const open = () => {
      // @ts-ignore: Unreachable code error
      (proxy.$refs.dialog as dialog).dialogVisible = true;
    };
    const postOrder = () => {
      const systemType = store.getters["permission/systemType"];
      // systemType：0 智慧景区 1智慧收银
      // orderNum：订单号
      // orderNumTypeEnum：1支付宝单号 2微信单号 3业务单号
      proxy.$api.Order.order({
        systemType: systemType,
        orderNum: formInline.orderNum,
        orderNumTypeEnum: formInline.region,
      }).then((v) => {
        let aliOrderQueryResult = v.aliOrderQueryResult;
        orderData.oldaliOrderQueryResult = JSON.stringify(aliOrderQueryResult);
        let aliOrderQueryResultList = [];
        let o: tableEle;
        for (const key in aliOrderQueryResult) {
          if (Object.prototype.hasOwnProperty.call(aliOrderQueryResult, key)) {
            const element = aliOrderQueryResult[key];
            o = {
              id: key,
              key: key,
              value: Array.isArray(element) ? "" : element,
              children: [],
            };
            if (Array.isArray(element)) {
              element.forEach((v) => {
                for (const k in v) {
                  if (Object.prototype.hasOwnProperty.call(v, k)) {
                    const e = v[k];
                    o.children.push({
                      id: key + k,
                      key: k,
                      value: e,
                    });
                  }
                }
              });
            } else {
              delete o.children;
            }
          }
          aliOrderQueryResultList.push(o);
        }
        orderData.aliOrderQueryResult = aliOrderQueryResultList;
      });
    };

    const onSubmit = () => {
      postOrder();
    };
    postOrder();
    return { formInline, onSubmit, open, ...toRefs(orderData) };
  },
});
</script>
<style lang="scss">
.top-search-oldaliOrderQueryResult .el-message-box__message p {
  word-break: break-all;
}
</style>

<style lang="scss" scoped></style>
