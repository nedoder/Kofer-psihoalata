<template>
  <v-form v-if="currentInstitution" v-model="isValid" class="row text-center justify-center align-center fill-height">
    <v-row justify="center">
      <v-col sm="6">
        <v-card tile>
          <v-card-text>

            <v-text-field 
              filled 
              shaped 
              v-model="currentInstitution.name" 
              :rules="[v => v.length > 1 || 'Morate unijeti naziv']"
              label="Naziv" 
            >
            </v-text-field>

            <v-text-field 
              filled 
              shaped 
              v-model="currentInstitution.profession" 
              :rules="[v => v.length > 1 || 'Morate unijeti zanimanje']"
              label="Zanimanje" 
            >
            </v-text-field>

            <v-text-field 
              filled 
              shaped 
              v-model="currentInstitution.mail" 
              :rules="[v => v.length > 1 || 'Morate unijeti e-mail']"
              label="E-mail" 
            >
            </v-text-field>

            <v-text-field
              filled 
              shaped 
              v-model="currentInstitution.phone"
              hint="Kontakt unijeti u formi +38220123456"
              persistent-hint
              :rules="[...validatePhone]"
              label="Kontakt"
            >
            </v-text-field>

            <v-text-field
              filled 
              shaped 
              v-model="currentInstitution.location"
              :rules="[v => v.length > 1 || 'Morate unijeti lokaciju']"
              label="Lokacija"
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
import requests from "../../../services/services"
export default {
 
  data: () => ({
    currentInstitution: null,
    isValid:true,
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
      requests.editInstitution(this.$route.params.id, {
          "name": this.currentInstitution.name, 
          "phone": this.currentInstitution.phone, 
          "mail": this.currentInstitution.mail, 
          "location": this.currentInstitution.location,
          "profession": this.currentInstitution.profession  
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push({ path: `/institutions/` });
      })
      .catch((e) => {
        this.error = e.response.data.message
        console.log(e);
      });
    },
    getInstitutions(id) {
      requests.getInstitution(id)
      .then((response) => {
        this.currentInstitution = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    },
    
  },
  mounted() {
    this.getInstitutions(this.$route.params.id)
  },
}
</script>
  
<style scoped>
.row .fill-height {
    height: 80vh !important;
    align-items: center !important;
}
.short {
    width: 100px;
}
.short span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
  
  