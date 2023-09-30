<template>
  <v-main>

    <LoadingPanel class="d-flex justify-center align-center" v-if="movieStore.isLoading" />

    <MovieDetails v-else-if="movieStore.movie" :movie="movieStore.movie"></MovieDetails>

    <v-container v-else>
      <v-alert type="info" variant="tonal" title="Ups...">
        <p>No hemos podido encontrar la película con id <code>{{ movieId }}</code>.</p>
        <v-btn variant="flat" :to="{name: 'Home'}">Volver al inicio</v-btn>
      </v-alert>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import {watch} from 'vue';
import {useMovieStore} from '@/store/movie';
import MovieDetails from '@/components/MovieDetails.vue';
import LoadingPanel from '@/components/LoadingPanel.vue';

const props = defineProps<{
  movieId: number
}>();
const movieStore = useMovieStore();

watch(() => props.movieId, () => {
  loadMovieData(props.movieId);
}, {immediate: true});

function loadMovieData(movieId: number) {
  movieStore.loadMovie(movieId);
}
</script>
