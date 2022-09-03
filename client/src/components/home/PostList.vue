<template>
  <div class="post-container">
    <div class="post-list">
      <h4>Postovi</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, vel.</p>
     
        <div v-for="item in items" :key="item.id"  class="category-card">
          <category-card :items="item" />
         
        </div>
     
    </div>
  </div>
</template>

<script>
import requests from '../../services/services'
import PostCard from './PostCard.vue'

 
export default {
  name: 'PostList',
  components: {PostCard},

  
  data: () => ({
    items: [],
  }),
 
  mounted(){
    requests.getPostsList()
    .then(response => {
      this.items = response.data;
    }).catch(error => {
      console.log(error.response)
    });
  },
}
</script>