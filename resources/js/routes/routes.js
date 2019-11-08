import home from '../components/home';
import about from '../components/about';
import contact from '../components/contact';
import modal from '../components/modal';
import route_param from '../components/route_param';
// import fontawesome from '../components/fontawesome';

const routes = [
    {path: '/', name: 'home', component: home},
    {path: '/about', name: 'about', component: about},
    {path: '/contact', name: 'contact', component: contact},
    {path: '/modal', name: 'modal', component: modal},
    // {path: '/fontawesome', name: 'fontawesome', component: fontawesome},
    {path: '/route_param/:id', name: 'route_param', component: route_param},
];
export default routes;