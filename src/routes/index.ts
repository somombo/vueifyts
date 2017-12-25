import Vue from 'vue'
import Router from 'vue-router'
import Bar from './Bar.vue'
import Foo from './Foo.vue'
import HelloWorld from './HelloWorld.vue'
import Home from './Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/home', component: Home, alias: '/'  },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})
