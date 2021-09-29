<template>
    <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="item in breadcrumbList" :key="item.key">
            {{ item.title }}
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>
<script>
import {defineComponent, computed} from 'vue';
import {useStore} from 'vuex';
export default defineComponent({
    setup() {
        const store = useStore();
        const breadcrumbList = computed(() => store.getters.breadcrumb);
        return {breadcrumbList};
    }
});
</script>
<style lang="less" scoped></style>
