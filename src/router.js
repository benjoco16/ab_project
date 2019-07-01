import Vue from 'vue'
import Router from 'vue-router'
import HomeMain from './views/Home'
import Home from './views/Home/Home.vue'
import OurCommunities from './views/Home/OurCommunities.vue'
import Programs from './views/Home/Programs.vue'
import ProgramItem from './views/Home/ProgramItem.vue'
import CommunityItem from './views/Home/CommunityItem.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      name: 'homeMain',
      component: HomeMain,
      redirect: { name: 'home' },
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/our-communities',
          name: 'our-communities',
          component: OurCommunities
        },
        {
          path: '/our-programs',
          name: 'our-programs',
          component: Programs
        },
        {
          path: '/our-programs/program-item',
          name: 'program-item',
          component: ProgramItem
        },
        {
          path: '/our-community/community-item',
          name: 'community-item',
          component: CommunityItem
        }
      ]
    },
    {
      path: '/make-an-impact',
      name: 'make-impact',
      // route level code-splitting
      // this generates a separate chunk (make-impact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "make-impact" */ './views/MakeImpact.vue')
    }
  ]
})
