<template>
  <div class="home">
    <UrlInput :text="JSONdata" />
    <Editor @inputEvent="inputHandler" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from '@/components/Editor.vue'
import UrlInput from '@/components/UrlInput.vue'

export default {
  name: 'home',
  components: {
    Editor,
    UrlInput
  },
  data: () => ({
    JSONdata: {},
    geturl: "",
    posturl: "" 
  }),
  methods: {
    inputHandler(val){
      this.JSONdata = val
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
