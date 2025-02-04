import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movies', {
  state: () => ({
    favorites: [] as Array<{ id: number; title: string; image: string }>,
  }),
  actions: {
    addFavorite(movie: { id: number; title: string; image: string }) {
      if (!this.favorites.some(fav => fav.id === movie.id)) {
        this.favorites.push(movie);
      }
    },
    removeFavorite(id: number) {
      this.favorites = this.favorites.filter(movie => movie.id !== id);
    },
  },
});
