<template>
  <v-card     
  max-width="70%"
  class="mx-auto"
  shaped
  v-if="currentPost"
  >
    <v-img :src="$imagePath + currentPost.image" style="height:400px" ></v-img>
    <v-card-title v-model="currentPost.title">{{currentPost.title}}</v-card-title>
    <!-- <v-card-text v-model="currentBaner.starter_page">
      Sponzorisan: {{currentBaner.starter_page}}
    </v-card-text>
    <v-card-text v-model="currentBaner.link">
      Link: {{currentBaner.link}}
    </v-card-text> -->
    <v-card-text v-model="currentPost.userId">
      Autor: {{currentPost.userId}}
    </v-card-text>
     <v-card-text v-model="currentPost.categoryId">
      Kategorija: {{currentPost.categoryId}}
    </v-card-text>
     <v-card-text v-model="currentPost.createdAt">
      Datum objave: {{new Date(currentPost.createdAt).toDateString()}}
    </v-card-text>
     <v-card-text v-model="currentPost.updatedAt">
      Poslednje izmjene: {{new Date(currentPost.updatedAt).toDateString()}}
    </v-card-text>
    <v-card-text><div v-html="currentPost.content"></div></v-card-text>
   
    <v-btn @click="goBack" text>
      <v-icon small color="primary">mdi-keyboard-backspace</v-icon>
      Nazad na listu postova
     </v-btn>
  </v-card>
</template>

<script>
import requests from "../../../services/services"
export default {
  
  data: () => ({
    currentPost: null,
  }),
  methods: {
    getPosts(id) {
      requests.getPost(id)
      .then((response) => {
        this.currentPost = response.data;
        
          requests.getUser(this.currentPost.userId)
          .then(response => {
          this.currentPost.userId = response.data.username;
          }).catch(error => {
            console.log(error.response)
          }),
    
          requests.getCategory(this.currentPost.categoryId)
          .then(response => {
          this.currentPost.categoryId = response.data.category;
          }).catch(error => {
            console.log(error.response)
          })
        console.log(this.currentPost)
      })
      .catch((e) => {
        console.log(e);
      });
    },
    goBack() {
      this.$router.push({ path: "/posts" });
    }
  },
  mounted() {
    this.getPosts(this.$route.params.id);
  },
}
</script>