<template>
  <v-container fluid class="movie-details__backdrop" v-if="movie"
               :style="{ backgroundImage: `url(${movie.backdrop})` }">
    <div class="movie-details__backdrop-opacity ma-n4 pa-4">
      <v-container>
        <v-row>
          <v-col>
            <MoviePoster :src="movie.poster" max-width="140px"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
  <v-container>
    <v-row class="flex-column">
      <v-col>
        <h2>{{ movie.title }} <span class="text-subtitle-1">({{ movie.year }})</span></h2>
      </v-col>
      <v-col v-if="movie.overview">
        <div class="text-h6">Descripción</div>
        <div class="text-body-1">{{ movie.overview }}</div>
      </v-col>
      <v-col v-if="movie.genres.length">
        <v-chip
          density="comfortable"
          variant="tonal"
          class="mr-2"
          v-for="genre in movie.genres"
          :key="genre">
          {{ genre }}
        </v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {MovieModel} from '@/store/movie';
import MoviePoster from '@/components/MoviePoster.vue';

defineProps<{
  movie: MovieModel
}>();
</script>

<style>
.movie-details__backdrop {
  background-color: #E3F2FD;
  background-position: center;
  background-size: cover;
}

.movie-details__backdrop-opacity {
  background: rgb(221, 242, 242);
  background: linear-gradient(-45deg, rgba(221, 242, 242, 0.5) 0%, rgba(213, 241, 239, 0.5) 100%);
}
</style>
