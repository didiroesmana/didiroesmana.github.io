<template>
  <div>
    <div class="hero-section parallax">
      <div class="hero-section-text">
        <h2 class="left-text">Didi Roesmana</h2>
        <h5>Fullstack Web Developer</h5>
        <h5>Ordinary <em>Dota 2</em> Player, who play Invoker a lot</h5>
      </div>
    </div>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
          <v-flex md3 offset-md5 xs12 align-center justify-center>
            <blockquote class="align-center">
              &#8220;Knowledge is power!&#8221;
              <footer>
                <small>
                  <em>&mdash;Invoker</em>
                </small>
              </footer>
            </blockquote>
          </v-flex>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </div>
</template>
<script>
  
  export default {
    name: 'Home',
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: true,
        items: [
          { icon: 'github', title: 'Github' },
          { icon: 'phone', title: 'Contact Me'}
        ],
        miniVariant: false,
        right: false,
        rightDrawer: false,
        title: 'So Begins a New Age of Knowledge'
      }
    },
    mounted() {
      console.log("eaeaea")
      this.$parent.title = this.title
    }
  }
</script>

<style lang="scss">

  div.hero-section {
    background: url("../public/images/header.jpg") 100% no-repeat;
    background-size: cover;
    height: 70vh;
    text-align: center;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;

    .hero-section-text {
      color: #fefefe;
      text-shadow: 1px 1px 2px #0a0a0a;

      h1,h2 {
        color: #fff;
        text-shadow: 3px 2px 2px #333;
      }

      em {
        color: #B44335;
      }
    }
  }



</style>