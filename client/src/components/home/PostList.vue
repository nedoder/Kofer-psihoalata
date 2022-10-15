<template>
  <div>
    <div class="post-container">
      <div class="post-list">
        <h3>Kategorije</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, suscipit quidem. Esse, ex! Possimus harum adipisci molestiae corrupti, ipsum inventore veritatis porro dolorem odio ut? Temporibus, natus? Nihil laboriosam minus, odit deleniti repellendus voluptate ducimus veritatis, saepe in, eveniet nam placeat dignissimos. Ipsa, repudiandae doloribus aliquam aspernatur soluta rem non.</p>
        <div  class="category-filter">
          <input name="search" v-model='search' placeholder="Pretraži po naslovu" type="text" autocomplete="off" class="search-field"/>
           <ul id="listnav" class="category-letter">
            <li class="letterFilter"><a href="?letter=a">A</a></li>
            <li class="letterFilter"><a href="?letter=b">B</a></li>
            <li class="letterFilter"><a href="?letter=c">C</a></li>
            <li class="letterFilter"><a href="?letter=č">Č</a></li>
            <li class="letterFilter"><a href="?letter=ć">Ć</a></li>
            <li class="letterFilter"><a href="?letter=d">D</a></li>
            <li class="letterFilter"><a href="?letter=đ">Dž</a></li>
            <li class="letterFilter"><a href="?letter=đ">Đ</a></li>
            <li class="letterFilter"><a href="?letter=e">E</a></li>
            <li class="letterFilter"><a href="?letter=f">F</a></li>
            <li class="letterFilter"><a href="?letter=g">G</a></li>
            <li class="letterFilter"><a href="?letter=h">H</a></li>
            <li class="letterFilter"><a href="?letter=i">I</a></li>
            <li class="letterFilter"><a href="?letter=j">J</a></li>
            <li class="letterFilter"><a href="?letter=k">K</a></li>
            <li class="letterFilter"><a href="?letter=l">L</a></li>
            <li class="letterFilter"><a href="?letter=l">Lj</a></li>
            <li class="letterFilter"><a href="?letter=m">M</a></li>
            <li class="letterFilter"><a href="?letter=n">N</a></li>
            <li class="letterFilter"><a href="?letter=n">Nj</a></li>
            <li class="letterFilter"><a href="?letter=o">O</a></li>
            <li class="letterFilter"><a href="?letter=p">P</a></li>
            <li class="letterFilter"><a href="?letter=r">R</a></li>
            <li class="letterFilter"><a href="?letter=s">S</a></li>
            <li class="letterFilter"><a href="?letter=š">Š</a></li>
            <li class="letterFilter"><a href="?letter=t">T</a></li>
            <li class="letterFilter"><a href="?letter=u">U</a></li>
            <li class="letterFilter"><a href="?letter=v">V</a></li>
            <li class="letterFilter"><a href="?letter=z">Z</a></li>
            <li class="letterFilter"><a href="?letter=ž">Ž</a></li>
          </ul> 
        </div>
        <div>
          <ul class="category-chips">
            <li class="category-chip"><a href="">Anksioznost</a></li>
            <li class="category-chip"><a href="">Aooo</a></li>
            <li class="category-chip"><a href="">Aoooo2</a></li>
          </ul>
        </div>
       
        <div class="post-flex" v-if="loading===false">
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

.category-letter, .category-chips {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    list-style: none;
    padding: 3rem 0 1rem 0;
    position: relative;
  }

  .category-chips {
    padding: 0;
  }

  .category-letter a {
    text-decoration: none;
    color: var(--black);
    font-weight: 600;
  }

  .category-letter li {
    border-radius: .5rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(255, 255, 255, 0.5);
    font-size: .8rem;
    padding: 1rem;
    margin: .3rem .6rem .3rem 0;
  }

  .category-letter li:first-child a {
    color: var(--green);
  }

  .category-letter li:hover {
    background: var(--green);
    color: var(--white);
  }

  .category-list li:last-child {
    border-right: 0;
  }

  .category-chip {
    padding: .5rem 1rem;
    background: var(--green);
    border-radius: 1rem;
    margin: 1rem 1rem 2rem 0;
  }

  .category-chip a {
    color: var(--white);
    text-decoration: none;
  }
.search-field {
  display: block;
  border-radius: 1rem;
  border:0; 
  outline:0;
  padding: 1rem;
  resize: none;
  margin-bottom: 3rem;
  width: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1rem);
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
}

.posts {
  width: calc(20% - 1.5rem);
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
}

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
  color: var(--violet) !important;
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