<template>
  <div>
    <div class="post-container">
      <div class="post-list">
        <h3>Kategorije</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, suscipit quidem. Esse, ex! Possimus harum adipisci molestiae corrupti, ipsum inventore veritatis porro dolorem odio ut? Temporibus, natus? Nihil laboriosam minus, odit deleniti repellendus voluptate ducimus veritatis, saepe in, eveniet nam placeat dignissimos. Ipsa, repudiandae doloribus aliquam aspernatur soluta rem non.</p>
        <div  class="category-filter">
          <div class="search-box">
            <input name="search" v-model="search" placeholder="Pretraži po naslovu" type="text" autocomplete="off" class="search-field" @keyup.enter="filterTitle(search)" @focus="clearCategories()"/>
            <button class="title-search" @click="filterTitle(search)">Pretraži</button>
          </div>
           <ul id="listnav" class="category-letter">
            <li class="letter-filter" @click="filterLetter('A')">A</li>
            <li class="letter-filter" @click="filterLetter('B')">B</li>
            <li class="letter-filter" @click="filterLetter('C')">C</li>
            <li class="letter-filter" @click="filterLetter('Č')">Č</li>
            <li class="letter-filter" @click="filterLetter('Ć')">Ć</li>
            <li class="letter-filter" @click="filterLetter('D')">D</li>
            <li class="letter-filter" @click="filterLetter('Đ')">Đ</li>
            <li class="letter-filter" @click="filterLetter('Dž')">Dž</li>
            <li class="letter-filter" @click="filterLetter('E')">E</li>
            <li class="letter-filter" @click="filterLetter('F')">F</li>
            <li class="letter-filter" @click="filterLetter('G')">G</li>
            <li class="letter-filter" @click="filterLetter('H')">H</li>
            <li class="letter-filter" @click="filterLetter('I')">I</li>
            <li class="letter-filter" @click="filterLetter('J')">J</li>
            <li class="letter-filter" @click="filterLetter('K')">K</li>
            <li class="letter-filter" @click="filterLetter('L')">L</li>
            <li class="letter-filter" @click="filterLetter('Lj')">Lj</li>
            <li class="letter-filter" @click="filterLetter('M')">M</li>
            <li class="letter-filter" @click="filterLetter('N')">N</li>
            <li class="letter-filter" @click="filterLetter('Nj')">Nj</li>
            <li class="letter-filter" @click="filterLetter('O')">O</li>
            <li class="letter-filter" @click="filterLetter('P')">P</li>
            <li class="letter-filter" @click="filterLetter('R')">R</li>
            <li class="letter-filter" @click="filterLetter('S')">S</li>
            <li class="letter-filter" @click="filterLetter('Š')">Š</li>
            <li class="letter-filter" @click="filterLetter('T')">T</li>
            <li class="letter-filter" @click="filterLetter('U')">U</li>
            <li class="letter-filter" @click="filterLetter('V')">V</li>
            <li class="letter-filter" @click="filterLetter('Z')">Z</li>
            <li class="letter-filter" @click="filterLetter('Ž')">Ž</li>
            <li class="letter-filter" @click="filterAllLetters()" ref="post-results">SVI</li>
          </ul> 
        </div>
        <div v-if="category.length > 0">
          <ul class="category-chips">
            <li class="category-chip" v-for="item in category" :key="item.id" @click="filterCategory(item.id)">{{item.category}}</li>
          </ul>
        </div>
       
        <div class="post-flex" v-if="loading===false">
          <div v-for="item in items" :key="item.id" class="posts">
            <post-card :items="item"/>
          </div>
          <no-results v-if="items.length===0 && loading===false"></no-results>
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

		filterCategory(id) {
      this.loading = true
        requests.getPostsList(id, this.currentPage)
        .then(response => {
          this.items = response.data.rows;
          this.resultCount = response.data.count
        }).catch(error => {
          console.log(error.response)
        })
        .finally(() => (this.loading = false))
		},

    filterLetter(letter) {
      this.loading = true
      this.$refs["post-results"].scrollIntoView({ behavior: "smooth" })
      requests.getPostsByLetter(letter, this.currentPage)
      .then(response => {
        this.items = response.data.rows;
        this.resultCount = response.data.count
      }).catch(error => {
        console.log(error.response)
      })
      .finally(() => (this.loading = false))

      requests.getCategoryLetter(letter)
      .then(response => {
        this.category = response.data;
      }).catch(error => {
        console.log(error.response)
      });
    },

    filterTitle(title) {
      this.loading = true
      this.$refs["post-results"].scrollIntoView({ behavior: "smooth" })
      requests.getPostsByTitle(title, this.currentPage)
      .then(response => {
        this.items = response.data.rows;
        this.resultCount = response.data.count
      }).catch(error => {
        console.log(error.response)
      })
      .finally(() => (this.loading = false))
    },

    getAllPosts() {
      this.$refs["post-results"].scrollIntoView({ behavior: "smooth" })
      requests.getPostList(this.currentPage)
      .then(response => {
        this.items = response.data.rows;
        this.resultCount = response.data.count
        this.filteredItems = response.data.rows
      }).catch(error => {
        console.log(error.response)
      })
      .finally(() => (this.loading = false))
    },

    filterAllLetters() {
      this.category = []
      this.getAllPosts()
    },

    clearCategories() {
      this.category = []
    }
	}, 
 
  mounted(){
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
      this.getAllPosts()
    }

  },
}
</script>

