<template>
  <DatasetsOverview v-bind:mode="false"/>
</template>

<script>
import DatasetsOverview from '@/components/DatasetsOverview.vue'
export default {
    name: "Download",
    components: {DatasetsOverview}
}
</script>

<style>

</style>