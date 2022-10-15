<template>
  <router-link :to="{path: 'post/' + items.id}" exact class="post">
    <div class="post-info-hover">
      <div class="post-date-info">
        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><path d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z"/><path d="m.5 4.5h16"/></g></svg>
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
    color: var(--black);
  }
</style>