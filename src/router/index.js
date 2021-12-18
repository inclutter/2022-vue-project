import Vue from "vue";
import VueRouter from "vue-router";
import AuthenticationLayout from "../layouts/authentication/AuthenticationLayout";
import DefaultLayout from "../layouts/default/DefaultLayout";
import PageLayout from "../layouts/page/PageLayout";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/test',
        name: 'Test',
        component: () => import('../views/Test')
      },{
        path: '/',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "views-dash-board" */ '../views/Dashboard')
      },
      {
        path: 'grid-system',
        name: 'GridSystem',
        component: () => import(/* webpackChunkName: "views-grid-system" */ '../views/GridSystem')
      },
      {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: () => import(/* webpackChunkName: "views-grid-list-page" */ '../views/GridListPage')
      },
      {
        path: '/breakpoints',
        name: 'Breakpoints',
        component: () => import(/* webpackChunkName: "views-breakpoints" */ '../views/Breakpoints')
      },
      {
        path: '/typography',
        name: 'Typography',
        component: () => import(/* webpackChunkName: "views-typography" */ '../views/Typography')
      },
      {
        path: '/tables/basic-table',
        name: 'BasicTable',
        component: () => import(/* webpackChunkName: "views-basic-tables" */ '../views/table/BasicTable')
      },
      {
        path: '/tables/app-table',
        name: 'AppTable',
        component: () => import(/* webpackChunkName: "views-app-tables" */ '../views/table/AppTable')
      },
      {
        path: '/forms/validation-form',
        name: 'ValidationForm',
        component: () => import(/* webpackChunkName: "views-forms" */ '../views/form/ValidationForms')
      },
      {
        path: '/forms/app-form',
        name: 'AppForm ',
        component: () => import(/* webpackChunkName: "views-forms" */ '../views/form/AppForms')
      },
      {
        path: '/icons',
        name: 'Icons',
        component: () => import(/* webpackChunkName: "views-icons" */ '../views/Icons')
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: () => import(/* webpackChunkName: "views-buttons" */ '../views/Buttons')
      }
    ],
  },
  {
    path: '/authentication',
    component: AuthenticationLayout,
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "views-authentication-sign-in" */ '../views/authentication/SignIn')
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "views-authentication-sign-up" */ '../views/authentication/SignUp')
      },
    ]
  },
  {
    path: '/page',
    component: PageLayout,
    children: [
      {
        path: 'product-list',
        name: 'ProductList',
        component: () => import(/* webpackChunkName: "views-page-product-list" */ '../views/page/ProductList')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
