<template>
  <v-layout v-if="loggedIn">
    <v-flex class="text-center">
      <v-card>

      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "menu",
  props: {
    loggedIn: Boolean
  },
  data: function(){
    return {
      
    }
  }

}
</script>
