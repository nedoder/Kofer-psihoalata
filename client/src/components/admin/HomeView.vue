<template>
  <v-app>
    <v-card fill-height>
      <v-container fluid>
          <list-posts/>
          <list-comments/> 
          <list-answers/> 
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
// listing all items in dashboard route
import ListPosts from './posts/ListPosts.vue'
import ListComments from './comments/ListComments.vue'
import ListAnswers from './answers/ListAnswers.vue'
export default {
  components: { ListPosts, ListComments, ListAnswers },
}
</script>

<style scoped>
 >>> .v-dialog {
    overflow-y: visible;
  }
.v-dialog:not(.v-dialog--fullscreen) {
  max-height: 100% !important;
}
</style>