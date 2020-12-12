import vueDynamicGauge from "./vue-dynamic-gauge.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vue-dynamic-gauge", vueDynamicGauge);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

vueDynamicGauge.install = install;

export default vueDynamicGauge;
