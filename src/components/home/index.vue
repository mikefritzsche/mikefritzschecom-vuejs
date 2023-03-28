<template>
  <div class="home-container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "HomeComponent"
})
</script>
<script setup lang="ts">
const title = 'Home'
// import { defineComponent } from 'vue'
// export default defineComponent({
//   name: "HomeComponent"
// })
</script>

<style scoped lang="scss">
.home-container {

}
</style>