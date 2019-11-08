<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">Test Project</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{name :  'modal'}">Modal</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown text="Apps" right>
                        <b-dropdown-item to="/">Home</b-dropdown-item>
                        <b-dropdown-item to="/contact">Contact</b-dropdown-item>
                        <b-dropdown-item to="/about">About</b-dropdown-item>
                        <b-dropdown-item to="/modal">Modal test</b-dropdown-item>
                        <b-dropdown-item to="/route_param/alireza">Route Parameters</b-dropdown-item>
                        <b-dropdown-item to="/fontawesome">Font Awesome</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div class="w-100"></div>
    </div>
</template>
<script>
    export default {
        name: "navigation"
    }
</script>
<style scoped></style>