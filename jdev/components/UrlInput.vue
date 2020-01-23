<template>
  <v-card>
      <v-card-actions class="URL__card">
            <v-text-field class="input__field" />
            <v-select height="20px" outlined  single-line :items="types" ></v-select>
            <div class="btn__container">
                <v-btn >submit</v-btn>
            </div>
      </v-card-actions>
  </v-card>
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
    height: 100%;
    display: flex;
    align-items: center
}
.URL__card{
    padding: 10px
}
.input__field{
    margin-right: 30px;
    width: 1600px;
}
</style>