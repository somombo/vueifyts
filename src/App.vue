<template>
  <v-app id="inspire">
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>



        <v-list-tile @click="router.push('/')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="router.push('/foo')">
          <v-list-tile-action>
            <v-icon>pets</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Foo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="router.push('/bar')">
          <v-list-tile-action>
            <v-icon>star</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Bar</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="router.push('/hello')">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Hello World</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>

      <!-- <v-container fluid >
        <v-layout justify-center align-center>


        </v-layout>
      </v-container> -->
    </v-navigation-drawer>


    <v-toolbar color="indigo" dark fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>My Application</v-toolbar-title>
    </v-toolbar>


    <v-content>

      <v-container  fill-height >
        <v-layout row>

          <v-container  fill-height >
            <v-layout column class="pr-4">



              <v-card >

                <v-card-text>
                  <router-view class="view"></router-view>
                </v-card-text>

              </v-card>

            </v-layout>


            <v-layout column style="flex: 0 1 300px" >

              <v-card class="px-4">
                <v-card-text>
                  <h1>Basic</h1>

                  <h2>Essential Links</h2>
                  <ul>
                    <li>
                      <a href="https://vuejs.org" target="_blank">Core Docs</a>
                    </li>
                    <li>
                      <a href="https://forum.vuejs.org" target="_blank">Forum</a>
                    </li>
                    <li>
                      <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
                    </li>

                    <li>
                      <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
                    </li>
                  </ul>

                  <br />
                  <h2>Ecosystem</h2>
                  <ul>
                    <li>
                      <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
                    </li>
                    <li>
                      <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
                    </li>
                    <li>
                      <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
                    </li>
                    <li>
                      <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
                    </li>
                  </ul>

                </v-card-text>
              </v-card>

            </v-layout>
          </v-container>

        </v-layout>
      </v-container>



    </v-content>
    <v-footer color="indigo" app fixed>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>

</template>

<script  lang="ts">
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import Router from './routes'
import { Vue, Component, Prop } from "vue-property-decorator";

Vue.use(Vuetify, { theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }})

@Component
export default class extends Vue {
  drawer = null

  @Prop()
  source: string

  router = Router
  items = [
    {
      title: 'Momo',
      icon: 'home'
    }
  ]
}


</script>
