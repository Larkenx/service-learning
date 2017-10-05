<template>
    <v-app light>
        <!-- navigation here-->
        <v-toolbar light fixed id="navigation">
            <v-icon></v-icon>
            <v-toolbar-title class="display-2">The Pourhouse Cafe</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat class="" to="/" exact>Home</v-btn>
                <v-btn flat class="" to="/mission" exact>Our Mission</v-btn>
                <v-btn flat class="" to="/menu" exact>Menu</v-btn>
                <v-btn flat success class="" to="/donate" exact>Donate</v-btn>

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
        data () {
            return {}
        }
    }
</script>

