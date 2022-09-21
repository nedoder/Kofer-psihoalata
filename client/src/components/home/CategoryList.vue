<template>
  <div class="category-container">
    <div class="category-list">
      <h3>Kategorije</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, vel.</p>
      <VueSlickCarousel ref="carousel" v-bind="slickOptions" v-if="items.length > 0">
        <div v-for="item in items" :key="item.id"  class="category-card">
          <category-card :items="item" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import requests from '../../services/services'
import CategoryCard from './CategoryCard.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
export default {
  name: 'CategoryList',
  components: {CategoryCard, VueSlickCarousel},
  data: () => ({
    items: [],
    slickOptions: {
      "arrows" : true,
      "dots": true,
      "edgeFriction": 0.35,
      "focusOnSelect": true,
      "infinite": true,
      "speed": 500,
      "slidesToShow": 6,
      "slidesToScroll": 1,
      "swipeToSlide": true,
      "touchThreshold": 5,
      "centerMode": true,
      "centerPadding": "20px",
      "autoplay": true,
      "autoplaySpeed": 2000,
      "cssEase": "linear",
      "responsive": [
        {
          "breakpoint": 1200,
          "settings": {
            "slidesToShow": 4,
            "slidesToScroll": 1,
          }
        },
        {
          "breakpoint": 768,
          "settings": {
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "initialSlide": 0
          }
        },
        {
         "breakpoint": 600,
         "settings": {
           "slidesToShow": 2,
           "dots": false,
           "slidesToScroll": 1
         },

        },
        {   
          "breakpoint": 400,
          "settings": {
            "slidesToShow": 1,
            "dots": false,
            "slidesToScroll": 1
          }
        }
      ]
    }
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

/* CATEGORY SLIDER SECTION */
.category {
  display: flex;
  flex-direction: row;
  width: 100%;
  row-gap: 3rem;
  column-gap: 2rem;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 3rem auto;
}

.category-container {
  width: 100%;
  position: relative;
}

.category-list h3 {
  font-family: 'Ribeye Marrow', cursive;
  font-size: 3rem;
  margin: 2rem 0;
  color: var(--light-black);
}

.category-list p {
  margin: 1rem 0;
}

.category-list {
  width: 90%;
  padding: 2rem 1rem;
  background: var(--pink);
  border-radius: 3rem;
  margin: 0 auto;
  overflow: hidden;
}

.category-card {
  position: relative;
  text-align: center;
  padding: 1rem;
  width: 15rem;
  border-radius: 1rem;
  box-shadow: var(--category-shadow);
  display: flex;
  flex-direction: row;
}

.slick-slide.slick-active {
  margin: 0 1.5rem;
}

.slick-slider {
  user-select: none;
}

.slick-track {
  height: 12.5rem;
}

.slick-dots {
  bottom: -12.5rem;
}

.slick-prev, .slick-next, .slick-arrow {
  width: 1.25rem;
  height: 1.25rem;
}

.slick-prev:before, .slick-next:before {
  position: relative;
  z-index: 100 !important;
  color: var(--black);
  opacity: 1;
}

.slick-arrow {
  z-index: 100 !important;
}

.slick-prev:before {
 left: 10px;
}

.slick-next:before {
 right: 10px;
}

.slick-list {
  overflow: visible !important;
}

.category-card:nth-child(2n) {
  box-shadow: var(--category-shadow-inset);
}

.category-card:hover {
  box-shadow: var(--category-shadow-inset);
  cursor: pointer;
}

.category-card:nth-child(2n):hover {
  box-shadow:  var(--category-shadow);
}

.image-wrap {
  width: 100%;
  height: 100%;
}

.single-category {
  display: flex;
  flex-direction: column;
  height: 14rem;
  justify-content: center;
}

.category-card img {
  object-fit: cover;
  padding: .5rem 0;
  width: 100%;
}

.card-footer {
  width: 100%;
  height: 100%;
  padding: 1rem 0;
}

.card-footer p {
  color: var(--black);
  font-weight: 500;
  font-size: 1rem;
}


@media (max-width: 768px) {

  .category-list h3 {
    font-size: 2rem;
  }
  .card-footer {
    padding: 0;
  }

  .single-category {
    height: 13rem;
  }

}

@media (max-width: 600px) {

  .slick-track {
    height: 150px;
  }

  .single-category {
    height: 14rem;
  }
}

@media (max-width: 500px) {

  .single-category {
    height: 13rem;
  }

}

</style>