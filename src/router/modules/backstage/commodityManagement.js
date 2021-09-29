export const commodityManagement = {
    path: '/commodity-management',
    name: 'CommodityManagement',
    component: () =>
        import(/* webpackChunkName: "commodity-management" */ '@/views/commodityManagement/index.vue')
};
