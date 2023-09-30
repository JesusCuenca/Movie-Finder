<template>
  <v-container>

    <v-toolbar flat color="transparent" density="compact">
      <v-toolbar-title>Descubre lo último</v-toolbar-title>
    </v-toolbar>

    <LoadingPanel v-if="discoverStore.isLoading"></LoadingPanel>

    <v-row v-else-if="discoverStore.movies.length">
      <v-col cols="6" sm="4" md="3" v-for="movie in discoverStore.movies" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>

    <v-container v-else>
      <v-alert type="info" variant="tonal" title="Ups...">
        <p>No hemos podido encontrar ninguna película que enseñarte...</p>
        <v-btn variant="flat" :to="{name: 'Home'}">Volver al inicio</v-btn>
      </v-alert>
    </v-container>

  </v-container>
</template>

<script lang="ts" setup>
import {useDiscoverStore} from '@/store/discover';
import MovieCard from '@/components/MovieCard.vue';
import LoadingPanel from '@/components/LoadingPanel.vue';

const discoverStore = useDiscoverStore();

</script>
