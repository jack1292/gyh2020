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