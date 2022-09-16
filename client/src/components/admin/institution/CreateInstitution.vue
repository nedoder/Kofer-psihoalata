<template>
    <v-form v-model="isValid" class="row text-center justify-center align-center fill-height">
        <v-col sm="6">
          <v-card  tile >
  
              <v-card-title>Kreiranje institucije</v-card-title>
            <v-card-text>
  
              <v-text-field
                filled 
                shaped 
                label="Naziv"
                v-model="name"
                :rules="[v => v.length > 0 || 'Morate unijeti naziv']"
              ></v-text-field>
  
              <v-text-field
                filled 
                shaped 
                label="Zanimanje"
                v-model="profession"
                :rules="[v => v.length > 0 || 'Morate unijeti zanimanje']"
              ></v-text-field>
  
              <v-text-field
                filled 
                shaped 
                label="E-mail"
                v-model="mail"
                :rules="[v => v.length > 0 || 'Morate unijeti e-mail']"
              ></v-text-field>
  
              <v-text-field 
               filled 
               shaped 
               label="Kontakt" 
               v-model="phone" 
               hint="Kontakt unijeti u formi +38220123456"
               persistent-hint
               :rules="[...validatePhone]"
              >
              </v-text-field>
  
              <v-text-field
                filled 
                shaped 
                label="Lokacija"
                v-model="location"
                :rules="[v => v.length > 0 || 'Morate unijeti lokaciju']"
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
  import requests from "../../../services/services"
  export default {
    data: () => ({
      isValid:true,
      name: '',
      mail: '',
      phone: '',
      location: '',
      profession: '',
      isUpdating: false,
      error: '',
      validatePhone: [ v => !!v || 'Morate unijeti kontakt', v => /^[+][0-9]{11}$/.test(v) || "Broj nije validan"]
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
        requests.newInstitution({
            "name": this.name,
            "mail":  this.mail,
            "phone": this.phone,
            "location":  this.location,
            "profession":  this.profession
        })
        .then(response => {
          console.log(response)
          this.$router.push({ path: `/institutions/` });
        })
        .catch(error => {
          this.error = error.response.data.message
          console.log(error.message)
        })
      },
     
    },
  }
  </script>
  
  