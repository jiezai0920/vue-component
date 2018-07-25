// 组件
import VuefeIcon from './components/vuefe-icon/index';
import Button from './components/vuefe-button/index';
import Grid from './components/vuefe-grid/index';
import VuefeLink from './components/vuefe-link/index';

const Cpt = {
  VuefeCol: Grid.VuefeCol,
  VuefeRow: Grid.VuefeRow,
  VuefeIcon,
  VuefeLink,
  VuefeButton: Button.VuefeButton,
  VuefeButtonGroup: Button.VuefeButtonGroup,
};

const install = (Vue) => {
  if (install.installed) return;

  Object.keys(Cpt).forEach((key) => {
    Vue.component(key, Cpt[key]);
  });
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
};
