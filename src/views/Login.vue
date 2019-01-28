<template>
  <div id="Login">

    <registerform/>
  </div>
</template>

<script>
import CreateAcc from '@/components/CreateAcc.vue'
export default {
  name: 'Login',
  components: {
    registerform: CreateAcc
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