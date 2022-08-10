<template>
  <v-card>
    <v-card-title>

      <h1 class="display-1">
        Aktivnosti
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
// import requests from "../../services/services"
export default {
  data: () => ({
    items: [],
    totalNumberOfItems: 0,
    options: {
      page: 1,
      itemsPerPage: 20
    },
    headers: [
      { text: "Aktivnost", value: "results", sortable: true }, 
      { text: "Datum izmjene", value: "createdAt", sortable: true }
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
    //   requests.getActivityList(this.options.page)
    //   .then(response => {
    //     this.items = response.data.slice(0,-1)
    //     this.totalNumberOfItems = response.data[response.data.length-1].count
    //     this.items.forEach(item => {
    //       item.createdAt = new Date(item.createdAt).toString().slice(4,24)
    //     });
    //   })
    },
     
  },
  mounted(){
    // requests.getActivityList(this.options.page)
    // .then(response => {
    //   this.items = response.data.slice(0,-1);
    //   this.totalNumberOfItems = response.data[response.data.length-1].count
    //   this.items.forEach(item => {
    //     item.createdAt = new Date(item.createdAt).toString().slice(4,24)
    //   });
    // }).catch(error => {
    //   console.log(error)
    // });
  },
}
</script>