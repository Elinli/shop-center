export const storesManagement = {
    path: '/stores-management',
    name: 'StoresManagement',
    component: () =>
        import(/* webpackChunkName: "stores-management" */ '@/views/storesManagement/index.vue')
};
