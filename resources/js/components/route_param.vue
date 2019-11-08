<template>
    <div class="text-center">
        <h2 class="text-center">This is a route parameter sample</h2>
        <p>Below parameter sent by route</p>
        <p> {{ $route.params.id }}</p>
    </div>
</template>

<script>
    export default {
        name: "route_param"
    }
</script>

<style scoped>

</style>