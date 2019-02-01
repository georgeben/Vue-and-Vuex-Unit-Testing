import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import UpdateItem from './components/UpdateItem.vue';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        guest: true,
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/update/:id',
      name: 'UpdateItem',
      component: UpdateItem,
      meta: {
        requiresAuth: true,
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log("To",to);
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('user') == null){
      next({
        path: '/login',
        params: {nextUrl: to.fullPath}
      })
    }else{
      next();
    }
  }else if(to.matched.some(record => record.meta.guest)){
    if(localStorage.getItem('user') == null){
      next()
    }else{
      next({name: 'Dashboard'})
    }
  }else{
    next();
  }

})

export default router;
