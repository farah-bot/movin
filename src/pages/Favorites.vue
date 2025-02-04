<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Favorites</h1>
    <div v-if="favorites.length" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <MovieCard v-for="movie in favorites" :key="movie.id" :movie="movie" />
    </div>
    <div v-else>
      <p>No favorite movies added yet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MovieCard from '../components/MovieCard.vue';
import type { Movie } from '../types';

const favorites = ref<Movie[]>([]);

const loadFavorites = () => {
  const fav = localStorage.getItem('favorites');
  if (fav) {
    favorites.value = JSON.parse(fav);
  }
};

onMounted(() => {
  loadFavorites();
});
</script>
