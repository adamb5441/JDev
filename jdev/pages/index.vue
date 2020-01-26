<template>
  <div class="home">
    <UrlInput @sendEvent="sendHandler" :text="JSONdata" />
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
    sendHandler(request){
      this[request.event](request)
    },
    inputHandler(val){
      this.JSONdata = val
    },
    async get(request){
      const res = this.$axios.$put("/api/getJSON", {url: request.url})
      console.log(res)
    },
    post(request){
      const res = this.$axios.$post(`/api/postJSON/${request.url}`, {data: this.JSONdata})
      console.log(res)
    }
  }
}
</script>
