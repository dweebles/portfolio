import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App)
}).$mount("#app");
