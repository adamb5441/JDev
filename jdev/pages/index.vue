<template>
  <div class="home">
    <UrlInput @sendEvent="sendHandler" :text="JSONdata" />
    <Editor @inputEvent="inputHandler" :jData="JSONdata" />
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
      this.$axios.$post("/api/getJSON", {url: request.url}).then(res => {
        this.JSONdata = res
      })
    },
    post(request){
      const res = this.$axios.$post(`/api/postJSON`, {url: request.url, data: this.JSONdata})
      
    }
  }
}
</script>
