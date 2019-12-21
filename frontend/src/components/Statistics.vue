<template>
    <section class="bg-white container-fluid border-top">
      <div class="row">
        <Statistic 
            dataName="Totally satisfied clients"
            dataNumber=350
            dataUnit="+"
        />
        <Statistic
            dataName="Positive feedback"
            dataNumber=92
            dataUnit="%"
        />
        <Statistic
            dataName="Completed projects"
            dataNumber=1446
            dataUnit=''
        />
        <Statistic
            dataName="Average cost per hour"
            dataNumber=28
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