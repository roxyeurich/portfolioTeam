<template>
  <div class="hello">
    <div class="header">  
      <img alt="Vue logo" src="../img/network.jpg">
      <h1>
        We help you build a network, a platform, and<br>A CAREER
      </h1>
    </div>
    <section id="portfolio">  
      <h3>Popular Porfolio</h3>
        <div class="post-module">This is a post</div>
        <div class="post-module">This is a post</div>
        <div class="post-module">This is a post</div>
        <div class="post-module">This is a post</div>
    </section>
    <section id="events">  
      <h3>Event Nearby</h3>
        <div class="post-module">This is a post</div>
        <div class="post-module">This is a post</div>
        <div class="post-module">This is a post</div>
    </section>
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
