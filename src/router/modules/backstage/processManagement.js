export const processManagement = {
    path: '/process-management',
    name: 'ProcessManagement',
    component: () =>
        import(/* webpackChunkName: "process-management" */ '@/views/processManagement/index.vue')
};
