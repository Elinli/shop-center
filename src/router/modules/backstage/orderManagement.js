export const orderManagement = {
    path: '/order-management',
    name: 'OrderManagement',
    component: () =>
        import(/* webpackChunkName: "order-management" */ '@/views/orderManagement/index.vue')
};
