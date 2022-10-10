<template>
  <div>
    <div class="post-container">
      <div class="post-list"  v-if="loading===false">
        <h3>Postovi</h3>
        <div class="category-flex">
          <router-link :to="{path: 'education'}" exact class="category-wrap" aria-label="All posts" @click.native="filterCategory">
            <img src="../../assets/thinking.png" class="category-link-image active-category" alt="category"/>
            <p id="category-name">Sve kategorije</p>
          </router-link>
          <router-link v-for="item in category" :key="item.id" :to="{path: 'education?category=' + item.id}" exact class="category-wrap" aria-label="Category" @click.native="filterCategory">
            <img v-if="item.category==='Depresija'" src="../../assets/depression.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Anksioznost'" src="../../assets/anxiety.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Mentalno zdravlje'" src="../../assets/counseling.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Test'" src="../../assets/psychology.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Stres'" src="../../assets/stress.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Test2'" src="../../assets/sad.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Lorem ipsum'" src="../../assets/mood.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Test3'" src="../../assets/intensive.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Test4'" src="../../assets/idea.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Test5'" src="../../assets/affection.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Test9'" src="../../assets/health.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Test10'" src="../../assets/healthcare.png" class="category-link-image" alt="category"/>
            <img v-else-if="item.category==='Test8'" src="../../assets/health.png" class="category-link-image" alt="category"/>
            <img v-else src="../../assets/selfcare.png" class="category-link-image"/>
            <p id="category-name">{{item.category}}</p>
          </router-link>
        </div>
        <div class="post-flex">
          <div v-for="item in items" :key="item.id" class="posts">
            <post-card :items="item"/>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-wrap" v-if="loading===false && totalPages>1">
      <ul class="pagination">
           <li v-for="pageNumber in totalPages" :key="pageNumber">
              <a href="#" @click="loadPosts" :class="{ activePagination : active_el == pageNumber }">{{ pageNumber }}</a>
          </li>
      </ul>
    </div>
    <no-results v-if="items.length===0 && loading===false"></no-results>
    <div class="loader-wrapper" v-if="loading===true">
     <img src="../../assets/loading.webp" alt="Loading posts"/>
    </div>
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
    category: [],
    loading: false,
    search: '',
    filteredItems: [],
    currentPage: 1,
    itemsPerPage: 20,
    resultCount: 0,
    active_el: 1
  }),
  computed: {
    totalPages: function() {
      return Math.ceil(this.resultCount / this.itemsPerPage)
    }
  },
  methods: {

    loadPosts(e) {
      this.loading = true
      this.active_el = e.currentTarget.innerHTML
      if(this.$route.query.category) {
        requests.getPostsList(this.$route.query.category, e.currentTarget.innerHTML)
        .then(response => {
          this.items = response.data.rows;
          console.log(response.data)
        }).catch(error => {
          console.log(error.response)
        })
        .finally(() => (this.loading = false))
      } else {
        requests.getPostList(e.currentTarget.innerHTML)
        .then(response => {
          this.items = response.data.rows;
          console.log(response.data)
          this.filteredItems = response.data
        }).catch(error => {
          console.log(error.response)
        })
        .finally(() => (this.loading = false))
      }
    },

		filterCategory() {
      const element = Array.from(document.querySelectorAll(".category-wrap")).pop();
      element.scrollIntoView();
      this.loading = true
      if(this.$route.query.category) {
        requests.getPostsList(this.$route.query.category, this.currentPage)
        .then(response => {
          this.items = response.data.rows;
          this.resultCount = response.data.count
        }).catch(error => {
          console.log(error.response)
        })
        .finally(() => (this.loading = false))
      } else {
        requests.getPostList(this.currentPage)
        .then(response => {
          this.items = response.data.rows;
          this.resultCount = response.data.count;
        }).catch(error => {
          console.log(error.response)
        })
        .finally(() => (this.loading = false))
      }
		}
	}, 
 
  mounted(){
    this.loading = true
    if(this.$route.query.category) {
      requests.getPostsList(this.$route.query.category, this.currentPage)
      .then(response => {
        this.items = response.data.rows;
        this.resultCount = response.data.count
        console.log(response.data)
      }).catch(error => {
        console.log(error.response)
      })
      .finally(() => (this.loading = false))
    } else {
      requests.getPostList(this.currentPage)
      .then(response => {
        this.items = response.data.rows;
        this.resultCount = response.data.count
        console.log(response.data)
        this.filteredItems = response.data.rows
      }).catch(error => {
        console.log(error.response)
      })
      .finally(() => (this.loading = false))
    }

    requests.getCategoryList()
    .then(response => {
      this.category = response.data;
    }).catch(error => {
      console.log(error.response)
    });

  },
}
</script>

