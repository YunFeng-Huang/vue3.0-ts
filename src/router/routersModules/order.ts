import { RouteRecordRaw } from "vue-router";

const order = () => import("@/views/order/index.vue");
const OrderRouter: Array<RouteRecordRaw> = [
    {
        path: "order",
        name: "order",
        component: order,
        meta: {
            title: "订单管理",
        },
    },
];
export default OrderRouter;
