import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

import VueYouTubeEmbed from 'vue-youtube-embed';

/*
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
Vue.use(VueGlide)
*/
import VueCropper from 'vue-cropperjs';
import VueCarousel from 'vue-carousel';
import vueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(vueSmoothScroll);
Vue.use(VueCarousel);

import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

Vue.use(VueYouTubeEmbed);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
