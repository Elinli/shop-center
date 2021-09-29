<template>
    <div class="home">
        <a-form />
        <a-button type="primary">click-find</a-button>
        <h2>{{ totalPrice }}</h2>
        <ul>
            <li v-for="item in orderCommodity" :key="item.name">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form';
import {onMounted, computed} from 'vue';
import {useStore, mapGetters} from 'vuex';
export default {
    name: 'home',
    components: {
        'a-form': Form
    },
    setup() {
        const store = useStore();
        store.dispatch('dispatchOrderCommodity', [{name: '哈密瓜', price: 23, num: 2}]);
        const orderCommodity = computed(() => store.getters.orderCommodity);
        const totalPrice = computed(mapGetters(['totalPrice']).totalPrice.bind({$store: store}));
        setTimeout(() => {
            store.dispatch('dispatchOrderCommodity', [
                {name: '哈密瓜', price: 23, num: 2},
                {name: '水蜜桃', price: 5, num: 5}
            ]);
        }, 2000);
        onMounted(() => {});
        return {
            totalPrice,
            orderCommodity
        };
    }
};
</script>
<style lang="less" scoped></style>
