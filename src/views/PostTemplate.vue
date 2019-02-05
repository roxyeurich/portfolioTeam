<template>
  <div class="template" style="width: 80%; margin: 0 auto;">
    
    <div class="row">
      <div class="col-s">
          <img src="../img/rawpixel-678089-unsplash.jpg" class="rounded-circle" alt="Cinque Terre">
      </div>
      <div class="col-sm-4">
        <h3 class="profiletitle">Neil Oribello</h3><br><br>
        <p class="profilelocation">Canada</p>
      </div>
    </div>    <br>
    <div class="row">
      <div class="col-sm-8" >
           <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="Graphic Design Portfolio"
                        text="Drawings"
                        img-src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
                        caption="Graphic Design Portfolio"
                        text="Sketches"
                        img-src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
       
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide caption="Graphic Design Portfolio"
                        text="Wireframes"
                        img-src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      </b-carousel-slide>


    </b-carousel>
      </div>
      <div class="col-sm-4">
        <div class="bio">
            <h4>Neil Oribello</h4><br>
            <h5>Graphic Design Portfolio</h5><br>
            
            
        </div>
      </div>
    </div>  
      
    
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>