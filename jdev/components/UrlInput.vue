<template>
    <v-card class="card__layout">
        <v-row>
                <v-col class="input___container" sm="6">
                    <v-text-field outlined class="input__field" />
                    <v-btn height="56px">Go</v-btn>
                </v-col>
                <v-col sm="2">
                    <v-select fullwidth height="20px" outlined  single-line :items="types" ></v-select>
                </v-col>
        </v-row>  
        <v-row>
            <v-col>
                <v-btn v-clipboard="() => text">copy to clipboard</v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: "UrlInput",
    props: {
        text: Object
    },
    data: function(){
        return{
            types: ["post", "get"]
        }
    }
}
</script>

<style>
.card__layout{
    padding: 10px
}
.input___container{
    display: flex;
}
.input__field{
}
</style>