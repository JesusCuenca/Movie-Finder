// Composables
import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/DiscoverFragment.vue'),
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '@/views/SearchFragment.vue'),
      },
    ],
  },
  {
    path: '/movie/:movieId',
    props: true,
    component: () => import(/* webpackChunkName: "movie" */ '@/views/MovieView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
