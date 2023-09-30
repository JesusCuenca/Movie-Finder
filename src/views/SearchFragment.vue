<template>
  <v-container>

    <h3 class="mb-3">Mira lo que hemos encontrado: <code>{{ app.searchText }}</code></h3>

    <v-row v-if="app.searchResults.length">
      <v-col cols="6" sm="4" md="3" v-for="movie in app.searchResults" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col>
        <v-alert type="info" variant="tonal" title="Ups...">
          <p>Esto es un poco vergonzoso, pero no hemos podido encontrar ninguna película que encaje con tu búsqueda.</p>
          <p>¿Por qué no pruebas con un texto diferente? También puedes dejarte inspirar por nuestra selección de
            películas.</p>
          <v-btn variant="flat">Descubre</v-btn>
        </v-alert>
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts" setup>
import {useAppStore} from '@/store/app';
import MovieCard from '@/components/MovieCard.vue';

const app = useAppStore();
</script>
