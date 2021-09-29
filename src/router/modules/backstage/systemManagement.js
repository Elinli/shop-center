import RouterView from '@/layouts/RouterView.vue';
export const systemManagement = {
    path: '/system-management',
    name: 'SystemManagement',
    component: RouterView,
    children: [
        {
            path: 'authority',
            name: 'Authority',
            component: () =>
                import(
                    /* webpackChunkName: "system-management" */ '@/views/systemManagement/authorityManagement/index.vue'
                )
        },
        {
            path: 'menu',
            name: 'Menu',
            component: () =>
                import(/* webpackChunkName: "system-management" */ '@/views/systemManagement/menuManagement/index.vue')
        },
        {
            path: 'options',
            name: 'Options',
            component: () =>
                import(/* webpackChunkName: "system-management" */ '@/views/systemManagement/optionsManagement/index.vue')
        },
        {
            path: 'role',
            name: 'Role',
            component: () =>
                import(/* webpackChunkName: "system-management" */ '@/views/systemManagement/roleManagement/index.vue')
        }
    ]
};
