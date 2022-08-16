<template>
  <div>
    <span>{{ category }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps} from 'vue'
// import type { Ref } from 'vue'

interface Props {
  category: string
}

const props = defineProps<Props>()
console.log('props: ', props.category)




</script>