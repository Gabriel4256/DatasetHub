<template>
    <section class="bg-white container-fluid border-top">
      <div class="row">
        <Statistic 
            dataName="Totally satisfied clients"
            v-bind:dataNumber="350"
            dataUnit="+"
        />
        <Statistic
            dataName="Positive feedback"
            v-bind:dataNumber="92"
            dataUnit="%"
        />
        <Statistic
            dataName="Completed projects"
            v-bind:dataNumber="1446"
            dataUnit=''
        />
        <Statistic
            dataName="Average cost per hour"
            v-bind:dataNumber="28"
            dataUnit="$"
        />
      </div>
    </section>
</template>

<script>
import Statistic from './Statistic'
export default {
    name: 'Statistics',
    components: {
        Statistic
    }
}
</script>

<style>
</style>