<template>
  <div class="post-container">
    <div class="post-list">
      <h4>Postovi</h4>
      <div class="post-flex">
        <div v-for="item in items" :key="item.id" class="posts">
          <post-card :items="item" />
        </div>
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
      console.log(response.data)
    }).catch(error => {
      console.log(error.response)
    });
  },
}
</script>

<style >

.post-container {
  width: 100%;
  position: relative;
  
 
}

.post-list h4 {
    font-family: 'Londrina Outline', cursive;
    font-size: 3rem;
    margin: 2rem 0;
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
  background-color: #fff;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 5px 5px 8px rgb(185, 184, 184), -5px -5px 8px rgb(250, 246, 246);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 3px solid #fff;
 
}

.post-category {
  text-transform: uppercase;
  color: rgb(108, 110, 103)
}

.post-by {
  color: rgb(108, 110, 103)
}
.post-info, .post-img {
  height: 50%;
}
.post-img img {
  width: 70%;
  height: 100%;
  border-radius: 1rem;
  
}
.post-date-info {
  color: #F4CB82;
  text-align: right;
  padding-bottom: .5rem;
}
.post-author {
  color: #F4CB82;
}

.post-img {
  z-index: 1;
}
.post-info {
  padding: 1rem 0;
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
    
}

/* .post .shape:nth-child(2) {
     background:  #c57d96;
} */


@media (max-width: 992px) {
  .posts {
    width: calc(33.3% - 1.5rem);
  }
}

@media (max-width: 768px) {
  .posts {
    width: calc(33.3% - 1.5rem);
  }
}

@media (max-width: 600px) {
  .posts {
    width: 100%;
  }
}

</style>