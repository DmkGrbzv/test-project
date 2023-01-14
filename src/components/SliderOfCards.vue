<script>
import Card from "./Card.vue"
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
      cards:[1,2,3,4,5,6,7,8,9,10,11,12],
      displayedCards:[]
    }
  },
  methods:{
    previousSlide(){
      if(this.firstIndex - this.range < 0){
        return
      }
      console.log(this.firstIndex,this.range);
      this.firstIndex -= this.range;
      this.lastIndex -= this.range;
      this.showCardsByIndexes();
    },
    nextSlide(){
      let countModulo = this.cards.length % this.range;
      if(this.lastIndex + this.range > this.cards.length){  
        if(countModulo){
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
   
  },
    
  mounted(){
    this.displayedCards = this.cards.slice(0,3);
    this.lastIndex += this.range;
  }
}
</script>

<template>
  <div class="carousel-container">
    <div class="carousel-inner">
      <!-- slots could be here -->
      <div class="track">
        <!-- <slot name="card" v-bind="cardData"></slot> -->
        <Card v-for="card in displayedCards" :key="card" />
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