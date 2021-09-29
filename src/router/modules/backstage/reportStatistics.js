import RouterView from '@/layouts/RouterView.vue';
export const reportStatistics = {
    path: '/report-statistics',
    name: 'ReportStatistics',
    component: RouterView,
    children: [
        {
            path: 'finace',
            name: 'Finace',
            component: () => import(/* webpackChunkName: "report-statistics" */ '@/views/reportStatistics/finace/index.vue')
        },
        {
            path: 'sales',
            name: 'Sales',
            component: () =>
                import(/* webpackChunkName: "report-statistics" */ '@/views/reportStatistics/sales/index.vue')
        }
    ]
}

