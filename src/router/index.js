import Vue from 'vue';
import Router from 'vue-router';

const Index = resolve => require(['/page/Index'], resolve)
const Home = resolve => require(['/page/Home/home'], resolve)

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            redirect: '/home',
            children: [
                {path: 'home', component: Home}
            ]
        },
    ],
});
