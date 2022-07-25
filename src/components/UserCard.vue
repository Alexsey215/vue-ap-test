<template>
    <v-row>
        <v-card
            v-for="user in usersData"
            elevation="3"
            :key="user.id"
            width='30em'
            class="mx-auto my-6"
        >
            <v-card-title>{{user.username}}</v-card-title>
            <v-card-subtitle>{{user.name}}</v-card-subtitle>
            <v-card-text>
                <v-col>
                    <v-row>Phone: {{user.phone}}</v-row>
                    <v-row>City: {{user.address.city}}</v-row>
                    <v-row>Id: {{user.id}}</v-row>
                </v-col>  
            </v-card-text>
            <v-card-actions>
                <v-btn         
                    color="primary"
                    @click="postsLoadHandler(user.id)"
                >
                    Posts
                </v-btn>
            </v-card-actions>         
        </v-card>
    </v-row>
</template>

<script>
export default {
    props: {
        usersData: Array
    },
    
    methods: {
        postsLoadHandler(userId) {
            this.$router.push({ path: `/users/${userId}/posts` })
        }
    }

}
</script>
