<template>
  <ul>
    <li 
        v-for="(categoryItem, i) in categories" 
        :key="i"
    >
      <span
          :class="[categoryItem.value.includes(category) ? 'selected' : null]"
          :data-value="categoryItem.value"
          @click="handleCategoryClick"
      >
        {{ categoryItem.label }}
      </span>
    </li>
  </ul>
  <Movies :category="category"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Movies from '@/components/movies/movies-index.vue'
const categories = [
  {label: 'Now Playing', value: 'movie/now_playing', sort: 0},
  {label: 'Popular', value: 'movie/popular', sort: 10},
  {label: 'Latest', value: 'movie/latest', sort: 20},
  {label: 'Top Rated', value: 'movie/top_rated', sort: 30},
  {label: 'Upcoming', value: 'movie/upcoming', sort: 40},
]
const category = ref(categories[0].value)

function handleCategoryClick(e) {
  console.log('handleCategory: ', [e, e.target.attributes, e.target.attributes['data-value']?.nodeValue])
  category.value = e.target.attributes['data-value'].nodeValue
}
</script>
<style lang="scss" scoped>
ul {
  li {
    list-style-type: none;
    display: inline-block;
    margin-right: 10px;
    span {
      &.selected {
        font-weight: bold;
        color: darkorange;
      }
    }
  }
}
</style>