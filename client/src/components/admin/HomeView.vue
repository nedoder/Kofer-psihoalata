<template>
  <v-app>
    <v-card fill-height>
      <v-card-title>Sponzorisano</v-card-title>
      <v-container fluid>
        <v-flex row>
          <list-sponzorisano style='width:50%'/>
          <list-oglas style='width:50%'/> 
        </v-flex> 
        </v-container>
        <v-container>
        <activity-log/> 
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
// listing all items in dashboard route
// import ListOglas from './sponzorisane_ustanove/ListOglas.vue'
// import ListSponzorisano from './sponzorisano/ListSponzorisano.vue'
// import ActivityLog from './activity/ActivityLog.vue'
export default {
  // components: { ListOglas, ListSponzorisano, ActivityLog },
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