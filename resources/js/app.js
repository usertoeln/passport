import Vue from 'vue';
import Bootstrap from 'bootstrap-vue';
import Router from 'vue-router';
import routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import panel from './components/panel';

Vue.use(Bootstrap);
Vue.use(Router);
const app_routes = new Router({
    routes,
    mode : 'history'
});

export default new Vue({
    el: '#app',
    components: {'panel': panel},
    router: app_routes,
});