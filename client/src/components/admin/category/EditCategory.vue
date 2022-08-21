<template>
  <v-form v-if="currentCategory" v-model="isValid">
    <v-row justify="center">
      <v-col sm="10">
        <v-card tile>
          <v-card-text>

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
      requests.editCategory(this.$route.params.id, {"category": this.currentCategory.category })
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
</style>

