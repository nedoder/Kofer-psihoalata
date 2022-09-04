<template>
  <div>
  <div class="post-container" v-if="items.length!==0">
    <div class="post-list">
      <h4>Postovi</h4>
      <div class="post-flex">
        <div v-for="item in items" :key="item.id" class="posts">
          <post-card :items="item"/>
        </div>
      </div>
    </div>
  </div>
  <no-results v-if="items.length===0"></no-results>
</div>
</template>

<script>
import requests from '../../services/services'
import NoResults from './NoResults.vue'
import PostCard from './PostCard.vue'

 
export default {
  name: 'PostList',
  components: {PostCard, NoResults},

  
  data: () => ({
    items: [],
  }),
 
  mounted(){
    if(this.$route.query.category) {
      requests.getPostsList(this.$route.query.category)
      .then(response => {
        this.items = response.data;
        console.log(response.data)
      }).catch(error => {
        console.log(error.response)
      })
    } else {
      requests.getPostList()
      .then(response => {
        this.items = response.data;
        console.log(response.data)
      }).catch(error => {
        console.log(error.response)
      });
    }
    
  },
}
</script>

<style>

.post-container {
  width: 100%;
  position: relative;
  
 
}

.post-list h4 {
    font-family: 'Ribeye Marrow', cursive;
    font-size: 3rem;
    margin: 2rem 0;
    color: #444;
}

.post-list p {
  margin: 1rem 0;
}

.post-list {
  width: 90%;
  padding: 5rem 1rem;
  margin: 0 auto;
  overflow: hidden;
  
}


.post-flex {
  display: flex;
    display: -webkit-flex;
    justify-content: start;
    -webkit-justify-content: start;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 2rem;
}
.posts {
    width: calc(25% - 1.5rem);
    display: flex;
    display: -webkit-flex;
    justify-content: start;
    -webkit-justify-content: start;
  
}

.post {
  width: 100%;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background: #f5f5f5;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 5px 5px 8px rgb(185, 184, 184), -5px -5px 8px rgb(250, 246, 246);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  /* height: 25rem; */
  /* border: 3px solid #fff; */
 
}

.post-category {
  text-transform: uppercase;
  color: rgb(108, 110, 103)
}

.post-by {
  color: rgb(108, 110, 103);
}
.post-info, .post-img {
  height: 50%;
}
.post-img img {
  width: 70%;
  height: 100%;
  border-radius: 1rem;
  border: 3px solid #fff;
  box-shadow: 3px 4px 5px rgb(185 184 184), -7px -2px 4px rgb(250 246 246);
  transition: all .5s ease;
  
}
.post-date-info {
  color: rgb(108, 110, 103);
  text-align: right;
  padding-bottom: .5rem;
  /* color: #C57D96; */
}
.post-author {
  color: #C57D96 !important;
}

.post-img {
  z-index: 1;
}
.post-info {
  padding: 1rem 0;
}

.post-date {
    font-size: .8rem;
    padding-left: .2rem;
}

.post-title {
     display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1.2rem;
}

.post .shape {
  width: 200px;
  height: 200px;
  background: #F4CB82;
  opacity: 0.2;
  position: absolute;
  top: 0;
  right: -100px;
  transform: rotate(45deg);
  transition: all 1s ease;
    
}

.posts:nth-child(2n) .shape  {
     background:  #c57d96;
}

.post:hover {
    cursor: pointer;
    transform: scale(1.05);
}

.post:hover .shape {
  height: 100%;
  width: 100%;
  transform: rotate(0);
  right: -40%;
}

.post-title:hover {
  text-decoration: underline;
}

.post-img img:hover {
    opacity: 0.6;
    width: 75%;
}

@media (max-width: 992px) {
  .posts {
    width: calc(33.3% - 1.5rem);
  }
}

@media (max-width: 768px) {
  .posts {
    width: calc(50% - 1.5rem);
  }
}

@media (max-width: 600px) {
  .posts {
    width: 100%;
  }
}

</style>