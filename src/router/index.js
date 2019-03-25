import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import MainPage from '@/components/MainPage.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: MainPage,
    },
    {
      path:'/Register',
      component: Register,
    },
    {
      path:'/Login',
      component: Login,
    },
  ]
})
