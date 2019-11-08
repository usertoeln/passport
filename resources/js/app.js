import Vue from 'vue';
import Bootstrap from 'bootstrap-vue';
import Router from 'vue-router';
import routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-rtl.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import panel from './components/panel';
/**********************/
// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// import sidebar from './components/sidebar';
/**********************/
// import App from './App'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faArchive, faChild, faCircle, faCoffee, faUserSecret ,faAngry} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-regular-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

/**********************/
// Vue.use(VueSidebarMenu);
Vue.use(Bootstrap);
Vue.use(Router);
/****************************/
library.add(faUserSecret, faCoffee, faChild, faCircle, faArchive,faTwitter,faComment,faAngry);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
/****************************/
const app_routes = new Router({
    routes,
    mode: 'history'
});

export default new Vue({
    el: '#app',
    components: {
        'panel': panel,
        // 'sidebar': sidebar,
        // App,
        // template: '<App/>'
    },
    router: app_routes,
});