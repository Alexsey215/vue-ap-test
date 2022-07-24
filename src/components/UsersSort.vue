<template>
    <div>
        <v-select
            :items="sortingTypes"
            label="Sorting types"
            solo
            @change="sortHandler"
        ></v-select>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

    export default {
        data: () => ({
            sortingTypes: ['Sort by ID', 'Sort by city']
        }),
        methods:{
            ...mapMutations(['sortById', 'sortByCity']),

            sortHandler(type) {
                switch (type) {
                    case 'Sort by ID':
                        this.sortById()
                        break;
                     case 'Sort by city':
                        this.sortByCity()
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>