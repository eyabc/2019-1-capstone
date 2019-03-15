import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const view = './views'


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '',
    component: 
    () => import(`${view}/main.vue`),  
  },
  {
    path: '/map',
    component: {
     default: () => import(`${view}/main.vue`),
     leftAside:() => import(`${view}/leftAside.vue`),
     rightAside: () => import(`${view}/rightAside.vue`)
   },
   children: [
   ]
 },
 ]
})
