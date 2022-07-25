<template>
    <div>
        <v-form @submit.prevent="editFormHandler">

             <v-text-field
                class="mt-2"
                label="Edit comment"
                outlined
                v-model="editedComment"
            ></v-text-field>
            <v-row class="justify-space-between ma-1">
                <v-btn           
                    color="red"
                    dark
                    @click="deleteComment(comment.id)"
                >
                    Delete
                    <v-icon
                        dark
                        right
                    >
                        mdi-cancel
                    </v-icon>
                </v-btn>
                <v-btn           
                    color="blue"
                    dark
                    type="submit"
                >
                    Edit
                </v-btn>
            </v-row>
        </v-form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

    export default {
        props: {
            comment: Object
        },
        
        data: () => ({
            editedComment: ''
        }),

        methods: {
            ...mapMutations(['deleteComment', 'editComment']),

            editFormHandler() {
                if(this.editedComment) {
                    this.editComment({commentId: this.comment.id, editedComment: this.editedComment})
                }
            }
        }
    }
</script>
