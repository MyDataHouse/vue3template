import type { Component, App } from 'vue';
import SvgIcon from './SvgIcon/index.vue';
const components: { [key: string]: Component } = { SvgIcon };

export default {
  install(app: App) {
    for (const key in components) {
      app.component(key, components[key]);
    }
  }
};
