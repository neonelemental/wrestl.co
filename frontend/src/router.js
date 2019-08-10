import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/roster",
      component: () => import('./views/roster.vue'),
      children: [
        {
          path: '',
          name: 'roster/index',
          component: () => import('./views/roster/index.vue')
        }
      ]
    },
    {
      path: "/talent",
      component: () => import('./views/talent.vue'),
      children: [
        {
          path: '',
          name: 'talent/index',
          component: () => import('./views/talent/index.vue'),
        },
      ]
    },
    {
      path: "/feuds",
      component: () => import('./views/feuds.vue'),
      children: [
        {
          path: '',
          name: 'feuds/index',
          component: () => import('./views/feuds/index.vue'),
        },
        {
          path: '/feuds/new',
          name: 'feuds/new',
          component: () => import('./views/feuds/new.vue')
        }
      ]
    },
    {
      path: "/calendar",
      component: () => import('./views/calendar.vue'),
      children: [
        {
          path: '',
          name: 'calendar/index',
          component: () => import('./views/calendar/index.vue'),
        },
      ]
    },

    {
      path: "/gossip",
      component: () => import('./views/gossip.vue'),
      children: [
        {
          path: '',
          name: 'gossip/index',
          component: () => import('./views/gossip/index.vue'),
        },
      ]
    },
  ]
});
