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
 <p>Home</p>
 <section>
      <Slider v-if="getDataIsLoadedValue" :getAllCardsData="getAllDogsData">
        <template #card="{card}">
          <Card :name="card.name" :id="card.id" :image="card.image"/>
        </template>
      </Slider>
  </section>
</template>

<style lang="scss">
 
</style>