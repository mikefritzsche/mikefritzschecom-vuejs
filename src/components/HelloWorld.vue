<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ test }}</div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';
enum Primary {
  one = 'Hello',
  two = 'Goodbye',
  three = 'Farewell'
}
enum Secondary {
  one = 'Goodbye',
  two = 'Hello',
  three = 'Farewell'
}
enum Tertiary {
  one = 'Farewell',
  two = 'Goodbye',
  three = 'Hello'
}
interface DefaultValues {
  primary: primary
  secondary: secondary
  tertiary: tertiary
}


type primary = string
type secondary = string
type tertiary = string

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      test: Primary.one
    }
  },
  created() {
    // console.log('Test: ', this.test)
  },
  methods: {
    // setTest(value: Test): Test {
    //   return this.test = value
    // }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
