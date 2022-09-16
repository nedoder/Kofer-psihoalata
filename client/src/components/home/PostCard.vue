<template>
  <router-link tag="a"  :to="{path: 'post/' + items.id}" exact class="post">
    <div class="post-info-hover">
      <div class="post-date-info">
        <font-awesome-icon icon="calendar"/>
        <span class="post-date">{{new Date(items.createdAt).toISOString().slice(0,10)}}</span>
      </div>

    </div>
    <span class="shape"></span>
    <div class="post-img">
     <img :src="$imagePath + items.image" alt="Post image"/>
    </div>
  
    <div class="post-info">
      <span class="post-category"> {{items.Category.category}}</span>
      <h5 class="post-title">{{items.title}}</h5>
      <span class="post-by">kreirao/la <a href="#" class="post-author" title="author">{{items.User.username}}</a></span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PostCard',
  props: ["items"],
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #000;
  }
</style>