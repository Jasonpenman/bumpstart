<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="$refs.expressComponent.clearStorage()">Clear settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="$refs.expressComponent.buildData()">Save State</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>BumpStart</v-toolbar-title>
          <v-col class="header-absolute-right">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://github.com/Jasonpenman/bumpstart"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-git</v-icon>
                </v-btn>
              </template>
              <span>Project github</span>
            </v-tooltip>
          </v-col>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      > 
        <express ref="expressComponent"></express>
      
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import express from './express';
  export default {
   components: {
    express
  },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>

<style scoped>
.header-absolute-right{
    position: absolute;
    display: block;
    right: 20px;
    width: 40px;
}
</style>