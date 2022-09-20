<template>
  <v-form v-if="currentAnswer" v-model="isValid" class="row text-center justify-center align-center fill-height">
    <v-col sm="6">
      <v-card tile>
        <v-card-title>Izmjena odgovora</v-card-title>
        <v-card-text>
          <v-textarea 
            filled 
            shaped 
            v-model="currentAnswer.answer" 
            :rules="[v => v.length > 1 || 'Morate unijeti odgovor']"
            label="Odgovor" 
          >
          </v-textarea>

          <v-checkbox 
            label="Prikaži na stranici" 
            v-model="currentAnswer.approved"
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
    currentAnswer: null,
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
      requests.editAnswer(this.$route.params.id, {"answer": this.currentAnswer.answer, "approved" : this.currentAnswer.approved })
      .then((response) => {
        console.log(response.data);
        this.$router.push({ path: `/answers/` });   
      })
      .catch((e) => {
        console.log(e);
      });
    },
    getAnswers(id) {
      requests.getAnswer(id)
      .then((response) => {
        this.currentAnswer = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    },

  },
  mounted() {
    this.getAnswers(this.$route.params.id)
  },
}
</script>

<style scoped>
.row .fill-height {
    height: 80vh !important;
    align-items: center !important;
}
</style>

