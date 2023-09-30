<template>
  <v-main>

    <v-container>
      <SearchForm
        :search-text="searchText"
        :loading="app.isSearching"
        @input="handleSearch"
      ></SearchForm>
    </v-container>

    <router-view />

  </v-main>
</template>

<script lang="ts" setup>
import {useAppStore} from '@/store/app';
import SearchForm from '@/components/SearchForm.vue';
import {watch} from 'vue';

const app = useAppStore();
const props = defineProps({
  searchText: {
    type: String,
    default: '',
  },
});

watch(() => props.searchText, () => {
  handleSearch(props.searchText);
}, {immediate: true});

function handleSearch(searchText) {
  app.search(searchText);
}
</script>
