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

             <v-text-field 
              filled 
              shaped 
              v-model="title" 
              label="Kategorija" 
            >
            </v-text-field>

            <v-autocomplete
              filled
              shaped
              :items="ustanove"
              :disabled="isUpdating"
              item-text="title"
              item-value="_id"
              v-model="authors"
              multiple
              chips
              deletable-chips
              label="Autor"
              :error-messages='matchError()'
            >
            
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  <v-avatar left>
                    <v-img :src="$imagePath + data.item.image"></v-img>
                  </v-avatar>
                      {{ data.item.title }}
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

            <v-btn @click="onSubmit" :disabled="!isValid" color="primary">Kreiraj</v-btn>
            
          </v-card-text>
        </v-card>
      </v-col>
  </v-form >
</template>

<script>
import { VueEditor } from "vue2-editor";
// import requests from "../../services/services"
export default {
  name: 'CreatBaneri',
  components : {
    VueEditor
  },
  data: () => ({
    content: ``,
    title: '',
    authors: [],
    ustanove: [],
    image: null,
    link: '',
    starter_page: false,
    isValid:true,
    url: null,
    isUpdating: false,
    customToolbar: [
      [{ header: [false, 2, 3, 4, 5, 6] }],
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
        formData.append("image", this.image, this.imagename);
      }
      if(this.authors) {
        this.authors.forEach( author =>
          formData.append("author", author)
        )
      }
      formData.append("title",  this.title);
      formData.append("content",  this.content);
      formData.append("starter_page", this.starter_page)
      formData.append("link", this.link)
      
    //   requests.newBaner(formData)
    //   .then(response => {
    //     console.log(response)
    //     this.$router.push({ path: `/baneri/` });
    //   })
    //   .catch(error => {
    //     console.log(error.message)
    //   })
    },
    

    remove (item) {
      const index = this.authors.indexOf(item._id)
      if (index >= 0) this.authors.splice(index, 1)
    },
    matchError() {  
      return (this.link === '' && this.authors.length === 0) ? "Greska" : ""
    },
  },
  mounted() {
    // requests.getUstanoveList()
    // .then(response => {
    //   this.ustanove = response.data;
    // }).catch(error => {
    //   console.log(error.response)
    // });
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