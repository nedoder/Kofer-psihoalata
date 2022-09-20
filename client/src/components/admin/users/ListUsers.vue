<template>
  <v-card>
    <v-card-title>

      <h1 class="display-1">
        Lista usera
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
      dense
      class="elevation-1"
      >

        <template v-slot:[`item.edit`]="{ item }" > 
          <v-icon small color="blue" class="mr-2" @click="editUser(item.id)">mdi-pencil</v-icon>
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
            Brisanje usera
          </v-card-title>

          <v-card-text>
            Da li ste sigurni da želite da obrišete ovog usera?
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
              @click="deleteUsers(id)"
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
    search: '',
    headers: [
      { text: "Korisničko ime", value: "username", sortable: true },
      { text: "Ime", value: "firstName", sortable: true },
      { text: "Prezime", value: "lastName", sortable: true },
      { text: "Privilegija", value: "role", sortable: true },
      { text: "Izmijeni", value: "edit", sortable: false },
      { text: "Obriši", value: "delete", sortable: false },
    ],
  }),
  methods: {
    editUser(id) {
      this.$router.push({ path: `/users/${id}/edit`, params: { id: id } });
    },
    deleteUsers(id) {
      requests.deleteUser(id)
      .then(response => {
        console.log(response)
        var base64Url = localStorage.getItem("token").split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        jsonPayload = JSON.parse(jsonPayload)
        let user_id = jsonPayload.userId
        if(id == user_id) {
            this.$router.push({ path: "/login" });
        }
        window.location.reload()
      })
      .catch(error => {
        console.log(error.message)
      })
      console.log(id)
    },
    deleteItem(id) {
      console.log(id)
      this.id = id
      this.dialog = true
    }
  }, 
  
  mounted(){
    requests.getUserList()
    .then(response => {
      this.items = response.data;
      this.items.forEach(item => {
        if (item.role === 1) {
          item.role = "Administrator"
        }
        else {
          item.role = "Moderator"
        }
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