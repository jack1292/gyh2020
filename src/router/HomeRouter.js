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
    path: 'index',
    meta: {
      title: '2020北京公益慈善汇展-专题展',
    },
    component: () => import('../views/Page/special'),
  },
  {
    path: 'index',
    meta: {
      title: '2020北京公益慈善汇展-组织展',
    },
    component: () => import('../views/Page/organization'),
  },
  {
    path: 'index',
    meta: {
      title: '2020北京公益慈善汇展-项目展',
    },
    component: () => import('../views/Page/project'),
  },
  {
    path: 'index',
    meta: {
      title: '2020北京公益慈善汇展-慈善展',
    },
    component: () => import('../views/Page/charitable'),
  },
  {
    path: 'index',
    meta: {
      title: '2020北京公益慈善汇展-前沿论坛',
    },
    component: () => import('../views/Page/forum'),
  },
  {
    path: 'index',
    meta: {
      title: '2020北京公益慈善汇展-消费扶贫',
    },
    component: () => import('../views/Page/alleviation'),
  },
  {
    path: 'template1',
    meta: {
      title: '2020北京公益慈善汇展-机构信息',
    },
    component: () => import('../views/Page/Org/Template1'),
  },
  {
    path: 'template2',
    meta: {
      title: '2020北京公益慈善汇展-机构信息',
    },
    component: () => import('../views/Page/Org/Template1'),
  },
  {
    path: 'template3',
    meta: {
      title: '2020北京公益慈善汇展-机构信息',
    },
    component: () => import('../views/Page/Org/Template1'),
  },
  {
    path: 'template4',
    meta: {
      title: '2020北京公益慈善汇展-机构信息',
    },
    component: () => import('../views/Page/Org/Template1'),
  },
  {
    path: 'template5',
    meta: {
      title: '2020北京公益慈善汇展-机构信息',
    },
    component: () => import('../views/Page/Org/Template1'),
  },
  {
    path: 'template6',
    meta: {
      title: '2020北京公益慈善汇展-机构信息',
    },
    component: () => import('../views/Page/Org/Template1'),
  }
]
export default HomeRouter