<template>
  <div class="home">
    <Home/>
  </div>
</template>
 
<script> 
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'home',
  components: {
    Home: HomePage
  }
}
</script>
