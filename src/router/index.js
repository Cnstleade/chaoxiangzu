import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: resolve => require(['../components/page/home.vue'], resolve)
    },
    {
      path: '/admin',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {
        title: '自述文件'
      },
      children: [{
        path: '/goods1',
        component: resolve => require(['../components/page/goods/goods1.vue'], resolve),
        meta: {
          title: '自述文件'
        },
      }]
    }
  ]
})
