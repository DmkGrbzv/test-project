<script>
export default{
  name: "Card",
  props:{
    name: String,
    image: Object,
    id: Number
  },
}
  
</script>

<template>
  <div class="card-container">
        <div class="card">
          <div class="img">
            <img :src="image.url" :alt=name>
          </div>
          <div class="info">
            <div class="title">BREED</div>
            <div class="text">{{ this.name }}</div>
          </div>
        </div>
  </div>
</template>

<style lang="scss">
  
</style>
