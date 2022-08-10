<template>
  <v-form v-model="isValid" class="row text-center justify-center align-center fill-height">
      <v-col sm="6">
        <v-card  tile >

            <v-card-title>Kreiranje korisnika</v-card-title>
          <v-card-text>

            <v-text-field
              filled 
              shaped 
              label="Ime"
              v-model="name"
              :rules="[v => v.length > 1 || 'Morate unijeti ime']"
            ></v-text-field>

            <v-text-field
              filled 
              shaped 
              label="Prezime"
              v-model="lastname"
              :rules="[v => v.length > 1 || 'Morate unijeti prezime']"
            ></v-text-field>

            <v-text-field
              filled 
              shaped 
              label="Korisničko ime"
              v-model="username"
              :rules="[v => v.length > 1 || 'Morate unijeti username']"
            ></v-text-field>

            <v-text-field 
             filled 
             shaped 
             v-model="password" 
             label="Lozinka" 
             required
             :error-messages="errorPassword"
             :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
             @click:append="showPass = !showPass"
             :type="showPass ? 'text' : 'password'"
             :rules="[v => v.length > 1 || 'Morate unijeti password']"
            >
            </v-text-field>

            <v-alert type="error" v-if="error">
             {{error}}
            </v-alert>
            
            <v-btn @click="onSubmit" :disabled="!isValid" color="primary">Kreiraj</v-btn>
            
          </v-card-text>
        </v-card>
      </v-col>
  </v-form >
</template>

<script>
// import requests from "../../services/services"
export default {
  data: () => ({
    showPass: false,
    errorPassword: '',
    isValid:true,
    name: '',
    lastname: '',
    username: '',
    password: '',
    isUpdating: false,
    error: ''
  }),
  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
  },
  methods: {
    onSubmit() {
    //   requests.newUser({
    //       "email": this.username,
    //       "password":  this.password
    //   })
    //   .then(response => {
    //     console.log(response)
    //     window.location.reload()
    //   })
    //   .catch(error => {
    //     this.error = error.response.data.error
    //     console.log(error.message)
    //   })
    },
   
   
  },
}
</script>

<style scoped>

.row .fill-height {
    height: 80vh !important;
    align-items: center !important;
}
</style>