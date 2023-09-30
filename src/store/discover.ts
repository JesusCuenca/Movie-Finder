import {defineStore} from 'pinia';
import tmdbAPI from '@/lib/tmdb';
import {ref} from 'vue';
import {Movie} from 'tmdb-ts';
import {MoviesPlayingNow, PopularMovies, TopRatedMovies, UpcomingMovies} from 'tmdb-ts/dist/types';

const listTypes = {
  'now-playing': 'Cartelera',
  'popular': 'Populares',
  'top-rated': 'Mejores valoardas',
  'upcoming': 'Próximos estrenos',
};

export type DiscoverSearchTypes = 'now-playing' | 'popular' | 'top-rated' | 'upcoming';

export const useDiscoverStore = defineStore('discover', () => {
  const movies = ref<Movie[]>([]);
  const isLoading = ref<boolean>(false);
  const discoverType = ref<DiscoverSearchTypes>('now-playing');

  async function fetchMovies(): Promise<MoviesPlayingNow | PopularMovies | TopRatedMovies | UpcomingMovies> {
    switch (discoverType.value) {
      case 'now-playing':
        return tmdbAPI.movies.nowPlaying();
      case 'popular':
        return tmdbAPI.movies.popular();
      case 'top-rated':
        return tmdbAPI.movies.topRated();
      case 'upcoming':
        return tmdbAPI.movies.upcoming();
    }
  }

  async function discoverMovies() {
    isLoading.value = true;

    const search = await fetchMovies();
    movies.value = search.results;

    isLoading.value = false;
  }

  discoverMovies();

  return {
    // State
    movies,
    isLoading,
    discoverType,

    // Actions
    changeType(type: DiscoverSearchTypes) {
      discoverType.value = type;
      return discoverMovies();
    },
  };
});
