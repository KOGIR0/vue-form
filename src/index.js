import Vue from 'vue';
import VueRouter from 'vue-router';


import Users from './components/Users.vue';
import Form from './components/Form.vue';
import App from './components/App.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
    { path: "/users", component: Users },
    { path: "/form", component: Form },
    { path: "/", component: null }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});