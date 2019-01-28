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
        <h1 class="h1form">Create Account</h1>
        <tr>
          <td>
              <div class="forminput">
                <b-form-group id="exampleInputGroup1" label-for="exampleInput1">
                    <b-form-input v-model="username" class="exampleInput1" placeholder="Username"></b-form-input>
                </b-form-group>
              </div>
          </td>
        </tr>
        <tr>
         <tr>
          <td>
              <div class="forminput">
                <b-form-group id="exampleInputGroup1" label-for="exampleInput1">
                    <b-form-input v-model="fname" class="exampleInput1" placeholder="Name"></b-form-input>
                </b-form-group>
              </div>
          </td>
        </tr>  
        <tr>
         <tr>
          <td>
              <div class="forminput">
                <b-form-group id="exampleInputGroup1" label-for="exampleInput1">
                    <b-form-input v-model="lname" class="exampleInput1" placeholder="Last Name"></b-form-input>
                </b-form-group>
              </div>
          </td>
        </tr>        
        <tr>
         <tr>
          <td>
              <div class="forminput">
                <b-form-group id="exampleInputGroup1" label-for="exampleInput1">
                    <b-form-input v-model="age" class="exampleInput1" placeholder="Age"></b-form-input>
                </b-form-group>
              </div>
          </td>
        </tr>
        
        <tr>
          <td>
            <div class="forminput">
                <b-form-group id="exampleInputGroup1" label-for="exampleInput1">
                    <b-form-input v-model="email" class="exampleInput1" placeholder="Email"></b-form-input>
                </b-form-group>
              </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="forminput">
                <b-form-group id="exampleInputGroup1" label-for="exampleInput1">
                    <b-form-input type="password" v-model="password" class="exampleInput1" placeholder="Password"></b-form-input>
                </b-form-group>
              </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="formdropdown">
                  <b-form-select v-model="location" :options="options" id="mb-3" >
                  </b-form-select>
                  {{location}}
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div id="signup">
              <b-button type="submit" @click="SubmitConfirm" id="submit">Sign Up</b-button>
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
  name: 'LogInForm',
  props: {
    msg: String
  },
    methods:{
    SubmitConfirm: async function(){
      
      var fd= new FormData();
      fd.append("fname", this.fname);
      fd.append("lname", this.lname);
      fd.append("password", this.password);
      fd.append("email", this.email);
      fd.append("username", this.username);
      fd.append("age", this.age);
      fd.append("location", this.location);
      
      for(var key of fd.entries()){
        console.log(key);
      }
      
      var resp=await fetch("https://portfolioteam.herokuapp.com/register.php",{
      method:"POST",
      body:fd
        });
      
      var json = await resp.text();
      console.log(json);
      
      alert("Thank you for registering!");
      }
  },
    data () {
    return {
      fname:"",
      lname:"",
      password:"",
      email:"",
      username:"",
      age:"",
      location:"",
      options: [
        { value: null, text: 'Location' },
        { value: 'a', text: 'Canada' },
        { value: 'b', text: 'United States' },
        { value: 'c', text: 'South America' },
        { value: 'd', text: 'Europe' },
        { value: 'e', text: 'Asia'}
      ]
    }
  }
}
</script>
<style src="../css/styles.css"></style>
<style>
  @import url("https://use.typekit.net/jbk1dal.css");
</style>
