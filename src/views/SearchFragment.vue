<template>
  <v-container>
    <v-row>
      <v-col cols="6" sm="3" lg="4" v-for="movie in app.searchResults" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts" setup>
import {useAppStore} from '@/store/app';
import MovieCard from '@/components/MovieCard.vue';

const app = useAppStore();
</script>
