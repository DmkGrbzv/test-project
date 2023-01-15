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
      <div class="prev" @click="previousSlide">
        <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.31662 17.9001L7.95001 10.2501L0.31662 2.60002L2.66664 0.25L12.6667 10.2501L2.66664 20.2501L0.31662 17.9001Z" fill="#757575"/>
        </svg>
      </div>
      <div class="next" @click="nextSlide">
        <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.31662 17.9001L7.95001 10.2501L0.31662 2.60002L2.66664 0.25L12.6667 10.2501L2.66664 20.2501L0.31662 17.9001Z" fill="#757575"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
 
</style>