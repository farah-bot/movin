<template>
  <div class="p-4">
    <SearchBar @search="handleSearch" />
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import MovieCard from '../components/MovieCard.vue';
import { getMovies } from '../services/tmdbService'; 
import type { Movie } from '../types';

const movies = ref<Movie[]>([]);

const handleSearch = async (query: string) => {
  if (query.length > 2) {
    movies.value = await getMovies(query);
  } else {
    movies.value = [];
  }
};
</script>

