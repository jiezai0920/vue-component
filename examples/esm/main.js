import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import router from './router';
// 开发版
import vuefe from '../../src/index';
import '../../src/styles/vuefe.scss';

// 生产版
// import vuefe from '../../dist/vuefe-esm';
// import '../../dist/css/vuefe.css';

Vue.use(VueRouter);
Vue.use(vuefe);
// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
