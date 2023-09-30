<script setup lang="ts">
import {ref} from 'vue';

defineEmits<{
  (e: 'input', value: string): void
}>();

const props = defineProps<{
  searchText?: string;
  loading: boolean;
}>();

const query = ref<string>(props.searchText || '');
</script>

<template>
  <v-card class="pt-3" color="blue-lighten-4" variant="flat" :loading="loading">
    <v-card-title class="text-sm-h4 text-center">¡Busca y encuentra!</v-card-title>
    <v-card-subtitle class="text-wrap">Un gran catálogo de películas te está esperando. ¿A qué esperas? ¡Dinos qué estás
      buscando!
    </v-card-subtitle>
    <v-card-text>
      <v-form @submit.prevent="$emit('input', query)">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          density="compact"
          id="query"
          name="query"
          placeholder="¿Qué te apetece ver?"
          rounded
          type="text"
          v-model="query"
          variant="solo"
        >
          <template #append-inner>
            <v-fade-transition>
              <v-icon
                color="primary"
                v-show="!!query"
                icon="mdi-send" flat
                @click="$emit('input', query)"
              ></v-icon>
            </v-fade-transition>
          </template>
        </v-text-field>
      </v-form>
    </v-card-text>
  </v-card>
</template>
