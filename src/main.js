import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import axios from 'axios' 
import store from './store'
import VueLazyload from 'vue-lazyload' 

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/error.jpg',
  loading: '../static/loading.gif',
  attempt: 1
})
Vue.prototype.$axios = axios

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    store,
    render: h => h(App)
});
