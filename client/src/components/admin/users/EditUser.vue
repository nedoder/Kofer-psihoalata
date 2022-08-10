<template>
  <v-form v-model="isValid">
    <v-row justify="center">
      <v-col sm="10">
        <v-card  tile>
          <v-card-text>

            <v-text-field
            readonly
             filled 
              shaped 
              label="Korisničko ime"
              v-model="username"
              :rules="[v => v.length > 1 || 'Morate unijeti korisničko ime']" 
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
             :rules="[v => v.length > 1 || 'Morate unijeti lozinku']" 
            >
            </v-text-field>

            <v-text-field
            filled 
             shaped 
              label="Nova lozinka"
              v-model="newpassword"
              required
              :error-messages="errorPassword"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPass = !showPass"
              :type="showPass ? 'text' : 'password'"
            >
            </v-text-field>

            <v-text-field
            filled 
             shaped 
                label="Potvrdi novu lozinku"
                v-model="rePassword"
                required
                :rules="[passwordConfirmationRule]"
                :error-messages="errorPassword"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                :type="showPass ? 'text' : 'password'"
            >
            </v-text-field>

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
// import requests from "../../services/services"
export default {
  props: ['id' ],
  data: () => ({
    showPass: false,
    errorPassword: '',
    isValid:true,
    username: '',
    password: '',
    newpassword: null,
    rePassword: null,
    isUpdating: false,
    error: '',
    user_id: null,
    logged: null,
    image: ''
  }),
  computed: {
        passwordConfirmationRule() {
          return () => (this.newpassword === this.rePassword) || 'Password must match'
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
      
    //   requests.editPassword( {
    //     "password" : this.password,
    //     "newpassword" : this.newpassword
    //   })
    //   .then(response => {
    //     console.log(response)
    //     if(this.user_id === this.logged) {
    //        localStorage.removeItem("token")
    //        this.$router.push({ path: "/login" });
    //     }
    //     window.location.reload()
    //   })
    //   .catch(error => {
    //     if(error.response) {
    //       this.error = error.response.data.message
    //       console.log(error.response.data.message)
    //     }
        
    //   })
    },
   
   
  },
  mounted() {
    if(this.$route.params.id) {
      this.user_id = this.$route.params.id
    }
    else {
     this.user_id = this.id
    }
    var base64Url = localStorage.getItem("token").split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    jsonPayload = JSON.parse(jsonPayload)
    this.logged = jsonPayload.userId
    // requests.getUser(this.user_id)
    // .then((response) => {
    //    this.username = response.data.email;
    //    this.image = response.data.qrcod
        
    // })
    // .catch((e) => {
    //   console.log(e);
    // });
  }
}
</script>