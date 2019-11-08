<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-auto">
                <sidebar-menu :menu="menu"
                              :showOneChild="true"
                              :rtl=false
                              :relative=false
                              :collapsed="true"/>
            </div>
            <div class="col-auto p-5">
                <router-view></router-view>
            </div>
        </div>
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
                        icon: 'fas fa-user'
                    },
                    {
                        href: '/about',
                        title: 'About',
                        icon: 'fas fa-user'
                    },
                    {
                        href: '/modal',
                        title: 'Modal',
                        icon: 'fa fa-user'
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>