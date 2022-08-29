<template>
  <div class="category-container">
    <div class="category-list">
      <div class="category">
        <div v-for="item in items" :key="item.id"  class="category-card">
          <category-card :items="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requests from '../../services/services'
import CategoryCard from './CategoryCard.vue'

export default {
  name: 'CategoryList',
  components: {CategoryCard},
  
  data: () => ({
    items: null
  }),
  mounted(){
    requests.getCategoryList()
    .then(response => {
      this.items = response.data;
    }).catch(error => {
      console.log(error.response)
    });
  },
}
</script>

<style>
.category {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  row-gap: 2rem;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
}
.category-container {
  width: 100%;
  position: relative;
}
.category-list {
  width: 90%;
  margin: 0 auto;
  padding: 4rem 1rem;
}
.category-card {
  position: relative;
  text-align: center;
  padding: 1rem;
 width:25%;
  border-radius: 1.5rem;
  box-shadow:  1px 2px 4px #7E7E92;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 18rem;
  
}

.category-card:nth-child(2n) {
     box-shadow: inset 1px 2px 4px #7E7E92;
}

.image-wrap {
   width: 100%;
   height: 80%
  
}

.single-category {
   display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
}

.category-card img {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
 filter: drop-shadow(-2px 5px 7px #7E7E92);
  object-fit: cover;
  padding: .5rem 0;
 
}
.card-footer {
  width: 100%;
   height: 20%;
  padding: 1rem 0;
 
}

.card-footer p {
color: #7E7E92;
 font-weight: 800;
 font-size: 1rem;
}


@media (max-width: 992px) {
  .category-card {
     width: calc(33%);
  }
}
@media (max-width: 768px) {
  .category-card {
     width: calc(50%);
  }
}
@media (max-width: 600px) {
  .category-card {
     width: 100%;
  }
}
</style>