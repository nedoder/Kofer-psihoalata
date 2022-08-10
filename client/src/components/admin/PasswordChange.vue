<template>
    <v-app>
        <v-main>
            <v-container fluid fill-height style="background:rgba(44,44,44,0.5)">
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="dark">
                                <v-toolbar-title>Izmjena lozinke</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form 
                                    ref="form" 
                                    @submit.prevent="login"
                                >

                                    <v-text-field
                                        label="Nova lozinka"
                                        v-model="form.newpassword"
                                        required
                                        :error-messages="errorPassword"
                                        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showPass = !showPass"
                                        :type="showPass ? 'text' : 'password'"
                                    >
                                    </v-text-field>

                                     <v-text-field
                                        label="Potvrdite novu lozinku"
                                        v-model="rePassword"
                                        required
                                        :rules="[passwordConfirmationRule]"
                                        :error-messages="errorPassword"
                                        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showPass = !showPass"
                                        :type="showPass ? 'text' : 'password'"
                                    >
                                    </v-text-field>

                                    <div class="text-center">
                                        <v-btn 
                                            :loading="loading"
                                            color="dark"
                                            large
                                            type="submit"
                                            text
                                            rounded
                                            
                                            >
                                            Izmijeni
                                        </v-btn
                                    >
                                    </div>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
// import requests from "../services/services"
export default {
    data: () => ({
        form: {
            newpassword: null
        },
        email: null,
        rePassword: null,
        showPass: false,
        errorUsername: '',
        errorPassword: '',
        errorCode: '',
        loading: false,
        logged: null,
        image: ''
    }),
    computed: {
        passwordConfirmationRule() {
          return () => (this.form.newpassword === this.rePassword) || 'Password must match'
        }
    },
    methods: {
        login() {
            // requests.editPassword(this.form)
            // .then(response => {
            //     console.log(response)
            //     let token  = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
            //     this.loading = true
            //     if(token.Gcode === true) {
            //         this.$router.push({ path: "/google/" });
            //         window.location.reload()
            //     }
            //     else {
            //         this.$router.push({ path: "/scan/" });
            //         window.location.reload()
            //     }
                
                
                
            // })
            // .catch(error => {
            //     console.log(error)
            //     this.errorUsername = "Pogrešan username"
            //     this.errorPassword = "Pogrešan password"
            //     this.loading = false 
            // })
        },
    },
    //  mounted() {
    //     let token  = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    //     this.logged = token.userId
    //     requests.getUser(this.logged)
    //     .then((response) => {
    //        this.email = response.data.email
    //        this.image = response.data.qrcod
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
};
</script>
Footer
