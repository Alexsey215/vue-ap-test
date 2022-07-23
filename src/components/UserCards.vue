<template>
    <v-container>
        <v-row>
            <v-card
                v-for="user in $store.state.users"
                elevation="3"
                :key="user.id"
                width='30em'
                class="mx-auto my-6"
            >
                <v-card-title>{{user.username}}</v-card-title>
                <v-card-subtitle>{{user.name}}</v-card-subtitle>
                <v-card-text>
                    phone: {{user.phone}}
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>