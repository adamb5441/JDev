<template>
  <div>
    <v-jsoneditor v-model="json" :options="options" :plus="true" height="1000px" @error="onError" />
  </div>
</template>

<script>

export default {
  name: 'Editor',
    components: {
    },
    data() {
        return {
            json: {
                "hello": "vue"
            },
            options: {mode: 'code'}
        }
    },
    methods: {
        onError() {
            console.log('error')
        }
    }
};
</script>
