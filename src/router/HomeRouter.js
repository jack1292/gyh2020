const HomeRouter = [
    {
        path: '',
        redirect: 'index'
    },
    {
        path: 'index',
        meta: {
            title: '2020北京公益慈善汇展',
        },
        component: () => import('../views/Page/index'),
    },
    {
        path: 'special',
        meta: {
            title: '2020北京公益慈善汇展-专题展',
        },
        component: () => import('../views/Page/special'),
    },
    {
        path: 'organization',
        meta: {
            title: '2020北京公益慈善汇展-组织展',
        },
        component: () => import('../views/Page/organization'),
    },
    {
        path: 'orgList',
        meta: {
            title: '2020北京公益慈善汇展-组织展',
        },
        component: () => import('../views/Page/orgList'),
    },
    {
        path: 'orgOtherList',
        meta: {
            title: '2020北京公益慈善汇展-组织展',
        },
        component: () => import('../views/Page/orgOtherList'),
    },
    {
        path: 'jd',
        meta: {
            title: '2020北京公益慈善汇展-组织展',
        },
        component: () => import('../views/Page/jd'),
    },
    {
        path: 'fwzx',
        meta: {
            title: '2020北京公益慈善汇展-组织展',
        },
        component: () => import('../views/Page/fwzx'),
    },
    {
        path: 'fhzx',
        meta: {
            title: '2020北京公益慈善汇展-组织展',
        },
        component: () => import('../views/Page/fhzx'),
    },
    {
        path: 'bbjd',
        meta: {
            title: '2020北京公益慈善汇展-组织展',
        },
        component: () => import('../views/Page/bbjd'),
    },
    {
        path: 'dbjd',
        meta: {
            title: '2020北京公益慈善汇展-组织展',
        },
        component: () => import('../views/Page/dbjd'),
    },
    {
        path: 'project',
        meta: {
            title: '2020北京公益慈善汇展-项目展',
        },
        component: () => import('../views/Page/project'),
    },
    {
        path: 'charitable',
        meta: {
            title: '2020北京公益慈善汇展-慈善展',
        },
        component: () => import('../views/Page/charitable'),
    },
    {
        path: 'charitableDetail',
        meta: {
            title: '2020北京公益慈善汇展-慈善展',
        },
        component: () => import('../views/Page/charitableDetail'),
    },
    {
        path: 'scl',
        meta: {
            title: '2020北京公益慈善汇展-慈善展',
        },
        component: () => import('../views/Page/scl'),
    },
    {
        path: 'fl',
        meta: {
            title: '2020北京公益慈善汇展-慈善展',
        },
        component: () => import('../views/Page/fl'),
    },
    {
        path: 'csf',
        meta: {
            title: '2020北京公益慈善汇展-慈善展',
        },
        component: () => import('../views/Page/csf'),
    },
    {
        path: 'forum',
        meta: {
            title: '2020北京公益慈善汇展-前沿论坛',
        },
        component: () => import('../views/Page/forum'),
    },
    {
        path: 'alleviation',
        meta: {
            title: '2020北京公益慈善汇展-消费扶贫',
        },
        component: () => import('../views/Page/alleviation'),
    },
    {
        path: 'bank',
        meta: {
            title: '2020北京公益慈善汇展',
        },
        component: () => import('../views/Page/bank'),
    },
    {
        path: 'goods',
        meta: {
            title: '公益产品',
        },
        component: () => import('../views/Page/goods'),
    },
    {
        path: 'about',
        meta: {
            title: '2020北京公益慈善汇展-关于汇展',
        },
        component: () => import('../views/Page/about'),
    },
    {
        path: 'call',
        meta: {
            title: '2020北京公益慈善汇展-联系我们',
        },
        component: () => import('../views/Page/call'),
    }
]
export default HomeRouter