<template>
  <Movies :category="category"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Movies from '@/components/movies/movies-index.vue'
const category = ref('now_playing')

</script>