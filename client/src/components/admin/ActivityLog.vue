<template>
  <v-card>
    <v-card-title>

      <h1 class="display-1">
        Lista aktivnosti
      </h1>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pretraga"
        single-line
        hide-details
      >
      </v-text-field>

    </v-card-title>
    
    <v-card-text>
      <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :items-per-page="20"
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
    headers: [
      { text: "Aktivnost", value: "activity" ,  sortable: true },
      {text: "Kreiran", value: "createdAt", sortable: true},
    ],
    search: '',
  }),
 
  
  mounted(){
    requests.getActivityList()
    .then(response => {
      this.items = response.data;
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

