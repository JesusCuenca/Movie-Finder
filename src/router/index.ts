// Composables
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes : RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
    props: (route) => ({searchText: route.query.searchText}),
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
