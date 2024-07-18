// import '@icon-park/vue-next/styles/index.css';
// import 'virtual:svg-icons-register'; //这是虚拟模块的引入方式，用于给脚手架插件在打包和开发时做相应的处理
import Globalcomponents from '@/components';
import router from '@/router';
import { pinia } from '@/store';
import { createApp } from 'vue';
import App from './App.vue';

import '@/assets/style/variable.css';
import '@/assets/style/tailwind.css';

createApp(App)
  .use(pinia)
  .use(Globalcomponents as any)
  .use(router)
  .mount('#app');
