import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router/';
import app from './app';

Vue.use(VueRouter);

let demo = new Vue({
    el: '#vueApp',
    router,
    template: '<app/>',
    components: { app }
})