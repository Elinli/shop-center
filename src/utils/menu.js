export const staticMenuData = [
    {
        title: '工作台',
        key: '1',
        path: '/workbench',
        icon: 'WindowsOutlined',
        name: 'workbench',
        menutype: '',
        orderNo: 0,
        meta: {
            title: '工作台',
            parentPath: '',
            parentKey: 'root'
        }
    },
    {
        title: '客户管理',
        key: '2',
        icon: 'TeamOutlined',
        meta: {
            title: '客户管理',
            parentPath: '',
            parentKey: 'root'
        },
        orderNo: 1,
        name: 'customerManagement',
        path: '/customer-management'
    },
    {
        title: '流程管理',
        key: '3',
        children: [],
        path: '/process-management',
        name: 'processManagement',
        orderNo: 6,
        icon: 'FieldBinaryOutlined',
        meta: {
            title: '流程管理',
            parentPath: '',
            parentKey: 'root'
        }
    },
    {
        title: '商铺管理',
        key: '4',
        path: '/stores-management',
        icon: 'ApartmentOutlined',
        meta: {
            title: '商铺管理',
            parentPath: '',
            parentKey: 'root'
        },
        orderNo: 2
    },
    {
        title: '商品管理',
        key: '5',
        path: '/commodity-management',
        icon: 'ApartmentOutlined',
        meta: {
            title: '商品管理',
            parentPath: '',
            parentKey: 'root'
        },
        orderNo: 3
    },
    {
        title: '订单管理',
        key: '6',
        path: '/order-management',
        icon: 'ApartmentOutlined',
        meta: {
            title: '订单管理',
            parentPath: '',
            parentKey: 'root'
        },
        orderNo: 4
    },
    {
        title: '系统管理',
        key: 'sub1',
        path: '/system-management',
        icon: 'SlackOutlined',
        meta: {
            title: '系统管理',
            parentPath: '',
            parentKey: 'root'
        },
        orderNo: 7,
        children: [
            {
                title: '权限管理',
                key: 'sub1-1',
                path: '/system-management/authority',
                meta: {
                    title: '权限管理',
                    parentPath: '/system-management',
                    parentKey: 'sub1'
                }
            },
            {
                title: '菜单管理',
                key: 'sub1-2',
                path: '/system-management/menu',
                meta: {
                    title: '菜单管理',
                    parentPath: '/system-management',
                    parentKey: 'sub1'
                }
            },
            {
                title: '字典管理',
                key: 'sub1-3',
                path: '/system-management/options',
                meta: {
                    title: '字典管理',
                    parentPath: '/system-management',
                    parentKey: 'sub1'
                }
            },
            {
                title: '角色管理',
                key: 'sub1-4',
                path: '/system-management/role',
                meta: {
                    title: '角色管理',
                    parentPath: '/system-management',
                    parentKey: 'sub1'
                }
            }
        ]
    },

    {
        title: '数据报表',
        key: 'sub2',
        path: '/report-statistics',
        icon: 'ConsoleSqlOutlined',
        orderNo: 5,
        meta: {
            title: '数据报表',
            parentPath: '',
            parentKey: 'root'
        },
        children: [
            {
                title: '财政报表',
                key: 'sub2-1',
                path: '/report-statistics/finace',
                meta: {
                    title: '财政报表',
                    parentPath: '/report-statistics',
                    parentKey: 'sub2'
                }
            },
            {
                title: '售额统计',
                key: 'sub2-2',
                path: '/report-statistics/sales',

                meta: {
                    title: '售额统计',
                    parentPath: '/report-statistics',
                    parentKey: 'sub2'
                }
            }
        ]
    }
];
