<template>
  <v-main>

    <v-container fluid class="movie-details__backdrop" v-if="movie"
                 :style="{ backgroundImage: `url(${movie.backdrop})` }">
      <div class="movie-details__backdrop-opacity ma-n4 pa-4">
        <v-container>
          <v-row>
            <v-col>
              <v-img max-width="140px" :src="movie.poster"></v-img>
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
        <v-col>
          <div class="text-h6">Descripción</div>
          <div class="text-body-1">{{ movie.overview }}</div>
        </v-col>
        <v-col>
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

  </v-main>
</template>

<script lang="ts" setup>
import {computed, watch} from 'vue';
import {MovieModel, useMovieStore} from '@/store/movie';

const props = defineProps<{
  movieId: number
}>();
const movieStore = useMovieStore();
const movie = computed<MovieModel | null>(() => movieStore.movie);

watch(() => props.movieId, () => {
  loadMovieData(props.movieId);
}, {immediate: true});

function loadMovieData(movieId: number) {
  movieStore.loadMovie(movieId);
}
</script>

<style>
.movie-details__backdrop {
  background-color: #dad;
  background-position: center;
  background-size: cover;
}

.movie-details__backdrop-opacity {
  background: rgb(221, 242, 242);
  background: linear-gradient(-45deg, rgba(221, 242, 242, 0.5) 0%, rgba(213, 241, 239, 0.5) 100%);
}
</style>
