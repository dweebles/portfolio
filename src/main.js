import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue from 'vue'
import App from './App.vue'

/* Components */
import Work from "./components/Work.vue";
import Contact from "./components/Contact.vue";

const routes = [
  { path: '/work', component: Work },
  { path: '/contact', component: Contact }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
