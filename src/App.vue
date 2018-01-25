<template>
    <v-app app light>
        <!-- navigation here-->
        <v-navigation-drawer
         right
         fixed
         app
         class="hidden-md-and-up"
         v-model="drawer"
       >
       <v-list>
         <v-list-tile>
           <v-layout row align-center>
               <v-btn flat block to="/" exact>Home</v-btn>
           </v-layout>
         </v-list-tile>
         <v-list-tile>
           <v-layout row align-center>
             <v-btn flat block to="/mission" exact>Our Mission</v-btn>
           </v-layout>
         </v-list-tile>
         <v-list-tile>
           <v-layout row align-center>
             <v-btn flat block to="/menu" exact>Menu</v-btn>
           </v-layout>
         </v-list-tile>
       </v-list>
      </v-navigation-drawer>
        <v-toolbar app light fixed clipped-left id="navigation">
            <v-toolbar-title class="display-1">The Pourhouse Cafe</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/" exact>Home</v-btn>
                <v-btn flat to="/mission" exact>Our Mission</v-btn>
                <v-btn flat to="/menu" exact>Menu</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <!-- main page content (varies) -->
        <router-view></router-view>
        <v-footer>
            <v-icon>copyright</v-icon>
            Pourhouse Cafe 2017
        </v-footer>
    </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>
