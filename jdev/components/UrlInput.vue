<template>
          <v-row>
          <v-col cols="12">
              <div class="pa-8">
                <v-text-field class="input__field" />
                </div>
                <div class="pa-2">
                <v-select height="20px" outlined  single-line :items="types" ></v-select>
                </div>
                <div class="pa-2 btn__container">
                    <v-btn >Go</v-btn>
                </div>
     </v-col>
            </v-row>  
</template>

<script>
export default {
    name: "UrlInput",
    data: function(){
        return{
            types: ["post", "get", "delete"]
        }
    }
}
</script>

<style>
.btn__container{

}
.URL__card{
    padding: 10px
}
.input__field{
}
</style>