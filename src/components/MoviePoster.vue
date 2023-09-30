<template>
  <v-img :aspect-ratio="2/3" :src="src">
    <template #error>
      <v-responsive :aspect-ratio="2/3">
        <v-sheet class="fill-height d-flex align-center justify-center" color="grey-lighten-4" rounded>
          <v-icon icon="mdi-movie-open" color="secondary"></v-icon>
        </v-sheet>
      </v-responsive>
    </template>
  </v-img>
</template>

<script setup lang="ts">
defineProps<{ src: string }>();
</script>
