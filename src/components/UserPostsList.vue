<template>
    <div>
        <UserPost :posts='getPosts'/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserPost from './UserPost.vue';

    export default {

    computed: {
        ...mapGetters(["getDescendingUserPosts"]),
        getPosts() {
            return this.getDescendingUserPosts(this.$route.params.id);
        }
    },

    methods: {
        ...mapActions(['fetchPosts', 'fetchComments']),
    },

    mounted() {
        this.fetchPosts();
        this.fetchComments();    
    },

    components: { UserPost }
}
</script>