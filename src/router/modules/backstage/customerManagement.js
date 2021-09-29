
export const customerManagement = {
    path: '/customer-management',
    name: 'CustomerManagement',
    component: () =>
        import(
            /* webpackChunkName: "customer-management" */ '@/views/customerManagement/index.vue'
        ),
};
