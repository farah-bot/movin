import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import MovieDetail from '@/pages/MovieDetail.vue';
import Favorites from '@/pages/Favorites.vue';

const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
const theme = savedTheme || 'light';

const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: MovieDetail },
  { path: '/favorites', component: Favorites },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(PrimeVue, { theme });

app.use(createPinia());
app.use(router);
app.mount('#app');
