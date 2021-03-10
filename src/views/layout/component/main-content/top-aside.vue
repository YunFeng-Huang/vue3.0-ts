<template>
    <aside class="aside__top">
        <span
            class="icon iconfont iconshousuocaidan toggleNavCollapse"
            :class="{active:isSidebarNavCollapse}"
            @click="toggleNavCollapse"
        >
        </span>
        <el-breadcrumb separator="/">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item
                    v-for="(route,i) in crumbList"
                    :key="route.link"
                    :to="{name:route.link}"
                    v-if="route.name!='首页'"
                    :class="{'is-last-link':i==crumbList.length-1}"
                >
                {{_title(route.name)}}
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </aside>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
import mixins from '../_mixin.js';
export default {
    mixins:[mixins],
    data() {
        return {
            isChangGuanQuanYu: JSON.parse(sessionStorage.isChangGuanQuanYu) //2.75 场馆全域新字段
        };
    },
    watch:{
        crumbList(val){
            console.log(val);
        }
    },
    methods: {
        toggleNavCollapse() {
            this.$store.commit('permission/toggleNavCollapse');
        }
    }
};
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
