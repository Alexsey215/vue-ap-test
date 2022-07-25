<template>
    <div>
        <v-form class="ma-5" @submit.prevent="addCommentForm">
            <v-text-field
                v-model="name"
                label="Name"
                required
            ></v-text-field>

            <v-text-field
                v-model="email"
                label="Email"
                required
            ></v-text-field>

            <v-text-field
                v-model="newComment"
                label="Comment"
                required
            ></v-text-field>

            <v-btn color="primary" type="submit">Add comment</v-btn>
        </v-form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

    export default {
        
        props: {
            postId: String
        },

        data: () => ({
            name: '',
            email: '',
            newComment: ''
        }),

        methods: {
            ...mapMutations(['addNewComment']),
            addCommentForm() {
                if(this.name && this.email && this.newComment) {
                    this.addNewComment(this.newCommentData)
                    this.name = ''
                    this.email = ''
                    this.newComment = ''
                } 
            }
        },

        computed: {
            newCommentData() {
                return {
                    postId: this.postId,
                    id: Date.now(),
                    name: this.name,
                    email: this.email,
                    body: this.newComment,
                    showEditForm: false
                }
            }
        }
    }
</script>