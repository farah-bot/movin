<template>
  <Card class="p-4">
    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
      <img 
        :src="movie?.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : 'default.jpg'" 
        alt="Movie Poster" 
        class="w-full"
      />
      <div class="p-4">
        <h3 class="text-lg font-bold">{{ movie?.title }}</h3>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Card from 'primevue/card';
import type { Movie } from '@/types';

defineProps<{
  movie?: Movie;
}>();
</script>

<style scoped>
</style>
