<template>
    <!-- Introduction section -->
    <div>
        <v-card-media  src="public/coffee.jpg" height="800px">
            <v-container fill-height fluid style="margin-top: 50px;">
                <v-layout>
                    <v-flex xs4 align-end flexbox class="text-xs-left">
                        <span class="display-4 white--text">Coffee that makes a difference.</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-media>
        <!-- About us -->

        <torn-border></torn-border>
        <div id="torn-image-border">
            <h5 class="text-xs-center display" style="color: #bd6f00; font-style: italic; font-weight: 100;">
                Why should you visit us?
            </h5>
            <v-container grid-list-xl>
                <v-layout row wrap>
                    <v-flex xs4 v-for="n in 3" :key="n">
                        <v-card>
                            <v-card-media>

                            </v-card-media>
                            <v-card-text>
                                Some text
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
    import TornBorder from './TornBorder.vue'
    /* import other components here */
    export default {
        components: {
            TornBorder
        },
        data() {
            return {
                carouselPictures: ["static/DSC_0040.jpeg", "static/DSC_0024.jpg", "static/DSC_0041.jpg"]
            };
        },
        methods: {},
    }
</script>
