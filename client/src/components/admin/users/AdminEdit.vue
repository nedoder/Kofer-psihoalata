<template>
  <v-form v-if="currentUser" v-model="isValid">
    <v-row justify="center">
      <v-col sm="10">
        <v-card tile>
          <v-card-text>

            <v-text-field 
              filled 
              shaped 
              v-model="currentUser.firstName" 
              :rules="[v => v.length > 1 || 'Morate unijeti ime']"
              label="Ime" 
            >
            </v-text-field>

            <v-text-field 
              filled 
              shaped 
              v-model="currentUser.lastName" 
              :rules="[v => v.length > 1 || 'Morate unijeti prezime']"
              label="Prezime" 
            >
            </v-text-field>

            <v-text-field 
              filled 
              shaped 
              v-model="currentUser.username" 
              :rules="[v => v.length > 1 || 'Morate unijeti username']"
              label="Korisničko ime" 
            >
            </v-text-field>

            <v-text-field
              filled 
              shaped 
              label="Nova lozinka"
              v-model="newpassword"
              required
              :error-messages="errorPassword"
              :rules="[v => v.length > 0 || 'Morate unijeti lozinku']"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPass = !showPass"
              :type="showPass ? 'text' : 'password'"
            >
            </v-text-field>

            <v-text-field
              filled 
              shaped 
              label="Potvrdite novu lozinku"
              v-model="rePassword"
              required
              :rules="[passwordConfirmationRule, cannotEmpty]"
              :error-messages="errorPassword"
              :append-icon="showRePass ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showRePass = !showRePass"
              :type="showRePass ? 'text' : 'password'"
            >
            </v-text-field>

            <v-autocomplete 
              filled
              shaped
              v-bind:items = roles
              v-model="currentUser.role"
              item-text = role
              item-value = id
              :disabled="isUpdating"
              chips
              deletable-chips
              label="Privilegije"
              :error-messages='matchError()'
            >
            </v-autocomplete>


            <v-alert type="error" v-if="error">
             {{error}}
            </v-alert>

            <v-btn @click="onSubmit" :disabled="!isValid" color="primary">Izmijeni</v-btn>
            
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-form >
</template>

<script>
import requests from "../../../services/services"
export default {
 
  data: () => ({
    currentUser: null,
    isValid:true,
    isUpdating: false,
    showPass: false,
    showRePass: false,
    errorPassword: '',
    newpassword: '',
    rePassword: '',
    error: '',
    roles: [{"role" : "Adinistrator", "id" : 1}, {"role" : "Moderator", "id" : 0}],
  }),

  computed: {
    passwordConfirmationRule() {
      return () => (this.newpassword === this.rePassword) || 'Lozinke se ne poklapaju'
    },

    cannotEmpty() {
      return () => (this.newpassword !== '' || this.rePassword !== '') || 'Morate unijeti lozinku'
    }
  },

  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
  },

  methods: {
    onSubmit() {
      requests.editUser(this.$route.params.id, {
        "firstName": this.currentUser.firstName, 
        "lastName": this.currentUser.lastName, 
        "username": this.currentUser.username, 
        "password": this.newpassword, 
        "role" : this.currentUser.role 
      })
      .then((response) => {
        console.log(response.data);
        let token  = decodeURIComponent(escape(atob(localStorage.getItem('token').split('.')[1])));
        let tokenObject = JSON.parse(token)
        let id = tokenObject.id 
        if(parseInt(this.$route.params.id) === id) {
         localStorage.removeItem("token")
         this.$router.push({ path: "/login" });
        } else {
           this.$router.push({ path: "/users" });
        }  
      })
      .catch((e) => {
        this.error = e.response.data.message;
        console.log(e);
      });
    },
    getUsers(id) {
      requests.getUser(id)
      .then((response) => {
        this.currentUser = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    },

    matchError() {  
      return (this.currentUser.role === null) ? "Morate unijeti privilegije" : ""
    },
    
   
  },
  mounted() {
    this.getUsers(this.$route.params.id)
  },
}
</script>

