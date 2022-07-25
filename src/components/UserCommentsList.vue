<template>
    <div>
        <AddUserComment :postId='postId'/>
        <UserComment :comments='getComments'/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserComment from './UserComment.vue';
import AddUserComment from './AddUserComment.vue';
    export default {
        props: {
            postId: Number
        },

        computed: {
            ...mapGetters(["getCommentsSortByNewest"]),
            getComments() {
                return this.getCommentsSortByNewest(this.postId);
            }
        },

        components: { UserComment, AddUserComment }
}
</script>