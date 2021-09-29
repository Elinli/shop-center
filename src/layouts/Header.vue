<template>
    <a-layout-header class="header">
        <div class="logo">
            <img src="../assets/bg-img.jpg" alt="" />
        </div>
        <div class="header-right">
            <Dropdown />
        </div>
    </a-layout-header>
</template>
<script>
import {defineComponent} from 'vue';
import Dropdown from './Dropdown.vue';

export default defineComponent({
    components: {Dropdown},
    setup() {
        return {};
    }
});
</script>
<style lang="less" scoped>
.ant-layout-header {
    height: 48px;
    padding: 0;
    background-color: #fff;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    display: flex;
    .logo {
        width: 200px;
        overflow: hidden;
    }
    .header-right {
        flex-grow: 1;
        padding-right: 12px;
        .mixin-flex-jend-acenter();
    }
}
</style>