<style>
/* CATEGORY FILTER */
.category-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  row-gap: .5rem;
  column-gap: .5rem;
  padding: 2rem 0 3rem 0;
}

.category-flex a {
  text-decoration: none;
  color: var(--black);
}

.category-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6rem;
  text-align: center;
}

#category-name {
  margin: .5rem 0;
  font-weight: 300;
  font-size: .9rem;
  line-height: 1rem;
  transition: all .5s ease-in-out;
}

.category-link-image {
  width: 5rem;
  height: 5rem;
  padding: .9rem;
  background: rgb(224, 218, 218);
  box-shadow: 2px 2px 2px rgb(224, 218, 218), 2px 2px 2px #fff;
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1), inset 0px -2px 5px #fff;
  border-radius: 50%;
  transition: all .5s linear;
}

.category-wrap:hover .category-link-image, .exact-active img {
  background: var(--yellow);
  box-shadow: inset 0.1rem 0.1rem 0.4rem #f7e6c6, inset -0.2rem -0.1rem 0.3rem #f4cb82;
  border-radius: 15%;
}

.category-wrap:hover #category-name {
  font-weight: 500;
}

/* LOADER */
.loader-wrapper {
  text-align: center;
  margin-top: 5rem;
}

.loader-wrapper img {
  width: 30%;
  padding: 2rem 0;
  opacity: .5;
}
/* POST LIST */
.post-container {
  width: 100%;
  position: relative;
}

.post-list h3 {
  font-family: 'Ribeye Marrow', cursive;
  font-size: 3rem;
  margin: 2rem 0;
  color: var(--light-black);
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
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 2rem;
}

.posts {
  width: calc(25% - 1.5rem);
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
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
  height: 9vw;
  border-radius: 1rem;
  border: 3px solid #fff;
  box-shadow: 3px 4px 5px rgb(185 184 184), -7px -2px 4px rgb(250 246 246);
  transition: all .5s ease;
  object-fit: cover;
  
}
.post-date-info {
  color: rgb(108, 110, 103);
  text-align: right;
  padding-bottom: .5rem;
}
.post-author {
  color: var(--light-pink) !important;
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
  background: var(--yellow);
  opacity: 0.2;
  position: absolute;
  top: 0;
  right: -8rem;
  transform: rotate(45deg);
  transition: all 1s ease;
    
}

.posts:nth-child(2n) .shape  {
  background:  var(--light-pink);
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
  width: 80%;
}

@media (max-width: 992px) {
  .posts {
    width: calc(33.3% - 1.5rem);
  }

  .post-img img {
    height: 12vw;
  }
}

@media (max-width: 768px) {
  .posts {
    width: calc(50% - 1.5rem);
  }

  .post-list h3 {
    font-size: 2rem;
  }

  .post-img img {
    height: 18vw;
  }

  .loader-wrapper img {
    width: 50%;
  }
}

@media (max-width: 600px) {
  .posts {
    width: 100%;
  }

  .post-img img {
    height: 35vw;
  }

  .loader-wrapper img {
    width: 70%;
  }
}

@media (max-width: 400px) {
  .category-wrap {
    width: 29%;
  }
}

@media (max-width: 300px) {
  .post-img img {
    height: 40vw;
  }

  .category-wrap {
    width: 45%;
  }
}

@media (max-height: 400px) {
  .loader-wrapper {
    margin-top: 0;
  }

  .loader-wrapper img{
    padding: 0;
  }

}

</style>