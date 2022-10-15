<template>
    <div>
        <header-component/>
        <div class="support-page" v-if="loading===false">
            <!-- <h3>Podrška</h3>
            <p class="support-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, suscipit quidem. Esse, ex! Possimus harum adipisci molestiae corrupti, ipsum inventore veritatis porro dolorem odio ut? Temporibus, natus? Nihil laboriosam minus, odit deleniti repellendus voluptate ducimus veritatis, saepe in, eveniet nam placeat dignissimos. Ipsa, repudiandae doloribus aliquam aspernatur soluta rem non.</p> -->
            <div class="support-wrap">
                <div v-for="item in items" :key="item.id"  class="support-card">
                    <support-card :items="item"/>
                </div>
            </div>
        </div>
        <div class="pagination-wrap" v-if="loading===false && totalPages>1">
            <ul class="pagination">
                 <li v-for="pageNumber in totalPages" :key="pageNumber">
                    <a href="#" @click="loadInstitutions" :class="{ activePagination : active_el == pageNumber }">{{ pageNumber }}</a>
                </li>
            </ul>
        </div>
        <div class="loading-support" v-if="loading===true">
            <img src="../../assets/loading.webp" alt="Loading cards"/>
        </div>
        <footer-component/>
    </div>
</template>

<script>
import requests from '../../services/services'
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
import SupportCard from './SupportCard.vue';

export default {
    name: 'SupportPage',
    components: {
        HeaderComponent, SupportCard, FooterComponent
    },
    data: () => ({
      items: [],
      loading: false,
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
        loadInstitutions(e) {
            this.loading = true
            this.active_el = e.currentTarget.innerHTML
            requests.getInstitutionList(e.currentTarget.innerHTML)
            .then(response => {
              this.items = response.data.rows;
              this.resultCount = response.data.count
              console.log(response.data)
            }).catch(error => {
              console.log(error.response)
            })
            .finally(() => (this.loading = false))
        }
    },
    mounted(){
      this.loading = true
      requests.getInstitutionList(this.currentPage)
      .then(response => {
        this.items = response.data.rows;
        this.resultCount = response.data.count
        console.log(response.data)
      }).catch(error => {
        console.log(error.response)
      })
      .finally(() => (this.loading = false))
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


/* LOADER */
.loading-support {
  text-align: center;
  margin-top: 5rem;
}

.loading-support img {
  width: 30%;
  padding: 2rem 0;
  opacity: .5;
}

/* PAGE */
.support-page {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    padding-top: 6rem;
}

/* CARDS */
.support-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 1rem;
    column-gap: 1rem;
    margin-top: 2rem;
}
.support-card { 
    display: flex;
    flex-direction: row;
    width: calc(20% - 1rem);
    text-align: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
    overflow: hidden;
}

.single-support {
    width: 100%;
}

.single-institution {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
}

.single-institution-header {
    padding: 1rem;
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.single-institution-header p {
    padding: 1rem;
}

.single-institution-header p:first-child {
    font-weight: 600;
}

.single-institution-header p:last-child {
    font-size: .9rem;
}

.single-institution-header svg {
    color: var(--violet);
    font-size: 1.5rem;
}

.single-institution-footer {
    display: flex; 
    justify-content: center;
    align-items: flex-end;
    width: 100%;
 }

 .single-institution-footer a {
    padding: 1rem;
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 50%;
    color: var(--white);
    background: var(--violet);
    cursor: pointer;
    transition: width .5s ease;
 }

.single-institution-footer a:hover{
    width: 200%;
}

.single-institution-footer a:last-child {
    background: var(--green);
    color: var(--white);
}

@media (max-width: 1600px) {
    .support-card { 
        width: calc(25% - 1rem);
    }
}

@media (max-width: 992px) {
    .support-card { 
        width: calc(33.3% - 1rem);
    }
}

@media (max-width: 768px) {
    .support-card { 
        width: calc(50% - 1rem);
    }

    .loading-support img {
        width: 50%;
    }
}

@media (max-width: 600px) {
    .support-card { 
        width: 100%
    }
    .loading-support img { 
        width: 70%;
    }
}

@media (max-height: 400px) {
    .loading-support {
        margin-top: 0;
    }

    .loading-support img {
        padding: 0;
    }

}
</style>