<template>
  <div>
    <herosection header="Invoker" :image="img"></herosection>
    <v-container fluid>
      <!-- <v-slide-y-transition mode="out-in"> -->
        <v-layout row wrap>
          <v-flex md12 xs12 align-center justify-center>
            <p>
              &#8220;In its earliest, and some would say most potent form, magic was primarily the art of memory. It required no technology, no wands or appurtenances other than the mind of the magician. All the trappings of ritual were merely mnemonic devices, meant to allow the practitioner to recall in rich detail the specific mental formulae that unlocked a spell's power. The greatest mages in those days were the ones blessed with the greatest memories, and yet so complex were the invocations that all wizards were forced to specialize. The most devoted might hope in a lifetime to have adequate recollection of three spells—four at most. Ordinary wizards were content to know two, and it was not uncommon for a village mage to know only one—with even that requiring him to consult grimoires as an aid against forgetfulness on the rare occasions when he might be called to use it. But among these early practitioners there was one exception, a genius of vast intellect and prodigious memory who came to be known as the Invoker. In his youth, the precocious wizard mastered not four, not five, not even seven incantations: He could command no fewer than ten spells, and cast them instantly. Many more he learned but found useless, and would practice once then purge from his mind forever, to make room for more practical invocations. One such spell was the Sempiternal Cantrap—a longevity spell of such power that those who cast it in the world's first days are among us still (unless they have been crushed to atoms). Most of these quasi-immortals live quietly, afraid to admit their secret: But Invoker is not one to keep his gifts hidden. He is ancient, learned beyond all others, and his mind somehow still has space to contain an immense sense of his own worth...as well as the Invocations with which he amuses himself through the long slow twilight of the world's dying days.e.&#8221;
            </p>
            <!-- <blockquote>
              <footer>
                <small>
                  <em>&mdash; Invoker</em>
                </small>
              </footer>
            </blockquote> -->
          </v-flex>

        </v-layout>
        <v-layout row wrap>
          <v-flex md4 offset-md4 xs12 v-for="(response, i) in responses"
          :key="i" class="response">

            <v-divider></v-divider>
            <blockquote class="align-center">
              &#8220;{{response.text}}&#8221;
              <footer>
                <small>
                  <em>&mdash;Invoker</em>
                </small>
              </footer>
            </blockquote>
            <v-divider></v-divider>
          </v-flex>
        </v-layout>
      <!-- </v-slide-y-transition> -->
    </v-container>
  </div>
</template>

<script>
  import herosection from './components/hero-section.vue'

  export default {
    name: 'About',
    components: { herosection },
    data () {
      return {
        title: 'About Invoker',
        img: "url('../public/images/invoker.jpg')",
        responses: [
          {text: 'Enlightenment is mine!'},
          {text: 'The learned one strikes.'},
          {text: 'Who threatens my concentration?'}
        ]
      }
    },
    mounted() {
      this.$parent.title = this.title
    }
  }
</script>

<style lang="scss">
  .layout .response {
    margin-bottom: 20px;
    blockquote {
      border-right: 5px solid #0097a7;
    }
  }

</style>