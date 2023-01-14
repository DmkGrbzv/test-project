<script>
import Card from "./Card.vue";
import { mapActions, mapState } from 'pinia';
import {useAppStore} from "../store/appStore";

export default{
  name: "Slider",
  props:{
    
  },
  components: {
    Card
  },
  data() {
    return {
      firstIndex:0,
      lastIndex:0,
      range:3,
      cards:[],
      displayedCards:[],
      limit: 8
    }
  },
  methods:{
    previousSlide(){
      let countModulo = this.cards.length % this.range;
      if(this.firstIndex - this.range < 0){
        return
      }
      if(this.lastIndex % this.range){
        this.lastIndex -= countModulo;
        this.firstIndex -= this.range;
        this.showCardsByIndexes();
        return
      }
      console.log(this.firstIndex,this.lastIndex,this.range);
      this.firstIndex -= this.range;
      this.lastIndex -= this.range;
      this.showCardsByIndexes();
    },
    nextSlide(){
      if(this.lastIndex + this.range > this.cards.length ){  
        console.log(this.firstIndex,this.lastIndex,this.range);
        let countModulo = this.cards.length % this.range;
        if(countModulo + this.lastIndex <= this.cards.length){
          this.firstIndex = this.lastIndex;
          this.lastIndex += countModulo;
          this.showCardsByIndexes();
          return
        }
        return
      }
      this.firstIndex = this.lastIndex;
      this.lastIndex = this.lastIndex + this.range;
      this.showCardsByIndexes();
    },
    showCardsByIndexes(){
      this.displayedCards = this.cards.slice(this.firstIndex, this.lastIndex);
      console.log(this.displayedCards,this.cards);
      console.log(this.firstIndex,this.lastIndex)
    }
  },
  computed:{
   ...mapState(useAppStore,['getAllDogsData'])
  },
    
  mounted(){
    this.cards = this.getAllDogsData;
    if(this.getAllDogsData.length !== this.limit){
      this.cards = this.cards.slice(0,this.limit)
    }
    this.lastIndex += this.range;
    this.displayedCards = this.cards.slice(this.firstIndex,this.lastIndex);
  }
}
</script>

<template>
  <div class="carousel-container">
    <div class="carousel-inner">
      <div class="track">
        <template v-for="card in displayedCards" :key="card.id">
          <slot name="card" :card="card"></slot>
        </template>
      </div>
    </div>
    <div class="navigation">
      <div class="prev" @click="previousSlide">Pr</div>
      <div class="next" @click="nextSlide">Nx</div>
    </div>
  </div>
</template>

<style lang="scss">
 
</style>