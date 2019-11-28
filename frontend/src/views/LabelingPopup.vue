<template>
  <div class="labelingPopup" >
    <!-- <p>This is labeling page</p> -->
    <v-btn v-if="!imgs[0]" color="error" v-on:click="sendAjaxRequest">Generate pictures</v-btn>
    <div v-if="imgs[0]">
      <!-- <v-card
        class="mx-auto"
        color="green"
        width="200px"
      >
        <v-card-text>
          Choose the correct option
        </v-card-text>
      </v-card>   -->
      
      <div class="d-block pa-2 deep-purple accent-4 white--text">
        Choose the correct option
      </div>
      <!-- <li v-for="img in imgs" :key=img.id> -->
        <!-- <div class="d-block pa-2 deep-purple accent-4 white--text"> -->
        <img v-bind:src="imgs[index]['url']"/>
        <!-- </div> -->
        <!-- < v-for="option in options" :key=option> -->
          <v-btn v-for="option in options" :key=option color="success" v-on:click="submitImg">{{option}}</v-btn>
        <!-- </div> -->
      <!-- </li> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  components: {
    
  },
  data : function(){
    return {
      imgs: [],
      options: [],
      index: 0
    }
  },
  methods: {
    sendAjaxRequest: function() {
      axios.get('/api/img').then((res) => {
        this.imgs = res.data.images
        this.options = res.data.options
      })
    },
    openPopup: function(){
      window.open('/#/about')
    },
    submitImg: function(){
      // get over to the next image
      this.index += 1
      if (this.index >=this.imgs.length){
        return false
      }
    }
  }
}
</script>

<style>
img {
    max-width: 300%;
    max-height: 300%;
}
</style>