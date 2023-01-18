<script>
import HeaderVue from "./layout/Header.vue";
import FooterVue from "./layout/Footer.vue";
import Slider from "./components/SliderOfCards.vue";
import Card from "./components/Card.vue";
import HomePage from "./pages/Home.vue";
import ProductPage from "./pages/ProductPage.vue";

import { mapActions, mapState } from 'pinia';
import {useAppStore} from "./store/appStore";
export default{
  name: "App",
  components: {
    ProductPage,
    HomePage,
    Slider,
    Card,
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
    ...mapState(useAppStore,['getAllDogsData']),
    ...mapState(useAppStore,['getDataIsLoadedValue'])
  },
    
  async mounted(){
    await this.fetchingDogsData();
  }
}
  
</script>

<template>
  <div class="wrapper">
    <header-vue></header-vue>
    <Home />
    <Product-Page />
    <section>
      <Slider v-if="getDataIsLoadedValue">
        <template #card="{card}">
          <Card :name="card.name" :id="card.id" :image="card.image"/>
        </template>
      </Slider>
    </section>
    <footer-vue></footer-vue>
  </div>   
</template>

<style lang="scss">
  @import "./styles/main.scss";
</style>
