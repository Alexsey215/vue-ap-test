<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn @click="userListHandler" :ripple="false" plain>Back to user list</v-btn>  
      <ErrorModalWindow v-show="getErrorMessage" :message="getErrorMessage"/>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ErrorModalWindow from './components/ErrorModalWindow.vue';


export default {
    name: "App",
    methods: {
        ...mapActions(["fetchUsers"]),
        userListHandler() {
            this.$router.push({ name: "users" });
            this.fetchUsers();
        }
    },

    computed: {
      ...mapGetters(['getErrorMessage'])
    },

    mounted() {
        this.fetchUsers();
    },
    components: { ErrorModalWindow }
};
</script>
