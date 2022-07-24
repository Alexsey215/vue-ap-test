<template>
    <div>
        <v-form @submit.prevent="searchPhoneHandler">
            <v-text-field
                v-model.trim="value"
                dense
                filled
                label="Enter phone number"
            ></v-text-field>
          </v-form>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

    export default {
        data: () => ({
            value: '',
        }),
        methods: {
            ...mapMutations(['searchUserPhone']),
            ...mapActions(['fetchUsers']),
            
            searchPhoneHandler() {
                if (this.value) {
                    this.searchUserPhone(this.value)
                } else {
                    this.fetchUsers()
                }
            }
        }
    }
</script>
