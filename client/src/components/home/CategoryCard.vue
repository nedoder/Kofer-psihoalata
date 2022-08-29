<template>
  <div class="single-category">
    <div class="image-wrap">
       <img :src="$imagePath + items.image"/>
    </div>
 <div class="card-footer">
    <p>{{items.category}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: ["items"],
}
</script>

<style>
  
</style>