<template>
  <div id="posts">

    <postform/>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
export default {
  name: 'posts',
  components: {
    postform: PostForm
  },
  data () {
    return {
    }
  }
}
</script>