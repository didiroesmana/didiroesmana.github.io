<template>
  <div class="hero-section parallax" :style="'background:'+this.image+' 100% no-repeat;'">
    <div class="hero-section-text">
      <h2>{{header}}</h2>
      <p v-html="rawHtml"></p>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name:'HeroSection',
    props:[
      'header',
      'image'
    ],
    data: function() {
      return {
        
        rawHtml: '<h5>Fullstack Web Developer</h5><h5>Ordinary <em>Dota 2</em> Player, who play Invoker a lot</h5>'
      
      }
    }
  }
</script>

<style lang="css">
  div.hero-section.parallax {
    background-size: cover !important;
  }
</style>