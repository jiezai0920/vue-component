import VueRouter from 'vue-router';

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/tips',
      name: 'Tips',
      children: [
        {
          path: '/tips/iconpage',
          name: 'iconpage',
          component: require('./components/tips/IconPage.vue'),
        },
      ],
      component: require('./components/tips/Index.vue'),
    },
    {
      path: '/styles',
      name: 'Styles',
      children: [
        {
          path: '/styles/button',
          name: 'button',
          component: require('./components/styles/ButtonPage.vue'),
        },
      ],
      component: require('./components/styles/Index.vue'),
    },
  ],
});

export default router;
