<script>
import Slider from "./components/SliderOfCards.vue";
import Card from "./components/Card.vue";
import { mapActions, mapState } from 'pinia';
import {useAppStore} from "./store/appStore";
export default{
  name: "App",
  components: {
    Slider,
    Card
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
  <Slider v-if="getDataIsLoadedValue">
      <template #card="{ card}">
        <Card :name="card.name" :id="card.id" :image="card.image"/>
      </template>
  </Slider>
</template>

<style lang="scss">
  @import "./styles/main.scss";
</style>
