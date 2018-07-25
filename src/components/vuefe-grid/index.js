import VuefeRow from './src/VuefeRow.vue';
import VuefeCol from './src/VuefeCol';

/* istanbul ignore next */
VuefeRow.install = (Vue) => {
  Vue.component(VuefeRow.name, VuefeRow);
};
/* istanbul ignore next */
VuefeCol.install = (Vue) => {
  Vue.component(VuefeCol.name, VuefeCol);
};

export default {
  VuefeRow,
  VuefeCol,
};
