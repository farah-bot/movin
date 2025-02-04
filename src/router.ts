import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import MovieDetail from '@/pages/MovieDetail.vue';
import Favorites from '@/pages/Favorites.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: MovieDetail },
  { path: '/favorites', component: Favorites }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
