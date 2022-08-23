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
              :rules="[v => v.length > 0 || 'Morate unijeti ime']"
            ></v-text-field>

            <v-text-field
              filled 
              shaped 
              label="Prezime"
              v-model="lastname"
              :rules="[v => v.length > 0 || 'Morate unijeti prezime']"
            ></v-text-field>

            <v-text-field
              filled 
              shaped 
              label="Korisničko ime"
              v-model="username"
              :rules="[v => v.length > 0 || 'Morate unijeti korisničko ime']"
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
             :rules="[v => v.length > 0 || 'Morate unijeti lozinku']"
            >
            </v-text-field>

             <v-text-field
             filled 
             shaped 
                                        label="Potvrdite lozinku"
                                        v-model="rePassword"
                                        required
                                        :rules="[passwordConfirmationRule]"
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
              v-model="role"
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
            
            <v-btn @click="onSubmit" :disabled="!isValid" color="primary">Kreiraj</v-btn>
            
          </v-card-text>
        </v-card>
      </v-col>
  </v-form >
</template>

<script>
import requests from "../../../services/services"
export default {
  data: () => ({
    showPass: false,
    showRePass: false,
    errorPassword: '',
    isValid:true,
    name: '',
    lastname: '',
    username: '',
    password: '',
    isUpdating: false,
     rePassword: null,
    error: '',
    roles: [{"role" : "Adinistrator", "id" : 1}, {"role" : "Moderator", "id" : 0}],
    role: null
  }),
  computed: {
        passwordConfirmationRule() {
          return () => (this.password === this.rePassword) || 'Lozinke se ne poklapaju'
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
      requests.newUser({
          "firstName": this.name,
          "lastName":  this.lastname,
          "username": this.username,
          "password":  this.password,
          "role":  this.role
      })
      .then(response => {
        console.log(response)
        this.$router.push({ path: `/users/` });
      })
      .catch(error => {
        this.error = error.response.data.message
        console.log(error.message)
      })
    },
    remove (item) {
      const index = this.role.indexOf(item.id)
      if (index >= 0) this.role.splice(index, 1)
    },

    matchError() {  
      return (this.role === null) ? "Morate unijeti privilegije" : ""
    },
   
  },
}
</script>

