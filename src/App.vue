<template>
  <v-app>
    <router-link to="/userform">01-userform</router-link>
    <router-link to="/userform">02-userform</router-link>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
