<template>
    <div>
        <header-component/>
        <div class="support-page" v-if="loading===false">
            <h3>Institucije</h3>
            <div class="support-wrap">
                <div v-for="item in items" :key="item.id"  class="support-card">
                    <support-card :items="item"/>
                </div>
            </div>
        </div>
        <div class="loading-support" v-if="loading===true">
            <img src="../../assets/loading.gif" alt="Loading cards"/>
        </div>
        <footer-component/>
    </div>
</template>

<script>
import requests from '../../services/services'
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
import SupportCard from './SupporCard.vue';

export default {
  name: 'SupportPage',
  components: {
      HeaderComponent, SupportCard, FooterComponent
  },
  data: () => ({
    items: [],
    loading: false
  }),
  mounted(){
    this.loading = true
    requests.getInstitutionList(1)
    .then(response => {
      this.items = response.data;
    }).catch(error => {
      console.log(error.response)
    })
    .finally(() => (this.loading = false))
  },
 
}
</script>


<style>

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
.support-page h3  {
    font-family: 'Ribeye Marrow', cursive;
    font-size: 2rem;
    margin: 2rem 0;
    color: var(--light-black);
    text-align: left;
}

/* CARDS */
.support-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 1rem;
    column-gap: 1rem;
}
.support-card { 
    display: flex;
    flex-direction: row;
    width: calc(25% - 1rem);
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
    color: var(--pink);
    padding: 0 .5rem;
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
    background: var(--pink);
    cursor: pointer;
 }

.single-institution-footer a:hover{
    background: var(--light-pink);
}

.single-institution-footer a:last-child {
    background-color: darkgrey;
    color: var(--white);
}
.single-institution-footer a:last-child:hover{
    background-color: grey;
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