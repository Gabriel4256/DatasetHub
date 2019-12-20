<template>
    <div class="statistics" v-observe-visibility="visibilityChanged">             
        <!-- Statistics-->
        <section class="bg-white container-fluid border-top">
        <div class="row">
            <div class="col-md-3 col-sm-6 border-right py-5 border-bottom">
            <div class="animated-digits mx-auto text-center" data-number="350">
                <h5 class="animated-digits-digit">
                <span>
                    <animated-number v-if="isVisible"
                        :value="350"
                        :formatValue="formatToPrice"
                        :duration="1000"
                    /> 
                </span>+</h5>
                <p class="animated-digits-text">Totally satisfied clients</p>
            </div>
            </div>
            <div class="col-md-3 col-sm-6 py-5 border-right border-bottom">
            <div class="animated-digits mx-auto text-center" data-number="92">
                <h5 class="animated-digits-digit">
                    <span>
                        <animated-number v-if="isVisible"
                            :value="92"
                            :formatValue="formatToPrice"
                            :duration="1000"
                        />
                    </span>%</h5>
                <p class="animated-digits-text">Positive feedback</p>
            </div>
            </div>
            <div class="col-md-3 col-sm-6 py-5 border-right border-bottom">
            <div class="animated-digits mx-auto text-center" data-number="1446">
                <h5 class="animated-digits-digit">
                    <span>
                    <animated-number v-if="isVisible"
                        :value="1446"
                        :formatValue="formatToPrice"
                        :duration="1000"
                    />
                    </span>
                </h5>
                <p class="animated-digits-text">Completed projects</p>
            </div>
            </div>
            <div class="col-md-3 col-sm-6 py-5 border-bottom">
            <div class="animated-digits mx-auto text-center" data-number="28">
                <h5 class="animated-digits-digit">
                    $
                    <span>
                        <animated-number v-if="isVisible"
                            :value="28"
                            :formatValue="formatToPrice"
                            :duration="1000"
                        />    
                    </span>
                </h5>
                <p class="animated-digits-text">Average cost per hour</p>
            </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
    name: 'Statistics',
    components:{
        AnimatedNumber
    },
    data: function(){
        return {
            isVisible: false
        }
    },
    methods: {
        visibilityChanged: function(isVisible){
            this.isVisible = isVisible
        },
        formatToPrice : function(value) {
            return value.toFixed(0)
        }
    }
}
</script>

<style>

</style>