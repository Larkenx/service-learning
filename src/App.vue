<template>
    <v-app light>
        <!-- navigation here-->
        <v-toolbar flat dense id="navigation">
            <v-icon></v-icon>
            <v-toolbar-title class="display-1">The Pourhouse Cafe</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <router-link class="display-1" to="/" exact>Home</router-link>
                <router-link class="display-1" to="/mission" exact>Our Mission</router-link>
                <router-link class="display-1" to="/menu" exact>Menu</router-link>

                <!--<v-btn class="display-1" router exact to="/" flat>Home</v-btn>-->
                <!--<v-btn class="display-1" router exact to="/mission" flat>Our Mission</v-btn>-->
                <!--<v-btn class="display-1" router exact to="/menu" flat>Menu</v-btn>-->
            </v-toolbar-items>
        </v-toolbar>
        <!-- main page content (varies) -->
        <main class="clip-top">
            <router-view></router-view>
        </main>
        <v-footer><v-icon>copyright</v-icon>Pourhouse Cafe 2017</v-footer>
    </v-app>
</template>
<script>
    export default {
        data () {
            return {}
        }
    }
</script>

