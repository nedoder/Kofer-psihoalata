<template>
  <v-app>
    <v-app-bar
      app
      clipped-left 
      color="black" 
      dark 
      dense 
      elevation="0"
      >
<!-- header -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Kofer psihoalata</v-app-bar-title>
        <v-divider></v-divider>
        
<!-- navigation for creating components -->
        <v-menu
            bottom
            left
            dark
            rounded
            transition="scale-transition"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon dense class="mx-4">mdi-plus</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in createItems"
                :key="i"
                link :to="item.href"
              >
                <v-list-item-icon>
                  <v-icon >{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>

              </v-list-item>
            </v-list>
          </v-menu>
          
<!-- navigation for logout       -->
        <v-menu
            bottom
            left
            dark
            rounded
            transition="scale-transition"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon dense class="mx-4">mdi-cog</v-icon>
              </v-btn>
            </template>

            <v-list> 
              <v-list-item
                v-for="(item, i) in logOut"
                :key="i"
                v-on="i==1 ? { click: logout } : { click: password }"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>

              </v-list-item>
            </v-list>
          </v-menu>
        
      </v-app-bar>

<!-- left navigation for pages -->
      <v-navigation-drawer 
        v-model="drawer"
        :mini-variant.sync="mini"
        app
       
        clipped
        color="black"
        dark
      >  

        <v-divider></v-divider>

        <v-list 
          dense
        >

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link :to="item.href"
             @click.stop="mini = !mini"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
                
            </v-list-item>
        </v-list>
      </v-navigation-drawer>

<!-- main layout -->
      <v-main>
        <v-container fluid>
          <v-row class="fill-height">
            <v-col>
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

<!-- footer -->
      <v-footer 
      app 
      fixed  
      inset 
      bottom
      >

        <v-col
          class="text-center"
          cols="12"
        >
          &copy; Kofer psihoalata. All rights reserved. Powered by <a href="https://github.com/nedoder">nedoder</a>
        </v-col>

      </v-footer>

  </v-app>
</template>

<script>
export default {
  name: "AdminLayout",
  data: () => ({
    drawer: false,
    createDrawer: false,
    mini: false,
    items: [
      { title: 'Početna', icon: 'mdi-view-dashboard', href: '/dashboard' },
      { title: 'Postovi', icon: 'mdi-text-box', href: '/posts' },
      { title: 'Komentari', icon: 'mdi-comment-question', href: '/comments' },
      { title: 'Odgovori', icon: 'mdi-comment-processing', href: '/answers' },
      { title: 'Kategorije', icon: 'mdi-group', href: '/category' },
      { title: 'Aktivnosti', icon: 'mdi-clipboard-text-clock-outline', href: '/activity' },
      
    ],
    createItems: [
      { title: 'Postovi', icon: 'mdi-text-box', href: '/create/post' },
      { title: 'Komentari', icon: 'mdi-comment-question', href: '/create/comment' },
      { title: 'Odgovori', icon: 'mdi-comment-processing', href: '/create/answer' },
      { title: 'Kategorije', icon: 'mdi-group', href: '/create/category' },
      { title: 'Korisnici', icon: 'mdi-account-circle', href: '/create/user' },
      
    ],
    logOut: [
      { title: 'Podešavanja', icon: 'mdi-cog' },
      { title: 'Logout', icon: 'mdi-logout' }
    ]
      
  }),
  methods: {
    logout() {
      window.localStorage.removeItem("token"); 
      this.$router.push({ path: "/login" });
    },
    password() {
      var base64Url = localStorage.getItem("token").split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      jsonPayload = JSON.parse(jsonPayload)
      let id = jsonPayload.userId
      if(this.$route.path!=`/user/${id}/edit`) {
        this.$router.push({ path: `/user/${id}/edit`, params: { id: id } });
      }
    },
  },
  mounted() {
      var base64Url = localStorage.getItem("token").split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      jsonPayload = JSON.parse(jsonPayload)
      let role = jsonPayload.role
      if(role==1) {
        this.items.push( { title: 'Korisnici', icon: 'mdi-account-box', href: '/users' },)
      }
    }
}
</script>