<template>
  <div class="home">
  
    <Editor msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from '@/components/Editor.vue'

export default {
  name: 'home',
  components: {
    Editor
  },
  data: () => ({
    JSONdata: {},
    geturl: "",
    posturl: "" 
  }),
  methods: {
    inputHandler(){

    },
    getJSON(){
      axios({
        method: "get",
        url: ""
      })
    },
    postJSON(){
      axios({
        method: "post",
        url: "",
        data: ""
      })
    }
  }
}
</script>
