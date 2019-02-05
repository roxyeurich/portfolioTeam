<template>
  <div class="hello">
    <div class="header">  
     <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
  <div class="col-md-5 p-lg-5 mx-auto my-5">
    <h1 class="display-4 font-weight-normal">Vaze</h1>
    <p class="lead font-weight-normal">We help you build, connect and help you land a job.</p>
    <a class="btn btn-outline-secondary" href="#">Portfolio</a>
  </div>
  <div class="product-device shadow-sm d-none d-md-block"></div>
  <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
</div>
    </div>
    <div class="container">
        <label class="popularportfolios"><h1>Popular Portfolios</h1></label><br>
  <div class="row"  style="margin: 0 auto;">
      
    <div class="col">
        <div class="card" style="width: 15rem;">
          <img src="../img/9C3DD82580916E0D.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>
    <div class="col">
        <div class="card" style="width: 15rem;">
            <img src="../img/9C3DD82580916E0D.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
        </div>
    </div>
    <div class="col">
        <div class="card" style="width: 15rem;">
            <img src="../img/9C3DD82580916E0D.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
        </div>
    </div>
   <div class="col">
        <div class="card" style="width: 15rem;">
            <img src="../img/9C3DD82580916E0D.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
        </div>
    </div>
  </div>
    <section id="events">  
      <h3>Event Nearby</h3>
        <div class="post-module">This is a post</div>
        <div class="post-module">This is a post</div>
        <div class="post-module">This is a post</div>
    </section>
  </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    
.post-module {
  width: 20%;
  border: black solid 1px;
  display: inline-block;
  position: relative;
  height: 200px;
  text-align: center;
  padding-top: 100px;
  margin: 15px 10px;
  float: left;
}  

 #events, #portfolio {
  position: relative;
  float: left;
  display: block;
  width: 100%;
  margin: 0 25px;
    }
    
</style>
