<template>
    <v-col>
        <v-card
            v-for="post in posts"
            elevation="3"
            :key="post.id"
            width='30em'
            class="mx-auto my-6"
        >
            <v-card-title>{{post.title}}</v-card-title>
            <v-card-text>{{post.body}}</v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
                <v-card-actions class="d-flex">
                    <v-btn @click="post.showComments = !post.showComments" class="mx-auto" :ripple="false" plain>load comments</v-btn>
                    <div>
                        <v-icon 
                            :color="getCommentsLength(post.id) ? 'deep-purple accent-4' : 'grey'"> 
                            mdi-message-outline
                        </v-icon>
                        {{getCommentsLength(post.id)}}
                    </div>
                </v-card-actions>
                <UserCommentsList :postId="post.id" :key="post.id" v-show="post.showComments"/>
            </v-card-text>

        </v-card>
    </v-col>
</template>

<script>
import { mapGetters } from 'vuex';
import UserCommentsList from './UserCommentsList.vue';

export default {

    props: {
        posts: Array,
    },

    components: { UserCommentsList },

    computed: {
        ...mapGetters(['getCommentsLength'])
    },


}
</script>