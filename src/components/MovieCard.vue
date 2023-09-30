<script setup lang="ts">
import MoviePoster from '@/components/MoviePoster.vue';
import {Movie} from 'tmdb-ts';

defineProps<{
  movie: Movie;
}>();
</script>

<template>
  <v-card :to="{name: 'Movie', params: { movieId: movie.id }}">
    <MoviePoster :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"></MoviePoster>
    <v-card-text>
      <div class="text-subtitle-1">{{ movie.title }}</div>
      <div class="text-subtitle-2">{{ movie.release_date.split('-').reverse().join('/') }}</div>
    </v-card-text>
  </v-card>
</template>
