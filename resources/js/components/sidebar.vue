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
            <div class="col-12 p-5">
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
                        icon: 'fas fa-list'
                    },
                    {
                        href: '/about',
                        title: 'About',
                        icon: 'fa fa-trash'
                    },
                    {
                        href: '/contact',
                        title: 'Contact',
                        icon: 'fa fa-mobile'
                    },
                    {
                        title: 'Applications',
                        icon: 'fab fa-app-store',
                        child: [
                            {
                                href: '/modal',
                                title: 'Modal',
                                icon: 'fa fa-list'
                            },
                            {
                                href: '/route_param/alireza',
                                title: 'Route Params',
                                icon: 'fa fa-magic'
                            },
                        ]
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>