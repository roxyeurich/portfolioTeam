<template>
  <div id="Login">

    <loginform/>
  </div> 
</template>

<script>
import LogIn_Page from '@/components/LogIn_Page.vue'
export default {
  name: 'Login',
  components: {
    loginform: LogIn_Page
  },
  data () {
    return {
    }
  },
  methods: {
    SubmitConfirm: function () {
      alert('Thank you for register!')
    }
  }
}                                                                                      
</script>