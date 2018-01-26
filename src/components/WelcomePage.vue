<template>
    <!-- Introduction section -->
    <main>
        <section>
            <v-parallax src="public/cover.jpeg" height="500">
                <v-layout column
                          align-center
                          justify-center
                          class="white--text parallax-text">
                    <p class="display-3 text-xs-center">COFFEE AND KINDNESS</p>
                    <p class="subheading text-xs-center" style="width: 300px;">
                            Our friendly coffee shop donates all tips to good causes.
                            Come have a cup of coffee and donate to a good cause!
                    </p>
                    <v-btn class="white--text" style="width: 150px; letter-spacing: 1px" outline
                           to="/mission" exact>
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
                <v-flex xs12>
                    <div>
                        <h3 class="coffee--text">Coffee on Kirkwood</h3>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-top>

                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-media src="public/cover2.jpeg" height="300px">
                                    </v-card-media>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">
                                            A cozy, quiet environment
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        Downtown Bloomington can be an exciting but loud and busy place. The Pourhouse Cafe is a great place to come in and get away from the noise with a relaxing cup of coffee. Feel free to sit down and hang out with friends or do some reading and homework.
                                    </v-card-text>
                                </v-card>
                            </v-flex>

                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-media src="public/DSC_0023.jpeg" height="300px">
                                    </v-card-media>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">
                                            Delicious coffee
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        All of our coffee is fair traded and locally roasted. We've got everything from an iced americano to a hot turtle mocha latte. We also have a variety of coffee-less drinks like a Chai Tea Latte and an Italian soda.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-media src="public/cover4.jpeg" height="300px">
                                    </v-card-media>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">
                                            For a good cause
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        The best part of our business is that we donate all of our tips to charity. Any time you have a coffee with us and leave a tip, you're making a difference locally and around the world with many of our different missions.
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
            <v-parallax src="public/coffee.jpeg" height="800">
                <v-layout column
                          align-center
                          justify-center
                          class="white--text parallax-text">
                    <p class="display-3">COME AND VISIT</p>
                    <p class="subheading" style="text-align: center; width: 300px;">
                        <i>
                            Our friendly coffee shop donates all tips to good causes.
                            Come have a cup of coffee and donate to a good cause!
                        </i>
                    </p>
                    <v-btn class="white--text" style="width: 200px; letter-spacing: 1px" outline
                           target="_blank"
                           href="https://www.google.com/maps/dir/''/the+pourhouse+cafe/@39.1663208,-86.5308209,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x886c66dd474de711:0xf6fec7665cceb229!2m2!1d-86.5302716!2d39.1663418"
                           exact>
                        Find us on google maps
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>
    </main>
</template>

<script>
import TornBorder from './TornBorder.vue';
/* import other components here */
export default {
  components: {
    TornBorder
  },
  data() {
    return {
      carouselPictures: ['static/DSC_0040.jpeg', 'static/DSC_0024.jpeg', 'static/DSC_0041.jpeg']
    };
  },
  methods: {}
};
</script>
