<template>
  <v-form v-if="currentCategory" v-model="isValid" class="row text-center justify-center align-center fill-height">
    <v-row justify="center">
      <v-col sm="6">
        <v-card tile>
          <v-card-text>

            <img 
              height="100px"
              width="100px" 
              v-if="url" 
              :src="url"
            />

            <img 
              height="100px"
              width="100px" 
              right
              v-if="!url" 
              :src="$imagePath + currentCategory.image"
            />

            <v-file-input 
              chips 
              filled 
              shaped 
              append-icon="mdi-camera" 
              prepend-icon="" 
              v-model="image" 
              label="Slika" 
              accept="image/*" 
              @change="onFileChange"
            >
            </v-file-input>

            <v-text-field 
              filled 
              shaped 
              v-model="currentCategory.category" 
              :rules="[v => v.length > 1 || 'Morate unijeti naziv kategorije']"
              label="Naziv" 
            >
            </v-text-field>

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
    currentCategory: null,
    isValid:true,
    isUpdating: false,
    url: null,
    image: null
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
        formData.append("image", this.image);
      }
      formData.append("category", this.currentCategory.category)
          
      requests.editCategory(this.$route.params.id, formData)
      .then((response) => {
        console.log(response.data);
        this.$router.push({ path: `/category/` });   
      })
      .catch((e) => {
        console.log(e);
      });
    },

    getCategories(id) {
      requests.getCategory(id)
      .then((response) => {
        this.currentCategory = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    },

    onFileChange(e) {
      const file = e;
      if(file) {
        this.url = URL.createObjectURL(file);
      }
      else {
        this.url = null
      }
    },
    
   
  },
  mounted() {
    this.getCategories(this.$route.params.id)
  },
}
</script>

<style scoped>
.quillWrapper {
  margin-bottom: 10px;
}
.row .fill-height {
  height: 80vh !important;
  align-items: center !important;
}
</style>

