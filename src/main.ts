import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import MovieDetail from '@/pages/MovieDetail.vue';
import Favorites from '@/pages/Favorites.vue';

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

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.use(createPinia());
app.use(router);
app.mount('#app');
