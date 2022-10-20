<template>
  <v-card>
    <v-card-title>
      <h1 class="display-1">
        Lista institucija
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
        <template v-slot:[`item.edit`]="{ item }" > 
          <v-icon small color="blue" class="mr-2" @click="editInstitution(item.id)">mdi-pencil</v-icon>
        </template>
        <template v-slot:[`item.delete`]="{ item }" >  
          <template>
            <div class="text-center">
                <template>
                  <v-btn
                    icon
                    @click="deleteItem(item.id)"
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
            Brisanje institucija
          </v-card-title>

          <v-card-text>
            Da li ste sigurni da želite da obrišete ovu instituciju?
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
              @click="deleteInstitutions(id)"
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
      totalNumberOfItems: 0,
      options: {
        page: 1,
        itemsPerPage: 20
      },
      headers: [
        { text: "Naziv", value: "name", sortable: true },
        { text: "Zanimanje", value: "profession", sortable: true },
        { text: "Kontakt", value: "phone", sortable: true },
        { text: "Email", value: "mail", sortable: true },
        { text: "Lokacija", value: "location", sortable: true },
        { text: "Izmijeni", value: "edit", sortable: false },
        { text: "Obriši", value: "delete", sortable: false },
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
      editInstitution(id) {
        this.$router.push({ path: `/institution/${id}/edit`, params: { id: id } });
      },
      deleteInstitutions(id) {
        requests.deleteInstitution(id)
        .then(response => {
          console.log(response)
          window.location.reload()
        })
        .catch(error => {
          console.log(error.message)
        })
      },
      deleteItem(id) {
        this.id = id
        this.dialog = true
      },
      getDataFromApi () {
        requests.getInstitutionList(this.options.page)
      .then(response => {
        this.items = response.data.rows;
        this.totalNumberOfItems = response.data.count
        this.items.forEach(item => {
        item.createdAt = new Date(item.createdAt).toLocaleString()
        item.updatedAt = new Date(item.updatedAt).toLocaleString()
      })
      }).catch(error => {
        console.log(error.response)
      });
    }
    }, 
    
    mounted(){
      requests.getInstitutionList(this.options.page)
      .then(response => {
        this.items = response.data.rows;
        this.totalNumberOfItems = response.data.count
        this.items.forEach(item => {
        item.createdAt = new Date(item.createdAt).toLocaleString()
        item.updatedAt = new Date(item.updatedAt).toLocaleString()
      })
      }).catch(error => {
        console.log(error.response)
      });
    },
  }
  </script>
  
  <style scoped>
     .v-dialog {
      overflow-x: hidden;
    }
  </style>