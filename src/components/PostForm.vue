<template>

<form>
    <b-container fluid>
            <div class="bg-img">
                <div class="img-overlay">
                    <div class="img-h1">
                    <h1 class="portfoliotext">Portfolio</h1><br>
                    <h1>Upload</h1>
                    
                    </div>
                </div>
            </div> 
        
    </b-container>
  <div>
  <table class="uploadtable">
    <div class="upload">
        <tr>
          <td>
              <label class="portfoliotitle">Title</label>
          </td>
        </tr>
        <tr>
          <td>
              <div class="forminput">
                <b-form-group class="uploadtitle" label-for="portfoliotitle">
                    <b-form-input v-model="Title" id="uploadinput" placeholder=""></b-form-input>
                </b-form-group>
              </div>
          </td>
        </tr>
        <tr>
          <td>
              <label class="portfoliotitle">What's your portfolio about?</label>
          </td>
        </tr>
        <tr>
          <td>
              <div class="formarea">
                <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Be as descriptive as possible"
                     :rows="3"
                     :max-rows="6"
                     >
                </b-form-textarea>
              </div>
          </td>
        </tr>
    <tr><br>
      <b-row>
        <b-col class="dropdown">
            <label class="portfoliotitle">Categories</label>
            <b-form-select v-model="categories" :options="options" id="submitdropdown" >
                  </b-form-select>
        </b-col> 
        <b-col class="dropdown">
            <label class="portfoliotitle">Programs Used</label>
            <b-form-select v-model="programs" :options="options1" id="submitdropdown" >
                  </b-form-select>
        </b-col>
    </b-row>
    </tr>
        <br>
    <tr>
      <td>
        <div>
  <!-- Styled -->
  <b-form-file v-model="file" :state="Boolean(file)" placeholder="Upload images of your portfolio"  id="submitupload"></b-form-file>
  <div class="mt-3">Selected file: {{file && file.name}}
    </div>
    </div>
      </td>
    </tr>
        <br>
    <tr>
      <td>
        <div>
            <div class="portfoliosubmit">
          <b-button type="submit" @click="SubmitConfirm" id="portfoliobutton">Publish</b-button>
            </div>
        </div>
      </td>
    </tr>
    </div>
  </table>
  </div>
</form>
</template>

<script>
export default {
  name: 'PostForm',
  props: {
    msg: String
  },
    methods:{
    SubmitConfirm: function(){
      alert("Thank you for register!");
      }
    },
    
  data(){
      return{
           text:'',
           file: null,
           file2: null,
           categories:"",
        options: [
        { value: null, text: 'Categories' },
        { value: 'a', text: 'Graphic Design' },
        { value: 'b', text: 'UI/UX Design' },
        { value: 'c', text: 'Web Development' },
        { value: 'd', text: 'Story Telling' },
        { value: 'e', text: 'Branding'}
      ],
          programs:"",
           options1: [
        { value: null, text: 'Programs' },
        { value: 'f', text: 'Hand Coded' },
        { value: 'g', text: 'Bootstrap' },
        { value: 'h', text: 'Photoshop' },
        { value: 'i', text: 'Illustrator' },
        { value: 'j', text: 'InDesign'}
      ]
      }
  },
    
}
</script>
<style src="../css/styles.css"></style>
<style>
  @import url("https://use.typekit.net/jbk1dal.css");
</style>