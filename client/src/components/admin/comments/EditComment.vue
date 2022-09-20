<template>
  <v-form v-if="currentComment" v-model="isValid" class="row text-center justify-center align-center fill-height">
    <v-col sm="6">
      <v-card tile>

        <v-card-title>Izmjena komentara</v-card-title>
        <v-card-text>
          <v-textarea 
            filled 
            shaped 
            v-model="currentComment.comment" 
            :rules="[v => v.length > 1 || 'Morate unijeti komentar']"
            label="Komentar" 
          >
          </v-textarea>

          <v-checkbox 
            label="Prikaži na stranici" 
            v-model="currentComment.approved"
          >
          </v-checkbox>

          <v-btn @click="onSubmit" :disabled="!isValid" color="primary">Izmijeni</v-btn>
            
        </v-card-text>
      </v-card>
    </v-col>
  </v-form >
</template>

<script>
import requests from "../../../services/services"
export default {
 
  data: () => ({
    currentComment: null,
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
      requests.editComment(this.$route.params.id, {"comment": this.currentComment.comment, "approved" : this.currentComment.approved })
      .then((response) => {
        console.log(response.data);
        this.$router.push({ path: `/comments/` });   
      })
      .catch((e) => {
        console.log(e);
      });
    },
    getComments(id) {
      requests.getComment(id)
      .then((response) => {
        this.currentComment = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    },

  },
  mounted() {
    this.getComments(this.$route.params.id)
  },
}
</script>

<style scoped>
.row .fill-height {
    height: 80vh !important;
    align-items: center !important;
}
</style>

