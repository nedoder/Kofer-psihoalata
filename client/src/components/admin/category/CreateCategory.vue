<template>
  <v-form v-model="isValid" class="row text-center justify-center align-center fill-height">
    <v-col sm="6">
      <v-card tile>
        <v-card-title>Kreiranje kategorije</v-card-title>
        <v-card-text>
          <img 
            height="100px"
            width="100px" 
            v-if="url" 
            :src="url"
          />
          <v-file-input 
            filled 
            shaped 
            chips
            prepend-icon="" 
            append-icon="mdi-camera" 
            v-model="image" 
            label="Slika" 
            :rules="[v => !!v || 'Slika je obavezna']" 
            accept="image/*" 
            required 
            @change="onFileChange"
          >
          </v-file-input>
          <v-text-field
            filled 
            shaped 
            label="Naziv"
            v-model="category"
            :rules="[v => v.length > 1 || 'Morate unijeti naziv kategorije']"
          >
          </v-text-field>
         
          <v-alert type="error" v-if="error">
           {{error}}
          </v-alert>
          
          <v-btn @click="onSubmit" :disabled="!isValid" color="primary">Kreiraj</v-btn>
          
        </v-card-text>
      </v-card>
    </v-col>
  </v-form>
</template>

<script>
import requests from "../../../services/services"
export default {
  data: () => ({
    isValid:true,
    image: null,
    category: '',
    isUpdating: false,
    error: '',
    url: "",
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
      let formData = new FormData();
      if(this.image) {
        formData.append("image", this.image, this.image.name);
      }
      formData.append("category", this.category)
      
      requests.newCategory(formData)
      .then(response => {
        console.log(response)
        this.$router.push({ path: `/category/` });
      })
      .catch(error => {
        this.error = error.response.data.error
        console.log(error.message)
      })
    },
   
    onFileChange(e) {
      this.image = e
      console.log(e)
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