<template>
  <div class="all">
    <h1 class="all-title">VUEFE</h1>
    <vuefe-row :gutter="32" class="all-main">
      <vuefe-col class="all-menu" span="6">
        <vuefe-row :gutter="16" class="all-search">
          <vuefe-col span="16">
            <span @keyup.enter="go">
              <input type="text" class="all-search" v-model="search" @change="searchChange" @enter="go">
            </span>
            <ul class="all-search-think" v-show="searchResults.length">
              <li class="all-search-think-item" v-for="(searchResult, index) in searchResults" :key="index">
                <vuefe-link :routers="searchResult.routers">{{ searchResult.title }}</vuefe-link>
              </li>
            </ul>
          </vuefe-col>
          <vuefe-col span="8">
            <vuefe-button theme="primary" className="all-search" @click="go">搜索</vuefe-button>
          </vuefe-col>
        </vuefe-row>
        <div class="all-menu-content">
          <dl class="all-menu-one" v-for="(data, dataIndex) in datas" :key="dataIndex">
            <dt class="all-menu-one-title">{{ data.title }}</dt>
            <dd class="all-menu-one-item" v-for="(menu, menuIndex) in data.menus" :key="menuIndex">
              <vuefe-link :routers="menu.routers" class="all-menu-link">{{ menu.title }}</vuefe-link>
            </dd>
          </dl>
        </div>
      </vuefe-col>
      <vuefe-col class="all-view" span="18">
        <router-view></router-view>
      </vuefe-col>
    </vuefe-row>
  </div>
</template>
<script>
const cpts = require('./menus/components').default;
module.exports = {
  data() {
    return {
      search: '',
      searchResults: [],
      datas: [
        {
          title: '组件',
          menus: cpts,
        },
      ],
    };
  },
  methods: {
    searchChange(val) {
      if (val) {
        const re = new RegExp(val, 'g');
        this.search = val;
        this.searchResults = cpts.filter(cpt => re.test(cpt.title))
      } else {
        this.resetSearch();
      }
    },
    resetSearch() {
      this.searchResults = [];
      this.search = '';
    },
    go() {
      const { searchResults } = this;
      if (searchResults.length > 0) {
        this.$router.push(searchResults[0].routers);
      }
    },
  },
  watch: {
    $route() {
      this.resetSearch();
    },
  },
};
</script>
<style lang="scss">
@import "./styles/app.scss";
</style>
