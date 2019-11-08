import Vue from 'vue';
import VueRouter from 'vue-router';
/**********************/
import Bootstrap from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
/**********************/
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import sidebar from './components/sidebar';
/**********************/
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {faAngry, faArchive, faChild, faCircle, faCoffee, faUser, faUserSecret} from '@fortawesome/free-solid-svg-icons'
// import {faComment} from '@fortawesome/free-regular-svg-icons'
// import {faTwitter} from '@fortawesome/free-brands-svg-icons'
// import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
/**********************/
import routes from "./routes/routes";
/**********************/
Vue.use(VueRouter);
Vue.use(VueSidebarMenu);
Vue.use(Bootstrap);
/****************************/
const app_routes = new VueRouter({
    routes,
    mode: 'history'
});
/****************************/
// library.add(faUserSecret, faCoffee, faChild, faCircle, faArchive, faTwitter, faComment, faAngry, faUser);
// Vue.component('font-awesome-icon', FontAwesomeIcon);
// Vue.component('font-awesome-layers', FontAwesomeLayers);
// Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
/****************************/

export default new Vue({
    el: '#app',
    components: {
        'sidebar': sidebar,
    },
    router: app_routes,
});