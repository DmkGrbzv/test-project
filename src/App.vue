<script>
import HeaderVue from "./layout/Header.vue";
import FooterVue from "./layout/Footer.vue";
import HomePage from "./pages/HomePage.vue";
import ProductPage from "./pages/ProductPage.vue";

import { mapActions, mapState } from 'pinia';
import {useAppStore} from "./store/appStore";
export default{
  name: "App",
  components: {
    ProductPage,
    HomePage,
    HeaderVue,
    FooterVue
  },
  data() {
    const {fetchingDogsData} = mapActions(useAppStore,["fetchingDogsData"]);
    return {
      fetchingDogsData
    }
  },
  methods:{
    
  },
  computed:{

  },
    
  async mounted(){
    await this.fetchingDogsData();
  }
}
  
</script>

<template>
  <div class="wrapper">
    <header-vue></header-vue>
    <router-view></router-view>
    <footer-vue></footer-vue>
  </div>   
</template>

<style lang="scss">
  @import "./styles/main.scss";
</style>
