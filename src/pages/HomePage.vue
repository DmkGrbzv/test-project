<script>
import Slider from "../components/SliderOfCards.vue";
import Card from "../components/Card.vue";

import { mapActions, mapState } from 'pinia';
import {useAppStore} from "../store/appStore";
 export default{
  name: "HomePage",
  props:{
    
  },
  components: {
    Slider,
    Card
  },
  data() {
  
    return {
      
    }
  },
  methods:{
  
  },
  computed:{
    ...mapState(useAppStore,['getDataIsLoadedValue']),
    ...mapState(useAppStore,['getAllDogsData'])
  },
  mounted(){
   
  }
  }
</script>

<template>
 <section class="home">
      <div class="home__content">
        <h2 class="home__title">Home</h2>
        <Slider v-if="getDataIsLoadedValue" :getAllCardsData="getAllDogsData">
        <template #card="{card}">
          <Card :name="card.name" :id="card.id" :image="card.image" />
        </template>
      </Slider>
      </div>
  </section>
</template>

<style lang="scss">
 
</style>