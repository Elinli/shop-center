import {createRouter, createWebHashHistory} from 'vue-router';

import {setupRouter} from '../setup/setupRouter';

const routes = [
    
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登陆'
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
            title: '平台中心'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
    },
    {
        path: '/error-page',
        name: 'ErrorPage',
        meta: {
            title: '错误页面'
        },
        component: () => import(/* webpackChunkName: "error" */ '../views/ErrorPage.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

setupRouter(router);

export default router;