<style>
/* PAGINATION */
.pagination-wrap {
  width: 90%;
  padding: 0 1rem;
  margin: 1rem auto;
}

.pagination {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(255, 255, 255, 0.5);
}

.pagination a {
  padding: 1rem;
  clip-path: circle();
  text-decoration: none;
  color: var(--black)
}

.activePagination {
  background: var(--yellow);
  color: var(--white) !important;
  font-weight: 700;
}

/* CATEGORY LETTER AND CHIP CONTAINER */
.category-letter, .category-chips {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  padding: 1rem 0;
  position: relative;
}

/* CATEGORY LETTERS */
.category-letter li {
  border-radius: .5rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(255, 255, 255, 0.5);
  font-size: .8rem;
  padding: 1rem;
  margin: .3rem .6rem .3rem 0;
  text-align: center;
  width: calc(3% - .6rem);
  height: 3rem;
}

.category-letter li:hover {
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1), inset 0px -2px 5px rgba(255, 255, 255, 0.5);
}

/* CATEGORY CHIPS */
.category-chips {
  padding: 0;
}

.category-chip {
  padding: .5rem 1rem;
  background: var(--yellow);
  color: var(--black);
  border-radius: 1rem;
  margin: 1rem 1rem 0 0;
  transition: all .5s ease;
  text-transform: uppercase;
}

.category-chip:hover {
  letter-spacing: .2rem;
  color: var(--white);
}

.category-chip a {
  color: var(--white);
  text-decoration: none;
}

/* SEARCH FIELD */
.search-box {
  display: flex;
  flex-direction: row;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1rem);
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
}

.search-box:hover {
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1), inset 0px -2px 5px rgba(255, 255, 255, 0.5);
}

.title-search {
  padding: .4rem 1rem;
  background: var(--yellow);
  color: var(--black);
  border-radius: .7rem;
  transition: all .5s ease;
}

.title-search:hover {
  letter-spacing: .2rem;
  color: var(--white);
}

.search-field {
  display: block;
  border:0; 
  outline:0;
  resize: none;
  width: 100%;
  flex-grow: 2;
}

/* LOADER */
.loader-wrapper {
  text-align: center;
}

.loader-wrapper img {
  width: 30%;
  opacity: .5;
}
/* POST LIST */
.post-container {
  width: 100%;
  position: relative;
}

.post-list p {
  margin: 1rem 0 0 0;
}

.post-list {
  width: 90%;
  padding: 5rem 1rem 1rem 1rem;
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
  margin-top: 2rem;
}

.posts {
  width: calc(20% - 1.5rem);
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
}

/* POST CARD */
.post {
  width: 100%;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background: var(--grey);
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
  color: var(--dark-violet) !important;
}

.post-img {
  z-index: 1;
  height: 9vw;
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
  font-family: 'Montserrat Alternates', sans-serif;
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
  background:  var(--green);
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

@media (max-width: 2000px) {
  .posts { 
      width: calc(25% - 1.5rem);
  }
  .category-letter li {
    width: calc(5% - .6rem);
  }
}

@media (max-width: 1600px) {
  .category-letter li {
    width: calc(8% - .6rem);
  }
}

@media (max-width: 992px) {
  .posts {
    width: calc(33.3% - 1.5rem);
  }
  .post-img {
    height: 12vw;
  }
  .post-img img {
    height: 12vw;
  }

  .category-letter li {
    width: calc(10% - .6rem);
  }
}

@media (max-width: 768px) {
  .posts {
    width: calc(50% - 1.5rem);
  }

  .post-img {
    height: 18vw;
  } 
  .post-img img {
    height: 18vw;
  }

  .loader-wrapper img {
    width: 50%;
  }

  .category-letter li {
    width: calc(10% - .6rem);
  }
}

@media (max-width: 600px) {
  .posts {
    width: 100%;
  }

  .post-img {
    height: 35vw;
  }

  .post-img img {
    height: 35vw;
  }

  .loader-wrapper img {
    width: 70%;
  }

  .category-letter li {
    width: calc(16.6% - .6rem);
  }
}

@media (max-width: 500px) {
  .category-letter li {
    width: calc(20% - .6rem);
  }
}

@media (max-width: 400px) {
  .category-wrap {
    width: 29%;
  }

  .category-letter li {
    width: calc(25% - .6rem);
  }
}

@media (max-width: 300px) {

  .post-img {
    height: 40vw;
  }
  .post-img img {
    height: 40vw;
  }

  .category-wrap {
    width: 45%;
  }

  .category-letter li {
    width: calc(33% - .6rem);
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