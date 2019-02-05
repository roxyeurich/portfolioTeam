<template>

<b-container class="bv-example-row">
<b-row>
<b-col>
   <div class="visuals">
     
    
   </div>
</b-col>
<b-col>
<div class="form">
    <table class="formtable">
        <h1 class="h1form">Log In</h1>
        <tr>
          <td colspan="2">
              <div class="forminput">
                <b-form-group class="exampleInputGroup1" label-for="exampleInput1">
                    <b-form-input v-model="username" class="exampleInput1" placeholder="Username"></b-form-input>
                </b-form-group>
              </div>
          </td>
        </tr>
        <tr> 
          <td colspan="2">
            <div class="forminput">
                <b-form-group class="exampleInputGroup1" label-for="exampleInput1">
                    <b-form-input type="password" v-model="password" class="exampleInput1" placeholder="Password"></b-form-input>
                </b-form-group>
              </div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="signin">
              <b-button type="submit" @click="LogIn" id="submit">Log In</b-button>
            </div>
          </td>
          <td>
            <div id="signup">
             <router-link to="/Create">
              <b-button type="submit" id="submit">Create Account</b-button>
             </router-link> 
            </div>
          </td>
        </tr>
    </table>
    </div>
    </b-col>
</b-row>

</b-container>


</template>

<script>
export default {
  name: 'LogIn_Page',
  props: {
    msg: String
  },
    methods:{
    LogIn: async function(){
      
      var fd= new FormData();
      fd.append("username", this.username);
      fd.append("password", this.password);
      
      for(var key of fd.entries()){
        console.log(key);
      }
      
      //http://localhost:8888/portfolio_DB/login.php
      //https://portfolioteam.herokuapp.com/login.php
      var resp=await fetch("https://portfolioteam.herokuapp.com/login.php  ",{
      method:"POST",
      body:fd
        });
      //console.log(resp);
      var json = await resp.json();
      console.log(json);
      
    if (json === true) {
      //alert ("Loged in!");
      this.$router.push('/') 
      
    } else {
      alert ("Something is wrong!");
    }
      
      
    }
  },
    data () {
    return {
      username:"",
      password:"",
    }
  }
}
</script>
<style src="../css/styles.css"></style>
<style>
  @import url("https://use.typekit.net/jbk1dal.css");
</style>
