<template>

<form>
    <b-container fluid>
        <b-jumbotron header="Portfolio " lead="Upload" >
        </b-jumbotron>
    </b-container>
  <div>
  <table class="uploadtable">
    <div class="upload">
    <tr>
      <td>
        <b-form-group id="exampleInputGroup2" label="Portfolio Title">
            <div class="uploadinput">
                <b-form-group id="uploadtitle" label-for="uploadtitle">
                     <b-form-input id="uploadtitle" placeholder="Title"></b-form-input>
                </b-form-group>
            </div>
        </b-form-group>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <label>Description</label><br>
        <textarea type="text" name="firstName" cols="25" rows="5"></textarea>
      </td>
    </tr>
    <tr>
      <td>
        <label>Categories</label><br>
        <select name="categories">
          <option></option>
          <option>Product Design</option>
          <option>Video</option>
          <option>Animation</option>
          <option>Illustration</option>
          <option>Branding</option>
        </select>
      </td>
      <td>
        <label>Software(s) Used</label><br>
        <select name="categories">
          <option></option>
          <option>Adobe Photoshop</option>
          <option>Adobe Illustrator</option>
          <option>Adobe InDesign</option>
          <option>Adobe Lightroom</option>
          <option>Adobe XD</option>
          <option>Sketch</option>
        </select>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="file" id="myFile" placeholder="Upload Files">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div>
          <Button type="submit" @click="SubmitConfirm">Submit</Button>
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
    }
}
</script>
<style src="../css/styles.css"></style>
<style>
  @import url("https://use.typekit.net/jbk1dal.css");
</style>