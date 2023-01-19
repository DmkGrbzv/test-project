<script>

  import { mapActions, mapState } from 'pinia';
  import {useAppStore} from "../store/appStore";

  import Card from "../components/Card.vue";
  
  export default{
  name: "ProductPage",
  props:{
    productList:{
      type:Array,
    }
  },
  components: {
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
  <section class="product">
    <p class="product__title">ProductList</p>
      <div class="product__list">
        <div class="product__item" v-for="item in getAllDogsData" :key="item.id">
        <Card :name="item.name" :id="item.id" :image="item.image"/>
      </div>
      </div>
  </section>
</template>

<style lang="scss">
 
</style>