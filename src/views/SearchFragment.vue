<template>
  <v-container>

    <v-toolbar flat color="transparent" density="compact">
      <v-toolbar-title>Mira lo que hemos encontrado</v-toolbar-title>
    </v-toolbar>

    <LoadingPanel v-if="app.isSearching"></LoadingPanel>

    <v-row v-else-if="app.searchResults.length">
      <v-col cols="6" sm="4" md="3" v-for="movie in app.searchResults" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col>
        <v-alert type="info" variant="tonal" title="Ups...">
          <p>No hemos podido encontrar resultados que coincidan con tu búsqueda...</p>
          <p>¿Por qué no pruebas con un texto diferente? También puedes dejarte inspirar por nuestra selección de
            películas.</p>
          <v-btn variant="flat" :to="{name:  'Home'}">Descubre</v-btn>
        </v-alert>
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts" setup>
import {useAppStore} from '@/store/app';
import MovieCard from '@/components/MovieCard.vue';
import LoadingPanel from '@/components/LoadingPanel.vue';

const app = useAppStore();
</script>
