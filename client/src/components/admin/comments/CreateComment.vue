<template>
  <v-form v-model="isValid" class="row text-center justify-center align-center fill-height">
      <v-col sm="6">
        <v-card  tile >

            <v-card-title>Kreiranje komentara</v-card-title>
          <v-card-text>

            <v-textarea
              filled 
              shaped 
              label="Komentar"
              v-model="comment"
              :rules="[v => v.length > 1 || 'Morate unijeti komentar']"
            ></v-textarea>

            <!-- <v-autocomplete 
              filled
              shaped
              v-bind:items = post
              v-model="posts"
              item-text = title
              item-value = id
              :disabled="isUpdating"
              chips
              deletable-chips
              label="Post"
              :error-messages='matchError()'
            >
            </v-autocomplete> -->

            <v-autocomplete
              filled
              shaped
              :items="post"
              :disabled="isUpdating"
              item-text="title"
              item-value="id"
              v-model="posts"
              chips
              deletable-chips
              label="Post"
              :error-messages='matchError()'
            >
            
              <template v-slot:selection="data">
                <v-chip
                 class="short"
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove()"
                >
                  <v-avatar left>
                    <v-img :src="$imagePath + data.item.image"></v-img>
                  </v-avatar>
                   <span> {{ data.item.title }} </span>
                     
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template>
                  <v-list-item-avatar>
                    <v-img :src="$imagePath + data.item.image "/>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
              
            </v-autocomplete>

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
    comment: '',
    isUpdating: false,
    author: null,
    error: '',
    post: [],
    posts: [],
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
      requests.newComment({
          "comment": this.comment,
          "postId": this.posts,
          "approved" : true,
          "author" : this.author
      })
      .then(response => {
        console.log(response)
        this.$router.push({ path: `/comments/` });
      })
      .catch(error => {
        this.error = error.response.data.error
        console.log(error.message)
      })
    },

    remove () {
      this.posts = []
    },

    matchError() {  
      return (this.posts.length === 0) ? "Morate odabrati post" : ""
    },
   
   
  },

   mounted() {
    requests.getPostsList()
    .then(response => {
      this.post = response.data;
    }).catch(error => {
      console.log(error.response)
    });

    let token  = decodeURIComponent(escape(atob(localStorage.getItem('token').split('.')[1])));
    let tokenObject = JSON.parse(token)
    this.author = tokenObject.name + " " + tokenObject.lname 

  }   
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