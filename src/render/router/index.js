import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/usermanager",
    name:"用户管理",
    component:() => import('../views/usermanager.vue')
  },
  {
    path:"/productmanager",
    name:"产品管理",
    component:() => import('../views/productmanager.vue')
  },
  {
    path:"/actmanager",
    name:"动作管理",
    component:() => import('../views/actmanager.vue')
  },
  {
    path:"/auditmanager",
    name:"审计管理",
    component:() => import('../views/auditmanager.vue')
  },
  {
    path:"/staffmanager",
    name:"人员管理",
    component:() => import('../views/staffmanager.vue')
  },
  {
    path:"/systemconfig",
    name:"系统设置",
    component:() => import('../views/systemconfig.vue')
  },
  {
    path: '/',
    component: () => import("../views/userview.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
