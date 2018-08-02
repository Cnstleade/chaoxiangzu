import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      component: resolve => require(['../components/HelloWorld.vue'], resolve),
      children: [

        // {
        //   path: '/',
        //   redirect: '/home'
        // },


        // {
        //   path: '/home',
        //   component: resolve => require(['../components/page/home.vue'], resolve)
        // },        
      ]
    },
    {
      path: '/home',
      component: resolve => require(['../components/page/home.vue'], resolve)
    },
    {
      path: '/detail',
      component: resolve => require(['../components/detail.vue'], resolve)
    },
    {
      path: '/search',
      component: resolve => require(['../components/search.vue'], resolve)
    },
    {
      path: '/register',
      component: resolve => require(['../components/register.vue'], resolve)
    },   
    {
      path: '/userLogin',
      component: resolve => require(['../components/login.vue'], resolve)
    },        
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
      path: '/admin',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {
        title: '房源详情'
      },
      children: [{
          path: '/',
          redirect: '/goods1'
        },

        {
          path: '/goods1',
          component: resolve => require(['../components/page/goods/goods1.vue'], resolve),
          meta: {
            title: '房源详情'
          },
        }, {
          path: '/goods3',
          component: resolve => require(['../components/page/goods/goods3.vue'], resolve),
          meta: {
            title: '已租房源'
          },
        }, {
          path: '/goods4',
          component: resolve => require(['../components/page/goods/goods4.vue'], resolve),
          meta: {
            title: '维护中房源'
          },
        }, {
          path: '/goods5',
          component: resolve => require(['../components/page/goods/goods5.vue'], resolve),
          meta: {
            title: '待租房源'
          },
        }, {
          path: '/order1',
          component: resolve => require(['../components/page/order/order1.vue'], resolve),
          meta: {
            title: '有效订单'
          },
        }, {
          path: '/order2',
          component: resolve => require(['../components/page/order/order2.vue'], resolve),
          meta: {
            title: '订单中心'
          },
        }, {
          path: '/logging',
          component: resolve => require(['../components/page/systemManagement/managementLog.vue'], resolve),
          meta: {
            title: '日志列表',
            role: 'logging'
          }
        },
        {
          path: '/passwordManagement',
          component: resolve => require(['../components/page/systemManagement/passwordManagement.vue'], resolve),
          meta: {
            title: '密码修改',
            role: 'passwordManagement'
          }
        },
        {
          path: '/role',
          component: resolve => require(['../components/page/systemManagement/authorityManagement.vue'], resolve),
          meta: {
            title: '权限管理',
            role: 'role'
          }
        },
        {
          path: '/user',
          component: resolve => require(['../components/page/systemManagement/userManagement.vue'], resolve),
          meta: {
            title: '用户管理',
            role: 'user'
          }
        },
        {
          path: '/managementLog',
          component: resolve => require(['../components/page/systemManagement/managementLog.vue'], resolve),
          meta: {
            title: '日志管理',
            role: 'managementLog'
          }
        },
        {
          path: '/authorityManagement',
          component: resolve => require(['../components/page/systemManagement/authorityManagement.vue'], resolve),
          meta: {
            title: '权限管理',
            role: 'authorityManagement'
          }
        },
        {
          path: '/user1',
          component: resolve => require(['../components/page/system/user1.vue'], resolve),
          meta: {
            title: '售后管理',
            role: 'authorityManagement'
          }
        },
      ]
    }
  ]
})
