import * as vueRouter from 'vue-router';
import BugDetailsPage from './BugDetailsPage.vue';
import BugsPage from './BugsPage.vue';
import NewBugPage from './NewBugPage.vue';

export let router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bugs',
      name: 'BugsPage',
      component: BugsPage,
    },
    {
      path: '/bug/new',
      name: 'NewBugPage',
      component: NewBugPage,
    },
    {
      path: '/bug/:bugID',
      name: 'BugDetailsPage',
      component: BugDetailsPage,
      props: true,
    },
  ]
});
