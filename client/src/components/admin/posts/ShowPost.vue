<template>
  <v-card     
    max-width="70%"
    class="mx-auto"
    shaped
    v-if="currentPost"
  >
    <v-img :src="$imagePath + currentPost.image" style="height:400px"></v-img>
    <v-card-title v-model="currentPost.title">{{currentPost.title}}</v-card-title> 
    <v-card-text v-model="currentPost">
      Kreirao <span class="green--text">{{currentPost.userId}}</span>
      <v-divider vertical class="mx-2"></v-divider>
      Izmijenjen {{new Date(currentPost.updatedAt).toLocaleString()}}
    </v-card-text>

    <v-card-text v-model="currentPost.categoryId">
      <v-chip
        class="ma-2"
        color="green"
        text-color="white"
      >
      {{currentPost.categoryId}}
      </v-chip>
    </v-card-text>

    <v-card-text><div id="content" v-html="currentPost.content"></div></v-card-text>
   
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
    comment: "mdi-message-reply",
    answer: "mdi-message-reply-text"
  }),
  methods: {
    getPosts(id) {
      requests.getPost(id)
      .then((response) => {
        this.currentPost = response.data;
        console.log(this.currentPost)
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

<style scoped>
hr {
  height: 15px;
}
</style>

<style>
#content p > img{
  width: 90% !important; 
}
</style>