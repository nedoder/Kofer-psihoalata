<template>
  <div class="category-container">
    <div class="category-list">
      <h4>Kategorije</h4>
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
  // optional style for arrows & dots
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
  // beforeUpdate() {
  //       if (this.$refs.carousel) {
  //           this.$refs.carousel.destroy();
  //       }
  //   },
  //   updated() {
  //       this.$nextTick(function () {
  //           if (this.$refs.carousel) {
  //               this.$refs.carousel.create
  //           }
  //       });
  //   },
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
  row-gap: 3rem;
  column-gap: 2rem;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin: 3rem auto;
  
}
.category-container {
  width: 100%;
  position: relative;
 
}

.category-list h4 {
    font-family: 'Londrina Outline', cursive;
    font-size: 3rem;
    margin: 2rem 0;
}

.category-list p {
  margin: 1rem 0;
}
.category-list {
  width: 90%;
  padding: 2rem 1rem;
  background: #D499AE;
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
  box-shadow: 0.2rem 0.2rem 0.5rem #c57d96, -0.2rem -0.2rem 0.5rem #dab2c0;
  display: flex;
  flex-direction: row;
  /* height: 11rem;
  width: 11rem; */
 
}

.slick-slide.slick-active {
  margin: 0 1.5rem;
  
}

/* .slick-dots li.slick-active button:before {
  content: '-';
  color: #000;
  opacity: 1;
  font-size: 3rem;
} */

.slick-track {
  height: 200px;
}

.slick-dots {
  bottom: -200px;
  
}

.slick-prev:before, .slick-next:before {
  opacity: 1;
  position: relative;
  z-index: 100;
  color: #000;
  opacity: 0.75;
}

 .slick-prev:before {
  left: 10px;
 }

 .slick-next:before {
  right: 10px;
 }

.slick-list {
  overflow: visible !important;
  /* top: 4rem; */
}
.category-card:nth-child(2n) {
     box-shadow: inset 0.2rem 0.2rem 0.5rem #c57d96, inset -0.2rem -0.2rem 0.4rem #dab2c0;
}

.category-card:hover {
     box-shadow: inset 0.2rem 0.2rem 0.5rem #c57d96, inset -0.2rem -0.2rem 0.4rem #dab2c0;
     cursor: pointer;
}

.category-card:nth-child(2n):hover {
    box-shadow:  0.2rem 0.2rem 0.5rem #c57d96, -0.2rem -0.2rem 0.5rem #dab2c0;
}

.image-wrap {
   width: 100%;
   height: 100%
  
}

.single-category {
   display: flex;
  flex-direction: column;
  /* width: 15rem; */
  height: 15rem;
  justify-content: center;
}

.category-card img {
  /* position: relative;
  
  right: -35%;
  top: -2rem; */
 /* filter: drop-shadow(-2px 5px 7px #7E7E92); */
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
color: #000;
 font-weight: 500;
 font-size: 1rem;
}


/* @media (max-width: 992px) {
  .category-card {
     width: calc(33% - 1.5rem);
  }
} */
@media (max-width: 768px) {

  /* .category {
    justify-content: space-between;
  } */
  /* .category-card {
     width: 10rem;
     height: 10rem;
  } */

  .card-footer {
    padding: 0;
  }
}

 @media (max-width: 600px) {
  .slick-track {
  height: 150px;
  }


}
/* @media (max-width: 400px) {
  .category-card {
  
     height: 10rem;
  }

} */
</style>