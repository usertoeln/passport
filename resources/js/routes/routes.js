import home from '../components/home';
import about from '../components/about';
import contact from '../components/contact';
import modal from '../components/modal';
import route_param from '../components/route_param';
import fontawesome from '../components/fontawesome';
// import sidebar from '../components/sidebar';

const routes = [
    {path: '/', name: 'home', component: home, display: 'Home'},
    {path: '/about', name: 'about', component: about, display: 'About'},
    {path: '/contact', name: 'contact', component: contact, display: 'Contact'},
    {path: '/modal', name: 'modal', component: modal, display: 'Modal Sample'},
    {path: '/fontawesome', name: 'fontawesome', component: fontawesome},
    // {path: '/sidebar', name: 'sidebar', component: 'sidebar'},
    {path: '/route_param/:id', name: 'route_param', component: route_param, display: 'Route Parameter'},
];
export default routes;