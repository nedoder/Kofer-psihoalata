<template>
  <v-card>
    <v-card-title>

      <h3>
        Useri
      </h3>

      <v-spacer></v-spacer>

       <v-spacer></v-spacer> 

        <v-dialog
          v-model="dialogCreate"
          width="900"      
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="info">mdi-plus</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
             Dodaj usera
              <v-spacer></v-spacer>
             <v-btn
                icon
                @click="dialogCreate=false"
              >
               <v-icon color="red">mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-main>
              <create-user/>
            </v-main>
          </v-card>
        </v-dialog>

    </v-card-title>
    
    <v-card-text>
      <v-data-table
      :headers="headers"
      :items="items"
      dense
      class="elevation-1"
      >
          
        <template v-slot:[`item.edit`]="{ item }" > 
          <template>
            <v-btn 
              icon
              @click="editItem(item._id)"    
            >
              <v-icon small color="green">mdi-pencil</v-icon>
            </v-btn>
          </template>
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
        v-model="dialogEdit"
        persistent
        max-width="900px"                    
      >     
        <v-card>
          <v-card-title>
           Izmijeni
            <v-spacer></v-spacer>
           <v-btn
              icon
              @click="closeDialog"
            >
             <v-icon color="red">mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-main>
           <admin-edit :id="id"/>
          </v-main>
        </v-card>
               
      </v-dialog>

      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title>
            Brisanje usera
          </v-card-title>
          <v-card-text>
            Da li ste sigurni da želite da obrišete usera?
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
              @click="deleteUser(id)"
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
// import requests from "../../services/services"
import CreateUser from './CreateUser.vue';
import AdminEdit from './AdminEdit.vue';
export default {
  components: { CreateUser, AdminEdit },
  data: () => ({
    items: [],
    id: null,
    dialog: false,
    dialogCreate: false,
    dialogEdit: false,
    headers: [
      { text: "Korisničko ime", value: "email", sortable: true },
      { text: "Izmijeni", value: "edit", sortable: false },
      { text: "Obriši", value: "delete", sortable: false },
    ],
  }),
  methods: {
   
   editItem(id) {
        this.id = id;
        console.log(id)
        this.dialogEdit = true
    },
    closeDialog() {
        window.location.reload()
        this.id = null
    },
    deleteUser(id) {
    //   requests.deleteUser(id)
    //   .then(response => {
    //     console.log(response)
    //     var base64Url = localStorage.getItem("token").split('.')[1];
    //     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    //     var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    //       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //     }).join(''));
    //     jsonPayload = JSON.parse(jsonPayload)
    //     let user_id = jsonPayload.userId
    //     if(id == user_id) {
    //         this.$router.push({ path: "/login" });
    //     }
    //     window.location.reload()
    //   })
    //   .catch(error => {
    //     console.log(error.message)
    //   })
      console.log(id)
    },
    deleteItem(id) {
      console.log(id)
      this.id = id
      this.dialog = true
    }
  }, 
  
  mounted(){
    // requests.getUserList()
    // .then(response => {
    //   this.items = response.data;
    // }).catch(error => {
    //   console.log(error.response)
    // });
  },
}
</script>

<style scoped>
  >>> .v-dialog {
    overflow-x: hidden;
  }
</style>