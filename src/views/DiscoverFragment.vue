<template>
  <v-container>

    <v-toolbar flat color="transparent" density="compact">
      <v-toolbar-title>Descubre</v-toolbar-title>
      <v-toolbar-items>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
              <v-icon icon="mdi-chevron-down"></v-icon>
              {{ listTypes[discoverStore.discoverType] }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(text, type) in listTypes" :key="type" @click="changeType(type)">
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
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
import {DiscoverSearchTypes, useDiscoverStore} from '@/store/discover';
import MovieCard from '@/components/MovieCard.vue';
import LoadingPanel from '@/components/LoadingPanel.vue';

const listTypes = {
  'now-playing': 'Cartelera',
  'popular': 'Populares',
  'top-rated': 'Mejores valoradas',
  'upcoming': 'Próximos estrenos',
};

const discoverStore = useDiscoverStore();

function changeType(newType: DiscoverSearchTypes) {
  discoverStore.changeType(newType);
}
</script>
