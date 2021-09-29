<template>
    <div class="dashboard">
        <div class="card" v-for="item in sysCardList" :key="item.id">
            <div @click="handleClickRedirect(item)">
                <h3>
                    {{ item.title }}
                </h3>
                <div>
                    content
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent, reactive} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
export default defineComponent({
    name: '',
    components: {},
    props: {},
    setup() {
        const sysCardList = reactive([
            {
                id: 1,
                title: '个人空间',
                key: 'personl',
                hashPath: '/personl-space'
            },
            {
                id: 2,
                title: '商业中心',
                key: 'front',
                hashPath: '/shop-center'
            },
            {
                id: 3,
                title: '管理中心',
                key: 'back',
                hashPath: '/backstage'
            }
        ]);
        const router = useRouter();
        const store = useStore();
        const handleClickRedirect = (item) => {
            store.commit('setCurrentSystem', item.key);
            const routerConfigure = import(`@/router/${item.key}`);
            routerConfigure
                .then(async (res) => {
                    const {routes} = res;
                    routes && (await router.addRoute(routes));
                    router.push(item.hashPath);
                })
                .catch((err) => {
                    return err;
                });
        };

        return {
            sysCardList,
            handleClickRedirect
        };
    }
});
</script>

<style lang="less" scoped>
.dashboard {
    display: flex;
    justify-content: center;
    background-image: url('../assets/bc-img.jpeg');
    align-items: center;
    width: 100%;
    height: 100%;
    & > .card {
        width: 24%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        & > div {
            width: 80%;
            height: 80%;
            border-radius: 6px;

            background-color: rgba(1, 1, 1, 0.4);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: Verdana, Geneva, Tahoma;

            & > h3 {
                width: 100%;
                line-height: 40px;
                text-align: center;
                color: white;
                border-bottom: 2px solid rgba(245, 245, 245, 0.5);
            }
        }
        & > div:hover {
            animation: changeColor 0.3s infinite;
        }
    }
}
@keyframes changeColor {
    0% {
        box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0);
    }
    50% {
        box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.8);
    }
    100% {
        box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0);
    }
}
</style>
