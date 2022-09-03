<template>
  <article class="card card--1">
     <div class="card__info-hover">
         <img :src="$imagePath + items.image"/>
    
      <div class="card__clock-info">
        <font-awesome-icon icon="house-chimney-window" />
        <span class="card__time">{{items.createdAt}}</span>
      </div>

     </div>
     <div class="card__img"></div>
  <a href="#" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <span class="card__category"> {{items.category}}</span>
    <h3 class="card__title">{{items.title}}</h3>
    <span class="card__by">by <a href="#" class="card__author" title="author">{{items.author}}</a></span>
  </div>
</article>
  
    <!-- <div class="image-wrap">
       <img :src="$imagePath + items.image"/>
    </div>
 <div class="card-footer">
    <p>{{items.category}}</p>
    </div>
  </article> -->
</template>

<script>
export default {
  name: 'PostCard',
  props: ["items"],
}
</script>

<style>
  
</style>