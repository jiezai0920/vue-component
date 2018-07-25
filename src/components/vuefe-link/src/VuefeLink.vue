<template>
  <a class="vuefe-link" :class="linkName" :href="emptyRouters ? 'javascript:;' : routers.url" v-if="hasUrl || emptyRouters" @click="clickFn">
    <slot></slot>
  </a>
  <router-link class="vuefe-link" :class="linkName" :tag="tag" :to="routers" v-else>
    <slot></slot>
  </router-link>
</template>
<script>
import O from '../../../tools/o';

export default {
  name: 'vuefe-link',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    routers: {
      type: Object,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    linkName() {
      return this.className ? `${this.className}-link` : '';
    },
    emptyRouters() {
      return O.empty(this.routers);
    },
    hasUrl() {
      let emptyJson = true;
      if (!this.emptyRouters) {
        emptyJson = O.hOwnProperty(this.routers, 'url');
      }
      return emptyJson;
    },
  },
  methods: {
    clickFn() {
      this.click();
      this.$emit('click');
    },
  },
};
</script>
