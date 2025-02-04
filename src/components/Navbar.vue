<template>
  <Toolbar class="p-4">
    <template #start>
      <router-link to="/" class="text-xl font-bold no-underline text-white">Movin</router-link>
    </template>
    <template #end>
      <div class="flex gap-4">
        <router-link to="/" class="hover:underline text-white">Home</router-link>
        <router-link to="/favorites" class="hover:underline text-white">Favorites</router-link>
      </div>
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Toolbar from 'primevue/toolbar';
</script>

<style scoped>
</style>
