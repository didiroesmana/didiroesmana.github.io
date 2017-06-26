<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      disable-route-watcher
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile value="true" :to="item.to">
            <v-list-tile-action>
              <icon :name="item.icon" scale="2"></icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn 
        icon
        @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <router-link to="/">
        <v-btn icon>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/about">
        <v-btn icon>
          <v-icon>account_circle</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
    <main>
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: true,
        items: [
          { icon: 'github', title: 'Fork Me Out at Github', to: 'https://github.com/didiroesmana' },
          { icon: 'phone', title: 'Reach Me Out', to: '#'}
        ],
        miniVariant: false,
        right: false,
        rightDrawer: false,
        title: 'So begins a new age of Knowledge'
      }
    },
    method: {
      onRouteUpdate (title) {
        this.title = title
      }
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/settings/_colors'

  $theme := {
    primary: $cyan.darken-2
    accent: $red.accent-2
    secondary: $grey.darken-3
    info: $blue.lighten-1
    warning: $amber.darken-2
    error: $red.accent-4
    success: $green.lighten-2
  }

  @import './stylus/main'
</style>

<style lang="css">
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>