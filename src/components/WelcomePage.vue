<template>
    <!-- Introduction section -->
    <main>
        <section>
            <v-parallax src="public/cover.jpg" height="500">
                <v-layout column
                          align-center
                          justify-center
                          class="white--text">
                    <p class="display-3">COFFEE AND KINDNESS</p>
                    <p class="subheading" style="text-align: center; width: 300px;">
                        <i>
                            Our friendly coffee shop donates all tips to good causes.
                            Come have a cup of coffee and donate to a good cause!
                        </i>
                    </p>
                    <v-btn class="white--text" style="width: 150px; letter-spacing: 1px" outline to="/donate" exact>
                        Learn more
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>
        <torn-border location="top"></torn-border>
        <section style="padding: 20px;">
                <v-layout
                        column
                        wrap
                        align-center
                >
                    <v-flex xs12 sm4>
                        <div >
                            <h3 class="coffee--text">Coffee on Kirkwood</h3>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <v-container grid-list-xl>
                            <v-layout row wrap align-top>

                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-media src="public/cover2.jpg" height="300px">
                                        </v-card-media>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline text-xs-center">
                                                A cozy, quiet environment
                                            </div>
                                        </v-card-title>
                                        <v-card-text>
                                            <!-- start slipsum code -->

                                            Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.

                                            <!-- end slipsum code -->
                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-media src="public/DSC_0023.jpg" height="300px">
                                        </v-card-media>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline text-xs-center">
                                                Delicious coffee
                                            </div>
                                        </v-card-title>
                                        <v-card-text>
                                            <!-- start slipsum code -->

                                            The lysine contingency - it's intended to prevent the spread of the animals is case they ever got off the island. Dr. Wu inserted a gene that makes a single faulty enzyme in protein metabolism. The animals can't manufacture the amino acid lysine. Unless they're continually supplied with lysine by us, they'll slip into a coma and die.

                                            <!-- end slipsum code -->
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-media src="public/cover4.jpg" height="300px">
                                        </v-card-media>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline text-xs-center">
                                                For a good cause
                                            </div>
                                        </v-card-title>
                                        <v-card-text>
                                            <!-- start slipsum code -->

                                            You see? It's curious. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'? Why don't they know? If they don't know, that means we never told anyone. And if we never told anyone it means we never made it back. Hence we die down here. Just as a matter of deductive logic.

                                            <!-- end slipsum code -->
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
        </section>
        <torn-border location="bottom"></torn-border>
        <section>
            <v-parallax src="public/coffee.jpg" height="800">
                <v-layout column
                          align-center
                          justify-center
                          class="white--text">
                    <p class="display-3">COME AND VISIT</p>
                    <p class="subheading" style="text-align: center; width: 300px;">
                        <i>
                            Our friendly coffee shop donates all tips to good causes.
                            Come have a cup of coffee and donate to a good cause!
                        </i>
                    </p>
                    <v-btn class="white--text" style="width: 200px; letter-spacing: 1px" outline to="/donate" exact>
                        Find us on google maps
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>


    </main>
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
