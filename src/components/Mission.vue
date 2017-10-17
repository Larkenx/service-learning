<template>
    <main>

        <section>
            <v-parallax src="public/mission2.jpg" height="700">
                <v-layout column
                          align-center
                          justify-center
                          class="white--text parallax-text">
                    <v-layout row align-center justify-center>
                        <v-flex xs2>
                            <span style="font-size: 120px; padding-right: 10px;">$</span>
                        </v-flex>
                        <v-flex xs10>
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

                    <!--<p class="display-3">MORE THAN A CUP OF A COFFEE</p>-->

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
                <v-flex xs12>
                    <!--<v-container grid-list-xs>-->
                        <v-layout row wrap>
                            <v-flex xs12 md4>

                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
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
                    <!--</v-container>-->
                </v-flex>
            </v-layout>
        </section>
        <torn-border location="bottom"></torn-border>
        <section>
            <v-parallax src="public/mission2.jpg" height="700">
                <v-layout column
                          align-center
                          justify-center
                          class="white--text parallax-text">
                    <p class="display-3">MORE THAN A CUP OF A COFFEE</p>
                    <p class="subheading" style="text-align: center; width: 300px;">
                        <i>
                            We're making a difference all over the world one coffee cup at a time. All tips
                            that we receive are donated to charitable missions all over the world.
                        </i>
                    </p>
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
                donated : 1434
            };
        },
        methods: {},
        created () {
//            window.odometerOptions = {
//                auto: true, // Don't automatically initialize everything with class 'odometer'
//                format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
//                duration: 3000, // Change how long the javascript expects the CSS animation to take
//                theme: 'default', // Specify the theme (if you have more than one theme css file on the page)
//                animation: 'count' // Count is a simpler animation method which just increments the value,
//                                   // use it when you're looking for something more subtle.
//            };
            setInterval(() => {
                this.donated += Math.round(Math.random() * 20 + 5);
                console.log(this.donated);
            }, 3000)
        }
    }

</script>
<style>
    .iOdemeter {
        text-align: center;
        font-size: 120px;
    }
</style>
