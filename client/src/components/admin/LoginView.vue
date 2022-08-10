<template>
    <v-app>
        <v-main>
            <v-container fluid fill-height style="background:rgba(44,44,44,0.5)">
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="dark">
                                <v-toolbar-title>Prijavi se</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form 
                                    ref="form" 
                                    @submit.prevent="login"
                                >
                                    <v-text-field
                                        label="Korisničko ime"
                                        append-icon="mdi-account"
                                        v-model="form.email"
                                        required
                                        autofocus
                                        :error-messages="errorUsername"
                                    >
                                    </v-text-field>

                                    <v-text-field
                                        label="Lozinka"
                                        v-model="form.password"
                                        required
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
                                            Prijavi se
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
            email: null,
            password: null,
        },
        showPass: false,
        errorUsername: '',
        errorPassword: '',
        loading: false,
    }),
    methods: {
        login() {
            // requests.logIn(this.form)
            // .then(response => {
            //     window.localStorage.setItem("token", response.data.token);
            //     let token  = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
            //     this.loading = true
            //     if(token.login === '0') {
            //         this.$router.push({ path: "/password/" });
            //         window.location.reload()
            //     }
            //     else if(token.Gcode === false) {
            //         this.$router.push({ path: "/scan/" });
            //         window.location.reload()
            //     }
            //     else {
            //         this.$router.push({ path: "/google/" });
            //         window.location.reload()
            //     }
            //     console.log(token)
            // })
            // .catch(error => {
            //     console.log(error)
            //     this.errorUsername = "Pogrešno korisničko ime"
            //     this.errorPassword = "Pogrešna lozinka"
            //     this.loading = false 
            // })
        },
    }
};
</script>