<template>
  <v-card>
    <v-card-title>

      <h1 class="display-1">
        Lista aktivnosti
      </h1>

      <v-spacer></v-spacer>

     

    </v-card-title>
    
    <v-card-text>
      <v-data-table
      :headers="headers"
      :items="items"
      :footer-props="{
        'items-per-page-options': [20,]
      }"
      :options.sync="options"
      :server-items-length="totalNumberOfItems"
      dense
      class="elevation-1"
      >
    
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import requests from "../../services/services"
export default {
  data: () => ({
    items: [],
    dialog: false,
    totalNumberOfItems: 0,
    options: {
      page: 1,
      itemsPerPage: 20
    },
    headers: [
      { text: "Aktivnost", value: "activity" ,  sortable: true },
      {text: "Kreiran", value: "createdAt", sortable: true},
    ],
  }),
 
  watch: {
    options: {
      handler () {
        this.getDataFromApi()
      },
      deep: true,
    },
  },
  methods: {
    getDataFromApi () {
      requests.getActivityList(this.options.page)
    .then(response => {
      this.items = response.data.rows;
      this.totalNumberOfItems = response.data.count
      this.items.forEach(item => {
        item.createdAt = new Date(item.createdAt).toLocaleString()
        item.updatedAt = new Date(item.updatedAt).toLocaleString()
      })
    }).catch(error => {
      console.log(error.response)
    })    
    }
  },
  
  mounted(){
    requests.getActivityList(this.options.page)
    .then(response => {
      this.items = response.data.rows;
      this.totalNumberOfItems = response.data.count
      this.items.forEach(item => {
        item.createdAt = new Date(item.createdAt).toLocaleString()
        item.updatedAt = new Date(item.updatedAt).toLocaleString()
      })
    }).catch(error => {
      console.log(error.response)
    })    
  },
}
</script>


<style>

.v-data-footer {
  justify-content: end;
}
</style>
