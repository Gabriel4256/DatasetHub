<template>
    <div class="col-md-3 col-sm-6 border-right py-5 border-bottom">
        <div class="animated-digits mx-auto text-center"  v-bind:data-number="dataNumber">
        <h5 class="animated-digits-digit"><span>0</span>{{dataUnit}}</h5>
        <p class="animated-digits-text">{{dataName}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Statistic',
    props: {
        dataNumber: Number,
        dataUnit: String,
        dataName: String,
    }
}
</script>

<style>

</style>