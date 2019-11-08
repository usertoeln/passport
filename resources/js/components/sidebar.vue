<template>
    <div>
        <font-awesome-icon icon="user-secret" />
        <sidebar-menu :menu="menu"/>
    </div>
</template>

<script>

    export default {
        name: "sidebar",
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Home',
                    },
                    {
                        href: '/about',
                        title: 'About',
                        icon: 'user-secret',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>