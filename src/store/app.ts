// Utilities
import {defineStore} from 'pinia';
import {ref} from 'vue';
import {Movie} from 'tmdb-ts';
import router from '@/router';
import tmdbAPI from '@/lib/tmdb';

export const useAppStore = defineStore('app', () => {

  const searchResults = ref<Movie[]>([]);
  const searchText = ref<string>('');
  const isSearching = ref<boolean>(false);

  async function search(query: string) {
    if (isSearching.value) return;

    searchText.value = query.trim();

    if (searchText.value.length === 0) {
      return router.push({name: 'Home'});
    }

    router.push({ name: 'Search', query: { searchText: searchText.value }})
    isSearching.value = true;

    const response = await tmdbAPI.search.movies({query: searchText.value});
    searchResults.value = response.results;

    isSearching.value = false;
  }

  return {
    // State
    searchResults,
    searchText,
    isSearching,

    // Getters

    // Actions
    search,
  };
});
