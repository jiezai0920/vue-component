import VuefeButton from './src/VuefeButton.vue';
import VuefeButtonGroup from './src/VuefeButtonGroup.vue';

/* istanbul ignore next */
VuefeButton.install = (Vue) => {
  Vue.component(VuefeButton.name, VuefeButton);
};
/* istanbul ignore next */
VuefeButtonGroup.install = (Vue) => {
  Vue.component(VuefeButtonGroup.name, VuefeButtonGroup);
};

export default {
  VuefeButton,
  VuefeButtonGroup,
};
