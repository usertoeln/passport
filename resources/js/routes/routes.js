import home from '../components/home';
import about from '../components/about';
import contact from '../components/contact';
import modal from '../components/modal';

const routes = [
    {path: '/', name: 'home', component: home},
    {path: '/about', name: 'about', component: about},
    {path: '/contact', name: 'contact', component: contact},
    {path: '/modal', name: 'modal', component: modal},
];
export default routes;