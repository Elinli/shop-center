<template>
    <a-layout>
        <Header />
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <MenuTree />
            </a-layout-sider>
            <a-layout style="padding:0 10px 10px">
                <Breadcrumb />
                <a-layout-content :style="contentStyle">
                    <RouterView></RouterView>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
import {defineComponent, onMounted, reactive} from 'vue';
import {useStore} from 'vuex';
import {onBeforeRouteLeave} from 'vue-router';
import {MenuTree} from 'c/MenuTree';
import {setupEmptyStore} from '@/setup/setupEmptyStore';
import Watermark from '@/utils/watermark';
import Header from './Header.vue';
import Breadcrumb from './Breadcrumb.vue';
import RouterView from './RouterView.vue';
export default defineComponent({
    components: {MenuTree, Breadcrumb, Header, RouterView},
    setup() {
        const title = 'E商城';
        document.title = title;
        const store = useStore();

        onBeforeRouteLeave((to, from, next) => {
            console.log('current route', to, from, store);
            if (to.path === '/dashboard') {
                setupEmptyStore(store);
                Watermark.remove();
                sessionStorage.removeItem('store');
            }
            next();
        });

        window.addEventListener('beforeunload', function() {
            sessionStorage.setItem('store', JSON.stringify(store.state));
        });
        if (sessionStorage.getItem('store')) {
            const storageStore = JSON.parse(sessionStorage.getItem('store'));
            store.replaceState(Object.assign({}, store.state, storageStore));
        }
        onMounted(() => {
            Watermark.set(new Date().getTime() + '9527');
        });
        const contentStyle = reactive({
            background: '#fff',
            padding: '16px',
            margin: 0,
            minHeight: '280px',
            overflowY: 'auto'
        });
        return {
            contentStyle
        };
    }
});
</script>
<style>
.ant-layout {
    height: 100%;
    min-height: 620px;
}
</style>
