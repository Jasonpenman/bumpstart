<template>
  <v-app>
        <dark></dark>
  </v-app>
</template>
<script>

import dark from './components/dark';

export default {
  name: 'App',

  components: {
    dark
  },

  data: () => ({
  }),
};
</script>
<style>
::-webkit-scrollbar {
    display: none;
}
</style>