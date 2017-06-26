<template>
  <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote>
              &#8220;First, solve the problem. Then, write the code.&#8221;
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer>
            </blockquote>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
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