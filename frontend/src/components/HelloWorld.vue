<template>
  <div class="hello">
    <v-layout align-center>
    <div>
      
      <v-btn link to='/labeling' color="success">{{buttonName}}</v-btn>
      <!-- <button v-on:click="onClickMethod">{{buttonName}}</button> -->
    </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    buttonName: String,
    onClickMethod: Function,
    response: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
