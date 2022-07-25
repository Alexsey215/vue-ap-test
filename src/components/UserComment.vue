<template>
    <v-col>
        <v-card
            v-for="comment in comments"
            elevation="3"
            :key="comment.id"
            width='30em'
            class="mx-auto my-6"
        >
            <v-card-title>{{comment.name}}</v-card-title>
            <v-card-subtitle>{{comment.email}}</v-card-subtitle>

            <v-card-text>
                {{comment.body}}
            </v-card-text>    

            <v-card-actions>
                <v-col>
                    <v-btn @click="comment.showEditForm = !comment.showEditForm" class="mx-auto" :ripple="false" plain>Open edit form</v-btn>
                    <CommentEditForm v-show="comment.showEditForm" :comment='comment'/>
                </v-col>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
import CommentEditForm from './CommentEditForm.vue';

    export default {
    props: {
        comments: Array
    },
    components: { CommentEditForm }
}
</script>