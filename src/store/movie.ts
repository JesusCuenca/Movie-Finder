import {defineStore} from 'pinia';
import {MovieDetails} from 'tmdb-ts';
import {ref} from 'vue';
import tmdbAPI from '@/lib/tmdb';

export type MovieModel = {
  title: string;
  year: string;
  overview: string;
  genres: string[];
  poster: string;
  backdrop: string;
}

function movieModelFromMovieDetails(details: MovieDetails): MovieModel {
  const releaseDate = new Date(details.release_date);
  return {
    title: details.title,
    year: releaseDate.getFullYear().toString(),
    overview: details.overview,
    genres: details.genres.map(genre => genre.name),
    poster: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w1280${details.backdrop_path}`,
  }
}

export const useMovieStore = defineStore('movie', () => {

  const movieCache: Record<number, MovieModel> = {};
  const movie = ref<MovieModel | null>(null);
  const isLoading = ref<boolean>(false);

  return {
    // State
    movie,
    isLoading,

    // Getters

    // Actions
    async loadMovie(movieId: number) {
      isLoading.value = true;
      movie.value = movieCache[movieId] ??= movieModelFromMovieDetails(await tmdbAPI.movies.details(movieId));
      isLoading.value = false;
    },
  };
});
