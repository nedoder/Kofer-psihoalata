<template>
  <v-card>
    <v-card-title>

      <h1 class="display-1">
        Lista komentara
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
      :items-per-page="5"
      dense
      class="elevation-1"
      >
         
        <template v-slot:[`item.edit`]="{ item }" > 
          <v-icon small color="blue" class="mr-2" @click="editComment(item.id)">mdi-pencil</v-icon>
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
            Brisanje komentara
          </v-card-title>

          <v-card-text>
            Da li ste sigurni da želite da obrišete ovaj komentar?
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
              @click="deleteComments(id)"
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
      { text: "Komentar", value: "comment", sortable: true },
      { text: "Autor", value: "author", sortable: true },
      { text: "Post", value: "Post.title", sortable: true },
      { text: "Odobren", value: "approved", sortable: true },
      { text: "Kreiran", value: "createdAt", sortable: true},
      { text: "Poslednje izmjene", value: "updatedAt", sortable: true},
      { text: "Izmijeni", value: "edit", sortable: false },
      { text: "Obriši", value: "delete", sortable: false },
    ],
    search: '',
  }),
  methods: {
    editComment(id) {
      this.$router.push({ path: `/comment/${id}/edit`, params: { id: id } });
    },
    deleteComments(id) {
      requests.deleteComment(id)
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
    }
  }, 
  
  mounted(){
    requests.getCommentsList()
    .then(response => {
      this.items = response.data;
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

