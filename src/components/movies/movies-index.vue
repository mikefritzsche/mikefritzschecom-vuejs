<template>
  <el-row>
    <MovieCard v-for="movie in movies.results" :key="movie.id" :movie="movie"/>
  </el-row>
</template>

<script setup>
import { computed, defineProps, ref, watch } from 'vue'
import MovieCard from './MovieCard'

const tmdbUrl = 'https://api.themoviedb.org/3'

// fetch(`${tmdbUrl}/configuration?api_key=${process.env.VUE_APP_TMDB_API_KEY}`)
//     .then(resp => resp.json)
//     .then(config => console.log('config: ', config))
const tmdbConfig = {
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "backdrop_sizes": [
      "w300",
      "w780",
      "w1280",
      "original"
    ],
    "logo_sizes": [
      "w45",
      "w92",
      "w154",
      "w185",
      "w300",
      "w500",
      "original"
    ],
    "poster_sizes": [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
    ],
    "profile_sizes": [
      "w45",
      "w185",
      "h632",
      "original"
    ],
    "still_sizes": [
      "w92",
      "w185",
      "w300",
      "original"
    ]
  },
  "change_keys": [
    "adult",
    "air_date",
    "also_known_as",
    "alternative_titles",
    "biography",
    "birthday",
    "budget",
    "cast",
    "certifications",
    "character_names",
    "created_by",
    "crew",
    "deathday",
    "episode",
    "episode_number",
    "episode_run_time",
    "freebase_id",
    "freebase_mid",
    "general",
    "genres",
    "guest_stars",
    "homepage",
    "images",
    "imdb_id",
    "languages",
    "name",
    "network",
    "origin_country",
    "original_name",
    "original_title",
    "overview",
    "parts",
    "place_of_birth",
    "plot_keywords",
    "production_code",
    "production_companies",
    "production_countries",
    "releases",
    "revenue",
    "runtime",
    "season",
    "season_number",
    "season_regular",
    "spoken_languages",
    "status",
    "tagline",
    "title",
    "translations",
    "tvdb_id",
    "tvrage_id",
    "type",
    "video",
    "videos"
  ]
}

const props = defineProps(['category'])
let movies = ref([])
const category = computed(() => {
  return props.category
})
const fetchMovies = async () => {
  try {
    movies.value = await fetch(`${tmdbUrl}/${category.value}?api_key=${process.env.VUE_APP_TMDB_API_KEY}`).then(resp => resp.json())
  }
  catch(err) {
    console.log('err: ', err)
  }
}
fetchMovies()
watch(category, value => {
  if (value) {
    console.log('watch category: ', value)
    fetchMovies()
  }
})
watch(movies, value => {
  if (value) {
    console.log('movies: ', movies.value.results)
  }
})
</script>