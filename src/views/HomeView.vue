<template>
  <v-main>

    <v-container>
      <SearchForm @input="handleSearch"></SearchForm>
    </v-container>

    <router-view v-slot="{ Component, route }">
      <v-fade-transition name="slide-x" mode="out-in">
        <component :is="Component" :key="route.path"/>
      </v-fade-transition>
    </router-view>

  </v-main>
</template>

<script lang="ts" setup>
import {useAppStore} from '@/store/app';
import SearchForm from '@/components/SearchForm.vue';

const app = useAppStore();

function handleSearch(searchText) {
  app.search(searchText);
}
</script>
