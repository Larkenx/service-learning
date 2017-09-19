<template>
    <v-app light>
        <!-- navigation here-->
        <v-toolbar flat id="navigation">
            <v-toolbar-title>Pourhouse Cafe</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn router exact to="/" flat>Home</v-btn>
                <v-btn router exact to="/mission" flat>Our Mission</v-btn>
                <v-btn router exact to="/menu" flat>Menu</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <!-- main page content (varies) -->
        <main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </main>
        <v-footer>Pourhouse Cafe</v-footer>
    </v-app>
</template>
<script>
    export default {
        data () {
            return {}
        }
    }
</script>
