import Vue from 'vue'
import Router from 'vue-router'
import LoginBar from '@/components/LoginForm.vue'
import registerBar from '@/components/registerForm.vue'
import home from '@/view/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'loginBar',
      component: LoginBar
    },
    {
      path: '/register',
      name: 'register',
      component:  registerBar
    }
  ]
})
