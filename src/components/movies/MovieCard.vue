<template>
  <el-col :span="8">
    <el-card>
      <div class="title">
        <span>{{ movie.title }}</span>
      </div>
      <img class="image" :src="`${tmdbBaseSecureImageUrl}/w300/${movie.backdrop_path}`" alt="">
      <div class="overview">{{ movie.overview }}</div>
      <div class="votes">
        <span>
          <span class="label">Votes:</span> {{ movie.vote_count }}
        </span>
        <span>
          <span class="label">Vote avg:</span> {{ movie.vote_average }}
        </span>
      </div>
    </el-card>
  </el-col>
</template>

<script setup>
import {defineProps, ref} from 'vue'
const tmdbBaseSecureImageUrl = "https://image.tmdb.org/t/p/"

const props = defineProps(['movie'])
const movie = ref(null)
const movieModel = function (movie) {
  const defaultProps = {
    "adult": false,
    "backdrop_path": "/vvObT0eIWGlArLQx3K5wZ0uT812.jpg",
    "genre_ids": [
      28,
      12,
      14
    ],
    "id": 616037,
    "original_language": "en",
    "original_title": "Thor: Love and Thunder",
    "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    "popularity": 8104.31,
    "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    "release_date": "2022-07-06",
    "title": "Thor: Love and Thunder",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 2108
  }

  return Object.keys(defaultProps).reduce((acc, key) => {
    acc[key] = movie[key]
    return acc
  }, {})
}
movie.value = movieModel(props.movie)

// export default {
//   name: "movie-card"
// }
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  padding: 14px;
}
.image {
  width: 100%;
  display: block;
}
.overview {
  margin: 10px 0 10px 0;
}
.votes {
  span {
    &:first-child {
      margin-right: 10px;
    }
    .label {
      font-weight: bold;
    }
  }

}
</style>