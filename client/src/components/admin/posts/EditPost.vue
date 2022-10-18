<template>
  <v-form v-if="currentPost" v-model="isValid">
    <v-row justify="center">
      <v-col sm="10">
        <v-card tile>
          <v-card-text>

            <v-text-field 
              filled 
              shaped 
              v-model="currentPost.title" 
              label="Naziv" 
              :rules="[v => v.length > 1 || 'Morate unijeti naziv']"
            >
            </v-text-field>

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
              :src="$imagePath + currentPost.image"
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

            <vue-editor v-model="currentPost.content" output-format="html" :editorToolbar="customToolbar"/>


            <v-autocomplete
              filled
              shaped
              :items="category"
              :disabled="isUpdating"
              v-model="currentPost.categoryId"
              item-value = "id"
              item-text = "category"
              chips
              deletable-chips
              label="Kategorija"
              :error-messages='matchError()'
            >

            </v-autocomplete>

            <v-btn @click="onSubmit" :disabled="!isValid" color="primary">Izmijeni</v-btn>
            
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-form >
</template>

<script>
import { VueEditor } from "vue2-editor";
import requests from "../../../services/services"
export default {
  components : {
    VueEditor
  },
  data: () => ({
    category: [],
    currentPost: null,
    isValid:true,
    image: [],
    url: null,
    isUpdating: false,
    customToolbar: [
      [{ header: [false, 4, 5, 6] }],
      ["bold", "italic", "underline", "strike"], 
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: "" }, { align: "center" }, { align: "right"}, { align: "justify"}],
      ["blockquote"],
      ["link", "image"],
      [{ color: [] }, { background: [] }], 
    ],
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
      formData.append("title",  this.currentPost.title);
      formData.append("content",  this.currentPost.content);
      formData.append("categoryId", this.currentPost.categoryId)
            
      requests.editPost(this.$route.params.id, formData)
      .then((response) => {
        console.log(response.data);
        this.$router.push({ path: `/posts/` });   
      })
      .catch((e) => {
        console.log(e);
      });
    },
    getPosts(id) {
      requests.getPost(id)
      .then((response) => {
        this.currentPost = response.data;
        console.log(this.currentPost)
      })
      .catch((e) => {
        console.log(e);
      });
    },
    getCategories() {
      requests.getCategoryList()
      .then((response) => {
        this.category = response.data; 
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
    matchError() {  
     return ( this.currentPost.categoryId === null) ? "Morate odabrati kategoriju" : ""
    },
  },
  mounted() {
    this.getPosts(this.$route.params.id);
    this.getCategories()
  },
}
</script>


<style scoped>
.quillWrapper {
  margin-bottom: 10px;
}
</style>

