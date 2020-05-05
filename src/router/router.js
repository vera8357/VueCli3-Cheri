import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      name: 'Index',
      path: '/',
      component: () => import('../views/Index.vue'),
      children: [
        {
          name: 'Home',
          path: '',
          component: () => import('../views/Home.vue')
        },
        {
          name: 'Product',
          path: 'productList',
          component: () => import('../views/Products.vue')
        },
        {
          name: 'ProductInfo',
          path: 'product/:id',
          component: () => import('../views/Productinfo.vue')
        },
        {
          name: 'Discount',
          path: 'discount',
          component: () => import('../views/Discount.vue')
        },
        {
          name: 'CheckOut',
          path: 'CheckOut',
          component: () => import('../views/CheckOut.vue')
        },
        {
          name: 'comfirmOrder',
          path: 'comfirm_order/:id',
          component: () => import('../views/ComfirmOrder.vue')
        }
      ]
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('../views/admin/Login.vue')
    },
    {
      name: 'Admin',
      path: '/admin',
      component: () => import('../views/admin/Sidebar.vue'),
      meta: { requiredUser: true },
      children: [
        {
          name: 'Products',
          path: 'products',
          component: () => import('../views/admin/Products.vue'),
          meta: { requiredUser: true }
        },
        {
          name: 'orders',
          path: 'orders',
          component: () => import('../views/admin/Orders.vue'),
          meta: { requiredUser: true }
        },
        {
          name: 'coupons',
          path: 'coupons',
          component: () => import('../views/admin/Coupons.vue'),
          meta: { requiredUser: true }
        }
      ]
    }
  ]
})
