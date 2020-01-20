<template>
  <div>
    <v-jsoneditor v-model="json" :options="options" :plus="true" height="1000px" @error="onError" />
  </div>
</template>

<script>
import VJsoneditor from 'v-jsoneditor/src/index'

export default {
  name: 'Editor',
    components: {
        VJsoneditor
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
