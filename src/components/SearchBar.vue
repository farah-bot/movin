<template>
  <div class="p-2">
    <InputText 
      v-model="search" 
      placeholder="Cari film..." 
      class="w-full p-2" 
      @keyup.enter="emitSearch" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import InputText from 'primevue/inputtext';

const search = ref('');
const emit = defineEmits<{
  (e: 'search', query: string): void;
}>();

const emitSearch = () => {
  emit('search', search.value);
};
</script>

<style scoped>
</style>
