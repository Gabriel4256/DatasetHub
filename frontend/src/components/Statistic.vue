<template>
  <div class="col-md-3 col-sm-6 border-right py-5 border-bottom">
    <div class="animated-digits mx-auto text-center" v-bind:data-number="dataNumber">
      <h5 class="animated-digits-digit">
        <span>
            <animated-number
                :value="dataNumber"
                :fomatValue="formatToPrice"
                :duration="1000"
                :round=true
            />
        </span>
        {{dataUnit}}
      </h5>
      <p class="animated-digits-text">{{dataName}}</p>
    </div>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue"
export default {
    name: 'Statistic',
    components: {
        AnimatedNumber
    },
    props: {
        dataNumber: Number,
        dataUnit: String,
        dataName: String,
    },
    methods: {
        formatToPrice: function(value){
            return value.toFixed(0)
        }
    }
}
</script>

<style>
</style>