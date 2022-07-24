<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: 'App',

  data: () => ({
  
  }),
  
  methods: {
    ...mapActions(['fetchUsers']),
  },

  mounted() {
    this.fetchUsers();
  }
};
</script>
