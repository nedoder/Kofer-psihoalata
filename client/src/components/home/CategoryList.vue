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
  flex-direction: row;
  width: 100%;
  row-gap: 2rem;
  column-gap: 2rem;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
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
    width: calc(25% - 1.5rem);
  border-radius: 1.5rem;
  box-shadow:  1px 2px 4px #7E7E92;
  display: flex;
  flex-direction: row;
  height: 10rem;
  width: 10rem;
  
}

.category-card:nth-child(2n) {
     box-shadow: inset 1px 2px 4px #7E7E92;
}

.category-card:hover {
     box-shadow: inset 1px 2px 4px #7E7E92;
     cursor: pointer;
}

.category-card:nth-child(2n):hover {
    box-shadow:  1px 2px 4px #7E7E92;
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
  
  right: -25%;
  top: -25%;
 /* filter: drop-shadow(-2px 5px 7px #7E7E92); */
  object-fit: cover;
  padding: .5rem 0;
  width: 100%;
 
}
.card-footer {
  width: 100%;
   height: 50%;
  padding: 1rem 0;
 
}

.card-footer p {
color: #7E7E92;
 font-weight: 800;
 font-size: 1rem;
}


@media (max-width: 992px) {
  .category-card {
     width: calc(33% - 1.5rem);
  }
}
@media (max-width: 768px) {
  .category-card {
     width: calc(50% - 1.5rem);
     height: 13rem;
  }

  .card-footer {
    padding: 0;
  }
}
@media (max-width: 400px) {
  .category-card {
     width: 100%;
  }
}
</style>