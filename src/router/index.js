import Vue from 'vue'
import Router from 'vue-router'
import father from '@/components/father'
import second from '@/components/second'
import HomeIndex from '@/components/HomeIndex';


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'father',
      component: father
    },
    {
      path: '/second',
      name: 'second',
      component: second
    },
    {
      path: '/homeIndex',
      name: 'homeIndex',
      component: HomeIndex,
    },
  ]
})
