<template>
    <div>
        <v-dialog
            transition="dialog-bottom-transition"
            max-width="600"
        >

            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="red"
                    v-bind="attrs"
                    v-on="on"
                >Show error message</v-btn>
            </template>

            <template v-slot:default="dialog = true">
                <v-card>
                    <v-card-text>
                        <div class="text-h2 pa-12">{{message}}</div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                    <v-btn
                        text
                        @click="dialog.value = false"
                    >Close</v-btn>
                    </v-card-actions>
                </v-card>
            </template>

        </v-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            message: String
        }
    }
</script>