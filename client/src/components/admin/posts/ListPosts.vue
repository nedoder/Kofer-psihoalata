<template>
  <v-card>
    <v-card-title>

      <h1 class="display-1">
        Lista postova
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
        <template v-slot:[`item.image`]="{ item }">
          <img :src="$imagePath + item.image" style="width: 50px; height: 50px; border-radius:50%" />
        </template>

        <template v-slot:[`item.show`]="{ item }" > 
          <v-icon small color="green" class="mr-2" @click="showPost(item.id)">mdi-eye</v-icon>
        </template>

        <template v-slot:[`item.edit`]="{ item }" > 
          <v-icon small color="blue" class="mr-2" @click="editPost(item.id)">mdi-pencil</v-icon>
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
            Brisanje posta
          </v-card-title>

          <v-card-text>
            Da li ste sigurni da želite da obrišete ovaj post?
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
              @click="deletePosts(id)"
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
      { text: "Slika", value: "image", type: "image", sortable: false },
      { text: "Naslov", value: "title" , align: "title", sortable: true },
      { text: "Autor", value: "userId", sortable: true },
      { text: "Kategorija", value: "categoryId", sortable: true },
      { text: "Kreiran", value: "createdAt", sortable: true},
      { text: "Poslednje izmjene", value: "updatedAt", sortable: true},
      { text: "Detalji", value: "show", sortable: false },
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
    showPost(id) {
      this.$router.push({ path: `/post/show/${id}`, params: { id: id } });
    },
    editPost(id) {
      this.$router.push({ path: `/post/${id}/edit`, params: { id: id } });
    },
    deletePosts(id) {
      requests.deletePost(id)
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
      requests.getPostList(this.options.page)
      .then(response => {
        this.items = response.data.rows;
        this.totalNumberOfItems = response.data.count
        this.items.forEach(item => {
        item.createdAt = new Date(item.createdAt).toLocaleString()
        item.updatedAt = new Date(item.updatedAt).toLocaleString()
        if(item.userId !== null) {
          requests.getUser(item.userId)
          .then(response => {
          item.userId = response.data.username;
          }).catch(error => {
            console.log(error.response)
          })
        }

        if(item.categoryId !== null) {
          requests.getCategory(item.categoryId)
          .then(response => {
          item.categoryId = response.data.category;
          }).catch(error => {
            console.log(error.response)
          })
        }
      })
      }).catch(error => {
        console.log(error.response)
      });
    }
  }, 
  
  mounted(){
    requests.getPostList(this.options.page)
    .then(response => {
      this.items = response.data.rows;
      this.totalNumberOfItems = response.data.count
      this.items.forEach(item => {
        item.createdAt = new Date(item.createdAt).toLocaleString()
        item.updatedAt = new Date(item.updatedAt).toLocaleString()
        if(item.userId !== null) {
          requests.getUser(item.userId)
          .then(response => {
          item.userId = response.data.username;
          }).catch(error => {
            console.log(error.response)
          })
        }

        if(item.categoryId !== null) {
          requests.getCategory(item.categoryId)
          .then(response => {
          item.categoryId = response.data.category;
          }).catch(error => {
            console.log(error.response)
          })
        }
      })
    }).catch(error => {
      console.log(error.response)
    })    
  },
}
</script>

<style>
.v-data-footer {
  justify-content: flex-end !important;
}
</style>
