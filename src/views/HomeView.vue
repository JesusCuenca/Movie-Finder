<template>
  <v-main>

    <v-container>
      <SearchForm
        :search-text="searchText"
        :loading="app.isSearching"
        @input="handleSearch"
      ></SearchForm>
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
import {watch} from 'vue';

const app = useAppStore();
const props = defineProps<{
  searchText?: string
}>();

watch(() => props.searchText, () => {
  handleSearch(props.searchText);
}, {immediate: true});

function handleSearch(searchText) {
  app.search(searchText);
}
</script>
