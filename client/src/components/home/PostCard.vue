<template>
  <article class="post">
     <div class="post-info-hover">
    
    
      <div class="post-date-info">
        <font-awesome-icon icon="calendar"/>
        <span class="post-ime">{{new Date(items.createdAt).toDateString()}}</span>
      </div>

     </div>
     <span class="shape"></span>
     <div class="post-img">
      <img :src="$imagePath + items.image"/>
     </div>
  
  <div class="post-info">
    <span class="post-category"> {{items.category.category}}</span>
    <h3 class="post-title">{{items.title}}</h3>
    <span class="post-by">kreirao/la <a href="#" class="post-author" title="author">{{items.user.username}}</a></span>
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