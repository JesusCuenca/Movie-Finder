<template>
  <v-container>

    <v-toolbar flat color="transparent" density="compact">
      <v-toolbar-title>Nuestras recomendaciones</v-toolbar-title>
    </v-toolbar>

    <v-row v-if="discoverStore.movies.length">
      <v-col cols="6" sm="4" md="3" v-for="movie in discoverStore.movies" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts" setup>
import {useDiscoverStore} from '@/store/discover';
import MovieCard from '@/components/MovieCard.vue';

const discoverStore = useDiscoverStore();

</script>
