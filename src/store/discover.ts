import {defineStore} from 'pinia';
import tmdbAPI from '@/lib/tmdb';
import {ref} from 'vue';
import {Movie} from 'tmdb-ts';

export const useDiscoverStore = defineStore('discover', () => {
  const movies = ref<Movie[]>([]);
  const isLoading = ref<boolean>(false);

  async function discoverMovies() {
    isLoading.value = true;
    const search = await tmdbAPI.discover.movie();
    movies.value = search.results;
    isLoading.value = false;
  }

  discoverMovies();

  return {
    // State
    movies,
    isLoading,

    // Actions
    discoverMovies,
  };
});
