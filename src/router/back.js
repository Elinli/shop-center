import BasicLayout from '@/layouts/BasicLayout.vue';
import {modules} from './modules/backstage/index';

export const routes = {
    path: '/backstage',
    name: 'Backstage',
    component: BasicLayout,
    redirect: '/workbench',
    children: [...Object.values(modules)]
};
