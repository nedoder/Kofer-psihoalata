<template>
  <v-form v-model="isValid" class="row text-center justify-center align-center fill-height">
    <v-col sm="6">
      <v-card  tile>

        <v-card-title>Kreiranje posta</v-card-title>

        <v-card-text>

          <v-text-field 
            filled 
            shaped 
            v-model="title" 
            label="Naslov" 
             :rules="[v => v.length > 1 || 'Morate unijeti naziv']"
          >
          </v-text-field>

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


          <vue-editor v-model="content" output-format="html" :editorToolbar="customToolbar"/>

          <v-autocomplete 
            filled
            shaped
            v-bind:items = category
            v-model="categories"
            item-text = category
            item-value = id
            :disabled="isUpdating"
            chips
            deletable-chips
            label="Kategorija"
            :error-messages='matchError()'
          >
          </v-autocomplete>

          <v-btn @click="onSubmit" :disabled="!isValid" color="primary">Kreiraj</v-btn>
            
        </v-card-text>
      </v-card>
    </v-col>
  </v-form >
</template>

<script>
import { VueEditor } from "vue2-editor";
import requests from "../../../services/services"
export default {
  name: 'CreatePost',
  components : {
    VueEditor
  },
  data: () => ({
    content: ``,
    title: '',
    categories: [],
    category: [],
    image: null,
    url: "",
    author: null,
    isValid:true,
    isUpdating: false,
    customToolbar: [
      [{ header: [false, 4, 5, 6] }],
      ["bold", "italic", "underline", "strike"], 
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: "" }, { align: "center" }, { align: "right"}, { align: "justify"}],
      ["blockquote"],
      ["link", "image"],
      [{ color: [] }, { background: [] }], 
    ]
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
      if(this.categories) {
        formData.append("categoryId", this.categories)
      }
      formData.append("title",  this.title);
      formData.append("content",  this.content);
      formData.append("userId",  this.author);
      requests.newPost(formData)
      .then(response => {
        console.log(response)
        this.$router.push({ path: `/posts/` });
      })
      .catch(error => {
        console.log(error.message)
      })
    },

    onFileChange(e) {
      this.image = e
      console.log(e)
    },
    

    remove (item) {
      const index = this.categories.indexOf(item.id)
      if (index >= 0) this.categories.splice(index, 1)
    },

    matchError() { 
      return (this.categories === null) ? "Morate odabrati kategoriju" : ""
    },
  },
  mounted() {
    requests.getCategoryList()
    .then(response => {
      this.category = response.data;
    }).catch(error => {
      console.log(error.response)
    });

    let token  = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    this.author = token.id
  }   
}
</script>

<style scoped>
.quillWrapper {
  margin-bottom: 10px;
}
.row .fill-height {
    /* height: 50vh !important; */
    align-items: center !important;
}
</style>