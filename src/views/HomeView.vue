<template>
  <div class="home">
    <home-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeComponent from '@/components/home/index.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeComponent
  },
});
</script>
