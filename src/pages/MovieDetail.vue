<template>
  <div class="p-6">
    <p-card>
      <p-grid class="gap-6">
        <p-col :span="12">
          <img
            :src="movie?.poster_path ? imageBase + movie.poster_path : 'default.jpg'"
            alt="Movie Poster"
            class="w-full rounded-lg"
          />
        </p-col>
        <p-col :span="12">
          <p-card>
            <h3 class="mb-4">{{ movie?.title }}</h3>
            <p class="mb-4">{{ movie?.overview }}</p>
            <p-button label="Add to Favorites" class="p-button-soft" @click="addToFavorites" />
          </p-card>
        </p-col>
      </p-grid>
    </p-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getMovieDetail } from '@/services/tmdbService';
import type { Movie } from '@/types';
import PCard from 'primevue/card';
import PButton from 'primevue/button';

const route = useRoute();
const movie = ref<Movie | null>(null);
const imageBase = 'https://image.tmdb.org/t/p/w500';

onMounted(async () => {
  const id = route.params.id as string;
  movie.value = await getMovieDetail(id);
});

const addToFavorites = () => {
  if (movie.value) {
    let fav = localStorage.getItem('favorites');
    let favorites = fav ? JSON.parse(fav) : [];
    favorites.push(movie.value);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Added to favorites!');
  }
};
</script>
