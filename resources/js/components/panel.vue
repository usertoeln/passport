<template>
    <div>
        <navigation></navigation>
        <panel_detail></panel_detail>
    </div>
</template>
<script>
    import navigation from './navigation';
    import panel_detail from './panel_detail';

    export default {
        name: "panel",
        components: {'navigation': navigation, 'panel_detail': panel_detail}
    }
</script>
<style scoped></style>