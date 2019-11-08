<template>
    <div class="text-center">
        <h2 class="text-center">This is a route parameter sample</h2>
        <p>Below parameter sent by route</p>
        <p> {{ $route.params.id }}</p>
        <i class="fa fa-list"></i>
        <i class="fa fa-font"></i>
        <i class="fa fa-magic"></i>
    </div>
</template>

<script>
    export default {
        name: "route_param"
    }
</script>

<style scoped>

</style>