<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld 
      buttonName= "go to labeling page" 
      v-bind:response="response"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data : function(){
    return {
      response: ""
    }
  },
  methods: {
    sendAjaxRequest: function() {
      axios.get('/api/img').then((res) => {
        this.response = res.data.options
      })
    },
    openPopup: function(){
      // window.open('/#/popup/labeling')
    }
  }
}
</script>
