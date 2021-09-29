import BasicLayout from '@/layouts/BasicLayout.vue';

export const backstageRoute = {
    path: '/frontend',
    name: 'Frontend',
    component: BasicLayout,
    redirect: '/home',
    children: []
};
