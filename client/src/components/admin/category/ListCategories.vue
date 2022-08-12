<template>
  <v-card>
    <v-card-title>

      <h1 class="display-1">
        Lista kategorija
      </h1>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
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
      :items-per-page="5"
      dense
      class="elevation-1"
      >
         
        <template v-slot:[`item.edit`]="{ item }" > 
          <v-icon small color="blue" class="mr-2" @click="editCategory(item._id)">mdi-pencil</v-icon>
        </template>
        <template v-slot:[`item.delete`]="{ item }" >  
          <template>
            <div class="text-center">
                <template>
                  <v-btn
                    icon
                    @click="deleteItem(item._id)"
                  >
                    <v-icon small color="red">mdi-delete</v-icon>
                  </v-btn>
                </template>
            </div>
          </template>
        </template>
      </v-data-table>

      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title>
            Brisanje kategorije
          </v-card-title>

          <v-card-text>
            Da li ste sigurni da želite da obrišete ovu kategoriju?
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              text
              @click="dialog=false"
            >
              Odustani
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="deleteCategories(id)"
            >
              Obriši
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script>
import requests from "../../../services/services"
export default {
  data: () => ({
    items: [],
    dialog: false,
    headers: [
      { text: "Naziv", value: "category", sortable: true },
      { text: "Izmijeni", value: "edit", sortable: false },
      { text: "Obriši", value: "delete", sortable: false },
    ],
    search: '',
  }),
  methods: {
    editCategory(id) {
      this.$router.push({ path: `/category/${id}/edit`, params: { id: id } });
    },
    // deleteCategories(id) {
    //   requests.deleteCategory(id)
    //   .then(response => {
    //     console.log(response)
    //     window.location.reload()
    //   })
    //   .catch(error => {
    //     console.log(error.message)
    //   })
    // },
    //  deleteItem(id) {
    //   this.id = id
    //   this.dialog = true
    // }
  }, 
  
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

