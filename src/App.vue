<template>
  <Navbar @toggle-theme="toggleTheme" />
  <RouterView />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';

const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
const theme = ref<'light' | 'dark'>(savedTheme || 'light');

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme.value);
};
</script>

<style>
</style>
