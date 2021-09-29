<template>
    <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
            Welcome,hello {{ currentDate }}
            <DownOutlined />
        </a>
        <template #overlay>
            <a-menu @click="handleClickRedirectPlatform">
                <a-menu-item key="platform">平台中心</a-menu-item>
                <a-menu-item key="signout">退出系统</a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>
<script>
import {defineComponent, computed} from 'vue';
import {useRouter} from 'vue-router';
import {setupEmptyStore} from '@/setup/setupEmptyStore';
import {useStore} from 'vuex';
import * as dayjs from 'dayjs';
export default defineComponent({
    setup() {
        const router = useRouter();
        const store = useStore();
        const handleClickRedirectPlatform = ({key}) => {
            if (key === 'platform') {
                setupEmptyStore(store);
                router.push('/dashboard');
            }
        };
        const currentDate = computed(() => dayjs().format('YYYY/MM/DD'));
        return {handleClickRedirectPlatform, currentDate};
    }
});
</script>

<style lang="less" scoped></style>
