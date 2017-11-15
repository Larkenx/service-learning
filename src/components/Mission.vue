<template>
    <main>
        <section>
            <v-parallax src="public/mission2.jpg" height="700">
                <v-layout column
                          align-center
                          justify-center
                          class="white--text parallax-text">
                    <v-layout row align-center justify-center>
                        <v-flex xs1>
                            <span style="font-size: 120px;">$</span>
                        </v-flex>
                        <v-flex xs11 style="padding-left: 100px;">
                            <i-odometer class="iOdemeter" :value="donated"></i-odometer>
                        </v-flex>
                    </v-layout>
                    <v-layout row align-bottom>
                        <p class="display-1" style="text-align: center; width: 500px;">
                            <i>
                                As a community, we can make a difference. All of our tips shown above are
                                donated to the following charities.
                            </i>
                        </p>
                    </v-layout>
                </v-layout>
            </v-parallax>
        </section>
        <torn-border location="top"></torn-border>
        <section>
                    <v-container>
                        <v-layout row wrap>

                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">
                                            The Boys and Girls Club
                                        </div>
                                    </v-card-title>
                                    <v-card-text class="text-xs-center">
                                        <v-progress-circular
                                          v-bind:size="125"
                                          v-bind:width="12"
                                          v-bind:rotate="360"
                                          v-bind:value="Math.floor((donated / 500) * 100)"
                                          color="pink"
                                        >{{Math.floor((donated / 500) * 100)}}%</v-progress-circular>
                                    </v-card-text>
                                </v-card>

                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">
                                            Habitat for Humanity
                                        </div>
                                    </v-card-title>
                                    <v-card-text class="text-xs-center">
                                        <v-progress-circular
                                          v-bind:size="125"
                                          v-bind:width="12"
                                          v-bind:rotate="360"
                                          v-bind:value="54"
                                          color="pink"
                                        >54%</v-progress-circular>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">
                                            The Salvation Army
                                        </div>
                                    </v-card-title>
                                    <v-card-text class="text-xs-center">
                                        <v-progress-circular
                                          v-bind:size="125"
                                          v-bind:width="12"
                                          v-bind:rotate="360"
                                          v-bind:value="96"
                                          color="pink"
                                        >96%</v-progress-circular>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
        </section>
        <torn-border location="bottom"></torn-border>
        <section>
            <v-parallax src="public/cover4.jpg" height="600">
                <v-layout column
                          align-center
                          justify-center
                          class="white--text parallax-text">
                    <!-- <p class="display-3">MORE THAN A CUP OF A COFFEE</p> -->
                    <!-- <p class="subheading" style="text-align: center; width: 300px;"> -->
                        <!-- <i>
                            We're making a difference all over the world one coffee cup at a time. All tips
                            that we receive are donated to charitable missions all over the world.
                        </i> -->
                    <!-- </p> -->
                </v-layout>
            </v-parallax>
        </section>
    </main>
</template>

<script>
    /* import other components here */
    import TornBorder from './TornBorder.vue'
    import IOdometer from "../../node_modules/vue-odometer/src/iOdometer";
    export default {
        components: {
            IOdometer,
            TornBorder
        },
        data() {
            return {
                donated : 0
            };
        },
        methods: {},
        created () {
        },
        mounted () {
            // setInterval(() => {
            //     this.donated += Math.round(Math.random() * 20 + 5);
            //     console.log(this.donated);
            // }, 3000)
            setTimeout(() => {
                this.donated += 352
            })
        }
    }
</script>
<style>
    .iOdemeter {
        text-align: center;
        font-size: 120px;
    }
</style>
