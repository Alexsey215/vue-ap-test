<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col sm="2">
                <UsersSort />
            </v-col>
            <v-col sm="4">
                <UsersPhoneSearch />
            </v-col>
         </v-row>
        <UserCard :usersData='getUsers' />
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import UserCard from './UserCard.vue';
import UsersSort from './UsersSort.vue';
import UsersPhoneSearch from './UsersPhoneSearch.vue';

    export default {
    computed: {
        ...mapGetters(['getUsers']),
    },
    components: { UserCard, UsersSort, UsersPhoneSearch }
}
</script>
